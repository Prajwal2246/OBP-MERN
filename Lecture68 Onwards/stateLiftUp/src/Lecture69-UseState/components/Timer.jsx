import React, { useEffect, useState } from "react";

function Timer() {
  let [time, setTime] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}

export default Timer;
