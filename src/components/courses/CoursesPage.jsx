import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseList from "./CourseList";
class CoursesPage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      this.props.actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
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
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}
function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
