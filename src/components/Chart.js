import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => <Line height={props.height} data={props.data} options={props.options} />;

export default Chart;