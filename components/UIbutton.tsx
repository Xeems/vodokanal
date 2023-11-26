import { ButtonHTMLAttributes } from "react"

type Props = {

} & ButtonHTMLAttributes<HTMLButtonElement>

export default function UIbutton(props: Props) {

    return (
        <button {...props} className='tracking-wider px-5 font-semibold text-white rounded-md h-10 transition ease-in-out delay-150 bg-blue-400 hover:bg-blue-500 duration-300 z-10'>
            Отправить
        </button>
    )
}