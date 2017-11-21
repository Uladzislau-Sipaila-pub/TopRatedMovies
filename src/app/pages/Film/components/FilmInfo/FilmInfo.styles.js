import styled from 'styled-components';

function imageUrl(image) {
    return `url(${(image)})`;
}

const FilmPreview = styled.div`
  display: flex;
  margin: 30px 0;
  color: #eeeeee;
`;

const FilmPoster = styled.div`
    width: 300px;
    height: 420px;
    flex-grow: 0;
    flex-shrink: 0;
    background-image: ${(props) => imageUrl(props.image)};
    background-size: cover;
    margin-right: 40px;
`;

const FilmSummary = styled.div`
    margin: 40px;
`;

const FilmLabel = styled.div`
  display: flex;
  align-items: center;
`;

const FilmTitle = styled.span`
  font-size: 2rem;
  color: #f55263;
  font-weight: 600;
`;

const FilmRating = styled.p`
  color: #b5e684;
  line-height: 40px;
  height: 40px;
  width: 40px;
  font-size: 1.1rem;
  margin: 0 20px;
  text-align: center;
  border: 1px solid #b5e684;
  border-radius: 25px;
`;

const FilmDescription = styled.p`
  margin: 10px 0 20px;
`;

const FilmNote = styled.span`
  font-weight: 600;
  display: inline-block;
  margin: 0 30px 20px 0;
`;

const FilmCast = styled.p`
  font-size: 0.8rem;
  margin: 10px 0;
`;

export {
    FilmPreview,
    FilmPoster,
    FilmSummary,
    FilmLabel,
    FilmTitle,
    FilmRating,
    FilmDescription,
    FilmNote,
    FilmCast
};
