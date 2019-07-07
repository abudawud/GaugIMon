import * as React from "react";
import Grid from '@material-ui/core/Grid';
import GCard from '../components/GCard';
import Gauge from '../components/Gauge';

function Homepage(props) {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
                <GCard title="Sensor Gas 1" avatar="S1" subheader="Unit 14/Middle Room">
                    <Gauge value={props.sensors.s1}>

                    </Gauge>
                </GCard>
            </Grid>

            <Grid item xs={12} md={4}>
                <GCard title="Sensor Gas F3" avatar="S2" subheader="Unit 23/Middle Room">
                    <Gauge value={props.sensors.s2}>

                    </Gauge>
                </GCard>
            </Grid>

            <Grid item xs={12} md={4}>
                <GCard title="Sensor Gas D2" avatar="S3" subheader="Unit F6-22/Boiler A">
                    <Gauge value={props.sensors.s3}>

                    </Gauge>
                </GCard>
            </Grid>

            <Grid item xs={12} md={4}>
                <GCard title="Sensor Gas L2" avatar="S4" subheader="Unit B22/Room A1">
                    <Gauge value={props.sensors.s4}>

                    </Gauge>
                </GCard>
            </Grid>

            <Grid item xs={12} md={4}>
                <GCard title="Sensor Gas T44" avatar="S5" subheader="Unit G7/Basement">
                    <Gauge value={props.sensors.s5}>

                    </Gauge>
                </GCard>
            </Grid>

            <Grid item xs={12} md={4}>
                <GCard title="Sensor Gas T45" avatar="S6" subheader="Unit G8/Basement A">
                    <Gauge value={props.sensors.s6}>

                    </Gauge>
                </GCard>
            </Grid>
        </Grid>
    );
}

export default Homepage;