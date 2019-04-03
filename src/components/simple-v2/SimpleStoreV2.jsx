import React, { Component } from "react";
import { Button } from "@material-ui/core";
import TaskList from "./TaskLists";
import { Grid } from "@material-ui/core";

let index = 0;

class SimpleStoreV2 extends Component {
    state = {
        activeTasks: [],
        inactiveTasks: []
    };

    addActiveTask = () => {
        this.state.activeTasks.push({ id: index++ });
        this.setState({
            activeTasks: this.state.activeTasks
        })
    };

    addInactiveTask = () => {
        this.state.inactiveTasks.push({ id: index++ });
        this.setState({
            inactiveTasks: this.state.inactiveTasks
        })
    };

    render() {
        console.log("SimpleStoreV2.render");
        const {activeTasks, inactiveTasks} = this.state;
        return (<div>
            <Grid container direction="row">
                <Grid item xs={6}>
                    <Button variant="contained" onClick={this.addActiveTask}>Add active task</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" onClick={this.addInactiveTask}>Add inactive task</Button>
                </Grid>
            </Grid>
            <TaskList active={activeTasks} inactive={inactiveTasks} />
        </div>);
    }

}

export default SimpleStoreV2;