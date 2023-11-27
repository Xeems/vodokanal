'use client'

import Image from 'next/image'
import UIbutton from './UIbutton'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Document_data, Excel_document } from '@/utils/globalTypes'

interface ChildProps {
    onDataReceived: (data: Document_data) => void
}

export default function DropFiles({ onDataReceived }: ChildProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [data, setData] = useState<Document_data | null>(null)

    const sendDataToPranet = (data: Document_data) => {
        onDataReceived(data)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files)
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Select a file")
            return
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post('http://localhost:3000/file-upload/exel', formData,
            {
                headers: {
                    'Content-Type': selectedFile.type,
                }
            })
        if (response) {
            const data: Document_data = response.data
            sendDataToPranet(data)
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
                    <UIbutton onClick={handleUpload} />
                </div>
            </div>
        </div>
    )
}