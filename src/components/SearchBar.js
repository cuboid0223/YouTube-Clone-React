import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";

export class SearchBar extends Component {
    state = {
        searchTerm: '',

    }
    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);

    }
  render() {
    return (
      <div className="searchBar">
        <div className="searchBar__left">
          <MenuIcon className="MenuIcon" />
          <img
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
            alt="youtube-logo"
          />
        </div>
        <div className="searchBar__center">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="搜尋"
              onChange={this.handleChange}
            />
            <Button className="searchBar__center__searchBtn">
              <SearchIcon />
            </Button>
          </form>
        </div>
        <div className="searchBar__right">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar className="searchBar__right__avatar" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
