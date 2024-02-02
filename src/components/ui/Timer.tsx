import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

const Timer = ({
  seconds,
  setSeconds,
  callback,
}: {
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  callback: () => void;
}) => {
  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      callback();
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [callback, seconds, setSeconds]);

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <FontAwesomeIcon
        className="animate-scale-up-infinite"
        icon={faClock}
        size={"2x"}
      />
      <p className="text-3xl font-bold my-2">{seconds}</p>
    </div>
  );
};

export default Timer;
