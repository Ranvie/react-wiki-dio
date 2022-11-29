import React from 'react';
import { ItemContainer, LinkContainer } from './style';

export const ItemRepo = ({repo, linkLabel="Ver repositório", removeLabel="Remover", handleRemove}) => {
  const handleDeleteClick = () => {
    handleRemove(repo.id);
  }
  
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <LinkContainer>
            <a href={repo.html_url} target="_blank">{linkLabel}</a>
            <a className='remove' onClick={handleDeleteClick}>{removeLabel}</a>
        </LinkContainer>
        <hr />
    </ItemContainer>
  )
}
