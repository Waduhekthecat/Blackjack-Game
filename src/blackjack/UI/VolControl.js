import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import styledCom from 'styled-components';
import On from '../imgs/volumeOn.png';
import Off from '../imgs/volumeOff.png';

const volumeOn = On;
const volumeOff = Off;
const VolumeContainer = styledCom(Grid).attrs({
  container: true,
})` 
`;

const Volume = () => {
  const [volume, toggleVolume] = useState(true);
  const [icon, setIcon] = useState(volumeOn);


  const handleClick = () => {
    toggleVolume(volume ? false : true)
    setIcon(volume ? volumeOff : volumeOn)
  };


  return (
    <>
    <div style={{color:'white', position: 'absolute', left:'1%', top:'1%'}}>
      <VolumeContainer id="volume-button">
        <Button
          value={volume}
          disableRipple
          onClick={handleClick}>
          <img width="25px" src={icon} alt="volume"></img>
        </Button>
      </VolumeContainer>
      </div>
    </>
  )
};

export default Volume;