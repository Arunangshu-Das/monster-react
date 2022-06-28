import { Component } from "react";

import './card-list.styles.css';

import './card.styles.css';

class CardList extends Component{
    render(){
        const {monsters}=this.props;
        console.log(monsters)
        return (
            <div className="card-list">
                {
                    monsters.map((monster)=>(
                        <div className="card-container" key={monster.id}>
                            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`} />
                            <h2> {monster.name}</h2>
                            <p>{monster.email}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
};

export default CardList;