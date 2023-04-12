import './movie-list-item.css';

const MovieListItem = ({  name, viewers, favourite }) => {
  return (
    <li className={`list-group-item d-flex justfiy-content-between ${favourite && "favourite"}`}>
      <span className='list-group-item-label'>{name}</span>
      <input type="number" className='list-group-item-input' defaultValue={viewers} />
      <div className='d-flex justfiy-content-center align-items-center'>
        <button type='button' className='btn-cookie btn-sm'>
          <i className='fas fa-cookie'></i>
        </button>
        <button type='button' className='btn-trash btn-sm'>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  )
}

export default MovieListItem