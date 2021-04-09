import React from 'react'
import { Publiciones } from '../publicaciones/Publicaciones'
import { RightBar } from '../rightBar/RightBar'

export const HomeScreen = () => {
    return (
        <div className="main__home">
            <div className="publicaciones">
                <Publiciones />
            </div>
            <div className="cumpleaños">
                <RightBar />
            </div>
        </div>
    )
}
