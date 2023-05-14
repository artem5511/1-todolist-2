import React, {ChangeEvent, useState} from 'react';

const AddItemForm = () => {
    let [newTitle, setNewTitle] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setNewTitle(event.currentTarget.value)
    }
    const isAddBtnDisabled = !newTitle.length
    return (
        <div>
                <input
                       placeholder={'please, enter title'}
                       value={newTitle}
                       onKeyPress={onKeyPressHandler}
                       onChange={onChangeHandler}/>
                <button disabled={isAddBtnDisabled}
                        onClick={addTaskHandler}>+
                </button>
                {titleMaxLenghtWarning}
                {userMessage}
        </div>
    );
};

export default AddItemForm;