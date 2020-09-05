import React,{useState,useEffect} from 'react';
import RawPage from './RawPage';
import Items from "../HomePageComponents/items";
import TitleImg from '../SharedComponents/TitleImg'
import articlesData from './articles.json'
export default function Articles(){
    const [articles,updateArticles]=useState([]);
    useEffect(()=>{
        updateArticles(articlesData);
    },[])
    return(
        <RawPage 
            content={
                <React.Fragment>
                    <TitleImg content ={{title:"Articles"}}/>
                    <Items content={articles} type={"article"} />
                </React.Fragment>
            }
        />
    )
}