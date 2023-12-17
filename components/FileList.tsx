'use client'

import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { ExcelFile } from "@/types/globalTypes"
import axios from "axios"
import { getServerSession } from "next-auth"
import Image from "next/image"
import { parseISO, format } from 'date-fns';
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function FileList() {
    const { data: session } = useSession()
    const [fileList, setFileList] = useState<ExcelFile[]>([])
    const serverURL = process.env.SERVER_URL

    useEffect(() => {
        axios.get(`${serverURL}file/userFiles`, {
            headers: {
                'Authorization': `Bearer ${session?.user.access_token}`
            }
        }).then((res) => setFileList(res.data))

    })

    const downloadFile = async (fileId: number) => {
        const fileResponse = await axios.get(`${serverURL}file`, {
            headers: {
                'Authorization': `Bearer ${session?.user.access_token}`
            },
            data: {
                "fileId": fileId
            }
        })
        console.log(fileResponse)
    }

if (fileList.length == 0)
    return <></>

return (
    <div className="w-1/2 rounded-md border border-solid border-zinc-300 backdrop-filter backdrop-blur-3xl bg-white bg-opacity-40">
        <table className="w-full border-collapse">
            <thead >
                <tr>
                    <th className="px-6 py-2">Id</th>
                    <th className="px-6 py-2">Название</th>
                    <th className="px-6 py-2">Дата загрузки</th>
                </tr>
            </thead>

            <tbody>
                {fileList.map((file: ExcelFile) => (
                    <tr key={file.fileId} className="text-lg h-16 hover:bg-gray-300 hover:bg-opacity-40 border-t border-solid border-zinc-300">

                        <td className="px-6 py-2">{file.fileId}</td>

                        <td className="px-auto py-2">
                            <div className="flex flex-row">
                                <Image className='self-center'
                                    src="/exel.png"
                                    quality={100}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: 'auto', height: '30px' }}
                                />
                                {file.fileName}
                            </div>
                        </td>

                        <td className="px-6 py-2">{format(parseISO(file.uploadDate), 'dd.MM.yyyy HH:mm:ss')}</td>

                        <td>
                            <button onClick={() => {
                                downloadFile(file.fileId)
                            }}>
                                <Image className='self-center'
                                    src="/download.png"
                                    quality={100}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: 'auto', height: '27px' }} />
                            </button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}
