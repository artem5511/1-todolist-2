import React, {useState} from 'react';

const AddItemForm = () => {
    let [newTitle, setNewTitle] = useState('');
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