import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import CourseForm from "./CourseForm";

import { newCourse } from "../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [error, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((err) => {
        alert("Loading courses Failed" + err);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((err) => {
        alert("Loading authors Failed" + err);
      });
    }
  }, []);

  return (
    <div>
      <CourseForm course={course} error={error} authors={authors} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
