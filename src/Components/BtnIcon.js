const BtnIcon = ({ btnClassName, iconName, iconClass, handleClick }) => {
    return (
        <button className={btnClassName} onClick={handleClick}>
            <ion-icon name={iconName} class={iconClass}></ion-icon> 
        </button>
    );
}
 
export default BtnIcon;