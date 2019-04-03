import React, {PureComponent} from 'react';
import './App.css';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {Refresh, CompareArrows, Favorite, Warning} from '@material-ui/icons';
import SimpleStore from "./components/simple/SimpleStore";
import ShouldComponentUpdateContainer from "./components/shouldComponentUpdate/ShouldComponentUpdateContainer";
import PureComponentContainer from "./components/pureComponent/PureComponentContainer";
import SimpleStoreV2 from "./components/simple-v2/SimpleStoreV2";
import PureComponentContainerV2 from "./components/pureComponent-v2/PureComponentContainerV2";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            option: "COMPONENT"
        }
    }

    onSelect = (event, option) => {
        this.setState({ option });
    };

    renderOptions() {
        const { option } = this.state;
        if (option === "COMPONENT") {
            return <SimpleStore />
        } else if (option === "SHOULDCOMPONENTUPDATE") {
            return <ShouldComponentUpdateContainer />
        } else if (option === "PURECOMPONENT") {
            return <PureComponentContainer />
        } else if (option === "COMPONENT-V2") {
            return <SimpleStoreV2 />
        } else if (option === "PURECOMPONENT-V2") {
            return <PureComponentContainerV2 />
        }
    }

    render() {
        const { option } = this.state;

        return (
            <div>
                <BottomNavigation value={option} onChange={this.onSelect}>
                    <BottomNavigationAction value="COMPONENT" icon={<Refresh/>} label="Component" />
                    <BottomNavigationAction value="SHOULDCOMPONENTUPDATE" icon={<CompareArrows/>} label="Component with shouldComponentUpdate" />
                    <BottomNavigationAction value="PURECOMPONENT" icon={<Favorite/>} label="PureComponent" />
                    <BottomNavigationAction value="COMPONENT-V2" icon={<Warning/>} label="Component V2" />
                    <BottomNavigationAction value="PURECOMPONENT-V2" icon={<Warning/>} label="PureComponent V2" />
                </BottomNavigation>
                { this.renderOptions() }
            </div>
        );
    }
}

export default App;
