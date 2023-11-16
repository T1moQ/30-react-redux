import { useDispatch, useSelector } from 'react-redux'
import './Filter.css'
import {
   selectTitleFilter,
   selectAuthorFilter,
   setTitleFilter,
   setAuthorFilter,
   resetFilter
} from '../../redux/slices/filterSlice'

const Filter = () => {

   const dispatch = useDispatch()
   const titleFilter = useSelector(selectTitleFilter)
   const authorFilter = useSelector(selectAuthorFilter)

   const filterChangeHandler = (event) => {
      dispatch(setTitleFilter(event.target.value))
   }

   const authorfilterChangeHandler = (event) => {
      dispatch(setAuthorFilter(event.target.value))
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
            <button type='button' onClick={resetFilterHandler}>Reset Filters</button>
         </div>
      </div>
   )
}

export default Filter
