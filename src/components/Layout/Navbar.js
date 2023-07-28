import { Layout, Menu, Button } from "antd";
// import { signOut, useSession } from "next-auth/react";
const { Header } = Layout;
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  // const { data, status } = useSession();

  // console.log(data, status);
  // console.log("role", data?.user?.role);

  const logOut = async () => {
    try{
      const response = await fetch("/api/users/logout");

      const user = await response.json();
      console.log("user from clent", user);

    }
    catch(error){

      console.log(error)

    }
   
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
       
          <items>
            <Button onClick={logOut} type="primary" danger>
              Logout
            </Button>
          </items>
        
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        
      </Menu>
    </Header>
  );
};
export default Navbar;
