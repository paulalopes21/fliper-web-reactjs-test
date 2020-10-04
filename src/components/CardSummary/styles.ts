import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-white);
  box-shadow: var(--card-shadow);
  border-radius: 25px;
  height: 352px;
  width: 344px;
  padding: 25px 24px 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardHeader = styled.div `
  display: flex;
  justify-content: space-between;
  height: 30px;

  > h1 {
    width: 100%;
    color: var(--color-primary);
    font-size: 25px;
    font-weight: 800;
    letter-spacing: .75px;
  }

  > img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`

export const MainInfo = styled.div`
  margin-top: 35px;
  text-align: center;

  h2 {
    margin-bottom: 7px;
  }
`

export const Infos = styled.ul`
  margin-top: 35px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    justify-content: space-between;
  }

  > li + li {
    margin-top: 10px;
  }
 
`

export const InfoTitle = styled.h2`
  color: var(--color-secondary);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: .48px;
  line-height: 20px;
`

type InfoDetailProps = { main?: boolean };

export const InfoDetail = styled.p<InfoDetailProps>`
  color: var(--color-primary);
  font-size: ${(props) => (props.main ? "22px" : "18px")};
  font-weight: 800;
  letter-spacing: .54px;
  line-height: 100%
`

export const CardFooter = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid var(--color-border);
  width: 100%;

  button {
    background: var(--color-white);
    height: 32px;
    border-radius: 25px;
    border: 1px solid var(--color-primary);
    padding: 6px 13px;

    color: var(--color-primary);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      box-shadow: var(--button-shadow);
    }

  }
`