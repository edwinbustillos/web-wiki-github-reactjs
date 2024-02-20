
import React from 'react';
import { ItemContainer } from './styles';

type ItemRepoProps = {
    repo: any;
    handleRemoveRepository: (id: number) => void;
};

export default function ItemRepo({ repo, handleRemoveRepository }: ItemRepoProps) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p className='name'>{repo.full_name}</p>
            <p>{repo.description}</p>
            <a href={repo.html_url} target='_blank' rel='noreferrer'>Link</a>
            <button onClick={() => handleRemoveRepository(repo.id)} className='remover'>Remover</button>
            <hr />
        </ItemContainer>
    );
}
