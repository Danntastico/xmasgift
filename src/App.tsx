import React, { FunctionComponent } from "react";
import Countdown from "react-countdown";
import { WaitBanner } from "components/waitBanner/WaitBanner";

interface rendererProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
  completed: boolean;
}

const renderer: FunctionComponent<rendererProps> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    return <div>Hola Mundo</div>;
  } else {
    return (
      <WaitBanner
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export const App = () => {
  return <Countdown date={"2021-01-01T00:00:00"} renderer={renderer} />;
};
