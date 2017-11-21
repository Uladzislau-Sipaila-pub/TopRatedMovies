import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tile = styled(Link)`
  text-decoration: none;
  color: #494949;
  width: 200px;
  margin: 10px auto;
  
  &:hover {
    text-decoration: none;
  }
`;

const TileImage = styled.div`
  width: 200px;
  height: 285px;
  background-image: url(${(props) => props.url});
  background-color: #a9a9a9;
  background-size: cover;
`;

const TileTitle = styled.span`
  text-transform: uppercase;
`;

const TileFilmYear = styled.span`
  border: 1px solid #494949;
  font-size: 0.8rem;
  padding: 0 5px;
`;

const TileFilmDescription = styled.div`
  padding: 5px;
`;

const TileFilmInfo = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  align-items: flex-start;
`;

const TileFilmGroup = styled.p`
  font-size: 0.7rem;
`;

export {
    Tile,
    TileImage,
    TileTitle,
    TileFilmYear,
    TileFilmDescription,
    TileFilmInfo,
    TileFilmGroup
};