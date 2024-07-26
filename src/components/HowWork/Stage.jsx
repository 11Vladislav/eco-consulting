import { useState } from 'react';
import { Wrapper, StageContainer, Number, Title, Description, Text } from './Stage.styled';


export const Stage = ({ stage, index }) => {
  const [visible, setVisible] = useState(false);

    return (
      <Wrapper>
            <StageContainer index={index}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
            <Number
                color={stage.color}
            >
                {stage.number}
            </Number>
            <Title>{stage.title}</Title>
            <Description>{stage.description}</Description>
            <Text visible={visible}>{stage.text}</Text>
        </StageContainer>
    </Wrapper>
  );
};

