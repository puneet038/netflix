import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Card from './Card';
import Sdata from './Sdata';
// function  newd(val)
// {
// return (<Card 
// imgsrc={val.imgsrc}
// title={val.title}
// sname={val.sname}
// link={val.link}
// ></Card>
// );

// }
ReactDom.render(
   
    <>
     <h1 className="heading_style">list of top {Sdata.length} netflixseries</h1>
    {Sdata.map((val)=>
    {
    return (
        <Card 
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        ></Card>
        );
    }
    )
    }
    </>
    ,document.getElementById('root')
);