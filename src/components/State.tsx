import React, {useState} from 'react';

const State = () => {
    const [text, setText] = useState("testando o hook");

    return (
        <div>
            <p>O texto é {text}</p>
        </div>
    );
};

export default State;