import React, { useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

const Modal = (props) => {

     const [modal, setModal] = useState(false);
    console.log()

    const handleModal = () => {
        setModal(true);
        console.log("toggle");
    }

    //onClick={(e) => handleModal(e)}

    return (
        <div className={"modalContainer " + (modal ? "toggle" : "")} onClick={() => handleModal()}>
            <div className="modal">
                <div className="modal-content">
                    <h1>{props.props.name}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil esse incidunt laudantium at eum labore atque sequi cum, dignissimos quod repudiandae totam sapiente nobis voluptatem accusantium dolores voluptatum, officia veritatis! Unde vel iste sit temporibus dolore aspernatur incidunt accusantium possimus. Repudiandae nobis vel quaerat ex eos velit aliquid accusamus magni?</p>
                    <div className="btn">
                        <button><FiPlay/>PLAY</button>
                        <button><FiPlus/>MY LIST</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;






