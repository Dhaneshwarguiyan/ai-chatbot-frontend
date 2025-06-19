// import GitHubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
    pages:{
        signIn:'/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
    },
  providers: [
    CredentialsProvider({
        name: "Credentials",

        credentials: {
          email: { label: "email", type: "text", placeholder: "jsmith" },
          name: { label: "name", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            if (!credentials) {
                throw new Error('Missing credentials');
            }
            const { name, email, password } = credentials;

            try {
                let response;
                // Call your backend API to validate the user's credentials
                console.log(name,email,password);
                if(name){
                    console.log("signup"); 
                     response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/signup`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name:name,email: email, password }),
                    });
                }else{
                    console.log("signin");
                     response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/signin`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: email, password }),
                    });
                }
                console.log(response);
                if (!response.ok) {
                    throw new Error('Try again');
                }
        
                const user = await response.json();
        
                // If the user is valid, return the user object
                if (user) {
                    return {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                    };
                }
        
                // If no user is found, return null
                return null;
            } catch (error) {
                console.error('Error during authorization:', error);
                return null; // Return null to indicate failed login
            }
}})]
//     callbacks: {
//       async signIn({ account, profile }) {
//         console.log(profile?.email,profile?.name, account?.provider);
//           if (!profile?.email) {
//               console.error('No email found in profile');
//               return false; // Deny sign-in if email is missing
//           }
  
//           try {
//               // Call  Express backend to check/create user
//               const response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json',
//                   },
//                   body: JSON.stringify({
//                       email: profile.email,
//                       name: profile.name || profile.email.split('@')[0], // Use email prefix as fallback name
//                       provider: account?.provider || 'unknown',
//                       // Include provider to differentiate users from different providers
//                   }),
//               });
  
//               if (!response.ok) {
//                   console.error('Failed to authenticate user');
//                   return false; // Deny sign-in if backend fails
//               }
  
//               return true; // Allow sign-in
//           } catch (error) {
//               console.error('Error during sign-in:', error);
//               return false; // Deny sign-in on error
//           }
//       },
//   }
}




    // OAuth authentication providers...
    // GitHubProvider({
    //     clientId: process.env.GITHUB_ID as string,
    //     clientSecret: process.env.GITHUB_SECRET as string
    //   }),
    // GoogleProvider({
    //       clientId: process.env.GOOGLE_ID as string,
    //       clientSecret: process.env.GOOGLE_SECRET as string,
    //       authorization: {
    //         params: {
    //           prompt: "consent",
    //           access_type: "offline",
    //           response_type: "code"
    //         }
    //       }
    //     })