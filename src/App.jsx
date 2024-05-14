import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialCounter = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

function App() {
  const [counters, setCounters] = useState(initialCounter);

  const totalCount = counters.reduce((sum, current) => 
    sum + current.value, 0
  )

  const handleIncrement = (counterId) => {
    // setCount(count + 1);
    const updatedCounters = counters.map(counter => {
      if(counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1
        }
      }
      return counter;
    })
    setCounters(updatedCounters);
  };

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map(counter => {
      if(counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1
        }
      }
      return counter;
    })
    setCounters(updatedCounters);
  };
  return (
    <>
      <h2>Redux Crash Course</h2>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
      </div>
      {/* <Counter count={count} onDecrement={handleDecrement} /> */}
      <Stats totalCount={totalCount}/>
    </>
  );
}

export default App;
