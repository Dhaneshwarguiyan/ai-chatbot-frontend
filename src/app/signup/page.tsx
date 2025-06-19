'use client'

import Button from "@/component/Button";
import InputForm from "@/component/InputForm";
import { useEffect, useState } from "react";
import Link from "next/link";

interface signUpPropType {
    name:string;
    email:string;
    password:string;
}


export default function Signup() {
    const [formData,setFormData] = useState<signUpPropType>({
        name:"",
        email:"",
        password:"",
    });
    const [isButtonActive,setIsButtonActive] = useState<boolean>(false);
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
    const submitHandler = (e:React.MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        if(isButtonActive){
            console.log(formData);
            // navigate('/dashboard')
        }
    }
    const checkActive = (formData:signUpPropType)=>{
        if(formData.name !=="" && formData.email !== "" && formData.email !== "" && formData.password !== ""){
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
                        Signup to your account
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputForm type="text" label={"Full Name"} value={formData.name} name="name" placeholder={"Enter your Full Name"}  updateFormData={updateFormData}/>
                        <InputForm type="text" label={"Email address"} value={formData.email} name="email" placeholder={"Enter your Email address"}  updateFormData={updateFormData}/>
                        <InputForm type="password" label={"Password"} value={formData.password} name="password" placeholder={"Enter your Password"}  updateFormData={updateFormData}/>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                </div>
                <div className="flex items-end gap-4 mb-[20px]">
                <div className="self-end" onClick={submitHandler}>
                <Button text="Signup" type={isButtonActive?"active":"inactive"}/>
            </div>
            <Link href={"/signin"}>
                <div className="text-sm text-muted-foreground cursor-pointer">Go to Signin</div>
            </Link>
                </div>
            </div>
        </div>
    </form>
  )
}