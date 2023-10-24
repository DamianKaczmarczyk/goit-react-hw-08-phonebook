import PropTypes from 'prop-types';
export default function FilterName({ hendlerChangeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>

      <input onChange={hendlerChangeFilter} type="text" name="filter" />
    </div>
  );
}
FilterName.propTypes = {
  hendlerChangeFilter: PropTypes.func.isRequired,
};