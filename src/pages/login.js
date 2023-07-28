"use client"
import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
// import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();


  const router = useRouter();

  

  const onSubmit = async (data) => {
   

    const response=await fetch("/api/users/login",{
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
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        {/* <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() => signIn("google", { callbackUrl: "/" })}
          />
          <GithubOutlined
            onClick={() => signIn("github", { callbackUrl: '/' })}
          />
        </div> */}
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input type="email" {...register("email", { required: true })} />
          <label htmlFor="">Your Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          <button type="submit">Login</button>
        </form>
        <p>You dont have account yet? <Link href={'/signup'}> <button  >SignUp here</button> </Link>  </p>
      </div>
    </div>
  );
};

export default LoginPage;
