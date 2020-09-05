import React,{useState,useEffect} from 'react';
import './Admin.css'
import {addArticle,getArticles,deleteArticle} from '../../services/article';
import {addProject,getProjects,deleteProject} from '../../services/project';
import {addCard,getCardsAdmin,deleteCard} from '../../services/homeSetting';

import PopUp from '../genericComponents/PopUp';

export  default function Admin(){
    const [newArticle,toggleNewArticle] = useState(false);
    const [dbArticles,setdbArticles]=useState([]);
    const [handleUpdateArticle,sethandleUpdateArticle]=useState(false);

    const [newProject,toggleNewProject] = useState(false);
    const [dbProjects,setdbProjects]=useState([]);
    const [handleUpdateProject,sethandleUpdateProject]=useState(false);

    const [newHomeSetting,toggleNewHomeSetting] = useState(false);
    const [dbHomeSetting,setdbHomeSetting]=useState([]);
    const [handleUpdateHomeSetting,sethandleUpdateHomeSetting]=useState(false);
    
    useEffect(()=>{
        async function fetch(){
            const temp = await getCardsAdmin();
            setdbHomeSetting(temp);
            console.log(temp)
        }
        fetch();
    },[handleUpdateHomeSetting]);

    useEffect(()=>{
        async function fetch(){
            const temp = await getProjects();
            setdbProjects(temp);
        }
        fetch();
    },[handleUpdateProject]);

    useEffect(()=>{
        async function fetch(){
            const temp = await getArticles();
            setdbArticles(temp);
        }
        fetch();
    },[handleUpdateArticle]);
    const newArticleInputs= [{
        title:"title",
        type: "text",
        required:true,
        props:{
            placeholder: "title",
        }
    },{
        title:"description",
        type: "text",
        required:true,
        props:{
            placeholder: "description",
        }
    },{
        title:"github",
        type: "text",
        props:{
            placeholder: "github link",
        }
    },{
        title:"npm",
        type: "text",
        props:{
            placeholder: "npm link",
        }
    },{
        title:"medium",
        type: "text",
        props:{
            placeholder: "medium link",
        }
    },{
        title:"image",
        type: "file",
        required:true,
        props:{
            placeholder: "Image",
        }
    },]
    const newArticleButtons=[
        {
            name:"Submit",
            backgroundColor:"#3f51b5",
            action:(data)=>{addArticle(data);
                sethandleUpdateArticle(!handleUpdateArticle);}
        }, 
        {
            name:"Cancel",
            backgroundColor:"#4a4a4a",
            action:()=>{toggleNewArticle(!newArticle)},
            exitButton:true
        }
    ]
    const newProjectButtons=[
        {
            name:"Submit",
            backgroundColor:"#3f51b5",
            action:(data)=>{addProject(data);
                sethandleUpdateProject(!handleUpdateProject);}
        }, 
        {
            name:"Cancel",
            backgroundColor:"#4a4a4a",
            action:()=>{toggleNewProject(!newProject)},
            exitButton:true
        }
    ]
    const newHomeSettingButtons=[
        {
            name:"Submit",
            backgroundColor:"#3f51b5",
            action:(data)=>{addCard(data);
                sethandleUpdateHomeSetting(!handleUpdateHomeSetting);}
        }, 
        {
            name:"Cancel",
            backgroundColor:"#4a4a4a",
            action:()=>{toggleNewHomeSetting(!newHomeSetting)},
            exitButton:true
        }
    ]
    const newHomeSettingInputs= [{
        title:"Id",
        type: "text",
        required:true,
        props:{
            placeholder: "id",
        }
    },]
    const newHomeSettingSelector=[{
        title:"Type",
        options:[{value:'article',label:"Article"},{value:'project',label:"Project"}],
        props:{
 
        }
    }]
    return(
        <React.Fragment>
            {
                newHomeSetting?<PopUp 
                    content={newHomeSettingInputs}
                    buttons={newHomeSettingButtons}
                    selectors={newHomeSettingSelector}
                    primaryColor="#3f51b5"
                />:null
            }
            {
                newArticle?<PopUp 
                    content={newArticleInputs}
                    buttons={newArticleButtons}
                    primaryColor="#3f51b5"
                />:null
            }
             {
                newProject?<PopUp 
                    content={newArticleInputs}
                    buttons={newProjectButtons}
                    primaryColor="#3f51b5"
                />:null
            }
            <div className="Control">
                <div className="card card-Project">
                    <h1>Add New Project</h1>
                    <button className="add" onClick={()=>{toggleNewProject(!newArticle)}}>+</button>
                </div>
                <div className="card Available-Projects">
                    <h1>Available Projects</h1>
                    <CardList content={dbProjects} deleteButton={(data)=>{
                        sethandleUpdateProject(!handleUpdateProject);
                        deleteProject(data)
                        }}/>
                </div>
                <div className="card card-Article">
                    <h1>Add New Article</h1>
                    <button className="add" onClick={()=>{toggleNewArticle(!newArticle)}}>+</button>
                </div>
                <div className="card Available-Article">
                    <h1>Available-Articles</h1>
                    <CardList content={dbArticles} deleteButton={(data)=>{
                        sethandleUpdateArticle(!handleUpdateArticle);
                        deleteArticle(data)
                        }}/>
                </div>
                
                <div className="card card-HomePage">
                     <h1>HomePage Settings</h1>
                     <div>
                        <button className="add" onClick={()=>{toggleNewHomeSetting(!newHomeSetting)}}>+</button>
                     </div>
                     <div>
                        <CardList content={dbHomeSetting} deleteButton={(data)=>{
                        sethandleUpdateHomeSetting(!handleUpdateHomeSetting);
                        deleteCard(data)
                        }}/>
                     </div>
                </div>
            </div>
        </React.Fragment>
    )
}
function CardList(props){
    let cards=[]
    try {
        for(let i = 0;i<props.content.length;i++){
            cards.push(<div className="CardListItem">
            <p>{props.content[i].title ?props.content[i].title : props.content[i].articleId ? "article "+props.content[i].articleId:"project "+props.content[i].projectId  }</p>
            <p>{props.content[i].id}</p>
            <button className="submitbutton submitbutton-Delete" onClick={()=>{
                props.deleteButton(props.content[i].id);
            }}>
                    Delete
            </button>
        </div>)
        }
    } catch (error) {
        
    }
    return(
        <React.Fragment>
            <div className="CardList">
                {cards}
            </div>
        </React.Fragment>

    )
}