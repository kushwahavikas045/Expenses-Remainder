import React from 'react'
import '../Styles/Chart.css';
import Grid from '../UI/Grid';
import ChartBar from './ChartBar';
const Chart = ({dataPoints}) => {
     const calculatedValue  = dataPoints.map((point) => point.value);
     const MaximumExpenses = Math.max(...calculatedValue);
    return (
        <Grid>
        <div className="chart">
            {dataPoints.map((datapoint) =>(
                <ChartBar
                key={datapoint.label}
                value={datapoint.value}
                maxValue = {MaximumExpenses}
                label = {datapoint.label}
                />
            ))}
        </div>
        </Grid>
    )
}

export default Chart;
