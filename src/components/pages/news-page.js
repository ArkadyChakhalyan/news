import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import './pages.scss';

export const NewsPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const news = useSelector((state) => state.news.find((item) => {
        return item.id === +id;
    }))

    const { title, date, text } = news;

    return (
        <div className='page'>
            <button
                className='btn--submit back'
                onClick={() => navigate(-1)}>
                Go back
            </button>
            <div className='container news'>
                <h1 className='news__title'>{title}</h1>
                <p className='news__date'>{date}</p>
                <p className='news__text'>{text}</p>
            </div>
        </div>
    );
};