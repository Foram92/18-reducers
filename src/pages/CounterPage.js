import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage ({ initialCount }) {

    const [count, setCount] = useState(initialCount);
    const [addValue, setAddValue] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const handleChange = (event) => {
        //console.log(event);
//parseInt will set whatever in () to integer(number) without it typeof value will show string
        //const value = parseInt(event.target.value);

//in parseInt when u set empty value(by delete the input) u will get NaN which we don't want; so here we set 0, if parseInt('') is empty then it will NaN which is false so we set 0 
        const value = parseInt(event.target.value) || 0;

        //console.log(typeof value);
        //console.log(value);
        setAddValue(value);
    }

    const handleSubmit = (event) => {
//browser by default try to submit the form for us to back-end server which we don't want, so event.preventDefault() will stop it
        event.preventDefault();

//when form submitted add count value to input value(addValue) and set input 0
        setCount(count + addValue);
        setAddValue(0);
    }
    
    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is { count }</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    type='number'
                    onChange={ handleChange }
        //if you have addValue then it will show otherwise input will be empty
                    value={ addValue || '' }
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;