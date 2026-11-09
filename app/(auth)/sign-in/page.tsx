"use client"

import { AuthForm, AuthFormData } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client"

export default function SignInPage() {
    const handleSignIn = async (data: AuthFormData) => {
        const { data: SignInResponse, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            // callbackURL: "/",
            })

        console.log("sign in response", SignInResponse, error)
    }

    return <AuthForm mode="signin" onSubmit={handleSignIn} />
}
