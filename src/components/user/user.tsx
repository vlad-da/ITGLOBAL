import Pearson from "../../assets/user/pearson.jpg";
import './user.scss';

const User = () => {
    return (
        <div className="user">
            <div className="user__img">
                <img src={Pearson} alt="user" />
            </div>
            <div className="user__name">
                Максим Галактионов
            </div>
        </div>
    )
}

export default User;