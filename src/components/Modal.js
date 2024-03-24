import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, children }) {

    if (!open) return null;

    return createPortal(
        <>
            <div className='overlay' />

            <div className='modal'>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
