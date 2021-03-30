import TimezoneTile from "../TimezoneTile/TimezoneTile"
import DashboardHeader from "./DashboardHeader"
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from "react";
import spacetime from 'spacetime';

const Dashboard = ({ data }) => {

    // const {data, isPending, error} = useFetch('https://react-timezones-app-default-rtdb.firebaseio.com/123.json');
    const [timeNow, setTimeNow] = useState(spacetime.now().time()); 

    const d = spacetime.now();

    useEffect(() => {
        // console.log(data?.user);
        // toDo: check useRef warning 
        // if (data && data.timezones) {
        //     userTimezones = Object.values(data.timezones);
        // }
        // console.log(data);
        console.log(data);
    }, [data]);

    useEffect(() => {
        // toDo: check if interval needed
        const timer = setInterval(() => {
            setTimeNow(spacetime.now().time());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="app__dashboard">
            {data && <DashboardHeader userData={data.user} timeNow={d.time()} offset={d.offset()}/>}
            {data && data.timezones && <div className="tiles">
                {Object.values(data.timezones).map((timezone, index) => (
                    <TimezoneTile key={index} timezone={timezone}/>
                ))}
            </div>}
        </div>
    );
}
 
export default Dashboard;