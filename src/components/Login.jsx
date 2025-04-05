import { useState } from "react";
import Header from "./Header";

const Login  = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm =()=>{
        setIsSignInForm (!isSignInForm);
        
    }


    return <div>
        <Header/>
        <div className="absolute">
        <img 
            src ="https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png"
            alt ="logo"
        />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
         <h1 className = "font-bold text-3xl py-4"> {isSignInForm ? "Sign In": "Sign Up"}</h1>
         {!isSignInForm && (<input type = "text" placeholder="Full Name" className=" rounded-lg bg-gray-700 p-4 my-4 w-full"/>)}

            <input type = "text" placeholder="Email Address" className=" rounded-lg bg-gray-700 p-4 my-4 w-full"/>
            <input type = "password" placeholder="Password" className= " rounded-lg bg-gray-700 p-4 my-4 w-full"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In": "Sign Up"}</button>

            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now": "Already user? Sign In Now"}</p>

        </form>
    </div>
}

export default Login;