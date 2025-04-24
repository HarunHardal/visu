import React from 'react'
import { prata } from '../lib/font'

const NotFound = () => {
    return (
        <div style={{ width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className={`${prata.className} 'text-color'`} style={{ fontSize: '4vw' }}>404</div>
        </div>
    )
}

export default NotFound