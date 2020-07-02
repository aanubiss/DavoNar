import React from 'react';
import { Modal } from '@material-ui/core'

const MyModal = (props) => {
    return (
        <div className="MyModal">
            <Modal open={props.open} onClose={()=> props.close()} >
                {props.body}
            </Modal>
        </div>
    );
}

export default MyModal;