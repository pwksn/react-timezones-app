import BtnIcon from "../Components/BtnIcon";
import { Link } from 'react-router-dom';

const DashboardHeader = ({ userData, timeNow, offset }) => {

    const handleSearchBtn = () => {
        console.log('btn clicked!');
    }

    const formatOffset = () => {
        if (offset >= 0) {
            return 'UTC +' + offset/60;
        } else if (offset < 0) {
            return 'UTC ' + offset/60;
        }
    }

    return (
        <div className="dashboard-header-box">
            <div className="d-flex d-flex__spacebetween">
                <h1 className="f-weight-m f-header-big" style={{marginBottom: "1rem"}}>Hey <span className="f-weight-xl">{userData.name}</span> &#128075;</h1>
                <div className="d-flex d-flex__center">
                    <Link to="/search">
                        <BtnIcon btnClassName="button--circle__l" iconName="search-outline" iconClass="icon-l" handleClick={handleSearchBtn}/>
                    </Link>
                    <BtnIcon btnClassName="button--circle__l" iconName="options-outline" iconClass="icon-l"/>
                    <Link to="/form/select">
                        <BtnIcon btnClassName="button--circle__l" iconName="add-circle-outline" iconClass="icon-l"/>
                    </Link>
                </div>
            </div>
            <div>
                <p className="f-text-l f-weight-m f-color-gray-dark m-0">Your actual timezone:</p>
                <h3 className="f-text-l f-weight-l m-0">{formatOffset()} | <ion-icon name="time-outline"></ion-icon> <span className="f-weight-xl">{timeNow}</span></h3>
            </div>
        </div>
    );
}
 
export default DashboardHeader;