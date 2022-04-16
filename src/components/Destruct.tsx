import React from 'react';

interface Props {
    title: string,
    content: string,
    comentsQty: number,
    tags: string[],
    categoria: Category
}

export enum Category {
    JS = "JAVASCRIPT",
    TS = 'TYPESCRIPT',
    P = 'PYTHON'
}


const Destruct = ({title, content, comentsQty, tags, categoria}:Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentarios: {comentsQty}</p>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}

            <h4>
            
            </h4>
        </div>
    );
};

export default Destruct;