import React ,{useState,useEffect}from "react";
import "./HomePage.css";
import Items from "../HomePageComponents/items";
import RawPage from "./RawPage";
import test from './test.jpg';
import Cards from './HomePage.json';
export default function HomePage() {
  const [cards,updateCards]=useState([]);
  useEffect(()=>{
      updateCards(Cards);
  },[])
  return (
    <RawPage
      content={
        <React.Fragment>
          <section className="Landing">
          <div
            className="pic"
            style={{
                backgroundImage: `url(${test})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
            >
              <div style={{textAlign: "center",paddingTop: "36vh"}}>
              <p style={{
                fontSize: "10vh",
                fontWeight: "400",
                color: "white",
              }}>Phoenix Camp</p>
              <p style={{
                 fontSize: "6vh",
                 fontWeight: "300",
                 color: "#fff5d9bf",
              }}>Transform yourself into a Ninja in techs</p>
              </div>
            </div>
        <div className="FilterFront"></div>
          </section>
          <section className="ShowOff">
          <h2 className="title">Hot Articles & Projects</h2>
          <div className="breaker"></div>
          <Items content={cards} type={"project"} />
          </section>
        </React.Fragment>
      }
    />
  );
}
