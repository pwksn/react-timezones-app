import BtnIcon from "../Components/BtnIcon";

const DashboardHeader = () => {

    const name = 'Mario';

    const handleSearchBtn = () => {
        console.log('btn clicked!');
    }

    return (
        <div className="dashboard-header-box">
            <div className="d-flex d-flex__spacebetween">
                <h1 className="f-weight-m f-header-big" style={{margin: "1rem 0"}}>Hey <span className="f-weight-xl">{name}</span> &#128075;</h1>
                <div>
                    <BtnIcon btnClassName="button--circle__l" iconName="search-outline" iconClass="icon-l" handleClick={handleSearchBtn}/>
                    <BtnIcon btnClassName="button--circle__l" iconName="notifications-outline" iconClass="icon-l"/>
                    <BtnIcon btnClassName="button--circle__l" iconName="options-outline" iconClass="icon-l"/>
                </div>
            </div>
            <div>
                <p className="f-text-l f-weight-m f-color-gray-dark m-0">Your actual timezone:</p>
                <h3 className="f-text-l f-weight-l m-0">BST (UTC+1) | <ion-icon name="time-outline"></ion-icon> <span className="f-weight-xl">06:21 PM</span></h3>
            </div>
        </div>
    );
}
 
export default DashboardHeader;