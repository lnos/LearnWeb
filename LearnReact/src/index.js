import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyCt_0NgE-UyEyPUcIIpWQVbjkstffTORAM';

const App = () => {
    return <div>
        <SearchBar/>
    </div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'));