// CSS
import classes from './Input.module.css';

// Librairies
import React from 'react';

// Type
type FormProps = {
    label: string;
    elementType: string;
    value: string;
    config: { type: string; placeholder: string };
};

export default function Input({
    label,
    elementType,
    config,
    value,
}: FormProps) {
    let inputElement: JSX.Element | undefined;

    if (elementType === 'input') {
        inputElement = (
            <input
                type={config.type}
                placeholder={config.placeholder}
                value={value}
            />
        );
    } else if (elementType === 'textarea') {
        inputElement = (
            <textarea placeholder={config.placeholder} value={value} />
        );
    }

    return (
        <div className={classes.inputContainer}>
            <label>{label}</label>
            {inputElement}
        </div>
    );
}
