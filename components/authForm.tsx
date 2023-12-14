'use client'

import Image from 'next/image'
import UIinput from './UIinput'

export default function Authentific() {



    return (
        <main className="relative flex flex-col items-center justify-center p-24">

            <div className="flex justify-center relative z-40">
                <div className="px-9 py-6 w-full h-fit rounded-md border border-solid border-stone-500 backdrop-filter opacity-40 backdrop-blur-lg bg-white transition duration-300">
                    <div className="text-black font-sans text-4xl flex flex-row justify-center">
                        <p className=''>Вход</p>
                    </div>
                    <p className='font-medium py-3'>Логин</p>
                    <UIinput placeholder="Логин"/>
                    <p className='font-medium py-3'>Пароль</p>
                    <UIinput placeholder="Пароль"/>
                </div>
            </div>

        </main>
    )
}