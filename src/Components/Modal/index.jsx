import React from 'react'
import {ModalWrapper, Wrapper} from './Modal'


const Modal = (props) => {

    return (
        <ModalWrapper show={props.show}>
            <Wrapper>
                <span onClick={props.toggle} style={{cursor: 'pointer'}}>
                    <i className="fas fa-times"></i>
                </span>
                {props.children}
            </Wrapper>
        </ModalWrapper>
    )
}

export default Modal
