import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign-in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Add your authentication logic here
                // For example, make an API call to validate credentials
                try {
                    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/login", {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                    });
                    const user = await res.json();
                    if (res.ok && user) {
                        return user;
                    }
                    return null;
                } catch (error) {
                    // console.log(error.response.data.message)
                    throw new Error(error.res.data);
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
    secret: "secret",
    pages: {
        signIn: '/admin/login',
    },
});
