import React, {useContext} from 'react';
import {AppContext} from '../App';
interface Props {

}

const Context = (props: Props) => {

    const details = useContext(AppContext);
    return (
        <>
            {details && (
                <div>
                    <h2>Linguagem: {details.language}</h2>
                    <h4>Frameworks: {details.framework}</h4>
                </div>
            )}
        </>
    );
};

export default Context;