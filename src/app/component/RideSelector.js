'use client';
import React from 'react'
import uberX from '../../assets/rides/uberX.png'
import uberBlack from '../../assets/rides/uberBlack.png'
import uberBlackSuv from '../../assets/rides/uberBlackSuv.png'
import uberSelect from '../../assets/rides/uberSelect.png'
import uberXL from '../../assets/rides/uberXL.png'
import Image from 'next/image'
import eth from '../../assets/eth-logo.png'




const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1 overflow-scroll`,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    service: `font-medium text-blue-500`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center gap-1`,
    price: `mr-[-0.8rem] text-blue-500`,
}

const carList = [

    {
        name: 'UberX',
        iconUrl: uberX,
        priceMultiplier: 1,
    },
    {
        name: 'UberBlack',
        iconUrl: uberBlack,
        priceMultiplier: 1.5,
    },
    {
        name: 'UberBlackSuv',
        iconUrl: uberBlackSuv,
        priceMultiplier: 1.5,
    },
    {
        name: 'UberSelect',
        iconUrl: uberSelect,
        priceMultiplier: 1.5,
    },
    {
        name: 'UberXL',
        iconUrl: uberXL,
        priceMultiplier: 1.6,
    }

]


export default function RideSelector() {

    let BasePrice = 0.145;

    console.log(carList)
    return (
        <div className={style.wrapper} >
            <div className={style.title}>Choose a ride or swip up for more</div>
            <div className={style.carList}>

                {carList.map((car) =>

                    <div key={car.name} className={style.car}>

                        <Image src={car.iconUrl} height={50} width={50} className={style.carImage} />

                        <div className={style.carDetails}>
                            <div className={style.service}>
                                {car.name}
                            </div>
                            <div className={style.time}>5 min away </div>
                        </div>

                        <div className={style.priceContainer}>
                            <div className={style.price}>
                                {(BasePrice ** car.priceMultiplier).toFixed(2)}

                            </div>
                            <Image src={eth} height={30} width={30} />

                        </div>
                    </div>

                )}

            </div>
        </div>
    )
}
