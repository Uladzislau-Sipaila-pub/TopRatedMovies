import React from 'react';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';

const SortRadio = ({searchByLabel, searchByValues}) =>
    <div>
        <RadioValues label={searchByLabel} values={searchByValues}/>
    </div>;

export default SortRadio;