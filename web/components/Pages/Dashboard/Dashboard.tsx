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
                <Widget title="Оборот сегодня" value={5} icon={<CreditCardIcon className="w-14 h-14 rounded-full bg-pink-600"/>}/>
                <Widget title="Скидка сегодня" value={5} icon={<GiftIcon className="w-14 h-14" />}/>
                <Widget title="Низкие отзывы сегодня" value={2} icon={<HandThumbDownIcon className="w-14 h-14"/>}/>
                <Widget title="Новые пользователи" value={10} icon={<UserPlusIcon className="w-14 h-14"/>}/>
            </div>
        </div>


    )
}



export default Dashboard;
