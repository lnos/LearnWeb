import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{
 
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers:{
                Authorization: 'Client-ID a74843272610528434af31f3753639279b06fbe45837f037024a7ca9650d5ba6'
            }
        });
    }

    render(){
        return (
            <div className='ui container' style={{marginTop: '1.5rem'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    };
}

export default App;