import './CostsFilter.css';

const CostsFilter = (props) => {
  const yearsCost = [];
  function onlyUnique(array) {
    for (let i = 0; i < array.length; i++) {
      if (!yearsCost.includes(array[i].date.getFullYear()))
        yearsCost.push(array[i].date.getFullYear());
    }
  }
  onlyUnique(props.costs);
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          {yearsCost.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
