import { useEffect, useState } from "react";
import styled from "styled-components";

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

const Wrapper = styled.div`
  height: 100px;
  width: 300px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
`;

export { Timer };
