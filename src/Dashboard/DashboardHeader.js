const DashboardHeader = () => {

    const name = 'Mario';

    return (
        <div>
            <div className="d-flex d-flex__spacebetween">
                <h1 className="f-weight-m">Hey <span className="f-weight-xl">{name}</span> &#128075;</h1>
            </div>
            <div>
                <p>Your actual timezone:</p>
                <h4>BST (UTC+1) | 06:21 PM</h4>
            </div>
        </div>
    );
}
 
export default DashboardHeader;