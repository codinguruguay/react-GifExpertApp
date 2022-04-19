
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const changeValue = (e) => {
        setInputValue(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    };

    return (
        <form onSubmit={submit}>
            <input
                type='text'
                value={inputValue}
                onChange={changeValue}
            ></input>
        </form>
    );

};

AddCategory.propTypes = {
    setCategories: PropTypes.func
};
