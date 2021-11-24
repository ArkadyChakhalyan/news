import { useSelector } from "react-redux";
import './pages.scss';

export const MainPage = () => {

    const user = useSelector((state) => state.user);

    const name = user ? user.name : 'Гость';

    return (
        <div className='page page--center'>
            <p className='welcome'>
                Привет, {name}!
            </p>
        </div>
    );
};