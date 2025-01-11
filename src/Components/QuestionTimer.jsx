import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const timeOutId = setTimeout(onTimeOut, timeOut);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime} />;
}
