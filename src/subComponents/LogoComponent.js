import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position:fixed;
left: 2rem;
top: 1rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        // <Logo color={props.theme}>
        //   R.K
        // </Logo>
        <div class="about__buttons">
          <a download="" href="" class="button button--flex">
          Download CV<i class="fas fa-arrow-circle-down"></i>
          </a></div>
    )
}

export default LogoComponent
