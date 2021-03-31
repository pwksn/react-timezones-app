const TimezoneTilePerson = ({ person }) => {
    return (
        <div className="person-icon" style={{marginRight: '1rem'}}>
            {/* Online / offline indicator:  */}
            {/* <div className="person-icon__indicator person-icon__indicator--online">
            </div> */}
            <img src={person.personPhotoUrl} alt="person.personName"/>
        </div>
    );
}
 
export default TimezoneTilePerson;