import styledCom from 'styled-components';
import { Grid } from "@mui/material/";
import balanceDisplay from '../../imgs/Balance3.png';
import betDisplay from '../../imgs/bet_amount4.png';

const Displays = ({balance, betSize}) => {
    return (
     <><BalanceContainer>
            <BalanceDisplay xs={2} sm={1} md={1} lg={1}>
                <Balance/>
                <TotalBalanceBox> 
                    <TotalBalance>{balance} LLTH</TotalBalance>
                </TotalBalanceBox>
            </BalanceDisplay>
            <Spacing xs={10} sm={11} md={11} lg={11}></Spacing>
            <BetTotal xs={2} sm={1} md={1} lg={1}>
                <BetAmt/>                
                    <TotalBetBox>
                    <TotalBet>{betSize} LLTH</TotalBet>
                </TotalBetBox>
            </BetTotal>
        </BalanceContainer></>
    )
};

export default Displays;



const Balance = styledCom.img.attrs({
    src:balanceDisplay, alt:"balance"
})``;

const BetAmt = styledCom.img.attrs({
    src:betDisplay, alt:"bet total"
})``;
const BalanceContainer = styledCom(Grid).attrs({
    container: true,
})`
    position: fixed;
    top:0;
    width: 100%;
    height: 220px;
    color: white;
    text-align: center;
    border-radius: 10px;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const BetTotal = styledCom(Grid).attrs({
    item: true, 
})` 
    color: red;
    font-weight: 5px;
    font-size: 20px;
    width: 400px;
    height: 10px;
    z-index: 50;
`;
const BalanceDisplay = styledCom(Grid).attrs({
    item: true, 
})`
    color: red;
    font-weight: 5px;
    font-size: 20px;
    width: 400px;
    height: 100px;
    z-index:50;
`;
const Spacing = styledCom(Grid).attrs({
    item: true,
})`z-index:-10;`;

const TotalBalance = styledCom.h1`
    color: red;
    font-size:25px;
`;
const TotalBalanceBox = styledCom.div`
    position: absolute;
    width:240px;
    align-text: center;
    z-index: 200;
    bottom:41%;
`;
const TotalBet = styledCom.h1`
    color: red;
    bottom:2%;
    font-size: 25px;
`;
const TotalBetBox = styledCom.div`
    position: absolute;
    width:240px;
    align-text: center;
    z-index: 200;
    bottom:-11%;
`; 