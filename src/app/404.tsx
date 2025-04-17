import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
    return (
        <div style={{ width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='text-bodoni text-color' style={{ fontSize: '4vw' }}>404</div>
        </div>
    )
}

export default NotFound