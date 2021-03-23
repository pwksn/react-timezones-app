import TimezoneTile from "../TimezoneTile/TimezoneTile"
import DashboardHeader from "./DashboardHeader"
import useFetch from '../hooks/useFetch';
import { useEffect } from "react";

const Dashboard = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/123');

    useEffect(() => {
        console.log(data?.user);
    }, [data]);

    return (
        <div className="app-dashboard">
            {data && <DashboardHeader userData={data.user}/>}
            {data && <div className="tiles">
                <TimezoneTile />
                <TimezoneTile />
                <TimezoneTile />
            </div>}
        </div>
    );
}
 
export default Dashboard;