import React from 'react';

import Input from './Input';
import './Input.css';

export default {
    title: 'V1/Input',
    component: Input,
    argTypes: {
        variant: { 
            name: 'variant',
            control: { type: 'select',
            options: ['default', 'danger-primary','success', 'disabled']}
        },
    },
    };

const Template = (args) => <Input {...args}>An Input</Input>;


export const Primary = Template.bind({});
Primary.args = {
    text: 'First Name',
    variant: 'default',
    placeholder: 'First Name'
};