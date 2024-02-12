"use client";
import Link from "next/link"
import {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import { useAuthContextProvider } from "@/util/hooks/useAuthContextProvider";
import { useLogin } from "@/util/hooks/useLogin";
function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const router = useRouter()
    const {user} = useAuthContextProvider()
    
    const {login, error, isLoading} = useLogin()
    const handleChange = async (e) => {
        e.preventDefault()
        await login(loginData)

    }

   
    
  return (
    <div className="flex min-h-screen justify-center items-center pt-20 lg:justify-start ">
        <div className="hidden lg:flex bg-[url('../public/assets/Images/loginBG.jpg')] bg-cover bg-center  w-[45vw] min-h-screen justify-center items-center bg-no-repeat relative">
            <p className="font-bold text-[40px] text-white max-w-[350px] relative z-10">
              We&#39;re excited to see you again!
            </p>
            <div className="bg-black opacity-50 w-full h-full absolute top-0 bottom-0 left-0 right-0"></div>
        </div>
        <div className="flex justify-center items-center flex-col  gap-5 w-screen lg:w-[55vw]">
            <h1>Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="flex flex-col gap-4 justify-center" onSubmit={handleChange}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" className="min-w-  [300px]" 
                    onChange={(e) => setLoginData({
                        ...loginData,
                        [e.target.name]: e.target.value
                    })}
                />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e) => setLoginData({
                    ...loginData,
                    [e.target.name]: e.target.value
                })} />
                <p>
                    Don&#39;t have an account yet?<Link href="/register" className="text-[#CD53EC]"> Register here</Link>
                </p>
                
                <button type="submit" className="bg-[#CD53EC] py-2 px-8 rounded-full ">Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage