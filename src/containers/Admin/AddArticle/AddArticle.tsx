// CSS
import classes from './AddArticle.module.css';

// Librairie
import React, { useState, Fragment } from 'react';
import axios from '../../../config/axios-firebase';
import { useNavigate } from 'react-router-dom';
import routes from '../../../config/routes';

// Composant
import Input from '../../../components/UI/Input/Input';

// Type
type InputValidationRules = {
    required: boolean;
    minLength: number;
    maxLength: number;
};

export default function AddArticle() {
    // State
    const [inputs, setInputs] = useState([
        {
            id: 0,
            elementName: 'Title',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: "Titre de l'article",
            },
            value: '',
            label: "Titre de l'article",
            valid: false,
            validationRules: {
                required: true,
                minLength: 5,
                maxLength: 85,
            },
            errorMessages: {
                forMinLength: 'Ce champ doit contenir au moins 5 caractères',
                forMaxLength: 'Ce champ doit contenir moins de 85 caractères',
            },
            touched: false,
        },
        {
            id: 1,
            elementName: 'Content',
            elementType: 'textarea',
            elementConfig: {
                type: '',
                placeholder: "Contenu de l'article",
            },
            value: '',
            label: "Contenu de l'article",
            valid: false,
            validationRules: {
                required: true,
                minLength: 5,
                maxLength: 10000,
            },
            errorMessages: {
                forMinLength: 'Ce champ doit contenir au moins 5 caractères',
                forMaxLength:
                    'Ce champ doit contenir moins de 10000 caractères',
            },
            touched: false,
        },
        {
            id: 2,
            elementName: 'author',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: "Nom de l'auteur",
            },
            value: '',
            label: "Nom de l'auteur",
            valid: false,
            validationRules: {
                required: true,
                minLength: 2,
                maxLength: 30,
            },
            errorMessages: {
                forMinLength: 'Ce champ doit contenir au moins 2 caractères',
                forMaxLength: 'Ce champ doit contenir moins de 30 caractères',
            },
            touched: false,
        },
        {
            id: 3,
            elementName: 'draft',
            elementType: 'select',
            elementConfig: {
                type: '',
                placeholder: '',
            },
            value: [
                { value: 'yes', displayValue: 'Brouillon' },
                { value: 'no', displayValue: 'Publié' },
            ],
            label: "État de l'article",
            valid: true,
            validationRules: {
                required: true,
                minLength: 1,
                maxLength: 85,
            },
            errorMessages: {
                forMinLength: 'Ce champ doit contenir au moins 1 caractère',
                forMaxLength: 'Ce champ doit contenir moins de 85 caractères',
            },
            touched: true,
        },
    ]);

    const [isValid, setIsValid] = useState(false);

    const [currentDraftValue, setCurrentDraftValue] = useState('yes');

    // Constantes
    const navigate = useNavigate()
    
    // Functions
    const inputChangedHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number,
    ) => {
        // Change la valeur des inputs
        const newInputs = [...inputs];        
        if(typeof newInputs[id].value === 'string') {
            (newInputs[id].value = event.target.value)
        } else {
            setCurrentDraftValue(event.target.value)     
        }

        // Vérification de la valeur de l'input
        newInputs[id].valid = checkInputValidity(
            event.target.value,
            newInputs[id].validationRules,
        );

        // Indique qu'un input à été touché
        newInputs[id].touched = true;

        // Vérificaton entière du formulaire
        let formIsValid = true;
        for (let input in newInputs) {
            formIsValid = newInputs[input].valid && formIsValid;
        }
        setIsValid(formIsValid);

        setInputs(newInputs);
    };

    // Gère "l'envoi" du formulaire
    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios
            .post('/articles.json', {
                title: inputs[0].value,
                content: inputs[1].value,
                author: inputs[2].value,
                draft: currentDraftValue,
            })
            .then((response) => {
                console.log(response);
                navigate(routes.HOME, {replace: true})
            })
            .catch((error) => {
                console.log(error);
            });

        console.log(inputs);
    };

    // Gère la vérification du formulaire
    const checkInputValidity = (value: string, rules: InputValidationRules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;

            isValid =
                value.length >= rules.minLength &&
                value.length <= rules.maxLength &&
                isValid;
        }

        return isValid;
    };

    // Determine error message
    const errorMsg = (
        value: string | { value: string; displayValue: string }[],
        validity: boolean,
        messages: { forMinLength: string; forMaxLength: string },
        rules: InputValidationRules,
        touched: boolean,
        id: number,
    ) => {
        let msg = '';

        if (typeof value === 'string') {
            if (value.length < rules.minLength && touched) {
                msg = messages.forMinLength;
            } else if (value.length > rules.maxLength && touched) {
                msg = messages.forMaxLength;
            } else {
                msg = '';
            }
        }

        return (
            <span key={id} className={classes.error}>
                {!validity ? msg : null}
            </span>
        );
    };

    // Form
    const form = (
        <form onSubmit={(e) => formHandler(e)}>
            {inputs.map((input) => (
                <Fragment key={input.id}>
                    <Input
                        label={input.label}
                        key={input.elementName}
                        elementType={input.elementType}
                        value={input.value}
                        config={input.elementConfig}
                        changed={(e: React.ChangeEvent<HTMLInputElement>) =>
                            inputChangedHandler(e, input.id)
                        }
                        valid={input.valid}
                        touched={input.touched}
                    />
                    {errorMsg(
                        input.value,
                        input.valid,
                        input.errorMessages,
                        input.validationRules,
                        input.touched,
                        input.id,
                    )}
                </Fragment>
            ))}
            <input
                type="submit"
                value="Ajouter l'article"
                disabled={!isValid}
                className={classes.submitBtn}
            />
        </form>
    );

    return (
        <>
            <h1>Ajouter un article</h1>
            {form}
        </>
    );
}
