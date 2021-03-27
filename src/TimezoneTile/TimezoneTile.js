import BtnIcon from "../Components/BtnIcon"
import TimezoneTilePerson from "./TimezoneTilePerson"
import spacetime from 'spacetime';
import { useEffect } from "react";

const TimezoneTile = ({ timezone }) => {

    const d = spacetime.now();

    // useEffect(() => {
    //     console.log(d.time());
    //     console.log(d.goto('America/Los_Angeles').offset()/60);
    // }, [])

    const calculateHour = (timezoneName) => {
        return d.goto(timezoneName).time();
    }

    const calculateOffset = (timezoneName) => { 
        const offset = d.goto(timezoneName).offset()/60;
        if (offset >= 0) { 
            return 'UTC +' + offset;
        } else {
            return 'UTC ' + offset;
        }

    }

    return (
        <div className="timezone-tile">
            <div className="timezone-tile__header d-flex d-flex__spacebetween">
                <h1 className="f-header-big f-weight-m" style={{margin: 0}}>{calculateHour(timezone.timezoneCity)}</h1>
                <BtnIcon btnClassName="button--circle__l" iconName="ellipsis-vertical-outline" iconClass="icon-l"/>
            </div>
            <div className="timezone-tile__zone m-m">
                <h3 className="f-text-l f-weight-xl m-0">{timezone.city}</h3>
                <p className="f-text-m f-weight-l m-0">{calculateOffset(timezone.timezoneCity)}</p>
            </div>
            <div className="timezone-tile__people m-l" style={{marginBottom: 0}}>
                <div className="d-flex d-flex__spacebetween">
                    <h4 className="f-text-m f-weight-xl m-m">People <span>(12)</span></h4>
                    <button className="d-flex d-flex__center">
                        <p className="f-text-s f-weight-xl m-m" style={{marginRight: '1rem'}}>View all</p>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div>
                <div>
                    <TimezoneTilePerson />
                    <TimezoneTilePerson />
                    <TimezoneTilePerson />
                </div>
            </div>
        </div>
    );
}
 
export default TimezoneTile;