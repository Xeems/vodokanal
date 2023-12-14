'use client'

import UIbutton from '@/components/UIbutton'
import UIinput from '@/components/UIinput'



export default function Auth() {

    return (
        <div className='w-full h-full flex items-center justify-center'>

            <form className="w-fit h-fit py-14 px-10 flex flex-col items-center filter backdrop-filter backdrop-blur-lg bg-white">
                <div className="text-black font-sans text-4xl flex flex-row justify-center">
                    <p className=''>Вход</p>
                </div>
                <p className='font-medium py-3'>Логин</p>
                <UIinput placeholder="Логин" />
                <p className='font-medium py-3'>Пароль</p>
                <UIinput placeholder="Пароль" />
                <UIbutton className='mt-4'>Вход</UIbutton>
            </form>

        </div>
    )
}
