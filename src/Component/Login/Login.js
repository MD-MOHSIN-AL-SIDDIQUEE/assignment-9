
import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './login.css'

const Login = () => {
  const [newUser,setNewUser] = useState(true);
  const [user, setUser] = useState({ 
    isSignedIn:false,
    firstName:'',
    lastName:'',
    name:'', 
    email: '',
    password: '',
    confirmPassword:'',
    error:'',
    success:false
  })

const [loggedInUser,setLoggedInUser] = useContext(userContext);
const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/" } };

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
const googleProvider = new firebase.auth.GoogleAuthProvider();

const handleGoogleSignIn=()=>{
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      const {displayName,email} = result.user;
      const signedInUser ={
        isSignedIn:true,
        name:displayName,
        email:email
      }
      console.log(signedInUser);
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential; 
    });
    
  }

const handleGoogleSignOut=()=>{
  firebase.auth().signOut()
  .then(res => {
   const signOutUser={
     isSignedIn:false,
     name:'',
     email:'',
     password:''
   }
  }).catch(function(error) {
    // An error happened.
  });
  
}
const handleFacebookSignIn=()=>{
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(fbProvider).then(function(result) {
    var token = result.credential.accessToken;
    const {displayName,email} = result.user;
    const signedInUser ={
      isSignedIn:true,
      name:displayName,
      email:email
    }
    setUser(signedInUser);
    setLoggedInUser(signedInUser);
    history.replace(from);

    console.log("fb ",user);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(error);
   
  });
}

 const handleSubmit=(e)=>{
      if(newUser && user.email && user.password && user.password === user.confirmPassword){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res=>{
          const newUser ={...user};
          newUser.error ='';
          newUser.success = true;
          setUser(newUser); 
          console.log(newUser);
        })
        .catch(error => {
         const newUser = {...user}
         newUser.error = error.message;
         newUser.success = false;
         setUser(newUser);
       
        });
      }
      if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
          const newUser ={...user};
          newUser.error ='';
          newUser.success = true;
          setUser(newUser);
          const {email}=user
          const signedInUser ={
            isSignedIn:true,
            email:email
          }
        
          setLoggedInUser(signedInUser);
          history.replace(from);
          console.log(loggedInUser);
          
        }
          )
        .catch(error => {
          const newUser = {...user}
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser)
         
        });
      }
       e.preventDefault();
    }
   
 const handleBlur =(e) =>{
 
      let isFormValid = true;
     
      
    if(e.target.name ==='email'){
        isFormValid =/\S+@\S+\.\S/.test(e.target.value)  
    }

    if(e.target.name ==='password'){
      const isPasswordValid= e.target.value.length>6;
      const passwordNumber = /\d{1}/.test(e.target.value)
      isFormValid = isPasswordValid && passwordNumber;
    }

    if(isFormValid){
      const NewUser={...user}
      NewUser[e.target.name] = e.target.value;
      setUser(NewUser);
      
    }
    }
  return (
    <div>
       <Navbar></Navbar>
      <div className=" row">
      <div className="col-md-4"> </div>
      <div className="col-md-4 loginForm">
        <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>

          {newUser && <input className="form-control"type="text" name="firstName" onBlur={handleBlur} placeholder='first Name'required/>}
          <br/>
          {newUser && <input className="form-control"type="text" name="LastName" onBlur={handleBlur} placeholder='Last Name'required/>}
          <br/>
          <input className="form-control"type="text" name='email'onBlur={handleBlur} placeholder="your email" required/>
          <br/>
          <input className="form-control" type="password" name='password' onBlur={handleBlur} placeholder="password" required/>
          <br/>
          {newUser && <form action="">
            <div>
                <input className="form-control" type="password" name='confirmPassword'  onBlur={handleBlur} placeholder="confirm password" required/>
            </div>
                {user.password !== user.confirmPassword ?<p>password don't match</p>:""}
              </form>
            }
          <br/>
          <input className="btn btn-warning"type="submit"value={newUser? "Create new account":"log in"}/>

          </form>
          {newUser?<p>Already have an account.<span><button onClick={()=>setNewUser(!newUser)}>log in</button></span></p>:
              <p>Don't have an account.<span><button onClick={()=>setNewUser(!newUser)}>create an account</button></span></p>}
         
         
          { user.isSignedIn ? <button onClick = {handleGoogleSignOut}>Google sign out</button>:
          <button onClick = {handleGoogleSignIn}>Google sign in</button>
          }
           <br/>
          <br/>
          <button onClick = {handleFacebookSignIn}>Facebook Log in</button>
          <br/>
          <p style={{color: 'red'}}>{user.error}</p>
          {user.success && <p style={{color: 'green'}}>user {newUser?"created":"log in"} successfully</p>}
                </div>
        <div className="col-md-4"></div>
   
      </div>

    </div>

   

  );
};

export default Login;

