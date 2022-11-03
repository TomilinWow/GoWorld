import React, {FC, ReactNode} from 'react';
import Navbar from "./Navbar";

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) =>{
    return(
        <div className="flex">
            <Navbar/>
            <main className="h-screen flex-1 p-7 bg-slate-50 ">{children}</main>
        </div>
    )
}
