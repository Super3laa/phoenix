import React from "react";
import './signInBlock.css';
function SignInBlock (){
  const username = useInputForm();
  const password = useInputForm();
  return (
    <React.Fragment>
      <div className="login">
      <div className="SignInBox">
        <div className="Field">
          <h1>Username</h1>
          <input type="text"
          placeholder="username"
          className="userName"
          {...username}
          ></input>
        </div>
        <div className="Field">
          <h1>Password</h1>
          <input type="password"
          placeholder="password"
          className="userPassword"
          {...password}
          ></input>
        </div>
        <div  className="SignInField">
          <button >SignIn</button>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};
export default SignInBlock;

function useInputForm(){
  const [value , setValue]= React.useState('');
  function handleOnChange(e){
    setValue(e.target.value)
  }
  return(
    {
      value,
      onChange:handleOnChange
    }
  );
}