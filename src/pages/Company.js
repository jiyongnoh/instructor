import React from "react";
import styled from "styled-components";

const CompanyContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Company = () => {
  return (
    <CompanyContainer>
      <Title>회사소개</Title>
      <Description>
        소예키즈는 아이의 건강한 성장을 위해 심리검사부터 교육-놀이까지 다양한
        프로그램을 제공합니다. 아이들이 즐거움을 느끼며 성장하고 배울 수 있도록
        최선을 다하고 있습니다.
      </Description>
      <Description>
        우리아이의 건강한 성장을 위해, 심리검사부터 교육-놀이까지. 즐거움을
        느끼며 성장하고 배울 수 있도록 소예키즈는 아이의 마음에 집중하여 올바른
        교육을 만듭니다.
      </Description>
    </CompanyContainer>
  );
};

export default Company;
