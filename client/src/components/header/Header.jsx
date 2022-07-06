import React from 'react';

import { AppBar,Toolbar, Typography, styled } from '@mui/material';
import {Link} from 'react-router-dom';

const Component = styled(AppBar)`
    background : #FFFFFF;
    color : #000;
`;

const Container = styled(Toolbar)`
    justify-content : center;
    & > a{
        padding : 20px;
        color : #000;
        text-decoration : none;
    }
`;

const Header = () => {
  return (
    <Component>
        <Container>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Logout</Link>
        </Container>
    </Component>
  )
}

export default Header;