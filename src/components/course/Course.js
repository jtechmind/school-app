import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Course() {
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
    <div>
      <Card style={{ width: "18rem" }} className="flex gap-5 max-w-sm">
        {courses.map((course) => (
          <Card.Body key={course._id} className="bg-red-300">
            <Card.Img></Card.Img>
            <Card.Title className="font-semibold text-green-700">
              {course.title}
            </Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Button
              variant="primary"
              className="bg-black text-yellow-400 rounded-md"
            >
              Explore
            </Button>
          </Card.Body>
        ))}
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Course;
