import PropTypes from 'prop-types';
import css from './FilterName.module.css'
export default function FilterName({ hendlerChangeFilter }) {
  return (
    <div className={css.div}>
      <label>Find contacts by name

      <input className={css.input}onChange={hendlerChangeFilter} type="text" name="filter" />
      </label>
    </div>
  );
}
FilterName.propTypes = {
  hendlerChangeFilter: PropTypes.func.isRequired,
};