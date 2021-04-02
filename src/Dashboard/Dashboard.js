import TimezoneTile from "../TimezoneTile/TimezoneTile"
import DashboardHeader from "./DashboardHeader"
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from "react";
import spacetime from 'spacetime';

const Dashboard = () => {

    const {data, isPending, error} = useFetch('https://react-timezones-app-default-rtdb.firebaseio.com/123.json');
    const [timeNow, setTimeNow] = useState(spacetime.now().time()); 
    const [timezones, setTimezones] = useState(null);

    const d = spacetime.now();

    useEffect(() => {
        if (data && data.timezones) {
            setTimezones(Object.values(data.timezones));
            console.log(timezones);
        }
    }, [data]);

    useEffect(() => {
        // toDo: check if interval needed
        const timer = setInterval(() => {
            setTimeNow(spacetime.now().time());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const onTimezoneDelete = (timezoneName) => {
        const timezoneNameFormatted = timezoneName.replace(/\s+/g, '_'); // eg. Sao Paulo -> Sao_Paulo to use in URL
        fetch('https://react-timezones-app-default-rtdb.firebaseio.com/123/timezones/' + timezoneNameFormatted + '.json', {
            method: 'DELETE'
        }).then(() => {
            const newTimezones = timezones.filter(timezone => (
                timezone.city !== timezoneName
            ));
            setTimezones(newTimezones);
        })
    }

    return (
        <div className="app__dashboard">
            {data && <DashboardHeader userData={data.user} timeNow={d.time()} offset={d.offset()}/>}
            {timezones && <div className="tiles">
                {timezones.map((timezone, index) => (
                    <TimezoneTile key={index} timezone={timezone} onTimezoneDelete={onTimezoneDelete}/>
                ))}
            </div>}
        </div>
    );
}
 
export default Dashboard;