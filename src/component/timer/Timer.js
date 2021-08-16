import { useEffect, useState } from "react";

function Timer({ isKorea }) {
  const [time, setTime] = useState({
    korea: "",
    usa: "",
  });

  const getTime = () => {
    const krTime = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
    setTime({ korea: krTime.toLocaleString(), usa: usaTime.toLocaleString() });
  };

  useEffect(() => {
    setInterval(getTime, 1000);
    return () => {
      setInterval(getTime, 1000);
    };
  }, []);

  return <div>{isKorea ? time.korea : time.usa}</div>;
}

export { Timer };
