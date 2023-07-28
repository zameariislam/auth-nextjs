 "use client"

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from "@/styles/Login.module.css";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Signup = () => {

    const { register, handleSubmit } = useForm();
 

  const router = useRouter();

  // console.log("router from login", router);

  const onSubmit = async (data) => {
    console.log(data);

     const response=await fetch("/api/users/signup",{
         method:"POST",
         headers:{
            "Content-Type": "application/json",
         },
         body:JSON.stringify(data)

     })

     const user=await response.json()
     console.log("user from clent",user)

    
   
  };
    return (
        <div>
        <Head>
          <title>Next signup</title>
        </Head>
        <div className={styles.form}>
          <h3>SignUp</h3>
        
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Your Email</label>
            <input type="email" {...register("email", { required: true })} />
            <label htmlFor="">Your Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
            <button type="submit">Signup</button>
          </form>
          <p>Do you have account? <Link href={'/login'}> <button    >login here</button> </Link>  </p>
        </div>
      </div>
    );
};

export default Signup ;