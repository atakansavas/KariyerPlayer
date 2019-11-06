import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Menu from './components/Menu'
import List from './components/List'
import Player from './components/Player'

import './components/app/app.css'

export default () => (
    <React.Fragment>
        <div className="wrap" id="root">
            <div id="menu">
                <Menu />
            </div>

            <aside id="playerInfo">
                <Player />
            </aside>

            <section id="listInfo">
                <List />
            </section>
        </div>
    </React.Fragment>

);
