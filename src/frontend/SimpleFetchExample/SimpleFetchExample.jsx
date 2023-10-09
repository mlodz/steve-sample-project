import {useState, useCallback} from 'react';
import axios from 'axios';

export default function SimpleFetchExample() {
    let [number, setNumber] = useState(0);
    const onLoad = useCallback(function() {
        setNumber(n => n*2);
        axios.get('/api/common/random-number')
            .then(response => {
                console.log({response});
                setNumber(response.data.number);
            })
            .catch(error => {
                console.log({error});
            });
    }, [number]);

    return (
        <div className="SimpleFetchExample">
            <p><input type="button" value="Increment" onClick={() => setNumber(n => n+1)} /></p>
            <p><input type="button" value="Load From Server" onClick={onLoad} /></p>
            <p>Number: {number} </p>
        </div>
    );
}