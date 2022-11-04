import React from 'react';
import WidgetSalesItem from "./WidgetSalesItem";

const WidgetSales = () => {
    return (
        <div className="flex-shrink max-w-full px-4 w-full lg:w-1/3 mb-6">
            <div className="p-6 bg-white  rounded-lg shadow-lg h-full">
                <div className="mb-2">
                    <table className="table-sm text-sm  w-full">
                        <thead>
                        <tr className="text-sm font-semibold border-b">
                            <th>
                                Лучшие продажи
                            </th>
                            <th>
                                Количество
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <WidgetSalesItem category='Напитки' count={150} title={'Латте'}/>
                            <WidgetSalesItem category='Салаты' count={100} title={'Салат Цезарь'}/>
                            <WidgetSalesItem category='Десерты' count={97} title={'Горячий Брауни'}/>
                            <WidgetSalesItem category='Напитки' count={55} title={'Капучино'}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default WidgetSales;
