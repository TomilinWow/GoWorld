import React from 'react';

const Operations = () => {
    return (<div>
            <h1 className="text-xl text-black font-medium  mx-8 my-4 ">Операции</h1>
            <p className=" text-sm text-black  mx-8 my-4">Найдено операций :</p>
            <div className="flex">
                <div className="mx-8 my-4  ">
                    <button type="button" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Провести операцию</button>
                </div>
                <div className="mx-2 my-4">
                    <button type="button" className="inline-block px-7 py-3 text-black  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Экспорт в Exel</button>
                </div>
            </div>

            <div className="flex my-8 mx-8">

                <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" className=" h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Филтры <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg></button>


                <div id="dropdownBgHover" className="hidden z-10 w-48 bg-white rounded shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                        <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                                    <label htmlFor="checkbox-item-4" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input  id="checkbox-item-5" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                                    <label htmlFor="checkbox-item-5" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                                    <label htmlFor="checkbox-item-6" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <input className=" mx-4 bg-blue border-2" type="date" name="trip-start" value="" min="" max=""></input>
                <form className="mx-4 flex ">
                    <p><input className=" h-8 w-96 bg-white border-2" type="search" name="q" placeholder="Поиск..."></input></p>
                    <button className="  w-16 mx-2 bg-blue-600 text-white  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Поиск</button>
                </form>
            </div>

            <div className=" flex mx-8 border-b-2 h-[50px]">
                <p className="text-black ">Дата</p>
                <p className="text-black ml-[100px]">Тип</p>
                <p className="text-black ml-[40px]">Клиент</p>
                <p className="text-black ml-[300px]">Уровень</p>
                <p className="text-black ml-[300px]">Кассир</p>
            </div>

            <div className=" flex mx-8 border-b-2 h-[70px]">
                <div>
                    <p className="text-black ">04.11.22</p>
                    <p className="text-black ">17:16</p>
                </div>
                <p className="text-black ml-[80px] my-2">P.</p>
                <p className="text-black ml-[50px] my-2">Саня</p>
                <p className="text-black ml-[340px] my-2">5</p>
                <p className="text-black ml-[340px] my-2">Иван</p>
            </div>


            <div className=" flex mx-8 border-b-2 h-[70px]">
                <div>
                    <p className="text-black ">04.11.22</p>
                    <p className="text-black ">17:16</p>
                </div>
                <p className="text-black ml-[80px] my-2">P.</p>
                <p className="text-black ml-[50px] my-2">Саня</p>
                <p className="text-black ml-[340px] my-2">5</p>
                <p className="text-black ml-[340px] my-2">Иван</p>
            </div>


            <div className=" flex mx-8 border-b-2 h-[70px]">
                <div>
                    <p className="text-black ">04.11.22</p>
                    <p className="text-black ">17:16</p>
                </div>
                <p className="text-black ml-[80px] my-2">P.</p>
                <p className="text-black ml-[50px] my-2">Саня</p>
                <p className="text-black ml-[340px] my-2">5</p>
                <p className="text-black ml-[340px] my-2">Иван</p>
            </div>


            <div className=" flex mx-8 border-b-2 h-[70px]">
                <div>
                    <p className="text-black ">04.11.22</p>
                    <p className="text-black ">17:16</p>
                </div>
                <p className="text-black ml-[80px] my-2">P.</p>
                <p className="text-black ml-[50px] my-2">Саня</p>
                <p className="text-black ml-[340px] my-2">5</p>
                <p className="text-black ml-[340px] my-2">Иван</p>
            </div>









        </div>
    );
};

export default Operations;
