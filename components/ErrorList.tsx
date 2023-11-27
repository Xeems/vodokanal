const data = [{
    error_id: 109,
    error_content: 'Incorrect meter readings',
    excel_document_id: 12,
    document_row: 3
},
{
    error_id: 110,
    error_content: 'Incorrect address',
    excel_document_id: 12,
    document_row: 4
},
{
    error_id: 111,
    error_content: 'Incorrect address',
    excel_document_id: 12,
    document_row: 12
}
]

export default function ErorList() {

    return (
        <div className="z-50 bg-white border-b rounded-xl shadow-md">
            {data.map((error) => (
                <p className="text-red-700 font-bold">{error.error_id}, {error.error_content}, {error.document_row}</p>
            ))}
        </div>
    )
}