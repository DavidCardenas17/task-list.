//  TodoUpdate.jsx
import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
    const { updateName, updateDescription, onInputChange } = useForm({
        updateName: todo.name,
        updateDescription: todo.description,
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef();

    const onSubmitUpdate = e => {
        e.preventDefault();
    
        const id = todo.id;
        const name = updateName;
        const description = updateDescription;
    
        handleUpdateTodo(id, name, description);
    
        setDisabled(!disabled);
    };
    

    return (
        <form onSubmit={onSubmitUpdate}>
            <input
                type='text'
                className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
                name='updateName'
                value={updateName}
                onChange={onInputChange}
                placeholder='Nombre de la tarea'
                readOnly={disabled}
                ref={focusInputRef}
            />

            <input
                type='text'
                className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
                name='updateDescription'
                value={updateDescription}
                onChange={onInputChange}
                placeholder='Descripción de la tarea'
                readOnly={disabled}
            />

            <button className='btn-edit' type='submit'>
                <FaEdit />
            </button>
        </form>
    );
};
