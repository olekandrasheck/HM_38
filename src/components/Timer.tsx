import React from "react";

export const Timer = () => {
  const [seconds, setSeconds] = React.useState(60);
  const [timerActive, setTimerActive] = React.useState(false);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 100, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);
  return (
    <div>
      {seconds ? (
        <>
          <button onClick={() => setTimerActive(!timerActive)}>
            {timerActive ? "stop" : "start"}
          </button>
          <div>{seconds}</div>
        </>
      ) : (
        <button onClick={() => setSeconds(60)}>start</button>
      )}
    </div>
  );
};
