import React from 'react'
import Load from './Load.gif';

export default function Spinner() {
    return (
        <div className='text-center'>
            <img src={Load} alt="Load" />
        </div>
    )
}
