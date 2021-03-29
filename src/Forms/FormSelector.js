import { Link } from 'react-router-dom';

const FormSelector = () => {
    return (
        <div className="app__form--selector d-flex d-flex__column d-flex__center">
            <Link to="/form/timezone" className="btn__large btn__large--primary m-l">
                <span>Add timezone</span>
            </Link>
            {/* <button className="btn__large btn__large--primary m-l">Add timezone</button> */}
            <button className="btn__large btn__large--primary m-l m-bottom-xl">Add new person</button>
            <Link to="/" className="btn__medium btn__medium--secondary m-top-xl">
                <span>Cancel</span>
            </Link>
        </div>
    );
}
 
export default FormSelector;