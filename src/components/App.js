import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 37ad812b117ddfc782666b8f04441f1acdd0ea7c62597c1defbcf7f13341b014'
      }
    })
    this.setState({ images: response.data.results })
  }
  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.length}
        <ImageList />
      </div>
    )
  }
}

export default App
