import { useState, useEffect } from "react";
import { quickSort } from "../../utils/quickSort";
import styled from "styled-components";

function SortingMachine() {
  const [number, setNumber] = useState("");
  const [ascendedList, setAscendedList] = useState([]);
  const [descendedList, setDescendedList] = useState([]);
  const [isWait, setIsWait] = useState(false);
  const [counter, setCounter] = useState(3);

  const handleChange = ({ target: { value } }) => {
    setNumber(value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (number === "") {
      return;
    }

    let isInvalid = false;
    const numberArray = number
      .split(",")
      .filter(element => element !== "")
      .map(e => {
        if (isNaN(e)) {
          isInvalid = true;
        }
        return Number(e);
      });
    setAscendedList(isInvalid ? ["형식에 맞는 값을 넣어주세요!"] : quickSort(numberArray));
    setIsWait(true);
    setTimeout(() => {
      setDescendedList(isInvalid ? ["형식에 맞는 값을 넣어주세요!"] : quickSort(numberArray, true));
      setIsWait(false);
    }, 3000);
  };

  useEffect(() => {
    if (isWait && counter > 0) {
      setTimeout(() => {
        setCounter(counter => counter - 1);
      }, 1000);
    } else if (counter === 0) {
      setIsWait(false);
      setCounter(3);
    }
  }, [counter, isWait]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input disabled={isWait} type="text" placeholder="1,3,6,20" value={number} onChange={e => handleChange(e)} />
        <Button isWait={isWait} disabled={isWait} type="submit">
          {isWait ? "Plesse Wait..." : "START"}
        </Button>
      </form>
      <div>
        <p>ascended-list</p> <br />
        {ascendedList.map(item => (ascendedList.indexOf(item) !== ascendedList.length - 1 ? item + "," : item + ""))}
      </div>
      <div>
        <p>descended-list</p> <br />
        {isWait ? (
          <span>{counter}</span>
        ) : (
          descendedList.map(item => (descendedList.indexOf(item) !== descendedList.length - 1 ? item + "," : item + ""))
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  font-family: "Press Start 2P", cursive;
  & form {
    display: flex;
    flex-direction: column;
    & input {
      padding: 10px 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border: none;
      background-color: gray;
    }
  }
  & div {
    min-width: 300px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ddd;
    overflow: hidden;
    padding: 20px 10px;
    margin: 10px 0;
    color: #00b800;
    & p {
      font-size: 12px;
    }
    & span {
      color: #ffd643;
      font-size: 15px;
    }
  }
`;

const Button = styled.button`
  cursor: ${props => (props.isWait ? "default" : "pointer")};
  background-color: ${props => (props.isWait ? "#FFD643" : "#00b800")};
  border: 0;
  padding: 10px 0;
  margin: 5px 0;
  text-align: center;
  color: #000;
  font-weight: bold;
`;

export { SortingMachine };
