import React from 'react';
import SearchResultMessage from '../TopRatedResultMessage/TopRatedResultMessage';
import StatusBar from '../../../../common/styles/StatusBar.styles';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';

const TopRatedStatusBar = ({totalResults}) =>
    <StatusBar>
        <SearchResultMessage result={totalResults}/>
    </StatusBar>;

export default TopRatedStatusBar;