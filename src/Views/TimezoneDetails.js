import { useEffect } from "react";
import TimezoneTilePerson from '../TimezoneTile/TimezoneTilePerson';
import BtnIcon from '../Components/BtnIcon';

const TimezoneDetails = ({ timezone, handleClick }) => {

    useEffect(() => {
        console.log(timezone);
    }, []);

    return (
        <div>
            <div className="d-flex d-flex__spacebetween">
                <h1 className="m-0">{timezone.city} - details</h1>
                <BtnIcon btnClassName="button--circle__m" iconName="arrow-back-outline" iconClass="icon-l" handleClick={handleClick}/>
            </div>
            <h2 className="f-color-gray-dark f-weight-l" style={{marginTop: 0}}>Timezone: {timezone.timezoneCity}</h2>
            <div>
                <h2 className="f-text-l">People:</h2>
                <div>
                    {Object.values(timezone.people).map((person, index) => (
                        <div className="d-flex m-bottom-l" key={index}>
                            <TimezoneTilePerson person={person} key={index}/>
                            <h2 className="f-weight-l">{person.personName}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default TimezoneDetails;