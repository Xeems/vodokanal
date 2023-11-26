'use client'

import Image from 'next/image'
import UIbutton from './UIbutton'
import { useState } from 'react'

export default function DropFiles() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [uploaded, setUploaded] = useState()

    const handleChange = (event: any) => {
        console.log(event.target.files)
        setSelectedFile(event.target.files[0])
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Select a file")
            return
        }
    }

    return (
        <div className="w-1/2 flex justify-center relative z-50">
            <div className="px-9 py-6 w-full h-fit rounded-md border border-solid border-stone-500 backdrop-filter backdrop-blur-lg">
                <div className="text-black font-sans text-4xl flex flex-row">
                    <p className=''>Загрузить файл</p>
                </div>
                {!selectedFile ?
                    <div className="cursor-pointer group w-full h-48 my-5 transition duration-300 hover:bg-gray-200  bg-white opacity-70 flex justify-center relative border border-solid border-stone-500 backdrop-filter backdrop-blur-lg">
                        <Image className='group-hover:animate-bounce mb-10 self-center opacity-50 absolute'
                            src="/downarrow5.png"
                            quality={100}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: 'auto', height: '70px' }}
                        />
                        <p className='absolute self-end mb-10 font-medium'>Для загрузки файлов перетащите их сюда.</p>
                        <input className='opacity-0 w-[100%] z-50'
                            id="dropzone-file"
                            type="file"
                            onChange={handleChange}
                            accept=".xlsx" />
                    </div>
                    :
                    <div className='w-full h-48 my-5 rounded-lg border border-solid border-stone-500 bg-white opacity-70 backdrop-filter backdrop-blur-lg'>
                        
                    </div>
                }

                <div className='flex flex-row-reverse'>
                    <UIbutton onClick={handleUpload} />
                </div>
            </div>
        </div>
    )
}