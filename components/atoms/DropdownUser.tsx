import Link from 'next/link'
import React from 'react'
import { GrLogout } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'

export default function DropdownUser({ isMobile, setOpen }: any) {
    return (
        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
            <Link href={'/dashboard'} className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer items-center gap-2"
                onClick={() => setOpen()}
            >
                <IoSettingsOutline />
                Setting
            </Link>
            <Link href={'/dashboard'} className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer items-center gap-2"
                onClick={() => setOpen()}
            >
                <GrLogout />
                Logout
            </Link>
        </div>
    )
}
