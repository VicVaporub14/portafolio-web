import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";


export default function Contact({isDarkMode}) {

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
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            id='contact' 
            className='w-full max-w-2xl mx-auto py-10 px-6 scroll-mt-20 dark:bg-radial-light'
        >
            <div className='border rounded-lg border-gray-400 px-10 py-12 '>
                <motion.h4 
                    initial={{y: -20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{ delay: 0.3, duration: 0.5}}
                    className='text-center mb-2 text-lg font-ovo'
                >Connect with me</motion.h4>

                <motion.h2 
                    initial={{y: -20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{ delay: 0.5, duration: 0.5}}
                    className='text-center text-4xl font-ovo'
                >Get in touch</motion.h2>

                <motion.p 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ delay: 0.7, duration: 0.5}}
                    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
                >I'd love to hear from you! If you have any question, comments, or feedback, please use the form below</motion.p>

                <motion.form 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ delay: 0.9, duration: 0.5}}
                    onSubmit={onSubmit}
                    className="text-gray-700 dark:text-gray-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                        <motion.input 
                            initial={{x: -30, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            name="name"
                            type="text" 
                            placeholder="Enter your name" 
                            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-slate-700 "
                            required 
                        />
                        <motion.input 
                            initial={{x: 30, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            name="email"
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-slate-700"
                            required 
                        />
                    </div>
                    <motion.textarea 
                        initial={{x: -30, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ delay: 1.3, duration: 0.6}}
                        name="message"
                        rows='6' 
                        placeholder="Enter your message"
                        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-slate-700"
                    ></motion.textarea>

                    <motion.button 
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.3}}
                        type="submit"
                        className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-slate-700 dark:border dark:border-gray-400 dark:hover:bg-customBlue"
                    >
                        Submit now
                        <Image 
                            src={assets.right_arrow_white} 
                            alt=""
                            className="w-4"
                        />
                    </motion.button>
                    <p className="mt-4">{result}</p>
                </motion.form>
            </div>
        </motion.div>
    )
}
