'use client'
import { Button, Input } from "antd"
import TextArea from "antd/es/input/TextArea"
import axios from "axios"

const ContactUs = () => {

    const handleForm =async (e:any)=>{
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            mobile: e.target.mobile.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        try{
            const res = await axios.post("/api/contact",data)
            console.log(res)
        }
        catch(err)
        {
            console.log(err)
        }
    }


    return (
        <div className="flex justify-center items-center p-4 md:p-20 !pt-[120px] overflow-x-hidden">
            <div className="bg-slate-800 w-full  rounded-xl p-8">
                <div className="w-full h-full flex flex-col md:flex-row gap-10">
                    <div className="flex justify-center items-center w-full md:w-1/2">
                             <div className="p-8 flex flex-col gap-4">
                                <h1 className="text-xl text-blue-600">Get In Touch</h1>
                                <p className="text-3xl font-bold text-white">Elevate your brand with me</p>
                                <p className="text-white">Have a project in mind, a question or just want to say hello? Feel free to reach out! I'm alwaysopen to discussing.</p>
                            </div>
                    </div>
                    <div className="bg-slate-800 w-full h-full md:w-1/2">
                        <form className="flex flex-col" onSubmit={handleForm}>
                            <div className="m-4 flex flex-col md:flex-row gap-3">
                                <Input className="h-[80px] !bg-transparent !border-2 !border-slate-500 !text-2xl placeholder:!text-slate-400" placeholder="Your Name" type="text" required name="name"/>
                                <Input className="h-[80px] !bg-transparent !border-2 !border-slate-500 !text-2xl placeholder:!text-slate-400" placeholder="Mobile Number" type="tel" required name="mobile"/>
                            </div>

                            <div className="m-4 flex flex-col md:flex-row gap-3">
                                 <Input className="h-[80px] !bg-transparent !border-2 !border-slate-500 !text-2xl placeholder:!text-slate-400" placeholder="Your Email" type="email" required name="email"/>
                                <Input  className="h-[80px] !bg-transparent !border-2 !border-slate-500 !text-2xl placeholder:!text-slate-400" placeholder="Subject" type="text" required name="subject"/>
                            </div>

                            <div className="m-4">
                                <TextArea className="!h-[200px] !bg-transparent !border-2 !border-slate-500 !text-2xl placeholder:!text-slate-400" placeholder="Your Message" required name="message"/>
                            </div>

                            <div className="m-4">
                                <button className="p-3 border-2 border-slate-400 w-full rounded-xl" type="submit">Appointment now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs