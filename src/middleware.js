import { NextResponse } from "next/server"


export function middleware(request){
  const path=request.nextUrl.pathname
  const isPublic=(path==="/login")||(path==='/')||(path==="/signup")
  
  let token = request.cookies.get("my-cookie")?.value || ""

  console.log('token from middleware',request)

  if(isPublic && token){
    return NextResponse.redirect('/')

  }

  
  

}



export const config={
  matcher:['/profile','/login','/signup']
}