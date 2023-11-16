import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import {
   selectTitleFilter,
   selectAuthorFilter,
   selectOnlyFavoriteFilter,
   setTitleFilter,
   setAuthorFilter,
   setOnlyFavorite,
   resetFilter
} from '../../redux/slices/filterSlice'

const Filter = () => {

   const dispatch = useDispatch()
   const titleFilter = useSelector(selectTitleFilter)
   const authorFilter = useSelector(selectAuthorFilter)
   const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

   const filterChangeHandler = (event) => {
      dispatch(setTitleFilter(event.target.value))
   }

   const authorfilterChangeHandler = (event) => {
      dispatch(setAuthorFilter(event.target.value))
   }

   const onlyFavoriteChangeHandler = () => {
      dispatch(setOnlyFavorite())
   }

   const resetFilterHandler = () => {
      dispatch(resetFilter())
   }

   return (
      <div className='app-block filter'>
         <div className="filter-row">
            <div className="filter-group">
               <input
                  type="text"
                  value={titleFilter}
                  placeholder="Filter by title..."
                  onChange={filterChangeHandler} />
            </div>
            <div className="filter-group">
               <input
                  type="text"
                  value={authorFilter}
                  placeholder='Filter by author...'
                  onChange={authorfilterChangeHandler} />
            </div>
            <div className="filter-group">
               <label>
                  <input
                     type="checkbox"
                     checked={onlyFavoriteFilter}
                     onChange={onlyFavoriteChangeHandler} />
                  Only Favorite
               </label>
            </div>
            <button type='button' onClick={resetFilterHandler}>Reset Filters</button>
         </div>
      </div>
   )
}

export default Filter
