import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.task !== nextProps.task) {
            return true;
        }
        return false;
    }

    render() {
        const { task } = this.props;
        console.log("Task.render ", task.id);
        return (<div>{task.id}</div>)
    }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;