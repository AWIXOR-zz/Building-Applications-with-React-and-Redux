import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";
import * as courseActions from "../../redux/actions/courseActions";
class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

// CoursesPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   courses: PropTypes.array.isRequired
// };

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions.dispatch)
  };
}
// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse
// };

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
