import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import BtnIcon from '../Components/BtnIcon';

const TimezoneFinder = () => {

    const history = useHistory();

    const onClose = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <div className="app__search">
            <div className="d-flex d-flex__spacebetween">
                <h1 className="f-weight-m f-header-big">Search for <span className="f-weight-xl"> time zones or users </span> </h1>
                <Link to="/search">
                    <BtnIcon btnClassName="button--circle__l button--circle__gray" iconName="close-outline" iconClass="icon-l" handleClick={onClose}/>
                </Link>
            </div>
        </div>
    );
}
 
export default TimezoneFinder;