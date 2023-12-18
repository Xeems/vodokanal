'use client'

import UIbutton from '@/components/UIbutton'
import UIinput from '@/components/UIinput'
import { useState } from 'react';
import { signIn } from 'next-auth/react'

export default function Auth() {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function onSubmitLogIn(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const result = await signIn('credentials', {
            username: login,
            password: password,
            redirect: true,
            callbackUrl:"/main"
        })
        
    }

    return (
        <div className='w-full h-screen flex flex-col my-auto items-center justify-center'>

            <form onSubmit={onSubmitLogIn} className="w-[18%] h-fit py-10 px-10 flex flex-col items-center rounded-md backdrop-filter backdrop-blur-md bg-white bg-opacity-90">
                <div className="text-black font-sans text-4xl flex flex-row justify-center">
                    <p className=''>Вход</p>
                </div>
                <UIinput placeholder="Логин" header='Логин'
                    value={login}
                    onChange={(event) => setLogin(event.target.value)} />

                <UIinput placeholder="Пароль" header='Пароль'
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />

                <UIbutton className='mt-4'>Вход</UIbutton>
            </form>

        </div>
    )
}
