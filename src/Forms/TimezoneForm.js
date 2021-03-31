import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { timezones } from '../data/timezones';

const TimezoneForm = () => {

    const [timezoneCity, setTimezoneCity] = useState(timezones[0]);
    const [city, setCity] = useState('');
    const [isPending, setIsPending] = useState(false);

    const uid = 123;

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTimezone = { city, timezoneCity };
        const cityFormatted = city.replace(/\s+/g, '_'); // eg. Sao Paulo -> Sao_Paulo to use in URL
        console.log(newTimezone);

        setIsPending(true);

        fetch(`https://react-timezones-app-default-rtdb.firebaseio.com/123/timezones/${cityFormatted}.json`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTimezone) // convert object to JSON string
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    const onFormCancel = (e) => {
        e.preventDefault();
        history.push('/');
    }

    const convertTimezoneToText = (timezoneName) => {
        return timezoneName.replace(/_/g, ' ');
    }

    return (
        <div className="app__timezone-form d-flex d-flex__center d-flex__column">
            <h1 className="m-bottom-xl f-header-l">Add new timezone</h1>
            <form onSubmit={handleSubmit} className="d-flex d-flex__center d-flex__column">
                <div className="d-flex d-flex__column m-bottom-l">
                    <label>City</label>
                    <input
                        required
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}/>
                </div>

                <div className="d-flex d-flex__column m-bottom-xl">
                    <label>Timezone</label>
                    <select 
                        value={timezoneCity}
                        onChange={(e) => setTimezoneCity(e.target.value)}>
                        {timezones.sort((a, b) => {
                            if (a < b) {return -1;}
                            if (a > b) {return 1;}
                            return 0;
                        }).map((timezone, index) => {
                            return <option value={timezone} key={index}>{convertTimezoneToText(timezone)}</option>
                        })}
                    </select>
                </div>

                <div className="d-flex d-flex__center">
                    <button 
                        type="button" 
                        onClick={onFormCancel}
                        className="btn__medium btn__medium--secondary"
                        style={{marginRight: '1rem'}}>
                        Cancel
                    </button>
                    {!isPending && <button 
                        type="submit"
                        className="btn__medium btn__medium--primary"
                        style={{marginLeft: '1rem'}}>
                        Submit
                    </button>}
                    {isPending && <button 
                        disabled
                        className="btn__medium btn__medium--primary"
                        style={{marginLeft: '1rem'}}>
                        Wait...
                    </button>}
                </div>
            </form>
        </div>
    );
}
 
export default TimezoneForm;