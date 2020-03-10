import React from 'react'
import Modal from './Modal'

function DeleteBadgesModal(props) {
    return <Modal isOpen={props.isOpen} onclose={props.onClose }>
        <div classname="DeleteBadgesModal">
            <h1>Are you sure?</h1>
            <p>You are about to delete this badge</p>
        </div>

        </Modal>;
}

export default DeleteBadgesModal;