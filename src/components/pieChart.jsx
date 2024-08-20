import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const size = {
  width: 350,
  height: 150
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel({data}) {
    
 const reverseData = [...data].reverse()
console.log(data);

  return (
    <PieChart series={[
      {
        innerRadius: 60,
        outerRadius: 40,
        data : reverseData
      },
    ]}
    margin={{ right: 50,bottom:10 }}
    width={200}
    height={200}
    legend={{hidden:true}}
    >
      <PieCenterLabel>2 Total</PieCenterLabel>
    </PieChart>
  );
}
