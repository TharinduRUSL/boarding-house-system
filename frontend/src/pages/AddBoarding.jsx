function AddBoarding() {
  return (
    <div className="page">
      <h1>Add Boarding Place</h1>

      <form className="form">
        <input type="text" placeholder="Boarding title" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Address" />
        <input type="number" placeholder="Monthly price" />

        <select>
          <option value="">Select gender type</option>
          <option value="BOYS_ONLY">Boys Only</option>
          <option value="GIRLS_ONLY">Girls Only</option>
          <option value="BOYS_AND_GIRLS">Boys and Girls</option>
          <option value="ANY">Any</option>
        </select>

        <select>
          <option value="">Select room type</option>
          <option value="SINGLE">Single Room</option>
          <option value="SHARED">Shared Room</option>
          <option value="DOUBLE">Double Room</option>
          <option value="DORMITORY">Dormitory</option>
        </select>

        <textarea placeholder="Description"></textarea>

        <button type="button" className="btn primary">
          Add Boarding
        </button>
      </form>
    </div>
  );
}

export default AddBoarding;