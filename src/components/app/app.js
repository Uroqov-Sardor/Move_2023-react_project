import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
  const data = [
    { name: "Shelbeylar oilasi", viewers: 850, favourite: false, id: 1 },
    { name: "Aka-uka Creylar", viewers: 1050, favourite: true, id: 2 },
    { name: "Panjara ortida", viewers: 1050, favourite: false, id: 3 },
  ];
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
