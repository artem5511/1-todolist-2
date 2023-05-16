import React, {ChangeEvent, useState} from 'react';

const AddItemForm = () => {
    let [newTitle, setNewTitle] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setNewTitle(event.currentTarget.value)
    }
    const isAddBtnDisabled = !newTitle.length
    const titleMaxLenght = 15
    const isTitleLenghtTooLong: boolean = newTitle.length > titleMaxLenght
    const titleMaxLenghtWarning = isTitleLenghtTooLong
        ? <div style={{color: "red"}}>Title is too long!</div>
        : null
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