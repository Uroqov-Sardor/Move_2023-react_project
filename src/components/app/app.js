import "./app.css";

import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Shelbeylar oilasi",
          viewers: 850,
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Aka-uka Creylar",
          viewers: 1050,
          favourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Panjara ortida",
          viewers: 1050,
          favourite: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({ data: data.filter((c) => c.id !== id) }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  updateTermHandler = (term) => this.setState({ term });

  render() {
    const { data, term } = this.state;
    const allMoviesCount = data.length;
    const allMovieFavourite = data.filter((c) => c.favourite).length;
    const visibleData = this.searchHandler(data, term);
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            allMovieFavourite={allMovieFavourite}
          />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter />
          </div>
          <MovieList
            data={visibleData}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
