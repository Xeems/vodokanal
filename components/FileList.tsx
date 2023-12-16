
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { ExcelFile } from "@/types/globalTypes"
import axios from "axios"
import { getServerSession } from "next-auth"
import Image from "next/image"
import { parseISO, format } from 'date-fns';

// const UserFiles: ExcelFile[] = [
//     {
//         fileId: 1,
//         fileName: 'Example file',
//         uploadDate: new Date()
//     },
//     {
//         fileId: 1,
//         fileName: 'Example file',
//         uploadDate: new Date()
//     },
//     {
//         fileId: 1,
//         fileName: 'Example file',
//         uploadDate: new Date()
//     },
//     {
//         fileId: 1,
//         fileName: 'Example file',
//         uploadDate: new Date()
//     }
// ]

export default async function FileList() {
    const session = await getServerSession(authOptions)

    const serverURL = process.env.SERVER_URL
    const response = await axios.get(`${serverURL}/file/userFiles`, {
        headers: {
            'Authorization': `Bearer ${session?.user.access_token}`
        }
    })

    const data: ExcelFile[] = response.data

    return (
        <table className="w-1/2 p-15 rounded-md backdrop-filter backdrop-blur-3xl bg-white bg-opacity-40">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Название</th>
                    <th>Дата загрузки</th>
                </tr>
            </thead>

            <tbody>
                {data.map((file: ExcelFile) => (
                    <tr key={file.fileId} className="text-lg h-20">

                        <td className="px-6 py-4">{file.fileId}</td>

                        <td className="px-auto py-4">
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

                        <td className="px-6 py-4">{format(parseISO(file.uploadDate), 'dd.MM.yyyy HH:mm:ss')}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}
