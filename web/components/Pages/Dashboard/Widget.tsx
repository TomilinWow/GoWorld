import React, {FC, ReactNode} from "react";
import Link from "next/link";

interface WidgetProps {
    title: string,
    icon: any,
    value: number | string,
    iconBgColor: string
}

const Widget: FC<WidgetProps> = ({title, icon, value, iconBgColor}) => {
    return (
        <div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div className="bg-white rounded-lg shadow-lg h-full">
                <div className="pt-6 px-6 relative text-sm font-semibold flex flex-row justify-between">
                    {title}
                    <div>
                        <div className="absolute top-auto bottom-full mb-3"
                             style={{display: "none"}}>
                            <div
                                className="z-40 w-32 p-2 -mb-1 text-sm leading-tight text-white bg-black rounded-lg shadow-lg text-center">
                                Since last month
                            </div>
                            <div className="absolute transform -rotate-45 p-1 w-1 bg-black bottom-0 -mb-2"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between px-6 py-4">
                    <div className={`flex justify-center items-center self-center w-14 h-14 rounded-full relative text-center ${iconBgColor}`}>
                        {icon}
                    </div>

                    <h2 className="self-center text-3xl">{value}</h2>
                </div>
            </div>
        </div>

    )
}



export default Widget;
