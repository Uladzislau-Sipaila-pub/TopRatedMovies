import React from 'react';
import {RadioValueContainer} from './RadioValue.styles';
import Button from '../../../../styles/Button.styles';
import Link from '../../../../styles/Link.styles';

const button = (label, type, isChecked, onClick) => {
    if (type === 'button') {
        return <Button
            onClick={onClick}
            size='small'
            color={isChecked ? 'red' : 'gray'}>
            {label}
        </Button>;
    }
    if (type === 'link') {
        return <Link
            onClick={onClick}
            title={label}
            color={isChecked ? 'red' : 'default'}>
            {label}
        </Link>;
    }
};

const RadioValue = ({label, type, isChecked, onClick}) =>
    <RadioValueContainer>
        {button(label, type, isChecked, onClick)}
    </RadioValueContainer>;

export default RadioValue;