import { Error_row } from "@/types/globalTypes"

// const data = [{
//     error_id: 109,
//     error_content: 'Incorrect meter readings',
//     excel_document_id: 12,
//     document_row: 3
// },
// {
//     error_id: 110,
//     error_content: 'Incorrect address',
//     excel_document_id: 12,
//     document_row: 4
// },
// {
//     error_id: 111,
//     error_content: 'Incorrect address',
//     excel_document_id: 12,
//     document_row: 12
// }
// ]



type Props= {
    data: Error_row[]
}

export default function ErorList({data}: Props) {

    return (
        <div className="z-50 bg-white border-b rounded-xl shadow-md">
            {data.map((error: Error_row) => (
                <p className="text-red-700 font-bold" key={error.error_id}>Ошибка "{error.error_content}" на строке {error.document_row}</p>
            ))}
        </div>
    )
}