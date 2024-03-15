import React from "react";

function CourseCard({ course }) {
  return (
    <div className="mb-1 p-10 border-4">
      <h2 className="mt-0">{course.title}</h2>
      <p className="my-1 mt-1 mb-1">Instructor:{course.instructor}</p>
      <p className="my-1 mt-1 mb-1">Description:{course.description}</p>
      <p className="my-1 mt-1 mb-1">Duration:{course.duration}</p>
      <p className="my-1 mt-1 mb-1">Price:{course.price}</p>
      <button className="bg-blue-500 rounded-sm w-20 h-8 text-gray-100">
        Action
      </button>
    </div>
  );
}

export default CourseCard;
