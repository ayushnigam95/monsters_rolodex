import React from "react"
import "./card-list.styles.css"
import { Card } from "../card/card-component"
export const CardList= props => {
    console.log("Printing Props >", props.monsters)
    // console.log("Printing Props.Children", props.children)

    return <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        //    <h1 key={monster.id}>{}</h1> 
        ))}
    </div>
};