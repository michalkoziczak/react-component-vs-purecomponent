import React, { PureComponent } from "react";
import { Button } from "@material-ui/core";
import TaskList from "./TaskLists";
import { Grid } from "@material-ui/core";

let index = 0;


class PureComponentContainer extends PureComponent {
    state = {
        activeTasks: [],
        inactiveTasks: []
    };

    addActiveTask = () => {
        this.setState({
            activeTasks: [...this.state.activeTasks, { id: index++ }]
        })
    };

    addInactiveTask = () => {
        this.setState({
            inactiveTasks: [...this.state.inactiveTasks, { id: index++ }]
        })
    };

    render() {
        console.log("PureComponentContainer.render");
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

export default PureComponentContainer;