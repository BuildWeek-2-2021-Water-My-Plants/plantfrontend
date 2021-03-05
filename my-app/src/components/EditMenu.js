import React from 'react';

const EditMenu = ({ plantToEdit, saveEdit, setPlantToEdit, setEditing }) => {
    return(
    <form onSubmit={saveEdit}>
      <legend>Edit Plant</legend>
      <br />
        <div className="form-group">
          <label htmlFor="nickname">Name: </label>
          <input
            onChange={(e) => 
            setPlantToEdit({...plantToEdit, nickname: e.target.value})}
            value={plantToEdit.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="species">Species: </label>
          <input
            onChange={(e) => 
                setPlantToEdit({...plantToEdit, species: e.target.value})}
            value={plantToEdit.species}
            name="species"
            id="species"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="h20">How often to water: </label>
          <input
            onChange={(e) => 
                setPlantToEdit({...plantToEdit, h20: e.target.value})}
            value={plantToEdit.h20}
            name="h20"
            id="h20"
          />
        </div>
        <br />
        <div>
          <button type="submit">Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
    </form>
    )
}

export default EditMenu;