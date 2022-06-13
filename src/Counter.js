import { useRef, useState } from "react";

// You can implement the value comparison using your preferred method
function areValuesEqual(value1, value2) {
  return Object.is(value1, value2);
}

/**
 * TS:
 * function useValueChanged <T>(value: T): boolean
 */
function useValueChanged(value) {
  const originalRef = useRef(value);
  return !areValuesEqual(originalRef.current, value);
}

function Counter() {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;
  const [ count, setCount ] = useState(0);
  const increment = () => setCount(n => n + 1);
  const didChange = useValueChanged(count);

  return (
    <div>
      <div>Render count: {renderCountRef.current}</div>
      <div>Changed: {didChange ? "Yes" : "No"}</div>
      <button onClick={increment}>Clicks: {count}</button>
    </div>
  );
}

export default Counter;
