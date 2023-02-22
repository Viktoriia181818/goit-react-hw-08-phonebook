import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contactinfo/selector';
import { setFilter } from 'redux/contactinfo/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

     const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  
    return (
        <div>
            <label className={css.label}>Find contacts by Name</label>
            <input className={css.input} type="filter" name='filter' placeholder='Filter'
                value={filter} onChange={handleChange}
            >
            
            </input>
        </div>
    )
   
}