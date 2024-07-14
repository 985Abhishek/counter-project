import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store";

const Controls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    // console.log( " button clicked",counterAction.increment())
    dispatch(counterAction.increment());
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };
  const handleAdd = () => {
    dispatch(
      // in next line we're passing the value in for of obj instead we can take it directlr from useRef hook like this
      counterAction.add({
        num: inputValue.current.value,
      })
      // counterAction.add({
      //   inputValue.current.value,
      // })
    );
    inputValue.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterAction.subtract({ num: inputValue.current.value }));
  };

  return (
    <center style={{ marginTop: "-50px" }}>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ marginRight: "20px" }}
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <div
        className="lowerbutton"
        style={{ margin: "10px", justifyContent: "space-between" }}
      >
        <input
          name="ref"
          type="text"
          placeholder="Enter your number here"
          ref={inputValue}
          style={{ marginRight: "10px", height: "40px", marginTop: "20px" }}
        />
        <button
          type="button"
          class="btn btn-outline-info"
          style={{ marginRight: "10px" }}
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </center>
  );
};
export default Controls;
