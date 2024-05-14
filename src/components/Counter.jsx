
import Button from "./Button";
import Count from "./Count";

export default function Counter({count, onIncrement, onDecrement}) {
    

    return (
        <div className="border my-4 p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count}/>
            <Button type="danger" handler={onIncrement}>Increment</Button>
            <Button handler={onDecrement}>Decrement</Button>
            
        </div>
        );
}