// CSS
import classes from './Input.module.css';

// Librairies
import React from 'react';

// Type
type FormProps = {
    label: string;
    elementType: string;
    value: string | { value: string; displayValue: string }[];
    config: { type: string; placeholder: string };
    changed: any // To change later
};

export default function Input({
    label,
    elementType,
    config,
    value,
    changed,
}: FormProps) {
    let inputElement: JSX.Element | undefined;

    if (elementType === 'input') {
        inputElement = (
            <input
                type={config.type}
                placeholder={config.placeholder}
                value={typeof value === 'string' ? value : value[0].value}
                onChange={changed}
            />
        );
    } else if (elementType === 'textarea') {
        inputElement = (
            <textarea
                placeholder={config.placeholder}
                value={typeof value === 'string' ? value : value[0].value}
                onChange={changed}
            />
        );
    } else if (elementType === 'select') {
        inputElement = (
            <select onChange={changed}>
                {typeof value !== 'string'
                    ? value.map((element) => (
                          <option value={element.value} key={element.displayValue}>
                              {element.displayValue}
                          </option>
                      ))
                    : value}
            </select>
        );
    }

    return (
        <div className={classes.inputContainer}>
            <label>{label}</label>
            {inputElement}
        </div>
    );
}
