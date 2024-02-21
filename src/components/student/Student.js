import React, { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/school/students")
      .then((response) => setStudentData(response.data))
      .catch((error) =>
        console.error("Error while loading student data", error)
      );
  }, []);
  return (
    <ol>
      123
      {studentData.map((student) => (
        <li key={student._id}>{student.firstName}</li>
      ))}
    </ol>
  );
}

export default Student;
