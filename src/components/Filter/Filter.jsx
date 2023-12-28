import './Filter.css';

const Filter = ({ input }) => {
  return (
    <input
      type="text"
      className="filter"
      placeholder="Search contact"
      name="filter"
      onChange={input}
    />
  );
};

export default Filter;
