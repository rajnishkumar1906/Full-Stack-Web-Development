// Students.jsx
import React from 'react';

const Students = ({ user, age, city, onAdd }) => {
  return (
    <div className="student-card">
      <p>Name : {user}</p>
      <p>Age : {age}</p>
      <p>Location : {city}</p>

      {/* Optional button for cloning this student */}
      {onAdd && (
        <button className="add-btn" onClick={onAdd}>
          Add friend
        </button>
      )}
    </div>
  );
};

export default Students;
