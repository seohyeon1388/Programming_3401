import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
// import "./App.css";

function CounterApp() {
  const [count, setCount] = useState(0); //tkdxorkqtm dlwjs tkdxorkqt; setCount() : 상태를 바꾸는 함수. 반드시 얘로 바꿔야함

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}
    </>
  );
}

export default CounterApp;
