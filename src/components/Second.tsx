import React from 'react';

interface Props {
    name: string    
}

const Second = (props:Props) => {
    return(
        <div>
            <p>Meu segundo componente name é {props.name}</p>
        </div>
    );
};

export default Second;