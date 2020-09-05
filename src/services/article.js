import axios from "axios";

export async function addArticle(ArticleObj){
    let formData = new  FormData();
    formData.append('github',ArticleObj.github);
    formData.append('npm',ArticleObj.npm);
    formData.append('medium',ArticleObj.medium);
    formData.append('title',ArticleObj.title);
    formData.append('description',ArticleObj.description);
    formData.append('imageFile',ArticleObj.file);
    axios.post("http://localhost:5000/article",
          formData, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
          }
        )
    .then(res=>alert("Added Successfully"))
    .catch();

}
export async function getArticles(){
    const articles =  await axios.get("http://localhost:5000/article")
    .then()
    .catch(err=>alert("Something went wrong, Try again"));
    return articles.data;
}
export async function deleteArticle(id){
    await axios.post("http://localhost:5000/deletearticle",{id:id})
    .then()
    .catch(err=>alert("Something went wrong, Try again"));
}