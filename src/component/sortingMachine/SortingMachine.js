import { useState } from "react";
import { bubbleSort_ascending, bubbleSort_descending } from "../../utils/Algorithm";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="숫자를 입력하시오" value={number} onChange={e => handleChange(e)} />
        <button type="submit">시작</button>
      </form>
      <div>{ascendedList.map(item => (ascendedList.indexOf(item) !== ascendedList.length - 1 ? item + "," : item + ""))}</div>
      <div>{descendedList.map(item => (descendedList.indexOf(item) !== descendedList.length - 1 ? item + "," : item + ""))}</div>
    </div>
  );
}

export { SortingMachine };
