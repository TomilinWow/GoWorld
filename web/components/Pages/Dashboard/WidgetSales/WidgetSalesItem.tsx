import React, {FC} from 'react';
import {QuestionMarkCircleIcon} from "@heroicons/react/24/solid";

interface WidgetSalesItemProps {
    title: string,
    category: string,
    count: number
}

const WidgetSalesItem: FC<WidgetSalesItemProps> = ({title, category, count}) => {
    return (
        <tr>
            <td>
                <a href="#" className="hover:text-indigo-500">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10  mt-1">
                            <QuestionMarkCircleIcon className="h-10 w-10 rounded-full"/>
                        </div>
                        <div className="ml-4 mr-4 mt-1">
                            <div className="leading-5">
                                {title}
                            </div>
                            <div className="text-xs leading-5 text-gray-500">
                                {category}
                            </div>
                        </div>
                    </div>
                </a>
            </td>
            <td className="flex justify-center mt-2">
                <div className="leading-5 text-green-700">{count}</div>
            </td>
        </tr>
    );
};

export default WidgetSalesItem;
