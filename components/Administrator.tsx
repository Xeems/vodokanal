'use client'

import UIinput from './UIinput'

export default function Audministrator() {

    return (
        <main className="relative flex flex-col items-center justify-center p-24">

            <div className="flex justify-center relative z-40">
                <div className="px-9 py-6 w-full h-fit rounded-md border border-solid border-stone-500 backdrop-filter opacity-80 backdrop-blur-lg bg-white transition duration-300">
                    <div className="text-black font-sans text-4xl flex justify-center ">
                        <p className=''>Страница администратора</p>
                    </div>
                    <p className='pt-6'>Добавление пользователя:</p>
                    <p className='font-medium py-3'>Логин</p>
                    <UIinput placeholder="Логин" />
                    <p className='font-medium py-3'>Пароль</p>
                    <UIinput placeholder="Пароль" />
                    <p className='font-medium py-3'>Фамилия</p>
                    <UIinput placeholder="Фамилия" />
                    <p className='font-medium py-3'>Имя</p>
                    <UIinput placeholder="Имя" />
                    <p className='font-medium py-3'>Отчетсво</p>
                    <UIinput placeholder="Отчетсво" />
                </div>
            </div>

        </main>
    )
}