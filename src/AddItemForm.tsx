import React, {ChangeEvent, FC, useState} from 'react';

type AddItemFormPropsType = {
    titleMaxLength: number
}

const AddItemForm: FC<AddItemFormPropsType> = ({titleMaxLength: number}) => {
    let [newTitle, setNewTitle] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setNewTitle(event.currentTarget.value)
    }
    const isAddBtnDisabled = !newTitle.length
    const isTitleLenghtTooLong: boolean = newTitle.length > titleMaxLength
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