import React from "react";
import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <div className="flex">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
