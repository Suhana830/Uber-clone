'use client';
import React from 'react'
import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import { Fira_Sans_Extra_Condensed } from 'next/font/google'

const style = {
    wrapper: 'w-full h-full',

}

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VodTEyIiwiYSI6ImNsejJhdm41NzF2Mnoya3ByZmpmbTZibXEifQ.TFr3MyWLP02T_S2diGvFXw';

export default function Map() {

    useEffect(() => {



        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-99.29011, 39.39172],
            zoom: 3,
        })


    }, [])
    return (
        <div className={style.wrapper} id='map' />
    )
}
