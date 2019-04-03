import React, { Component } from "react";
import PropTypes from "prop-types";
import ActiveTasks from "./ActiveTasks";
import InactiveTasks from "./InactiveTasks";
import { Grid } from "@material-ui/core";

class TaskLists extends Component {
    render() {
        console.log("TaskLists.render");
        const { active, inactive } = this.props;
        return <Grid container direction="row">
            <Grid item xs={6}>
                <ActiveTasks tasks={active} />
            </Grid>
            <Grid item xs={6}>
                <InactiveTasks tasks={inactive}/>
            </Grid>
        </Grid>;
    }
}

TaskLists.propTypes = {
    active: PropTypes.array.isRequired,
    inactive: PropTypes.array.isRequired
};

export default TaskLists;