import React from 'react';

import { Container, CardHeader, MainInfo, Infos, InfoTitle, InfoDetail, CardFooter } from './styles';

import IconMoreVert from '../../assets/images/more_vert-24.svg';

const CardSummary: React.FC = () => {
  return (
    <Container>
      <CardHeader>
        <h1>Seu resumo</h1>
        <img src={IconMoreVert} alt="More"/>
      </CardHeader>

      <MainInfo>
        <InfoTitle>Valor investido</InfoTitle>
        <InfoDetail main><span>R$</span> 3.200.876,00</InfoDetail>
      </MainInfo>

      <Infos>
       <li>
          <InfoTitle>Rentabilidade/mês</InfoTitle>
          <InfoDetail>2,767<span>%</span></InfoDetail>
       </li>
       <li>
          <InfoTitle>CDI</InfoTitle>
          <InfoDetail>3,45<span>%</span></InfoDetail>
       </li>
       <li>
          <InfoTitle>Ganho/mês</InfoTitle>
          <InfoDetail><span>R$</span> 1833,23</InfoDetail>
       </li>
      </Infos>

      <CardFooter>
        <button title="ver mais">ver mais</button>
      </CardFooter>
      
    </Container>
  );
};

export default CardSummary;
