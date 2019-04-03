import React, { memo } from "react";
import PropTypes from "prop-types";

const Task = ({ task }) => {
    console.log("Task.render ", task.id);
    return (<div>{task.id}</div>)
};

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default memo(Task);