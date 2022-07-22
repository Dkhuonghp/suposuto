import React, {useState} from 'react'

import Modal from './Modal'

const OpenModal = (props) => {
    const [ openModal, setOpenModal ] = useState(false)

    return (
        <>
            <button onClick={() => setOpenModal(true)}>OpenModal</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </>
    )
}

export default OpenModal