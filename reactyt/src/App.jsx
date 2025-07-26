// App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Picture from './Components/Picture';
import Students from './Components/Students';
import './style.css';

const App = () => {
  const [data, setData] = useState([]);

  // Student list (initial)
  const [students, setStudents] = useState([
    { user: "Rajnish kumar", age: "22", city: "Deoghar" },
    { user: "Prince kumar", age: "15", city: "Deoghar" },
    { user: "Nisha Kumari", age: "15", city: "Deoghar" },
    { user: "Gangadhar Pandit", age: "48", city: "Jamui" },
    { user: "Anju Kumari", age: "41", city: "Jamui" }
  ]);

  // ✅ Fetch image data from API
  const getData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ✅ Add new student only if not already added
  const handleAddFriend = () => {
    const exists = students.some(student => student.user === "New Student");

    if (!exists) {
      const newStudent = {
        user: "New Student",
        age: "20",
        city: "Unknown"
      };
      setStudents([...students, newStudent]);
    }
  };

  return (
    <div className="app-container">
      <Navbar />

      <Form />

      <Picture />

      <h3>Students</h3>
      <div id="student">
        {students.map((student, i) => (
          <Students
            key={i}
            user={student.user}
            age={student.age}
            city={student.city}
          />
        ))}
      </div>

      <button className="getData" onClick={handleAddFriend}>Add Friend</button>

      <button onClick={getData} className="getData">Get Data</button>

      <div className="data">
        {data.map((elem, idx) => (
          <div key={idx} className="element">
            <img src={elem.download_url} alt={elem.author} />
            <p>{elem.author}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;
