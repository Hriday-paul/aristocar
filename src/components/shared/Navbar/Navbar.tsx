'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import SmNavSheet from "./SmNavSheet";
import LanguageSwitcher from "./LanguageSwitcher";
import Profile from "./Profile";
import { useGetUserProfileQuery } from "@/redux/features/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { addUserDetails } from "@/redux/slice/userSlice";


const Navbar = ({ defaultLang, title1, signin, signup, rootTitle, search, routs }: { defaultLang: string, title1: string, signin: string, signup: string, rootTitle: string, search: string, routs: { id: number, name: string, rout: string }[] }) => {

    const { isLoading, data, isSuccess, isError } = useGetUserProfileQuery({})
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.userSlice);

    useEffect(() => {
        if (isSuccess) {
            dispatch(addUserDetails({
                name: data?.data?.name,
                email: data?.data?.email,
                address: data?.data?.address || '',
                gender: data?.data?.gender || '',
                phoneNumber: data?.data?.phoneNumber || '',
                image: data?.data?.image || '',
                role: data?.data?.role,
            }))
        }
        if (isError) {
            dispatch(addUserDetails({
                name: '',
                email: '',
                address: '',
                gender: '',
                phoneNumber: '',
                image: '',
                role: "user",
            }))
        }
    }, [isSuccess, data, dispatch, isError])


    return (
        <div>
            {/* ------------section1--------------- */}
            <div className="py-3 bg-primary">
                <div className="container flex flex-row justify-between items-center">
                    <h4 className="font-lastica font-normal text-gray text-[10px] md:text-xs">{title1}</h4>
                    <div className="flex flex-row items-center justify-end">
                        <LanguageSwitcher defaultLang={defaultLang} languages={['en', 'rom', 'gm']} />
                        {!isSuccess && <span className="flex flex-row gap-x-0.5 md:gap-x-1.5 text-gray font-poppins text-xs md:text-sm border-l-2 border-l-zinc-500 pl-1.5 md:pl-3">
                            <Link href={'/signin'}>
                                {signin}
                            </Link>
                            <p>/</p>
                            <Link href={'/signup'}>
                                {signup}
                            </Link>
                        </span>}
                    </div>
                </div>
            </div>
            {/* ----------------section2----------------- */}
            <div className="py-3 md:py-4 bg-secondary sticky top-0">
                <div className="container flex flex-row justify-between items-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-normal font-lastica text-black select-none cursor-pointer uppercase">
                        <Link href='/'>{rootTitle}</Link>
                    </h1>

                    <div className="flex flex-row lg:hidden">
                        <SmNavSheet routs={routs} />
                    </div>

                    <div className="hidden lg:flex flex-row items-center gap-x-4">
                        <div>
                            <NavRouts routs={routs} />
                        </div>
                        <Profile isLoading={isLoading} user={user}/>
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


const NavRouts = ({ routs }: { routs: { id: number, name: string, rout: string }[] }) => {
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