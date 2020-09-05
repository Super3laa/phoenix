import React,{useState,useEffect} from 'react';
import RawPage from './RawPage';
import Items from "../HomePageComponents/items";
import TitleImg from '../SharedComponents/TitleImg';
import projectsData from './projects.json';
export default function Projects(){
    const [projects,updateProjects]=useState([]);
    useEffect(()=>{
        updateProjects(projectsData);
    },[])
    return(
        <RawPage 
            content={
                <React.Fragment>
                    <TitleImg content={{title:"Projects"}}/>
                    <Items content={projects} type={"project"} />
                </React.Fragment>
            }
        />
    )
}