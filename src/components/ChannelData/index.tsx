import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
      <Container>
        <Messages ref={messagesRef}>
          <ChannelMessage 
            author='Gwynbleidd'
            date='15/01/2021'
            content='Sextou com Among Us'
          />

          <ChannelMessage 
            author='Torgate'
            date='15/01/2021'
            content={
              <>
                <Mention>@Gwynbleidd</Mention>, vou te passar a faca no Among Us.
              </>
            }
          />
        </Messages>

        <InputWrapper>
          <Input type="text" placeholder="Conversar em #chat-livre"/>
          <InputIcon />
        </InputWrapper>
      </Container>
  );
}

export default ChannelData;