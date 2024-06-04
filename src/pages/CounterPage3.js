import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

function CounterPage ({ initialCount }) {

    const INCREMENT_COUNT = 'increment';
    const CHANGE_THE_VALUE = 'change-value-to-add';
    const DECREMENT_COUNT = 'decrement';
    const ADD_VALUE_TO_COUNT = 'add-value-to-count';

    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT_COUNT:
                return {
                    ...state,
                    count: state.count + 1
                };
            case CHANGE_THE_VALUE:
                return {
                    ...state,
                    addValue: action.playload
                };
            case DECREMENT_COUNT:
                return {
                    ...state,
                    count: state.count - 1
                };
            case ADD_VALUE_TO_COUNT:
                return {
                    ...state,
                    count: state.count + state.addValue,
                    addValue: 0
                }
            default:
                return state;
        };
    }
    

    // const reducer = (state, action) => {
    //     if (action.type === INCREMENT_COUNT) {
    //         return {
    //             ...state,
    //             count: state.count + 1
    //         }
    //     };
    //     if (action.type === CHANGE_THE_VALUE) {
    //         return {
    //             ...state,
    //             addValue: action.playload
    //         }
    //     };
    //     return state;
    // };

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        addValue: 0
    });
    console.log(state);

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };
    const decrement = () => {
        //setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT
        });
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: CHANGE_THE_VALUE,
            playload: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
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