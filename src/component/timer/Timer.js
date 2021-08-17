import { useEffect, useState } from "react";
import styled from "styled-components";

function Timer({ isKorea }) {
  const [time, setTime] = useState({
    korea: "",
    usa: "",
  });

  const getTime = () => {
    let options1 = { year: "numeric", month: "long", day: "numeric", weekday: "long", hour: "numeric", minute: "numeric", second: "numeric" };
    let options2 = { year: "numeric", month: "long", day: "numeric", weekday: "long", hour: "numeric", minute: "numeric", second: "numeric" };
    options2.timeZone = "America/Los_Angeles";
    options1.timeZone = "Asia/Seoul";
    const krTime = new Date().toLocaleString("ko-KR", options1);
    const usaTime = new Date().toLocaleString("en-US", options2);

    setTime({
      korea: krTime,
      usa: usaTime,
    });
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
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00b800;
  text-align: center;
  background-color: #000;
`;

export { Timer };
