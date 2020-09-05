import React from 'react';
import splash from './splash.png'
export default function TitleImg(props){
    return(
        <React.Fragment>
            <div
            className="pic"
            style={{
                backgroundImage: `url(${splash})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
                backgroundPosition: "center",
                height: "80vh",
                display:"flex"
            }}
            >
               <div style={{margin:"auto"}}>
                   <p style={{fontSize: "40px",
                             color: "white",
                             fontWeight: "300"
        }}>{props.content.title}</p>
                </div> 
            </div>
        </React.Fragment>
    )
}