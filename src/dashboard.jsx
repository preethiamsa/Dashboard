import React from 'react'
import { Box, Button, colors } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import LoopIcon from '@mui/icons-material/Loop';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PieChartWithCenterLabel from './components/pieChart';
import graph from './assets/analysis.png'
const CloudAccountData = [
    { value: 50, label: 'Connected(2)', color: '#0088FE'},
    { value: 50, label: 'Not Connect' , color: '#c4e0eb'}
];

const Dashboard = () => {
    return (
        <div>
            <div className='dashboard-header'>
                <div className='dashboard-title'>
                    <h5>CNAPP Dashboard</h5>
                </div>
                <div className='dashboard-btn-container'>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        Add Widget
                    </Button>
                    <Button variant="contained"><LoopIcon /></Button>
                    <Button variant="contained"><MoreVertIcon /></Button>
                    <Button variant='contained' startIcon={<WatchLaterIcon />} endIcon={<KeyboardArrowDownIcon />}>| Last 2 days</Button>
                </div>
            </div>
            <div className='category'>
                <div className='cspm-executive-dashboard'>
                    <h6>CSPM Executive Dashboard</h6>
                    <div className='box-container cspm-executive-box'>
                        <Box className="box">
                            <p>Cloud Accounts</p>
                            <div>
                                <PieChartWithCenterLabel data={CloudAccountData} />
                            </div>
                        </Box>
                        <Box className="box">
                            <p>Cloud Account Risk Assessment</p>
                            <div>
                                <PieChartWithCenterLabel data={CloudAccountData} />
                            </div>
                        </Box>
                        <Box className="box">
                            <Button variant='contained' startIcon={<AddIcon />}>Add Widget</Button>
                        </Box>
                    </div>
                </div>
                <div className='cwpp-dashboard'>
                   <h6>CWPP Dashboard:</h6>
                   <div className='box-container'>
                   <Box className="box">
                     <p>Top 5 Namespace Specific Alerts</p>
                     <div className='no-data'>
                        <img src={graph} alt='graph' width={'40px'}/>
                        <p>No Graph data available</p>
                     </div>
                   </Box>
                   <Box className="box">
                     <p>Workload Alerts</p>
                     <div className='no-data'>
                        <img src={graph} alt='graph' width={'40px'}/>
                        <p>No Graph data available</p>
                     </div>
                   </Box>
                   <Box className="box">
                            <Button variant='contained' startIcon={<AddIcon />}>Add Widget</Button>
                    </Box>
                   </div>
                </div>
                <div className='registry-scan'>
                  <h6>Registry Scan</h6>
                  <div className='box-container'>
                  <Box className='box'>
                    <p>Image Risk Assessment</p>
                    <p>1470<span>Total Vulnerablities</span></p>
                  </Box>
                  <Box className='box'>
                    <p>Image Security Issues</p>
                    <p>2<span>Total Images</span></p>
                  </Box>
                  <Box className="box">
                    <Button variant='contained' startIcon={<AddIcon />}>Add Widget</Button>
                  </Box>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard