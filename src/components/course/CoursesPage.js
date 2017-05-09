import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course : {title: "Course 1"}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
 
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  coursesRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courseList.map(this.coursesRow)}
        <h2>Add Course</h2>
        <input type="text"
               value={this.state.course.title}
               onChange={this.onTitleChange}/>
        <input type="submit"
               value="Save"
               onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courseList: PropTypes.array.isRequired
};

function mapState(state, ownProps) {
  return {
    courseList: state.courses
  }
}

export default connect(mapState)(CoursesPage);
