import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => (
    <ResponsivePie
        data={data}

        innerRadius={0.5}
        padAngle={0.7}
        fit={false}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        
    />
);

export default PieChart;
