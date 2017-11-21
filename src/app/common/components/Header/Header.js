import React from 'react';
import {
    HeaderBackground,
    HeaderContainer
} from './Header.styles';

const Header = ({children}) =>
    <HeaderBackground>
        <HeaderContainer>
            {children}
        </HeaderContainer>
    </HeaderBackground>;

export default Header;