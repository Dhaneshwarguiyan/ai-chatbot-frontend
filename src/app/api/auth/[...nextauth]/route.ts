import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
    },
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
      }),
    GoogleProvider({
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
    ],
    callbacks: {
      async signIn({ account, profile }) {
        console.log(profile?.email,profile?.name, account?.provider);
          if (!profile?.email) {
              console.error('No email found in profile');
              return false; // Deny sign-in if email is missing
          }
  
          try {
              // Call  Express backend to check/create user
              const response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      email: profile.email,
                      name: profile.name || profile.email.split('@')[0], // Use email prefix as fallback name
                      provider: account?.provider || 'unknown',
                      // Include provider to differentiate users from different providers
                  }),
              });
  
              if (!response.ok) {
                  console.error('Failed to authenticate user');
                  return false; // Deny sign-in if backend fails
              }
  
              return true; // Allow sign-in
          } catch (error) {
              console.error('Error during sign-in:', error);
              return false; // Deny sign-in on error
          }
      },
  }
})

export { handler as GET, handler as POST }
