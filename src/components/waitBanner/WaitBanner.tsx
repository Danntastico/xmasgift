import React, { FunctionComponent } from "react";
import { Koala } from "components/icons/Koala";
import styled from "styled-components";

interface WaitBannerProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffe4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  border-radius: 12px;
  background: #ffe4e4;
  box-shadow: 7px 7px 14px #d1bbbb, -7px -7px 14px #ffffff;
  width: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  margin: auto;
`;

const CountDownContainer = styled.span`
  font-size: 0.9em;
  color: #be5683;
`;

const BannerTitle = styled.h2`
  color: #be5683;
  font-size: 0.9em;
  font-weight: 500;
`;

export const WaitBanner: FunctionComponent<WaitBannerProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <Container>
      <Card>
        <IconContainer>
          <Koala width="100px" height="100px" />
        </IconContainer>
        <BannerTitle>Podrás leerme en:</BannerTitle>
        <CountDownContainer>
          {days}d, {hours}h, {minutes}m, {seconds}s
        </CountDownContainer>
      </Card>
    </Container>
  );
};
