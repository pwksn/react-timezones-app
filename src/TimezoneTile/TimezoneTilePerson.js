const TimezoneTilePerson = ({ person }) => {
    return (
        <div className="person-icon" style={{marginRight: '1rem'}}>
            <div className="person-icon__indicator person-icon__indicator--online">
            </div>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="person.personName"/>
        </div>
    );
}
 
export default TimezoneTilePerson;