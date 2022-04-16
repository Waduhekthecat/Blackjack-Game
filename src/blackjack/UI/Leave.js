import styledCom from 'styled-components';

import leave from '../../imgs/leave.png';

const leaveTable = (e) => {
    return (
        console.log("function to route return to Table Select")
    )
};

const LeaveTable = () => {
    return (
        <section>
            <LeaveBtn
                onClick={leaveTable}>
                <img src={leave} width="40%" alt="" />
            </LeaveBtn>
        </section>
    )
};

export default LeaveTable;

// STYLED COMPONENTS //

const LeaveBtn = styledCom.button`
    background: transparent;
    position: absolute;
    top: 1%;
    right: -50px;
    height: 40px;
    border: none;
    outline: none;
    font-weight: 700;
    width: fit-content;
    cursor: pointer;
    z-index: 10;
    opacity: 70%;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    &:hover {
        transform: scale(1.228);
        opacity: 95%;
    }
    &:active {
        transform: scale(1);
    }
`; 