import React from "react";
import "./styles/AllStudentsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <div className="all-students">
      <Link to="/students/new" className="add-student">
        New Student
      </Link>
      <div>
        {props.allStudents.map((student) => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h1>
                {student.firstName} {student.lastName}
              </h1>
            </Link>
            <img src={student.imageUrl} width="200px" alt={student.firstName} />
            <br />
            <button onClick={() => props.handleDelete(student.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
