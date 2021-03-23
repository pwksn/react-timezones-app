import TimezoneTile from "../TimezoneTile/TimezoneTile"
import DashboardHeader from "./DashboardHeader"

const Dashboard = () => {
    return (
        <div className="app-dashboard">
            <DashboardHeader />
            <div className="tiles">
                <TimezoneTile />
                <TimezoneTile />
                <TimezoneTile />
            </div>
        </div>
    );
}
 
export default Dashboard;