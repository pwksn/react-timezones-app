import TimezoneTile from "../TimezoneTile/TimezoneTile"
import DashboardHeader from "./DashboardHeader"
import useFetch from '../hooks/useFetch';
import { useEffect, useState } from "react";
import spacetime from 'spacetime';

const Dashboard = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/123');
    const [timeNow, setTimeNow] = useState(spacetime.now().time()); //toDo: refresh timeNow every 60s

    useEffect(() => {
        console.log(data?.user);
    }, [data]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeNow(spacetime.now().time());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="app-dashboard">
            {data && <DashboardHeader userData={data.user} timeNow={timeNow}/>}
            {data && <div className="tiles">
                <TimezoneTile />
                <TimezoneTile />
                <TimezoneTile />
            </div>}
        </div>
    );
}
 
export default Dashboard;