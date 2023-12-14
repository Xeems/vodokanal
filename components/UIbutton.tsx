import { ButtonHTMLAttributes } from "react"
import clsx from 'clsx'

type Props = {
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function UIbutton({ children, ...props }: Props) {
    return (
        <button {...props}
            className={clsx(props.className, 
                'tracking-wider px-5 font-semibold text-white rounded-md h-10 transition ease-in-out delay-150 bg-blue-400 hover:bg-blue-500 duration-300 z-10')}>
            {children}
        </button>
    )
}