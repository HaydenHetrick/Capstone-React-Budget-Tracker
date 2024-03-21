import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import firebase from 'firebase/compat/app'; // Update Firebase import
import 'firebase/compat/firestore'; // Import Firestore
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

const AddExpenseForm = (props) => {
    const { currentUser, dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        
        if (currentUser) {
            // If user is authenticated, save expense to Firestore
            const db = firebase.firestore();
            try {
                await db.collection('expenses').add({
                    userId: currentUser.uid,
                    name,
                    cost: parseInt(cost),
                    date // Assuming date is in a format you can parse later
                });
                setName('');
                setCost('');
                setDate('');
            } catch (error) {
                console.error('Error adding expense:', error);
            }
        } else if (dispatch) {
            // If user is not authenticated, dispatch expense to context
            const expense = {
                id: uuidv4(),
                name,
                cost: parseInt(cost),
                date // Assuming date is in a format you can parse later
            };
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
            setName('');
            setCost('');
            setDate('');
        } else {
            console.error('Cannot add expense. User not authenticated and no dispatch function provided.');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='number'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='date'>Date</label>
                    <input
                        required='required'
                        type='date'
                        className='form-control'
                        id='date'
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
