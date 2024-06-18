import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>소예키즈에 오신 것을 환영합니다!</Title>
      <Description>
        우리아이의 건강한 성장을 위해, 심리검사부터 교육-놀이까지. 즐거움을
        느끼며 성장하고 배울 수 있도록 소예키즈는 아이의 마음에 집중하여 올바른
        교육을 만듭니다.
      </Description>
    </HomeContainer>
  );
};

export default Home;
