'use client'

import Button from "@/component/Button";
import InputForm from "@/component/InputForm";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface signUpPropType {
    email:string;
    password:string;
}


export default function Login() {
    const [formData,setFormData] = useState<signUpPropType>({
        email:"",
        password:"",
    });
    const [isButtonActive,setIsButtonActive] = useState<boolean>(false);
    const router = useRouter();
    const updateFormData = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData(prev => {
            const updatedData = {
                ...prev,
                [e.target.name]: e.target.value
            };
            checkActive(updatedData);
            return updatedData;
        })
    }
    const submitHandler = async(e:React.MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        if(isButtonActive){
            console.log(formData);
            try {
                const result = await signIn("credentials", {
                    redirect: false, // Prevent automatic redirection
                    email: formData.email,
                    password: formData.password,
                });
    
                if (result?.error) {
                    alert("Invalid email or password");
                } else {
                    // Redirect to the dashboard or another page
                    router.push("/");
                }
            } catch (error) {
                console.error("Error during sign-in:", error);
                alert("An error occurred. Please try again.");
            }
        }
    }
    const checkActive = (formData:signUpPropType)=>{
        if(formData.email !== "" && formData.email !== "" && formData.password !== ""){
            setIsButtonActive(true);
        }else{
            setIsButtonActive(false);
        }
    }
    useEffect(()=>{
        checkActive(formData);
    },[])
  return (
        <form className="w-full h-full flex justify-center items-center">
            <div className="w-[375px] bg-background px-[20px] flex flex-col justify-between border border-border rounded-xl">
                <div>
                    <div className="font-bold leading-5 mt-4 px-2">
                        <span className="font-semibold font-inter">AI-<span className="text-primary">CHATBOT</span></span>
                    </div>
                    <div className="mb-3 text-sm text-muted-foreground px-2">
                        Signin to your account
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputForm type="text" label={"Email address"} value={formData.email} name="email" placeholder={"Enter your Email address"}  updateFormData={updateFormData}/>
                        <InputForm type="password" label={"Password"} value={formData.password} name="password" placeholder={"Enter your Password"}  updateFormData={updateFormData}/>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                </div>
                <div className="flex items-end gap-4 mb-[20px]">
                <div className="self-end" onClick={submitHandler}>
                <Button text="Signin" type={isButtonActive?"active":"inactive"}/>
            </div>
            <Link href={"/signup"}>
                <div className="text-sm text-muted-foreground cursor-pointer">Already have an account ?</div>
            </Link>
                </div>
            </div>
        </div>
    </form>
  )
}