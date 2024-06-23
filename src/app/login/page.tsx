'use client';

import { useState } from "react";
import { righteous } from '@/utils/font'
import { Eye, EyeOff } from "lucide-react";
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/shapii.png'
import { login } from '@/actions/auth'
import { LoaderCircle } from 'lucide-react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [pending, setPending] = useState(false);
  
  const onSubmit = async () => {
    try {
      setPending(true);
      const res = await login({ email, password });
      if(res?.error) return toast.error(res.error);
      res.message && toast.success(res.message);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/');
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setPending(false);
    }
  }
  
  return (
    <>
    <div className="bg-white flex justify-center flex-col">
    
   <header className="mt-16 mx-8 flex flex-col">
    <Image src={logo} className="w-16 h-16" alt="Logo of Shapii" />
    <h1 className={`${righteous.className} text-4xl text-[#FF7200] font-bold mt-2`}>Sign In | Shapii</h1>
    <p className="text-gray-800">Sign In to continue shopping with <span className={`${righteous.className} text-[#FF7200] mt-2`}>Shapii</span>.</p>
   </header>
   
      <div className="w-full bg-white flex flex-col md:flex-row md:justify-between mb-20">
        <div className="pt-16 md:pt-24 flex flex-col w-full md:w-[50%]">
          <div>
            <div className="flex flex-col mx-8">
              <label className="font-medium text-gray-700 dark:text-white">
                Email
              </label>
              <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="outline-none py-2 rounded-lg hover:border-[#FF7200] mt-2 border-[1.5px] border-gray-200 px-4 bg-white dark:bg-gray-800 dark:border-gray-700"
                type="email"
                placeholder="libyzxy0@example.com"
                required
              />
            </div>
            <div className="flex flex-col mx-8 mt-5 relative">
              <label className="font-medium text-gray-700 dark:text-white">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                className="outline-none py-2 rounded-lg hover:border-[#FF7200] mt-2 border-[1.5px] border-gray-200 px-4 bg-white dark:bg-gray-800 dark:border-gray-700"
                type={show ? "text" : "password"}
                placeholder="Helloworld@123"
                required
              />
              {password && (
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute top-[2.6rem] right-[0.8rem] text-gray-700 dark:text-white"
                >
                  {show ? <Eye /> : <EyeOff />}
                </button>
              )}
            </div>

            <div className="flex flex-col mx-8 mt-5">
              <button onClick={onSubmit} className="w-full border-none rounded-lg bg-[#FF7200] py-2.5 text-white font-medium flex justify-center">
              {pending ? (
                <LoaderCircle className="w-6 h-6 animate-spin" />
                ) : (
                <span>Sign In</span>
              )}
              </button>
            </div>
          </div>
          <h1 className="text-center mt-6 text-gray-600 dark:text-white">
            {"Don't have an account?"}{" "}
            <Link className="text-[#FF7200] hover:underline" href={`/signup`}>
              {"Let's create"}
            </Link>
          </h1>

        </div>

        <div className="pt-0 hidden md:inline-block md:w-[50%]">
          
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}