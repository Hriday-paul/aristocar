'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import SmNavSheet from "./SmNavSheet";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ defaultLang, title1, signin, signup, rootTitle, search, routs }: { defaultLang: string, title1: string, signin : string, signup : string, rootTitle : string, search : string, routs : { id: number, name: string, rout: string }[]}) => {

    return (
        <div>
            {/* ------------section1--------------- */}
            <div className="py-3 bg-primary">
                <div className="container flex flex-row justify-between items-center">
                    <h4 className="font-lastica text-gray text-[10px] md:text-xs">{title1}</h4>
                    <div className="flex flex-row items-center">
                        <LanguageSwitcher defaultLang={defaultLang} langRo="rom" langEng="eng" />
                        <span className="flex flex-row gap-x-0.5 md:gap-x-1.5 text-gray font-poppins text-xs md:text-sm border-l-2 border-l-zinc-500 pl-1.5 md:pl-3">
                            <Link href={'/signin'}>
                                {signin}
                            </Link>
                            <p>/</p>
                            <Link href={'/signup'}>
                                {signup}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            {/* ----------------section2----------------- */}
            <div className="py-3 md:py-4 bg-secondary sticky top-0">
                <div className="container flex flex-row justify-between items-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-lastica text-black select-none cursor-pointer uppercase">
                        <Link href='/'>{rootTitle}</Link>
                    </h1>
                    <div className="flex flex-row lg:hidden">

                        <div className="relative z-50">
                            <input type="checkbox" id='searchDroopDown' name='searchDroopDown' className="peer/dropdown hidden" />
                            <label htmlFor="searchDroopDown" className="peer-checked/dropdown:hidden">
                                <IoSearchOutline className="text-primary text-2xl" />
                            </label>
                            <label htmlFor="searchDroopDown" className="hidden peer-checked/dropdown:block">
                                <RxCross2 className="text-2xl text-danger" />
                            </label>

                            <div className="bg-secondary z-50 p-4 border-t-4 border-t-primary absolute -top-96 right-0 shadow-2 opacity-0 hidden peer-checked/dropdown:top-full peer-checked/dropdown:opacity-100 peer-checked/dropdown:block transition-all duration-200">
                                <div className="relative">
                                    <input
                                        className="appearance-none border pl-10 border-stroke focus:border-primary transition-colors duration-200 rounded-md w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder:text-zinc-400 font-poppins font-medium text-sm min-w-60 xl:min-w-80"
                                        type="search"
                                        placeholder={search}
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <IoSearchOutline className="text-primary text-xl ml-3" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <SmNavSheet routs={routs}/>

                    </div>
                    <div className="hidden lg:flex flex-row">
                        <div className="relative">
                            <input
                                className="appearance-none border border-r-0 pl-10 border-stroke focus:border-primary transition-colors duration-200 rounded-md rounded-r-none w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder:text-zinc-400 font-poppins font-medium text-sm min-w-60 xl:min-w-80"
                                type="search"
                                placeholder={search}
                            />
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <IoSearchOutline className="text-primary text-xl ml-3" />
                            </div>
                        </div>
                        <button className="bg-primary text-secondary px-4 py-1.5 rounded-r-md font-poppins hover:bg-opacity-90 duration-200">
                            {search}
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <NavRouts routs={routs}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


export const routs: { id: number, name: string, rout: string }[] = [
    {
        id: 1,
        name: 'Home',
        rout: '/'
    },
    {
        id: 2,
        name: 'Shop',
        rout: '/shop'
    },
    {
        id: 3,
        name: 'Sell',
        rout: '/sell'
    },
    {
        id: 4,
        name: 'About us',
        rout: '/about'
    },
    {
        id: 5,
        name: 'Support',
        rout: '/support'
    },

]


const NavRouts = ({routs} : {routs : { id: number, name: string, rout: string }[]}) => {
    const pathName = usePathname();

    return (
        <>
            <ul className="flex gap-x-5 xl:gap-x-7">
                {
                    routs?.map(item => {
                        return <li key={item?.id} className='text-base relative group'>
                            <Link href={item?.rout}>{item?.name}</Link>
                            <span className={`absolute left-0 -bottom-1 font-satoshi h-0.5 w-0 ${pathName !== item?.rout ? 'group-hover:w-full' : 'w-full'} bg-primary duration-200`}></span>
                        </li>
                    })
                }
            </ul>
        </>
    )
}