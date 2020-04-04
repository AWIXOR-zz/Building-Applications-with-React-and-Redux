import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";
import * as courseActions from "../../redux/actions/courseActions";
class CoursesPage extends Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }
  render() {
    return (
      <div>
        <h2>Courses</h2>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </div>
    );
  }
}

// CoursesPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   courses: PropTypes.array.isRequired
// };

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse
// };

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
