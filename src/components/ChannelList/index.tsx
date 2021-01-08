import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
        <Category>
          <span>Canais de Texto</span>
          <AddCategoryIcon />
        </Category>
        
      </Container>
  );
}

export default ChannelList;