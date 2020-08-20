import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/App.css';
import './assets/css/normalize.css';

import { Header } from './components';
import { Home, Info, Setting } from './pages';

function App() {
    return (
        <div className="wrapper">
            <Header />

            <div className="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/setting" component={Setting} />
            </div>
        </div>
    );
}

export default App;
