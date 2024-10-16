import './CostsFilter.css';

const CostsFilter = (props) => {
  const yearsCost = [];
  function onlyUnique(array) {
    for (let i = 0; i < array.length; i++) {
      if (!yearsCost.includes(array[i].date.getFullYear()))
        yearsCost.push(array[i].date.getFullYear());
      // console.log(yearsCost);
    }
  }
  onlyUnique(props.costs);
  const yearChangeHandler = (event) => {
    // console.log(props.costs);
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          {/* {yearsCost.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))} */}
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
