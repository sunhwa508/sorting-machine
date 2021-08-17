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

    const numberArray = number
      .split(",")
      .filter(element => element !== "")
      .map(e => Number(e));
    setAscendedList(quickSort(numberArray));
    setIsWait(true);
    setTimeout(() => {
      setDescendedList(quickSort(numberArray, true));
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
        <input type="text" placeholder="1,3,6,20" value={number} onChange={e => handleChange(e)} />
        <button disabled={isWait} type="submit">
          START
        </button>
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
  & form {
    display: flex;
    flex-direction: column;

    & input {
      padding: 10px 0;
      border: none;
      background-color: gray;
    }
    & button {
      cursor: pointer;
      background-color: #00b800;
      border: 0;
      padding: 10px 0;
      margin: 5px 0;
      text-align: center;
      color: #000;
      font-weight: bold;
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

export { SortingMachine };
