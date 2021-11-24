import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './pages.scss';

export const NewsListPage = () => {

    const news = useSelector((state) => state.news);

    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <ul className='page'>
            <input 
                className='search'
                placeholder='Search'
                onChange={onChange} />
            {
                news.filter((item) => {
                    return (
                        item.title.toLowerCase().includes(search.toLowerCase())
                        || item.text.toLowerCase().includes(search.toLowerCase())
                    );
                })
                .map((item) => {

                    return (
                        <li key={item.id}>
                            <Link to={`/news/${item.id}`}>
                                <NewsItem news={item} />
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

const NewsItem = ({ news }) => {

    const { title, text, date } = news;

    return (
        <div className='news-item'>
            <span className='news-item__title'>{title}</span>
            <span className='news-item__text'>{text}</span>
            <span className='news-item__date'>{date}</span>
        </div>
    );
};