import React,{useState,useEffect} from 'react';
import RawPage from './RawPage';
import QAData from './PCBQA.json';
import QATiles from '../QAComponents/QATiles';
import PCB from './PCB.jpg'
import './PCBQA.css';
export default function PCBQA(){
    const [QA,updateQA]=useState(QAData);
    useEffect(()=>{
        updateQA(QAData);
    },[])
    return(
        <RawPage 
            content={
                <React.Fragment>
                     <div
                        className="pic"
                        style={{
                            backgroundImage: `url(${PCB})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100vh",
                        }}
                        ><div style={{textAlign: "center",paddingTop: "44vh"}}>
                        <p style={{
                           fontSize: "6vh",
                           fontWeight: "400",
                           color: "#fff5d9bf",
                        }}>PCB Common Questions and Answers</p>
                        </div></div>
                        
                        <div className="FilterPCB"></div>
                        <h2 className="title">PCB Design Q&A</h2>
                        
                        <div className="breaker"></div>
                        <div style={{width:"100%",height:"5vh"}}></div>
                    <QATiles content={QA}/>
                    <div style={{width:"100%",height:"5vh"}}></div>
                </React.Fragment>
            }
        />
    )
}