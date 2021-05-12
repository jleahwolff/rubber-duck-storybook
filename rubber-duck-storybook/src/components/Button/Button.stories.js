import React from 'react';

import Button from './Button';
import './Button.css';

export default {
    title: 'V1/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: { 
            name: 'variant',
            control: { type: 'select',
            options: ['primary', 'danger-primary', 'danger', 'disabled']}
        },
    },
    };

const Template = (args) => <Button {...args}>A Button</Button>;


export const Primary = Template.bind({});
Primary.args = {
    text: 'Get Started',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'secondary',
    variant: 'secondary',
};