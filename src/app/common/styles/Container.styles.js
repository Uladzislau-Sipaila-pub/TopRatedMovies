import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
`;

export {
    AppContainer,
    Container
};
