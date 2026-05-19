function Boardings() {
  return (
    <div className="page">
      <h1>Available Boarding Places</h1>

      <div className="filter-box">
        <input type="text" placeholder="Search by location" />
        <select>
          <option value="">Gender Type</option>
          <option value="BOYS_ONLY">Boys Only</option>
          <option value="GIRLS_ONLY">Girls Only</option>
          <option value="ANY">Any</option>
        </select>
        <input type="number" placeholder="Max price" />
        <button className="btn primary">Search</button>
      </div>

      <p className="empty-text">
        Boarding list will be loaded from backend API in the next step.
      </p>
    </div>
  );
}

export default Boardings;