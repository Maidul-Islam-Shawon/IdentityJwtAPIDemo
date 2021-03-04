import React, { useState } from "react";
import axios from "axios";

function CoursesPage() {
  const [weather, setWeather] = useState([]);

  axios.get(`https://localhost:44393/weatherforecast`).then((res) => {
    setWeather(res.data);
  }, []);

  return (
    <div>
      <h2>Courses</h2>

      <br />
      <h2>Weather List</h2>

      <ul>
        {/* {weather.map((m) => (
          <li key={m.date}>{m.summary}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default CoursesPage;
