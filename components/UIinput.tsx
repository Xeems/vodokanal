import { InputHTMLAttributes } from "react";

type Props = {

} & InputHTMLAttributes<HTMLInputElement>

export default function UIinput(props: Props) {

    return (
        <input {...props} className='text-black py-3 px-2 font-semibold rounded-md h-10 transition border border-solid bg-white z-10'>
        </input>
    )
}