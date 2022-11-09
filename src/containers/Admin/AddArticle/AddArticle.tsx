// Librairie
import React, { useState } from 'react';

// Composant
import Input from '../../../components/UI/Input/Input';

export default function AddArticle() {
    const [inputs, setInputs] = useState([
        {
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
            elementName: 'author',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: "Nom de l'auteur",
            },
            value: '',
            label: "Nom de l'auteur",
        },
    ]);

    const form = (
        <form>
            {inputs.map((input) => (
                <Input
                    label={input.label}
                    key={input.elementName}
                    elementType={input.elementType}
                    value={input.value}
                    config={input.elementConfig}
                />
            ))}
            <input type='submit' value='Envoyer' />
        </form>
    );

    return (
        <>
            <h1>AddArticle Page</h1>
            {form}
        </>
    );
}
