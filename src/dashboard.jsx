import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LoopIcon from '@mui/icons-material/Loop';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import PieChartWithCenterLabel from './components/pieChart';
import graph from './assets/analysis.png';
import { styled } from '@mui/material/styles';

const CloudAccountData = [
    { value: 2, label: 'Not Connected', color: '#c4e0eb' },
    { value: 2, label: 'Connected', color: '#0088FE' },
];

const CloudAccountRiskData = [
    { value: 7253, label: 'Passed', color: '#19A55A' },
    { value: 106, label: 'Not available', color: '#E1EBFF' },
    { value: 681, label: 'Warning', color: '#FAD732' },
    { value: 1689, label: 'Failed', color: '#B9140F' },
];

const Dashboard = () => {

    // Custom Button styles
    const CustomButton = styled(Button)({
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '6px 10px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'white'
        }
    });

    const AddToWidgetStyle = styled(Button)({
        color: 'black',
        border: '1px solid grey',
        padding: '6px 10px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'inherit',
            border: '1px solid grey'
        }
    });

    const CustomDialog = styled(Dialog)({
        '& .MuiDialog-container': {
            position: 'absolute !important',
            right: 0,
        },
        '& .MuiPaper-root': {
            width: '100%',
        },
    });

    const buttonStyle = { color: '#101d6b', border: '2px solid #101d6b', boxShadow: 'none' };

    return (
        <div>
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h5>CNAPP Dashboard</h5>
                </div>
                <div className="dashboard-btn-container">
                    <CustomButton variant="contained" endIcon={<AddIcon />}>
                        Add Widget
                    </CustomButton>
                    <CustomButton variant="contained"><LoopIcon /></CustomButton>
                    <CustomButton variant="contained"><MoreVertIcon /></CustomButton>
                    <CustomButton variant="contained" startIcon={<WatchLaterIcon />} endIcon={<KeyboardArrowDownIcon />} sx={{ ...buttonStyle }}>Last 2 days</CustomButton>
                </div>
            </div>
            <div className="category">
                <div className="cspm-executive-dashboard">
                    <h6>CSPM Executive Dashboard</h6>
                    <div className="box-container cspm-executive-box">
                        <Box className="box">
                            <p>Cloud Accounts</p>
                            <div>
                                <PieChartWithCenterLabel data={CloudAccountData} />
                            </div>
                        </Box>
                        <Box className="box">
                            <p>Cloud Account Risk Assessment</p>
                            <div>
                                <PieChartWithCenterLabel data={CloudAccountRiskData} />
                            </div>
                        </Box>
                        <Box className="box add-widget-box">
                            <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />}>Add Widget</AddToWidgetStyle>
                        </Box>
                    </div>
                </div>
                <div className="cwpp-dashboard">
                    <h6>CWPP Dashboard:</h6>
                    <div className="box-container">
                        <Box className="box">
                            <p>Top 5 Namespace Specific Alerts</p>
                            <div className="no-data">
                                <img src={graph} alt="graph" width="40px" />
                                <p>No Graph data available</p>
                            </div>
                        </Box>
                        <Box className="box">
                            <p>Workload Alerts</p>
                            <div className="no-data">
                                <img src={graph} alt="graph" width="40px" />
                                <p>No Graph data available</p>
                            </div>
                        </Box>
                        <Box className="box add-widget-box">
                            <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />}>Add Widget</AddToWidgetStyle>
                        </Box>
                    </div>
                </div>
                <div className="registry-scan">
                    <h6>Registry Scan</h6>
                    <div className="box-container">
                        <Box className="box">
                            <p>Image Risk Assessment</p>
                            <p>1470<span>Total Vulnerabilities</span></p>
                        </Box>
                        <Box className="box">
                            <p>Image Security Issues</p>
                            <p>2<span>Total Images</span></p>
                        </Box>
                        <Box className="box add-widget-box">
                            <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />}>Add Widget</AddToWidgetStyle>
                        </Box>
                    </div>
                </div>
            </div>
            <CustomDialog open={true} maxWidth="md">
                <DialogTitle sx={{ backgroundColor: '#101d6b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                    <p>Add Widget</p>
                    <IconButton><CloseIcon sx={{ color: 'white' }} /></IconButton>
                </DialogTitle>
                <DialogContent>
                    <p>Personalize your dashboard by adding the following widget</p>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined">Cancel</Button>
                    <Button variant="contained">Confirm</Button>
                </DialogActions>
            </CustomDialog>
        </div>
    );
}

export default Dashboard;
