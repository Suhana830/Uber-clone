'use client';
import { useState } from 'react'

const style = {
    wrapper: 'pt-2 text-black',
    searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    inputBoxes: `flex flex-col mb-4 relative`,
    inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
    focusedInputBox: `border-black`,
    svgContainer: `mx-1`,
    input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full`,
    verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,

}

export default function LocationSelector() {

    const [infocus, setInfocus] = useState('from');
    const [pickup, Setpickup] = useState("");
    const [dropOff, SetdropOff] = useState("");
    console.log("pickup ", pickup, " dropOff ", dropOff)
    return (
        <div className={style.wrapper}>
            <div className={style.searchHeader}>
                {infocus == 'from' ? 'Where can we pick up you' : 'Where to ?'}
            </div>

            <div className={style.inputBoxes}>
                <div className={`${style.inputBox} && style.focusedInputBox}`}>

                    <div className={style.svgContainer}>
                        <svg viewBox='0 0 24 24' width='1em' height='1em'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
                            />
                        </svg>
                    </div>
                    <input type='text' placeholder='Enter pickUp location' className={style.input} value={pickup} onChange={(e) => Setpickup(e.target.value)} onFocus={() => setInfocus('from')} />
                    <div className={style.verticalLine} />
                </div>
                <div className={style.inputBoxes}>
                    <div className={`${style.inputBox} && style.focusedInputBox}`}>

                        <div className={style.svgContainer}>
                            <svg viewBox='0 0 24 24' width='1em' height='1em'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
                                />
                            </svg>
                        </div>
                        <input type='text' placeholder='Where to ?' className={style.input} value={dropOff} onChange={(e) => SetdropOff(e.target.value)} onFocus={() => setInfocus('to')} />

                    </div>
                </div>
            </div>
        </div>
    )
}
