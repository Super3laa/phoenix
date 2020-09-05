import axios from "axios";

export async function addProject(projectObj){
    let formData = new  FormData();
    formData.append('github',projectObj.github);
    formData.append('npm',projectObj.npm);
    formData.append('medium',projectObj.medium);
    formData.append('title',projectObj.title);
    formData.append('description',projectObj.description);
    formData.append('imageFile',projectObj.file);
    axios.post("http://localhost:5000/project",
          formData, {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
          }
        )
    .then(res=>alert("Added Successfully"))
    .catch();

}
export async function getProjects(){
    const projects =  await axios.get("http://localhost:5000/project")
    .then()
    .catch(err=>alert("Something went wrong, Try again"));
    return projects.data;
}
export async function deleteProject(id){
    await axios.post("http://localhost:5000/deleteproject",{id:id})
    .then()
    .catch(err=>alert("Something went wrong, Try again"));
}