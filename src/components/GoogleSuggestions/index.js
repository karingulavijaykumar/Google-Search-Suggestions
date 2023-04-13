// Write your code here

import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-input-seggestions-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input-search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestion-list">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestionsDetails={eachSuggestion}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
