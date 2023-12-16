import { Meter_readings } from "@/types/globalTypes"
import { type } from "os"

// const data = [{
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '1'
//     },
//     hot_water: 5324.77,
//     cold_water: 4313
// },
// {
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '5'
//     },
//     hot_water: 34256,
//     cold_water: 24846
// },
// {
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '16'
//     },
//     hot_water: 54325,
//     cold_water: 84987
// },
// {
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '17'
//     },
//     hot_water: 3543,
//     cold_water: 4648
// },
// {
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '19'
//     },
//     hot_water: 34532,
//     cold_water: 64564
// },
// {
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '22'
//     },
//     hot_water: 54673,
//     cold_water: 16549
// },
// {
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '27'
//     },
//     hot_water: 3245,
//     cold_water: 98795
// },
// {
//     address_id: undefined,
//     address: {
//         city: 'Новокузнецк',
//         street: 'Грибоедова',
//         house: '6',
//         appartment: '29'
//     },
//     hot_water: 34256,
//     cold_water: 46874
// }
// ]

type Props= {
    data: Meter_readings[]
}

export default function MeterTable({data}: Props) {


    return (
        <div className="z-50 border rounded-xl h-fit w-fit overflow-hidden shadow-md">
            <table className="table-fixed z-50">
                <thead>
                    <tr className="bg-white border-b">
                        <th className="px-6 py-3">Город</th>
                        <th className="px-6 py-3">Улица</th>
                        <th className="px-6 py-3">Дом</th>
                        <th className="px-6 py-3">Квартра</th>
                        <th className="px-6 py-3">Горячая вода</th>
                        <th className="px-6 py-3">Холодная вода</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((metric: Meter_readings) => (
                            <tr className="bg-white border-b" >
                                <td className="px-6 py-3">{metric.address?.city}</td>
                                <td className="px-6 py-3">{metric.address?.street}</td>
                                <td className="px-6 py-3">{metric.address?.house}</td>
                                <td className="px-6 py-3">{metric.address?.appartment}</td>
                                <td className="px-6 py-3">{metric.hot_water}</td>
                                <td className="px-6 py-3">{metric.cold_water}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}