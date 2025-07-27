// Component with two buttons
import React from 'react';

const ButtonComponent = ({nextClickEvent}) => {

    return (
        <div className='giftcontainer'>
            <button className='giftbutton-small' onClick={nextClickEvent}>KÖVETKEZŐ</button>
        </div>
    );
};

export default ButtonComponent;