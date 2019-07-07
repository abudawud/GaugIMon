import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import Sensors from './pages/Sensors';
import Wrapper from './Wrapper';

function App(): React.Node {
    return (
        <Router>
            <Switch>
                <Route
                    exact 
                    path="/" 
                    render={(props) => <Wrapper {...props} title="Dashboard"><Homepage/></Wrapper>} 
                />

                <Route
                    exact 
                    path="/Sensors" 
                    render={(props) => <Wrapper {...props} title="Sensor Detail"><Sensors/></Wrapper>} 
                />
            </Switch>
        </Router>
    );
}

export default App;