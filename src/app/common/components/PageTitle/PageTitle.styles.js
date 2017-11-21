import styled from 'styled-components';
import {Link} from 'react-router-dom';

const PageHeading = styled(Link)`
  display: inline-block;
  color: #f55263;
  font-weight: 600;
  margin: 20px 0 20px 40px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

export default PageHeading;