import React from 'react';

interface Props {
    title: string,
    content: string,
    comentsQty: number,
    tags: string[]
}

const Destruct = ({title, content, comentsQty, tags}:Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentarios: {comentsQty}</p>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
    );
};

export default Destruct;