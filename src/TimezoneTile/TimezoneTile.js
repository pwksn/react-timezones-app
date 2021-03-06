import BtnIcon from "../Components/BtnIcon"
import TimezoneTilePerson from "./TimezoneTilePerson"
import spacetime from 'spacetime';
import { useEffect, useState } from "react";

const TimezoneTile = ({ timezone, onTimezoneDelete, handleTileClick }) => {

    const [tileRemovalMode, setTileRemovalMode] = useState(false);
    const d = spacetime.now();

    useEffect(() => {
        console.log(timezone);
    }, [])

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

    const convertTimezoneName = (timezoneName) => {
        return timezoneName.replace(/_/g, ' ');
    }

    const calculatePeopleNumber = () => {
        return Object.values(timezone.people).length;
    }

    const handleTileRemoval = (city) => {
        onTimezoneDelete(city);
        setTileRemovalMode(false);
    }

    return (
        <div className="timezone-tile">
            {!tileRemovalMode && <div>
                <div className="timezone-tile__header d-flex d-flex__spacebetween">
                    <h1 className="f-header-big f-weight-m" style={{margin: 0}}>{calculateHour(timezone.timezoneCity)}</h1>
                    <BtnIcon btnClassName="button--circle__m" iconName="close-outline" iconClass="icon-l" handleClick={() => setTileRemovalMode(true)}/>
                </div>
                <div className="timezone-tile__zone m-m">
                    <h3 className="f-text-l f-weight-xl m-0">{timezone.city}</h3>
                    <p className="f-text-m f-weight-l m-0">{convertTimezoneName(timezone.timezoneCity)} ({calculateOffset(timezone.timezoneCity)})</p>
                </div>
                {timezone.people && <div className="timezone-tile__people m-l" style={{marginBottom: 0}}>
                    <div className="d-flex d-flex__spacebetween">
                        <h4 className="f-text-m f-weight-xl m-m">People <span>({calculatePeopleNumber()})</span></h4>
                        <button className="d-flex d-flex__center" onClick={() => handleTileClick(timezone.city)}>
                            <p className="f-text-s f-weight-xl m-m" style={{marginRight: '1rem'}}>Details</p>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </button>
                    </div>
                    <div>
                        {Object.values(timezone.people).map((person, index) => (
                            <TimezoneTilePerson person={person} key={index}/>
                        )) }
                    </div>
                </div>}
            </div>}
            {tileRemovalMode && <div className="d-flex d-flex__column d-flex__center">
                <h2>Remove timezone {timezone.city}?</h2>
                <div>
                    <button 
                        className="btn__medium btn__medium--secondary" 
                        style={{marginRight: '1rem'}}
                        onClick={() => handleTileRemoval(timezone.city)}>
                        Remove
                    </button>
                    <button
                        className="btn__medium btn__medium--secondary" 
                        style={{marginLeft: '1rem'}}
                        onClick={() => setTileRemovalMode(false)}>
                        Cancel
                    </button>
                </div>
            </div>}
        </div>
    );
}
 
export default TimezoneTile;