import React from "react";

export const Home = ({ ...props }) => {
  const [active, setActive] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const toggleActive = () => {
    setActive(!active);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  React.useEffect(() => {
    console.log("About component mounted");
  }, []);

  React.useEffect(() => {
    console.log("About component updated");
  }, [active, count]);

  React.useEffect(() => {
    return () => {
      console.log("About component unmounted");
    };
  }, []);

  return (
    <div className={active ? "active" : "inactive"}>
      <h1>Home</h1>
      <p>Props: {props.name}</p>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={toggleActive}>Toggle</button>
    </div>
  );
};
