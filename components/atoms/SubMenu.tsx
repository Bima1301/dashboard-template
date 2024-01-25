'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SubMenu = ({ data, open }: any) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState('');

    useEffect(() => {
        if (!open) {
            setSubMenuOpen('');
        }
    }, [open]);

    return (
        <>
            <li
                className={`p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium 
                ${pathname.includes(data.name.toLowerCase()) && "bg-blue-600 text-white"}
                 hover:bg-blue-200 hover:text-blue-700 `}
                onClick={() => {
                    if (subMenuOpen === data.name) {
                        setSubMenuOpen('');
                    } else {
                        setSubMenuOpen(data.name);
                    }
                }}
            >
                <data.icon size={23} className="min-w-max" />
                <motion.span className="flex-1 capitalize"
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
                    {data.name}</motion.span>
                <IoIosArrowDown
                    className={` ${subMenuOpen === data.name && "rotate-180"} duration-200 `}
                />
            </li>
            <motion.ul
                animate={
                    subMenuOpen === data.name && open
                        ? {
                            height: "fit-content",
                        }
                        : {
                            height: 0,
                        }
                }
                className="flex h-0 flex-col pl-6 ms-5 text-[0.8rem] font-normal overflow-hidden border-l border-l-slate-300"
            >
                {data.children?.map((menu: any, index: number) => (
                    <motion.li key={index}>
                        <Link
                            href={menu.path}
                            className={`p-2.5 flex rounded-md gap-3 items-center md:cursor-pointer cursor-default duration-300 font-medium !bg-transparent capitalize  ${pathname.includes(menu.name.toLowerCase()) && "text-blue-600"} hover:text-blue-600`}
                        >
                            {menu.icon &&
                                <menu.icon size={18} className="min-w-max" />
                            }
                            {menu.name}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
};

export default SubMenu;
