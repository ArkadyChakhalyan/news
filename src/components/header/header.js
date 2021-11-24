import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onLogout } from '../../actions/actions';
import { Popup } from '../popup/popup';
import './header.scss';

export const Header = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(onLogout());
    };

    const onLogin = () => {
        setPopup(true);
    };

    const onClose = () => {
        document.body.style.overflow = 'overlay';
        setPopup(false);
    }

    const [popup, setPopup] = useState(false);

    const popupBox = popup ? <Popup onClose={onClose} /> : null;

    const login = user ?
        <button
            className='btn btn--undecorated'
            onClick={logout} >
            Выход
        </button>
        : <button
            className='btn btn--undecorated'
            onClick={onLogin}>
            Вход
        </button>;

    return (
        <div className='header container'>
            {popupBox}
            <Link to='/'>
                <div className='logo btn' />
            </Link>
            <nav className='menu'>
                <Link to='/'>
                    Главная
                </Link>
                <Link to='/news'>
                    Новости
                </Link>
                {login}
            </nav>
        </div>
    );
};