import { useEffect, useState } from "react";
import { timezones } from '../data/timezones';
import { useHistory } from 'react-router-dom';

const PersonForm = ({ timezones }) => {

    const [personName, setPersonName] = useState('');
    const [personPhotoUrl, setPersonPhotoUrl] = useState('');
    const [personTimezone, setPersonTimezone] = useState(timezones[0]);
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    useEffect(() => {
        console.log(timezones);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {personName, personPhotoUrl, personTimezone};
        const cityFormatted = personTimezone.replace(/\s+/g, '_'); // eg. Sao Paulo -> Sao_Paulo to use in URL
        const nameFormatted = personName.replace(/\s+/g, '_'); 

        setIsPending(true);

        fetch(`https://react-timezones-app-default-rtdb.firebaseio.com/123/timezones/${cityFormatted}/people/${nameFormatted}.json`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPerson) // convert object to JSON string
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    const convertTimezoneToText = (timezoneName) => {
        return timezoneName.replace(/_/g, ' ');
    }

    const onFormCancel = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <div className="app__timezone-form d-flex d-flex__center d-flex__column">
            <h1 className="m-bottom-xl f-header-l">Add new person</h1>
            <form onSubmit={handleSubmit} className="d-flex d-flex__center d-flex__column">
                <div className="d-flex d-flex__column m-bottom-l">
                    <label>Name</label>
                    <input
                        required
                        type="text"
                        value={personName}
                        onChange={(e) => setPersonName(e.target.value)}/>
                </div>

                <div className="d-flex d-flex__column m-bottom-l">
                    <label>Photo URL</label>
                    <input
                        required
                        type="text"
                        value={personPhotoUrl}
                        onChange={(e) => setPersonPhotoUrl(e.target.value)}/>
                </div>

                <div className="d-flex d-flex__column m-bottom-xl">
                    <label>Timezone</label>
                    <select 
                        value={personTimezone}
                        onChange={(e) => setPersonTimezone(e.target.value)}>
                        {Object.values(timezones).map((timezone, index) => {
                            return <option value={timezone.city} key={index}>{timezone.city}</option>
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
 
export default PersonForm;