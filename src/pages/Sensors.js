import * as React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Gauge from '../components/Gauge';
import Chart from '../components/Chart';
import { Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import '../css/Sensors.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 1),
        textAlign: "center",
        height: 300
    },
    bigAvatar: {
        margin: '15px auto',
        width: 190,
        height: 190,
    },
    chart: {
        height: 270
    },
    table: {
        height: "100%"
    },
    tbody: {
        height: '85%',
        overflowY: "auto",
        overflowX: "hidden"
    }
}));

function Sensors() {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
                <Paper className={classes.root}>
                    <Gauge value={3}>

                    </Gauge>
                </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
                <Paper className={classes.root}>
                    <Typography variant="h6" gutterBottom>
                        Device Information
                </Typography>
                    <div style={{ height: '85%', overflow: ' auto' }}>
                        <table className='table-info' width="100%">
                            <tbody className={classes.tbody}>
                                <tr>
                                    <td className="bold">Seonsor ID</td>
                                    <td>:</td>
                                    <td>S1</td>
                                </tr>
                                <tr>
                                    <td ><b>Sensor Name</b></td>
                                    <td>:</td>
                                    <td >Sensor Gas 1</td>
                                </tr>
                                <tr>
                                    <td ><b>Vendor</b></td>
                                    <td>:</td>
                                    <td >Advantech Ltd.</td>
                                </tr>
                                <tr>
                                    <td className="bold">Model Sensor</td>
                                    <td>:</td>
                                    <td>FDD-877721XD-9N</td>
                                </tr>
                                <tr>
                                    <td className="bold">Range Value</td>
                                    <td>:</td>
                                    <td>0 - 100 psi</td>
                                </tr>
                                <tr>
                                    <td className="bold">Description</td>
                                    <td>:</td>
                                    <td>Monitoring NH3 Room Pressure</td>
                                </tr>
                                <tr>
                                    <td className="bold">Location</td>
                                    <td>:</td>
                                    <td>Middle Room</td>
                                </tr>
                                <tr>
                                    <td className="bold">Target</td>
                                    <td>:</td>
                                    <td>Unit 14</td>
                                </tr>
                                <tr>
                                    <td className="bold">Installed At</td>
                                    <td>:</td>
                                    <td>03 Jan 2017</td>
                                </tr>
                                <tr>
                                    <td className="bold">Last Checked</td>
                                    <td>:</td>
                                    <td>28 May 2019</td>
                                </tr>
                                <tr>
                                    <td className="bold">Last Repaired</td>
                                    <td>:</td>
                                    <td>Never</td>
                                </tr>
                                <tr>
                                    <td className="bold">Condition</td>
                                    <td>:</td>
                                    <td>80% (Good)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.root}>
                    <Typography variant="h6" gutterBottom>
                        Device Physic
                </Typography>
                    <Avatar alt="Remy Sharp" src={require('../static/favicon.ico')} className={classes.bigAvatar} />
                    <Typography variant="caption" gutterBottom>
                        Taken at 15 Apr 2019
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Paper >
                    <Typography style={{ textAlign: "center" }} variant="h6" gutterBottom>
                        Sensor Statistic (Today)
                    </Typography>
                    <Chart height={100} data={
                        {
                            labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
                            datasets: [{
                                borderColor: '#1976d2',
                                backgroundColor: 'rgba(0, 50, 200, .20)',
                                label: "Pressure (psi)",
                                data: [1, 2, 3, 4, 10, 20, 5, 16]
                            }]
                        }
                    } />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Sensors;