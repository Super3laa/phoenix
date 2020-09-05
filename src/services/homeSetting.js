import axios from "axios";

export async function getCards(){
    const db=  await axios.get("http://localhost:5000/homeSetting")
    .then()
    .catch(err=>alert("Something went wrong, Try again"));
    return db.data;
}
export async function getCardsAdmin(){
    const db=  await axios.get("http://localhost:5000/homeSettingAdmin")
    .then()
    .catch(err=>alert("Something went wrong, Try again"));
    return db.data;
}
export async function addCard(Obj){
    let articleId =null;
    let projectId=null;
    Obj.Type == "article" ? articleId=Obj.Id : projectId=Obj.Id;
    await axios.post("http://localhost:5000/homeSetting"
    ,{homeSetting:{
        projectId,
        articleId
    }})
    .then(res=>console.log("Success"))
    .catch(err=>alert("Something went wrong, Try again"));
}

export async function deleteCard(id){
    await axios.post("http://localhost:5000/deleteHomeSetting",{id:id})
    .then()
    .catch(err=>alert("Something went wrong, Try again"));
}