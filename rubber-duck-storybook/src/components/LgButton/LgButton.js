import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import classNames from 'classnames';


const buttonClasses = variant =>
classNames({
    'border-grey-300 border text-grey-300 bg-white hover:border-blue-200 hover:text-blue-200 focus:border-grey-200': !variant || variant === 'primary',
    'bg-red-100 text-white bg-gradient-to-br hover:from-red-200 hover:to-red-100 focus:ring-red-200': variant === 'danger-primary',
    'bg-grey-200 text-grey-100 focus:ring-grey-100': variant === 'disabled',
    'border-red-100 border text-red-100 hover:border-red-200 hover:text-red-200 focus:text-red-200 focus:ring-red-200': variant === 'danger',
    'inline-flex items-center px-10 tracking-wide py-3 w-auto max-w-max font-display font-medium rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ': true
});

const LgButton = ({ variant, children, text, onClick, ...rest }) => (
    <button className={buttonClasses(variant)} onClick={onClick} rest>{text}</button>
    );

LgButton.propTypes = {
variant: PropTypes.string,
onClick: PropTypes.func
};

export default LgButton;