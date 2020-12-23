import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
  <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications={true} />
      <ServerButton mentions={5} />
  </Container>
  );
}

export default ServerList;