// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//         profile(profile){
//             // console.log(profile)
          
//             return{
//                 ...profile,
//                 role: profile.role?"admin":"user",
//                 image:profile.avatar_url
             

//             }
            


//         },
       
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     GoogleProvider({
//         clientId: process.env.GOOGLE_ID,
//         clientSecret: process.env.GOOGLE_SECRET,
//       }),
//       CredentialsProvider({
//         name: 'Credentials',
//         credentials: {
//             email: { label: "Your Email", type: "text" },
//             password: { label: "Your Password", type: "password" }
//           },
//           async authorize(credentials,req){
//             const user={id:'42',email:'zameari@gmail.com',password:"123456"}

//         if(credentials?.email===user.name && credentials?.password===user.password ){
//             return user

//         }
//         else{
//             return null
//         }


//           }


//       })

     
//   ],

//   callbacks: {
//     async jwt({ token, user }) {
        
//       if(user) token.role = user.role
//       return token
//     },
//    async session({ session, token }) {
//     if(session?.user){
//         // console.log("session",token)
       
//         session.user.role = token.role
        
//         return session
//     }
     
//     }
//   },


//   pages:{
//     signIn: '/login',

//   }
// }

// export default NextAuth(authOptions)