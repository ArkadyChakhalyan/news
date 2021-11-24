import { Route, Routes } from 'react-router';
import { Header } from '../header/header';
import { MainPage } from '../pages/main-page';
import { NewsListPage } from '../pages/news-list-page';
import { NewsPage } from '../pages/news-page';
import './app.scss';

export const App = () => {

    return (
        <div className='container'>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/news' element={<NewsListPage />} />
                <Route path='/news/:id' element={<NewsPage />} />
            </Routes>
        </div>
    );
};