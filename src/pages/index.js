// import auth from "@/firebase/firebase.config";
// import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
// import { useAuthState } from "react-firebase-hooks/auth";


const HomePage = () => {
  const person={
    name:"Zameari",
    age:40
  }
//  const {data:session} =useSession()
//  const[user,loading,error] =useAuthState(auth)
 
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>
        Welcome To Next Auth Home Page  </h1>
        {
          user &&<h1 style={{ textAlign: "center", marginTop:"10%" }}>
          LoggedIn User </h1>
        }
        
      
    
        
    </div>
  );
};

export default HomePage;
