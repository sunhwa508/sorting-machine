import { useState } from "react";
import { bubbleSort_ascending, bubbleSort_descending } from "../../utils/Algorithm";
import styled from "styled-components";

function SortingMachine() {
  const [number, setNumber] = useState("");
  const [ascendedList, setAscendedList] = useState([]);
  const [descendedList, setDescendedList] = useState([]);

  const handleChange = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (number.charAt(number.length - 1).charCodeAt(0) === 44) {
      setNumber(number.slice(0, -1));
    }

    setTimeout(() => {
      setAscendedList(bubbleSort_ascending(number.split(",").filter((element, i) => element !== "")));
      setDescendedList(bubbleSort_descending(number.split(",").filter((element, i) => element !== "")));
    }, 1000);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="숫자를 입력하시오" value={number} onChange={e => handleChange(e)} />
        <button type="submit">시작</button>
      </form>
      <div>
        <p>오름차순</p> <br />
        {ascendedList.map(item => (ascendedList.indexOf(item) !== ascendedList.length - 1 ? item + "," : item + ""))}
      </div>
      <div>
        <p>내림차순</p> <br />
        {descendedList.map(item => (descendedList.indexOf(item) !== descendedList.length - 1 ? item + "," : item + ""))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  & form {
    display: flex;
    flex-direction: column;
    & input {
      padding: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border: none;
    }
    & button {
      cursor: pointer;
      background-color: #6bbe92;
      width: 302px;
      border: 0;
      padding: 10px 0;
      margin: 5px 0;
      text-align: center;
      color: #fff;
      font-weight: bold;
      &:hover {
        background-color: #6bbe70;
      }
    }
  }
  & div {
    width: 300px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ddd;
    overflow: hidden;
    padding: 20px 0;
    margin: 10px 0;
    & p {
      font-size: 12px;
    }
  }
`;

export { SortingMachine };
