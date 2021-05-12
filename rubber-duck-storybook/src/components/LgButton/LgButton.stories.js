import React from 'react';

import LgButton from './LgButton';
import './LgButton.css';

export default {
    title: 'V1/Large Button',
    component: LgButton,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: { 
            name: 'variant',
            control: { type: 'select',
            options: ['primary', 'danger-primary', 'danger', 'disabled']}
        },
    },
    };

const Template = (args) => <LgButton {...args}>A Button</LgButton>;


export const Primary = Template.bind({});
Primary.args = {
    text: 'Edit Card',
    variant: 'primary',
};
