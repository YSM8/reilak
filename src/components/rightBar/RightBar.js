import React from 'react'
import { CumpleañosCercanos } from './CumpleañosCercanos'
import { EventosCercanos } from './EventosCercanos'

export const RightBar = () => {
    return (
        <div className="barra_derecha">
           <div>
               <CumpleañosCercanos />
           </div>
           <div>
               <EventosCercanos />
           </div>
        </div>
    )
}
