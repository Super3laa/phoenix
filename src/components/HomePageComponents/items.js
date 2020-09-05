import React from 'react';
import './items.css'
import Item from './item'
export default function Items(props){
    let width = window.innerWidth;
    let Smallitems=[];
    let smallWrapper=[];
    let Wrappers=[];
    try {
        let wrappers = props.content.length / 3;
    let length = props.content.length;
    for (let i  = 0; i <wrappers; i++){
        let items =[]
        for (let j = 1 ;j <=3 ; j++){
            if(length>0){
                if(j%2 !== 0){
                    items.push(<Item content ={props.content[length-1]}  type ={props.type} style={{gridRow: "2/span 7"}} />)
                    Smallitems.push(<Item content ={props.content[length-1]}  type ={props.type}/>)
                }else{
                    items.push(<Item content ={props.content[length-1]}  type ={props.type} style={{gridRow: "1/span 7"}} />)
                    Smallitems.push(<Item content ={props.content[length-1]}  type ={props.type}/>)
                }     
            }
            length-=1;
        }
        Wrappers.push(
            <div className="GridWrapper">
                {items}
            </div>
        )
    }
    } catch (error) {
        
    }
    
    smallWrapper.push(
        <div className="GridWrapper">
                {Smallitems}
            </div>
    )
    return(
        <React.Fragment>
            {width> 600 ? Wrappers : smallWrapper}
        </React.Fragment>      
    )
}