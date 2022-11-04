import React, {FC, useEffect, useState} from 'react';
import {
    AdjustmentsHorizontalIcon, ArrowLeftOnRectangleIcon,
    ArrowSmallLeftIcon,
    ChartBarIcon,
    CpuChipIcon,
    FaceSmileIcon, HomeIcon
} from "@heroicons/react/24/solid";
import Cookie from "js-cookie";
import {COOKIES} from "../../services/login_service";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setCurrentPage} from "../../store/slices/page/pageSlice";
import {GetStaticProps} from "next";


interface NavbarProps {

}

const Navbar:FC<NavbarProps> = () => {
    const [open, setOpen] = useState(true);
    const router = useRouter()
    const [menu, setMenu] = useState([
        {id: 0, title: "Главная", link: "/home", icon: <HomeIcon className="h-6 w-6 bg-light-white"/>, active: false},
        {id: 1, title: "Дашборд", link: "/dashboard", icon: <AdjustmentsHorizontalIcon className="h-6 w-6 bg-light-white"/>, active: false},
        {id: 2, title: "Статистика", link: "/statistics", icon: <ChartBarIcon className="h-6 w-6 bg-light-white"/>, active: false},
        {id: 3, title: "Операции", link: "/operations", icon: <CpuChipIcon className="h-6 w-6 bg-light-white"/>, active: false},
        {id: 4, title: "Выйти", link: "/login", icon: <ArrowLeftOnRectangleIcon className="h-6 w-6 bg-light-white"/>, gap: true, active: false},
    ])

    // let currentPage = useAppSelector((state) => state.page.currentPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        let new_menu = menu.map(r => {
            if (r.link === router.route) {
                return {...r, active: true}
            } else if (!r.active) {
                return {...r, active: false}
            } else {
                return r
            }
        })
        setMenu(new_menu)
    }, [])

    const logout = async () => {
        Cookie.remove(COOKIES.authToken);
        dispatch(setCurrentPage(null))
        await router.push("/login");
    };

    return (
        <div className="flex">
            <div
                style={{backgroundColor: '#fffc00'}}
                className={` ${
                    open ? "w-72" : "w-20 "
                } p-5  pt-8 relative duration-300`}
            >
                <div>
                    <ArrowSmallLeftIcon className={`absolute cursor-pointer -right-3 top-10 w-6 h-6 border-dark-purple
                    border-2 rounded-full ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} >

                    </ArrowSmallLeftIcon>

                </div>


                <div className="flex gap-x-4 items-center">
                    <FaceSmileIcon className={`cursor-pointer duration-500 h-10 w-10 rounded-md ${
                        open && "rotate-[360deg]"
                    }`}/>
                    {open
                        ?  <div>
                            <h1 className={`font-medium font-mono text-black text-2xl font-bold`}>
                                StreetFamily
                            </h1>
                        </div>
                        : null
                    }

                </div>
                <ul className="pt-6">
                    {menu.map((m, index) => (
                        <li
                            key={index}
                            style={{}}
                            className={`flex rounded-md p-2 cursor-pointer text-black hover:text-opacity-30 text-sm items-center gap-x-4 
                            ${m.gap ? "mt-9" : "mt-2"} ${
                                m.active && "bg-slate-50 hover:text-opacity-30"
                            } `}
                            onClick={() => {
                                if (m.title === 'Выйти') logout()
                                else {
                                    dispatch(setCurrentPage(m.id))
                                    router.push(m.link)
                                }
                            }}
                        >
                            {m.icon}
                            <span className={`${!open && "hidden"} origin-left hover:bg-opacity-70 duration-200 text-black text-sm`}>
                                {m.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


