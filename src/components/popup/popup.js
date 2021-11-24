import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onLogin } from '../../actions/actions';
import Service from '../../services/service';
import './popup.scss';

const service = new Service();

export const Popup = ({ onClose }) => {

    document.body.style.overflow = 'hidden';

    const dispatch = useDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = () => {
        
        service.onLogin(login, password)
            .then((result) => {
                dispatch(onLogin(result));
                setError(false)
                onClose();
            })
            .catch(() => setError(true));
    };

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const onPasswodChange = (e) => {
        setPassword(e.target.value);
    };

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (login !== '' && password !== '') {
            setDisabled(false);
        } else {
            setError(false);
            setDisabled(true);
        }
    }, [login, password])

    const onError = error ? <p className='error'>Something went wrong, try one more time!</p> : null;

    return (
        <div
            onClick={onClose}
            className='popup'>
            <div
                className='popup__box'
                onClick={(e) => e.stopPropagation()} >
                <button
                    className='btn popup__btn'
                    onClick={onClose} >
                    &times;
                </button>
                <form
                    className='form'
                    onSubmit={onSubmit} >
                    <span className='form__label'>
                        <label>Login:</label>
                        <input
                            onChange={(e) => onLoginChange(e)}
                            placeholder='login' />
                    </span>
                    <span className='form__label'>
                        <label>Password:</label>
                        <input
                            onChange={(e) => onPasswodChange(e)}
                            type='password'
                            placeholder='password' />
                    </span>
                    {onError}
                    <button
                        className='btn btn--submit'
                        type='submit'
                        disabled={disabled} >Submit</button>
                </form>
            </div>
        </div>
    );

};