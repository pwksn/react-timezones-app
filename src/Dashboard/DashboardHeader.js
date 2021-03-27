import { useState } from "react";
import BtnIcon from "../Components/BtnIcon";

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
                <h1 className="f-weight-m f-header-big" style={{margin: "1rem 0"}}>Hey <span className="f-weight-xl">{userData.name}</span> &#128075;</h1>
                <div className="d-flex d-flex__center">
                    <BtnIcon btnClassName="button--circle__l" iconName="search-outline" iconClass="icon-l" handleClick={handleSearchBtn}/>
                    <BtnIcon btnClassName="button--circle__l" iconName="options-outline" iconClass="icon-l"/>
                    <BtnIcon btnClassName="button--circle__l" iconName="add-circle-outline" iconClass="icon-l"/>
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