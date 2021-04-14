import { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

import './CreateRoom.css';

const CreateRoom = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    // close modal when clicking anywhere
    const closeModal = (e) => {
        if (modalRef.current === e.target) setShowModal(false);
    };

    // close modal when pressing escape key
    const keyPress = useCallback(
        (e) => {
            if (e.key == 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [showModal, setShowModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const animation = useSpring({
        config: {
            duration: 150,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'scale(1)' : 'scale(0.8)',
    });

    const handleNewRoomSubmit = (e) => {
        e.preventDefault();
    };
    return (
        showModal && (
            <div className="modal-wrapper" ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <div className="modal-container">
                        <div className="modal-header">
                            <h1>Welcome to Codenames!</h1>
                        </div>
                        <form
                            onSubmit={handleNewRoomSubmit}
                            className="modal-form"
                        >
                            <div>
                                To create a new room, first enter a nickname
                            </div>
                            <input placeholder="Enter your nickname"></input>
                            <button>Create Room</button>
                        </form>
                    </div>
                </animated.div>
            </div>
        )
    );
};

export default CreateRoom;
