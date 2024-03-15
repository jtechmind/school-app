import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CourseList from "./CourseList";
function Course() {
  const courseFakeData = ["java", "c", "c++"];
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/course/")
      .then((response) => setCourses(response.data))
      .catch((error) =>
        console.error("Error while getting all courses", error)
      );
  }, []);
  return (
    // <div className="flex flex-row gap-3">
    //   {courses.map((course) => (
    //     <div className="" key={course.id}>
    //       {course.name}
    //     </div>
    //   ))}
    // </div>
    <div>
      <CourseList courses={courseFakeData} />
    </div>
  );
}

export default Course;
