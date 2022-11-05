import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { starSavingEmployee } from '../../store/employees';
import { setCloseModal } from '../../store/employees/employeesSlice';

const formData = {
    name: '',
    lastName: '',
    birthday: ''
}

const formValidations = {
    name: [ (value) => value.length >= 3 && value.length <= 30, 'El nombre solo puede tener entre 3 y 30 caracteres' ],
    lastName: [ (value) => value.length >= 3 && value.length <= 30, 'Los apellidos solo pueden tener entre 3 y 30 caracteres' ],
    birthday: [ (value) => value.length > 0, 'El birthday es obligatorio' ]
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const EmployeeModal = () => {

    const { isModalOpen, isSaving } = useSelector( state => state.employees );
    const dispatch = useDispatch();

    const { name, lastName, birthday, onInputChange, onFormReset, isFormValid, nameValid, lastNameValid, birthdayValid, formState } = useForm(formData, formValidations);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onCloseModal = () => {
        onFormReset();
        setFormSubmitted(false);
        dispatch( setCloseModal() );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if ( !isFormValid ) return;
        onCloseModal();
        dispatch( starSavingEmployee(formState) );
    }

    return (
        <Modal
            isOpen={ isModalOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <h2 className='text-center mt-3 mb-3'>Agregar nuevo Employee</h2>
            <hr />
            
            <form className="container-md" onSubmit={ onSubmit }>
                <TextField
                    label="Nombre"
                    type="text"
                    name="name"
                    value={ name }
                    placeholder="Nombre..."
                    fullWidth
                    sx={{ mt: '24px' }}
                    onChange={ onInputChange }
                    error={ !!nameValid && formSubmitted }
                    className={ (!!nameValid && formSubmitted) ? 'errorShake' : '' }
                    helperText={ formSubmitted ? nameValid : null }
                />
                <TextField
                    label="Apellidos"
                    type="text"
                    name="lastName"
                    value={ lastName }
                    placeholder="Apellidos..."
                    fullWidth
                    sx={{ mt: '24px' }}
                    onChange={ onInputChange }
                    error={ !!lastNameValid && formSubmitted }
                    className={ (!!lastNameValid && formSubmitted) ? 'errorShake' : '' }
                    helperText={ formSubmitted ? lastNameValid : null }
                />

                {/* <label htmlFor="birthday" className="form-label mt-4">Birthday</label>
                <input
                    type="date" 
                    name="birthday"
                    id="birthday"
                    className="form-control"
                /> */}
                <TextField
                    label=""
                    type="date"
                    name="birthday"
                    value={ birthday }
                    placeholder="birthday..."
                    fullWidth
                    sx={{ mt: '24px' }}
                    onChange={ onInputChange }
                    error={ !!birthdayValid && formSubmitted }
                    className={ (!!birthdayValid && formSubmitted) ? 'errorShake' : '' }
                    helperText={ formSubmitted ? birthdayValid : null }
                />

                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={ isSaving }
                        >Save employee</Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
