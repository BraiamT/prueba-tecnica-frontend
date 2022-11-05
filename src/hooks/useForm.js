import { useEffect, useMemo, useState } from 'react';

/**
 * Este es un custom hook pensado para manejar formularios de
 * manera sencilla sin tener que utilizar paquetes de terceros
 * @param {*} initialForm - Campos que tendrá el formulario 
 * @param {*} formValidations - Validaciones de los campos del formulario
 * @returns {*} - El estado del formulario con el valor de los campos, un método
 * para manjear el cambio, y las validaciones de los campos
 */

export const useForm = (  initialForm = {}, formValidations = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ]);

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ]);
    
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onFormReset = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage = 'Field required!' ] = formValidations[ formField ];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage
        }

        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        ...formValidation,
        formState,
        onInputChange,
        onFormReset,
        isFormValid
    }

}
