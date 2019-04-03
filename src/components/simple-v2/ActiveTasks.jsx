import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";


class ActiveTasks extends Component {
    render() {
        console.log("ActiveTasks.render");
        const { tasks } = this.props;
        return tasks.map((task) => (<Task task={task} key={task.id}></Task>));
    }
}

ActiveTasks.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default ActiveTasks;