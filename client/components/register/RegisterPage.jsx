"use client";
import Link from "next/link"
import { useState, useEffect  } from "react";
import { useSignUp } from "@/util/hooks/useSignUp";
import { useRouter } from "next/navigation";
import { useAuthContextProvider } from "@/util/hooks/useAuthContextProvider";
function RegisterPage() {
    const [registerUser, setRegisterUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const router = useRouter()
    const {user} = useAuthContextProvider()
    const {signUp, error, isLoading} = useSignUp()
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setRegisterUser({...registerUser, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(registerUser)

        
    }
    useEffect(() => {
        if(user) router.push("/dashboard")
    },[user])

    return (
        <div className="flex min-h-screen justify-center items-center pt-20 lg:justify-start ">
            <div className="hidden lg:flex bg-[url('../public/assets/Images/signupBG.jpg')] bg-cover bg-center  w-[45vw] min-h-screen justify-center items-center bg-no-repeat relative">
                <p className="font-bold text-[40px] text-white max-w-[320px] relative z-10">
                    We&#39;re here to help you make your pet&#39;s life the best it can be. Join now!
                </p>
                <div className="bg-black opacity-50 w-full h-full absolute top-0 bottom-0 left-0 right-0"></div>
            </div>
            <div className="flex justify-center items-center flex-col  gap-5 w-screen lg:w-[55vw]">
                <h1>Sign up</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form className="flex flex-col gap-4 justify-center" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="min-w-[300px]" onChange={e => handleInputChange(e)}/>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" className="min-w-[300px]" onChange={e => handleInputChange(e)}/>
                    <label htmlFor="password"  >Password</label>
                    <input type="password" name="password" onChange={e => handleInputChange(e)}/>
                    <p>
                        Already have an account?<Link href="/login" className="text-[#CD53EC]"> Login here</Link>
                    </p>
                    
                    <button type="submit" className="bg-[#CD53EC] py-2 px-8 rounded-full ">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage