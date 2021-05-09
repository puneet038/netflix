import React from 'react';
import './index.css';

function Card(props)
{
    return(
        <>
        <div className="cards">
            <div className="card">
            <img src={props.imgsrc} alt="mypic" className="card-img"></img>
            <div className="card-info">
                <span className="card-categary">{props.title}</span>
                <h3 className="card-name">{props.sname}</h3>
                <a href={props.link} >
                    <button>watch now</button>
                </a>
            </div>
             </div>
             </div>
        </>
    )
}
export default Card;