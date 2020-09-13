import React from 'react';
import './QATiles.css';
export default function QATiles(props){
    let tiles=[]
    for(let i = 0 ; i<props.content.length;i++){
        tiles.push(
            <div className="QATile">
                <p className="Question">
                    Q: {props.content[i].Q}
                </p>
                <p className="Answer">
                    A: {props.content[i].A}
                </p>
              </div>
        )
    }
    return(
        <React.Fragment>
           {tiles}
        </React.Fragment>
    )
}