import React, { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/student/")
      .then((response) => setStudentData(response.data))
      .catch((error) =>
        console.error("Error while loading student data", error)
      );
  }, []);
  return (
    <ol>
      {studentData.map((student) => (
        <li key={student._id}>{student.firstName + " " + student.lastName}</li>
      ))}
    </ol>
  );
}

export default Student;
