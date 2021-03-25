import React from 'react';

import { 
    Container,
    Title,
    List,
    Picture,
    Name,
    Item
} from './styles/loading';

export default function Loading({
    src, 
    ...restProps 
}) {
  return (
      <Spinner>
          <LockBody />
      </Spinner>
  );
}