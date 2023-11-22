import { useState } from 'react';
import './Counter.css'

function CounterButton () {
    const [ count, setCount ] = useState(0);
    return <div>
        <button onClick={() => setCount(count + 1)} className='clickButton'> <div> Clicks : {count}</div></button>
        
    </div>
}

export default CounterButton;