'use client'

import Image from 'next/image'
import UIbutton from './UIbutton'
import React, { useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function DropFiles() {
    const serverURL = process.env.SERVER_URL
    const { data: session } = useSession();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [responseData, setResponseData] = useState();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Select a file");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post(`${serverURL}file/uploadExcel`, formData,
                {
                    headers: {
                        'Content-Type': selectedFile.type,
                        'Authorization': `Bearer ${session?.user.access_token}`
                    }
                }
            );
            setResponseData(response.data);
            if(responseData)
            {setSelectedFile(null)}

        } catch (error) {
            console.error('Error uploading file:', error);
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
                        <Image className='group-hover:animate-bounce mb-10 self-center absolute'
                            src="/downarrow5.png"
                            quality={100}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: 'auto', height: '70px' }}
                        />
                        <p className='absolute self-end mb-10 font-medium'>Для загрузки файлов перетащите их сюда или нажмите.</p>
                        <input className='opacity-0 w-[100%] z-50'
                            id="dropzone-file"
                            type="file"
                            onChange={handleChange}
                            accept=".xlsx" />
                    </div>
                    :
                    <div className='flex align-middle justify-center w-full h-48 my-5 rounded-lg border border-solid border-stone-500 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg'>
                        <div className='flex flex-col h-fit self-center content-center'>
                            <Image className='self-center'
                                src="/exel.png"
                                quality={100}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: '100px' }}
                            />
                            <p className='text-center font-medium'>{selectedFile.name}</p>
                        </div>
                    </div>
                }

                <div className='flex flex-row-reverse'>
                    <UIbutton onClick={handleUpload} >Отправка</UIbutton>
                </div>
            </div>
        </div>
    )
}