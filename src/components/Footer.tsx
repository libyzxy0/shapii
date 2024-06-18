import Link from "next/link";
import Image from 'next/image'
import logo from '@/assets/images/shapii.png'
import { righteous } from '@/utils/font'

export const Footer = () => {
  return (
    <footer className="bg-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://shapii.codesync.ph"
            className={`${righteous.className} flex items-center mb-4 sm:mb-0 space-x-2 rtl:space-x-reverse`}
          >
            <Image src={logo} className="w-12 h-12" alt="Logo of Shapii" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FF7200]">
            Shapii
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link href="about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                href="privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="https://www.libyzxy0.com" className="hover:underline">
                Developer
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <Link href="https://shapii.codesync.ph" className="hover:underline">
            Shapii - libyzxy0
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};