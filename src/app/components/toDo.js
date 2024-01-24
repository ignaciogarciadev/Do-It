"use client"
import React, { useState } from 'react';
import DigitalClock from './clock';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.length > 0) {
            setTodos([...todos, inputValue]);
        }
        setInputValue('');
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className='w-full h-full grid grid-cols-2 items-center'>
            <section className='w-full h-[100vh] bg-hero-background bg-cover flex items-center justify-center'>
                <DigitalClock />
            </section>
            <section className='w-full h-[100vh] flex items-center flex-col overflow-y-auto'>
                <h1 className='text-7xl text-black text-center m-10 font-black'>
                    Do It
                </h1>
                <form className='w-[80%] border border-black rounded-2xl flex text-center flex-col items-center' onSubmit={handleSubmit}>
                    <div className='w-[90%] h-[50px] m-10 flex text-center flex-row items-center justify-between'>
                        <input
                            className='w-[80%] h-[50px] py-2 border px-10 border-gray-300 bg-gray-100 rounded-xl'
                            type='text'
                            value={inputValue}
                            onChange={handleChange}
                            placeholder='Add task...'
                        />
                        <button className='my-3 py-3 px-4 font-semibold bg-black text-white rounded-xl' type="submit">Add</button>
                    </div>

                    <ul className='flex items-center justify-center flex-col w-full text-center'>
                        {todos.map((todo, index) => (
                            <li className='w-[90%] h-[50px] flex text-center border border-gray-500 p-2  rounded-xl mb-6 items-center justify-between' key={index}>
                                <input type='checkbox' className='w-4 h-4'/>
                                <h1 className='label py-2  rounded-xl font-primary'>{todo}</h1>
                                <button
                                    className='my-2 py-1 px-3 font-semibold bg-black text-white rounded-xl'
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </form>
            </section>
        </div>
    );
}

export default TodoList;
