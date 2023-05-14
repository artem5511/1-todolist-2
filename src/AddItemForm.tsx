import React from 'react';

const AddItemForm = () => {
    return (
        <div>
            <div>
                <input className={error || isTitleLenghtTooLong? "input-error" : undefined}
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
        </div>
    );
};

export default AddItemForm;