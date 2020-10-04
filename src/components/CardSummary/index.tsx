import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { 
  Container,
  CardHeader, 
  MainInfo, 
  Infos,
  InfoTitle,
  InfoDetail,
  CardFooter } from './styles';

import Loading from '../Loading';
import Error from '../Error';

import IconMoreVert from '../../assets/images/more_vert-24.svg';

import { numberFormat } from './../../helpers';

interface ISummary {
  id: number
  profitability: number 
  total: number 
  hasHistory: boolean
  gain: number 
  cdi: number 
}

const GET_WEALTH_SUMMARY = gql`
  query {
    wealthSummary {
      id
      profitability
      total
      hasHistory
      gain
      cdi
    }
  }
`

const CardSummary: React.FC = () => {
  const { data, loading, error } = useQuery<{ wealthSummary: ISummary[] }>(GET_WEALTH_SUMMARY);

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;
  
  
  return (
    <Container>
      <CardHeader>
        <h1>Seu resumo</h1>
        <img src={IconMoreVert} alt="More"/>
      </CardHeader>

      <MainInfo>
        <InfoTitle>Valor investido</InfoTitle>
        <InfoDetail main>{ numberFormat(data?.wealthSummary[0].total, 'currency', 5) } </InfoDetail>
      </MainInfo>

      <Infos>
       <li>
          <InfoTitle>Rentabilidade/mês</InfoTitle>
          <InfoDetail>{ numberFormat(data?.wealthSummary[0].profitability, 'decimal', 3) }<span>%</span></InfoDetail>
       </li>
       <li>
          <InfoTitle>CDI</InfoTitle>
          <InfoDetail>{numberFormat(data?.wealthSummary[0].cdi, 'decimal', 2 )}<span>%</span></InfoDetail>
       </li>
       <li>
          <InfoTitle>Ganho/mês</InfoTitle>
          <InfoDetail>{numberFormat(data?.wealthSummary[0].gain, 'currency', 5)}</InfoDetail>
       </li>
      </Infos>

      <CardFooter>
        <button title="ver mais">ver mais</button>
      </CardFooter>
      
    </Container>
  );
};

export default CardSummary;
