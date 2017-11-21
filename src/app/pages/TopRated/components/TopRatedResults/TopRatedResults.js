import React from 'react';
import FilmTiles from '../../../../common/components/FilmTiles/FilmTiles';
import { Pagination } from 'react-bootstrap';

const TopRatedResults = ({
   page,
   totalPages,
   films,
   onSelect
}) =>
    <div>
       <FilmTiles
           page={page}
           totalPages={totalPages}
           films={films}/>
       <Pagination
           first
           last
           ellipsis
           boundaryLinks
           items={totalPages}
           maxButtons={5}
           activePage={page}
           onSelect={onSelect}
       />
    </div>;

export default TopRatedResults;