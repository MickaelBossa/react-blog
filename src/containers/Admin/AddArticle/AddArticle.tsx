// CSS
import classes from './AddArticle.module.css';

// Librairie
import React, { useState } from 'react';

// Composant
import Input from '../../../components/UI/Input/Input';

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
        },
        {
            id: 3,
            elementName: 'draft',
            elementType: 'select',
            elementConfig : {
                type: '',
                placeholder: ''
            },
            value: [
                {value:'yes', displayValue:'Brouillon'},
                {value: 'no', displayValue:'Publié'}
            ],
            label: "État de l'article"
        }
    ]);

    // Functions
    const inputChangedHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const newInputs = [...inputs];
        typeof newInputs[id].value === 'string' ? newInputs[id].value = e.target.value: newInputs[id].value;
        setInputs(newInputs)
    }

    // Form
    const form = (
        <form>
            {inputs.map((input) => (
                <Input
                    label={input.label}
                    key={input.elementName}
                    elementType={input.elementType}
                    value={input.value}
                    config={input.elementConfig}
                    changed={(e: React.ChangeEvent<HTMLInputElement>) => inputChangedHandler(e, input.id)}
                />
            ))}
            <input type='submit' value='Envoyer' className={classes.submitBtn} />
        </form>
    );

    return (
        <>
            <h1>Ajouter un article</h1>
            {form}
        </>
    );
}
