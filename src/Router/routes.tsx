import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { lazy, Suspense } from 'react';

const Inicio = lazy(() => import('../pages/Inicio'));
const Cardapio = lazy(() => import('../pages/Cardapio'));
const MainPage = lazy(() => import('../components/MainPage'));
const Sobre = lazy(() => import('../pages/Sobre'));
const Prato = lazy(() => import('../pages/Prato'));
const NotFound = lazy(() => import('../pages/NotFound'));


export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Suspense fallback={<p> Carregando... </p>}>
                    <Routes>
                        <Route path='/' element={<MainPage />}>
                            <Route index element={<Inicio />} />
                            <Route path='cardapio' element={<Cardapio />} />
                            <Route path='sobre' element={<Sobre />} />
                            <Route path='prato/:id' element={<Prato />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </main>
    );
}



