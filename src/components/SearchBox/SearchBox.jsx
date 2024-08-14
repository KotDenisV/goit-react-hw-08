import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const dispatch = useDispatch();
  
    return (
      <div className={s.searchWrapper}> 
        <label className={s.label}>
            <span>Finde contacts by name</span>
            <input
                className={s.input}
                type="text"                
                onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
        </label>
      </div>       
    );
}

export default SearchBox;