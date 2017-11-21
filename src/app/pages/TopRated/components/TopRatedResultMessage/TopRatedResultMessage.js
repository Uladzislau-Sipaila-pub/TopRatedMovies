import React from 'react';

const TopRatedResultMessage = ({result}) =>
    <p>{result} {result > 1 ? 'movies' : 'movies' } found</p>;

export default TopRatedResultMessage;