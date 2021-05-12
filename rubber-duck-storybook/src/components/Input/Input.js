import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import classNames from 'classnames';


const inputClasses = variant =>
classNames({
    'border-grey-200 text-grey-300 bg-grey-100 hover:border-grey-300 focus:border-grey-300': !variant || variant === 'default',
    'border-red-100 text-grey-300': variant === 'danger-primary',
    'bg-grey-100 text-grey-200 focus:ring-grey-100': variant === 'disabled',
    'inline-flex w-96 border items-center px-2 py-2 font-display font-400 rounded text-sm focus:outline-none': true
});

const Input = ({ variant, placeholder, text, ...rest }) => (
    <input type='text' placeholder={placeholder} className={inputClasses(variant)} rest />
    );

Input.propTypes = {
variant: PropTypes.string,
};

export default Input;