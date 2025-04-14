import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";


export default function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8d69e9b0-cd6d-4c19-ada5-61dd5e3a31f2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full max-w-2xl mx-auto py-10 px-6 scroll-mt-20'>
            <div className="border rounded-lg border-gray-400 px-10 py-12">
                <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
                <h2 className='text-center text-4xl font-ovo'>Get in touch</h2>

                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>I'd love to hear from you! If you have any question, comments, or feedback, please use the form below</p>

                <form 
                    onSubmit={onSubmit}
                    className="text-gray-100"
                >
                    <div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8"
                    >
                        <input 
                            name="name"
                            type="text" 
                            placeholder="Enter your name" 
                            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-slate-700 "
                            required 
                        />
                        <input 
                            name="email"
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-slate-700"
                            required 
                        />
                    </div>
                    <textarea 
                        name="message"
                        rows='6' 
                        placeholder="Enter your message"
                        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-slate-700"
                    ></textarea>

                    <button 
                        type="submit"
                        className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-slate-700 dark:border dark:border-gray-400 dark:hover:bg-customBlue"
                    >
                        Submit now
                        <Image 
                            src={assets.right_arrow_white} 
                            alt=""
                            className="w-4"
                        />
                    </button>
                    <p className="mt-4">{result}</p>
                </form>
            </div>
        </div>
    )
}
