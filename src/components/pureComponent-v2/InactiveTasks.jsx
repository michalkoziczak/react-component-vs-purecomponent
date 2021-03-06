import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Task from "./Task";


class InactiveTasks extends PureComponent {
    render() {
        console.log("InactiveTasks.render");
        const { tasks } = this.props;
        return tasks.map((task) => (<Task task={task} key={task.id}></Task>));
    }
}

InactiveTasks.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default InactiveTasks;