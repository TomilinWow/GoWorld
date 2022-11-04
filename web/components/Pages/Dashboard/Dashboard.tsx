import React from 'react';
import Widget from "./Widget";
import {CreditCardIcon, GiftIcon, HandThumbDownIcon, UserPlusIcon} from "@heroicons/react/24/solid";

const Dashboard = () => {
    return (
        <div className="mx-auto p-2">
            <div className="flex flex-wrap flex-row ">
                <div className="flex-shrink max-w-full px-4 w-full">
                    <p className="text-xl font-bold mt-3 mb-5">Дашборд</p>
                </div>
                <Widget title="Оборот сегодня" value={5}
                        icon={<CreditCardIcon className="self-center w-9 h-9 rounded-full text-yellow-500"/>} iconBgColor='bg-yellow-100' />
                <Widget title="Скидка сегодня" value={"-5%"}
                        icon={<GiftIcon className="self-center w-9 h-9 rounded-full text-green-500"/>} iconBgColor='bg-green-100'/>
                <Widget title="Низкие отзывы сегодня" value={2}
                        icon={<HandThumbDownIcon className="self-center w-9 h-9 rounded-full text-pink-500"/>} iconBgColor='bg-pink-100'/>
                <Widget title="Новые пользователи" value={"+100"}
                        icon={<UserPlusIcon className="self-center w-9 h-9 rounded-full text-indigo-500"/>} iconBgColor='bg-indigo-100'/>
            </div>
        </div>


    )
}



export default Dashboard;
