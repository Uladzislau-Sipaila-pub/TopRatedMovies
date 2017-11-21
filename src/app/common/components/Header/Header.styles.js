import styled from 'styled-components';

const HeaderBackground = styled.div`
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/afbfd84e-c987-4438-99f2-8d0738d30d68/ecd58ebd-c786-48db-bb8f-b09b98c949a9/BY-en-20170918-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  color: #fff;
  position: relative;
  padding: 0 50px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-image: linear-gradient(to right,rgba(0,0,0,.9) 20%,rgba(0,0,0,0.3) 100%);
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 20;
  overflow: hidden;
`;

export {
    HeaderBackground,
    HeaderContainer
};