import React from 'react'

interface HeaderProps{
    label?: string;
    childern?: JSX.Element | JSX.Element[];
}

const Header = ({label="Default Label",childern}: HeaderProps)=>{
  return (
    <>
     <h2>{label}</h2>
     {childern}
    </>
  )
}

export default Header