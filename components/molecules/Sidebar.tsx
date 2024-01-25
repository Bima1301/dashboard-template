'use client'

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowLeft, MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SubMenu from "../atoms/SubMenu";
import { menuList } from "@/libs/data";
import Image from "next/image";
import { BiSolidArrowToTop } from "react-icons/bi";
import DropdownUser from "../atoms/DropdownUser";
import useIsMobile from "@/app/hooks/useIsMobile";

const Sidebar = () => {
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (isMobile) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isMobile]);

    useEffect(() => {
        isMobile && setOpen(false);
    }, [pathname, isMobile]);

    const Nav_animation = isMobile
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };


    return (
        <div className="relative">
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
                    } `}
            />
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isMobile ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className={`md:bg-transparent bg-white text-gray z-[999] max-w-[16rem] w-[16rem] md:relative fixed h-screen ${open ? "me-6" : ""} `}
            >
                <div className=" relative">
                    <Link href={'/dashboard'} className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3 relative">
                        <img
                            src="https://img.icons8.com/color/512/firebase.png"
                            width={45}
                            alt=""
                        />
                        <span className={`text-xl whitespace-pre ${open ? '' : 'hidden'}`}>Fireball</span>
                    </Link>
                    <motion.div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        animate={
                            open
                                ? {
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                }
                                : {
                                    x: 28,
                                    y: 0,
                                    rotate: 180,
                                }
                        }
                        transition={{ duration: 0 }}
                        className={`absolute w-fit h-fit md:block z-[9999] hidden top-[36%] right-3 my-auto cursor-pointer text-slate-600 ${!open && "bg-slate-100 p-1 rounded-full shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"} hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] hover:p-1 hover:rounded-full  duration-200`}
                    >
                        <MdKeyboardDoubleArrowLeft size={18} />
                    </motion.div>
                </div>

                <div className="flex flex-col h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100  md:h-[68%] h-[70%]">
                        {menuList?.map((menu, index) => {
                            if (menu.isStartDevider && menu.deviderName) {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="w-full h-[1px] bg-slate-300 mt-5 mb-2" />
                                        <small className={`pl-3 text-slate-500 inline-block mb-2 ${!open && "hidden"}`}>
                                            {menu.deviderName}
                                        </small>
                                    </React.Fragment>
                                )
                            }
                            if (menu.isEndDevider) {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="w-full h-[1px] bg-slate-300 mt-3 mb-5" />
                                    </React.Fragment>
                                )
                            }
                            if (menu.children) {
                                return (
                                    <div key={index} className="flex flex-col gap-1"
                                        onClick={() => setOpen(true)}
                                    >
                                        <SubMenu data={menu} open={open} />
                                    </div>
                                )
                            }
                            return (
                                <li key={index}>
                                    <Link href={menu.path} className={`p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium hover:bg-blue-200 hover:text-blue-700 ${pathname.includes(menu.name.toLowerCase()) && "bg-blue-600 text-white"}`}>
                                        {menu.icon &&
                                            <menu.icon size={23} className="min-w-max" />
                                        }
                                        <motion.span
                                            animate={
                                                open
                                                    ? {
                                                        x: 0,
                                                        opacity: 1,
                                                    }
                                                    : {
                                                        x: -20,
                                                        opacity: 0,
                                                    }
                                            }
                                            transition={{ duration: 0.1 }}
                                        >
                                            {menu.name}
                                        </motion.span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {open ? (
                        <div className="text-sm z-50 p-3 whitespace-pre w-full font-medium relative max-h-48 my-auto">
                            <div className="flex border border-slate-300 rounded-md px-4 py-2 items-center justify-between hover:bg-slate-200 cursor-pointer"
                                onClick={() => setOpenUser(!openUser)}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                                    width={40}
                                    height={40}
                                    alt="User"
                                    className="rounded-full aspect-square object-cover"
                                />
                                <div>
                                    <p className="text-slate-800">Jhon Doe</p>
                                    <small className="text-slate-600">
                                        jhondoe@gmail.com
                                    </small>
                                </div>
                                <BiSolidArrowToTop size={20} className="text-slate-600" />
                            </div>
                            <motion.div className="origin-top-right absolute -top-24 -right-20 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                animate={
                                    openUser
                                        ? {
                                            opacity: 1,
                                            y: 0,
                                            x: 0,
                                        }
                                        : {
                                            opacity: 0,
                                            y: 20,
                                            x: -20,
                                        }
                                }
                            >
                                <DropdownUser
                                    isMobile={isMobile}
                                    setOpen={() => setOpenUser(!openUser)}
                                />
                            </motion.div>
                        </div>
                    ) :
                        <div className="flex border border-slate-300 rounded-md px-2 py-2 items-center justify-between hover:bg-slate-200 cursor-pointer relative m-2 max-h-48 my-auto"
                            onClick={() => setOpenUser(!openUser)}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                                width={40}
                                height={40}
                                alt="User"
                                className="rounded-full aspect-square object-cover"
                            />
                            <motion.div className="origin-top-right absolute -top-28 -right-36 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                animate={
                                    openUser
                                        ? {
                                            opacity: 1,
                                            y: 0,
                                            x: 0,
                                        }
                                        : {
                                            opacity: 0,
                                            y: 20,
                                            x: -20,
                                        }
                                }
                            >
                                <DropdownUser />
                            </motion.div>
                        </div>
                    }
                </div>
            </motion.div>
            <div className="p-3 md:hidden cursor-pointer absolute top-0 left-0 bg-slate-100 rounded-br-xl" onClick={() => setOpen(true)}>
                <MdMenu size={25} />
            </div>
        </div>
    );
};

export default Sidebar;
