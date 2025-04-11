import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-20">
        <div className="text-center">
            <Image src={assets.logo} alt="" className="w-66 mx-auto mb-2" />
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={assets.mail_icon} alt="" className="w-6" />
                IngSCVictor14@gmail.com
            </div>
        </div>

        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>©{new Date().getFullYear()} Victor Soto. All Rights Reserved.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li><Link target="_blank" href='https://github.com/VicVaporub14'>GitHub</Link></li>
                <li><Link target="_blank" href='https://www.linkedin.com/in/v%C3%ADctor-hugo-soto-g%C3%A1ndara-357a752a4/'>LinkedIn</Link></li>
            </ul>
        </div>
    </div>
  )
}
