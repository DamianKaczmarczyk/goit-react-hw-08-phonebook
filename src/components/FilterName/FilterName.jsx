import { useDispatch } from 'react-redux';
import { getFilterName } from 'redux/reducer/filterSplice';
import css from './FilterName.module.css'
export default function FilterName() {
  const dispatch = useDispatch();

  const handlerChangeFilter = event => {
    return dispatch(getFilterName(event.target.value));
  };
  return (
    <div className={css.div}>
      <label>Find contacts by name

      <input className={css.input}onChange={handlerChangeFilter} type="text" name="filter" />
      </label>
    </div>
  );
}
