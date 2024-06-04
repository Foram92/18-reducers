import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage ({ initialCount }) {

    const INCREMENT_COUNT = 'increment';
    const CHANGE_THE_VALUE = 'change-value-to-add';

//when we call dispatch() react will find this reducer fun which we passed in as first argument of useReducer
    const reducer = (state, action) => {
        if (action.type === INCREMENT_COUNT) {
            return {
                ...state,
                count: state.count + 1
            }
        };
        if (action.type === CHANGE_THE_VALUE) {
            return {
                ...state,
                addValue: action.playload
            }
        };
        
        return state;
    };

    //const [count, setCount] = useState(initialCount);
    //const [addValue, setAddValue] = useState(0);

//when u want to update the state or re-render component call dispatch()
//when u call dispatch() react will find reducer function, which we have created above
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        addValue: 0
    });
    console.log(state);

    const increment = () => {
        //setCount(count + 1);
//u can pass no argument or one argument, that one will take as action in reducer function; but don't pass more then one coz all the extras will be ignored
        dispatch({
            type: INCREMENT_COUNT
        });
    };
    const decrement = () => {
        //setCount(count - 1);
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
       //setAddValue(value);
       dispatch({
        type: CHANGE_THE_VALUE,
        playload: value
       });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //setCount(count + addValue);
        //setAddValue(0);
    }
    
    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is { state.count }</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    type='number'
                    onChange={ handleChange }
                    value={ state.addValue || '' }
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;