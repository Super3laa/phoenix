//Super Alaa was Here
import React, {useState } from "react";
import "./PopUp.css";
export default function PopUp(props) {
    let inputs = []
    let buttons=[]
    let actions=[]
    let Incoming=[]
    let selectors=[]
    if (props.content){
      for(let i = 0 ;i <props.content.length ;i++){
        Incoming.push(props.content[i])
        inputs.push(<Row key={i} content={props.content[i]} primaryColor={props.primaryColor}/>)
      }
    }
      if (props.selectors){
        for (let i = 0 ;i<props.selectors.length;i++){
          Incoming.push(props.selectors[i])
          let options=[];
          for(let j = 0; j <props.selectors[i].options.length;j++){
            options.push(
              <option key={j} value={props.selectors[i].options[j].value}>{props.selectors[i].options[j].label}</option>
            )
          }
          selectors.push(
            <div className="FieldPopUp">
            <h1>{props.selectors[i].title}</h1>
            <select className="Selector" key={i} id={props.selectors[i].title} {...props.selectors[i].props}>{options}</select>
            </div>)
        } 
      }
     
      if (props.buttons){
      for(let j = 0 ;j <props.buttons.length ;j++){
        actions.push(props.buttons[j])
        buttons.push(<button key={j}  id={j} style={{background:props.buttons[j].backgroundColor}}
          onClick={(e)=>{
          let data={};
          let flag = false;
          if (actions[e.target.id].exitButton===true){
            actions[e.target.id].action(data)  
          }else{
          for(let i = 0 ; i<Incoming.length;i++){
            let temp='';
            if(Incoming[i].type === "file"){
               temp = document.getElementById(Incoming[i].title).files[0]
               data['file']=temp
            }else{
              temp = document.getElementById(Incoming[i].title).value
              data[Incoming[i].title]=temp
            }

            try {
              if (temp.length === 0 && Incoming[i].required===true){
                flag = true
              }
            } catch (error) {
              
            }
            
          }
          if (flag === true && actions[e.target.id].exitButton!==true){
            alert("Please fill all the required fields")
          }else{
            actions[e.target.id].action(data)       
          }
        }}}
        >{props.buttons[j].name}</button>)
      }
    }
    
    return (
      <div className="PopUp">
       {inputs}
       {selectors}
       {buttons}
      </div>
    );
}

function Row(props){
    let value
    if (props.content.required){
        value = InputRequired(props.primaryColor);
    }else{
         value = InputForm(props.primaryColor);
    }
    return (
        <React.Fragment>
          <div className="FieldPopUp">
              <h1>{props.content.title}</h1>
              <input
                id={props.content.title}
                type={props.content.type}
                {...props.content.props}
                {...value.input}
                style={{borderColor:value.color}}
              ></input>
              <label style={value.msg.style}>{value.msg.msg}</label>
            </div>
        </React.Fragment>
    );
}


function InputForm(primaryColor){
    const [value , setValue]= React.useState('');
    const [color,setColor]=React.useState('gray')
    function handleOnChange(e){
      setValue(e.target.value)
    }
    return(
      {
        input:{
        value,
        onChange:handleOnChange,
        onFocus:()=>setColor(primaryColor),
        onBlur:()=>setColor('gray'),
      },msg:{
        msg:"",
        style:{},
      },color:color
    }
    );
}

function InputRequired(primaryColor){
    const [value , setValue]= React.useState('');
    const [ msg , setMsg]  = useState({msg:'',color:'',valid:false});
    const [color,setColor]=React.useState('gray')
    function handlechange  (e){
        setValue(e.target.value);
    }; 
    function checkValidation(){
      if(value.length <1){
        setMsg({color:"red",msg:"Input cannot be empty",valid:false});
        setColor('red');
      }else{
        setMsg({color:"green",msg:"Great",valid:true});
        setColor('gray')
      }
    }
    return(
      {
        input:{
        onChange:handlechange,
        onBlur:checkValidation,
        onFocus:()=>setColor(primaryColor),
        value,
        },
        msg:{
          msg:msg.msg,
          style:{color:msg.color},
          valid:msg.valid
        },color:color
    })
  }