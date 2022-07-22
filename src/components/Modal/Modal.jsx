import React, { useState, useRef, useEffect } from 'react'
import Remove from './OpenModal'

import CommentApp from '../Comment/CommentApp'
import "./Modal.scss"

function Modal({ closeModal }) {
    
    return (
        <div className='modalBackground'>
            <div className="modalContainer">
                <div className="title">
                    <CommentApp/>
                </div>
            </div>
        </div>
    )
}

export default Modal