import './gridsystem.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './routes'
import { ScrollToTop } from './components'
import Homepage from './pages/Homepage'
function App() {
    //Tạo các Route
    const showContentMenus = () => {
        let result = null;
        result = routes.map((route, index) => {
            return (
                (route.path==='/' ||route.path==='/login' ||route.path==='/event' ||route.path==='/review')?
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />:<Route
                key={index}
                path={route.path}
                element={localStorage.getItem('role')?route.element:<Homepage/>}
                // element={route.element}
            />
            )
        })
        return <Routes>{result}</Routes>;
    }

    return (
        <Router>
            <ScrollToTop>
                {showContentMenus(routes)}
            </ScrollToTop>
        </Router>
    );
}

export default App;
