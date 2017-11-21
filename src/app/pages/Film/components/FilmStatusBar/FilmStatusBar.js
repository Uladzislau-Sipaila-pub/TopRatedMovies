import React from 'react';
import StatusBar from '../../../../common/styles/StatusBar.styles';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';

const SearchStatusBar = ({
        sortValues,
        activeSortValue,
        onSortValueChange
    }) =>
    <StatusBar>
        <span>Recommendations</span>
        <RadioValues
            label='Sort by'
            values={sortValues}
            buttonType='link'
            active={activeSortValue}
            onClick={(value) => onSortValueChange(sortValues, value)}/>
    </StatusBar>;

export default SearchStatusBar;