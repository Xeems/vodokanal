import { InputHTMLAttributes } from "react";
import clsx from 'clsx'

type Props = {
    header?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function UIinput(props: Props) {

    return (
        <div className="w-full">
            {props.header ?
                <p className='font-medium py-3'>{props.header}</p>
                :
                <></>
            }
            <input {...props}
                value={props.value}
                onChange={props.onChange}
                className={clsx(props.className,
                    'text-black px-2 h-10 w-full font-semibold rounded-md  transition border border-solid bg-white z-10')} />
        </div>
    )
}