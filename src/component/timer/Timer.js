import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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

  return <Wrapper>{isKorea ? time.korea : time.usa}</Wrapper>;
}

const spin = keyframes`
  0% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  height: 100px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00b800;
  text-align: center;
  background-color: #000;
`;

export { Timer };
