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
    changed: any; // To change later
    valid: boolean;
    touched: boolean
};

export default function Input({
    label,
    elementType,
    config,
    value,
    changed,
    valid,
    touched
}: FormProps) {

    // Variables
    let inputElement: JSX.Element | undefined;
    let inputValidation = '';

    // Vérifier si les input ont étaient touchés ou non
    if(!touched) {
        inputValidation = '';
    } else {
        if(valid) {
            inputValidation = ''
        } else {
            inputValidation = classes.invalidInput;
        }
    }

    // Vérifier le type des éléments à afficher
    if (elementType === 'input') {
        inputElement = (
            <input
                type={config.type}
                placeholder={config.placeholder}
                value={typeof value === 'string' ? value : value[0].value}
                onChange={changed}
                className={inputValidation}
            />
        );
    } else if (elementType === 'textarea') {
        inputElement = (
            <textarea
                placeholder={config.placeholder}
                value={typeof value === 'string' ? value : value[0].value}
                onChange={changed}
                className={inputValidation}
            />
        );
    } else if (elementType === 'select') {
        inputElement = (
            <select onChange={changed} className={inputValidation} >
                {typeof value !== 'string'
                    ? value.map((element) => (
                          <option
                              value={element.value}
                              key={element.displayValue}
                          >
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
