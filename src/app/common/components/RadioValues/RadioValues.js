import React from 'react';
import RadioValue from './components/RadioValue/RadioValue';
import {
    RadioValuesContainer,
    RadioValuesLabel
} from './RadioValues.styles';

const RadioValues = ({label, values, active, buttonType, onClick}) =>
    <RadioValuesContainer>
        <RadioValuesLabel>{label}</RadioValuesLabel>
        {values.map((value, key) =>
            <RadioValue
                key={key}
                label={value.label}
                isChecked={active === value.value}
                type={buttonType}
                onClick={() => onClick(value.value)}/>
        )}
    </RadioValuesContainer>;

export default RadioValues;