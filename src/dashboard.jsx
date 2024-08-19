import React, { useContext, useEffect } from 'react';
import { Box, Button, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LoopIcon from '@mui/icons-material/Loop';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PieChartWithCenterLabel from './components/pieChart';
import graph from './assets/analysis.png';
import DialogBox from './components/dialogBox';
import { useState } from 'react';
import DataContext from './context/context';


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
const buttonStyle = { color: '#101d6b', border: '2px solid #101d6b', boxShadow: 'none' };


const Dashboard = () => {

    const [open, setOpen] = useState(false);


    const { data } = useContext(DataContext)

    const addWidgetBtn = () => {
        setOpen(true);
    }

    useEffect(() => {
        Object.keys(data.category).forEach((categoryKey) => {
            data.category[categoryKey].forEach((item) => {
                if (item.data) {
                    item.data.forEach((val) => {
                        switch (val.label) {
                            case 'Not Connected': {
                                val.color = '#c4e0eb';
                                break;
                            }
                            case 'Connected': {
                                val.color = '#0088FE';
                                break;
                            }
                            case 'Passed': {
                                val.color = '#19A55A';
                                break;
                            }
                            case 'Not available': {
                                val.color = '#E1EBFF';
                                break;
                            }
                            case 'Warning': {
                                val.color = '#FAD732';
                                break;
                            }
                            case 'Failed': {
                                val.color = '#B9140F';
                                break;
                            }
                            default:
                                break;
                        }
                    });
                }
            });
        });

        console.log(data);


        console.log(data);

    }, [])


    return (
        <div>
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h5>CNAPP Dashboard</h5>
                </div>
                <div className="dashboard-btn-container">
                    <CustomButton variant="contained" endIcon={<AddIcon />} onClick={addWidgetBtn}>
                        Add Widget
                    </CustomButton>
                    <CustomButton variant="contained"><LoopIcon /></CustomButton>
                    <CustomButton variant="contained"><MoreVertIcon /></CustomButton>
                    <CustomButton variant="contained" startIcon={<WatchLaterIcon />} endIcon={<KeyboardArrowDownIcon />} sx={{ ...buttonStyle }}>Last 2 days</CustomButton>
                </div>
            </div>
            <div className="category">
                {Object.keys(data.category).map((key) => (
                    <div key={key}>
                        <h6>{key}</h6>
                        <div className="box-container">
                            {data.category[key].map((element, index) => (
                                <Box className="box" key={index}>
                                    <p>{element.title}</p>
                                    {key === "Registry Scan" ? <>
                                        <p>{element.total}<span> Total {index == 0 ? "Vulnerabilities" : "Images"}</span></p>
                                        <div className='parent'>
                                            <div className='div1'></div>
                                            <div className='div2'></div>
                                            <div className='div3'></div>
                                            <div className='div4'></div>
                                        </div>
                                    </> :
                                        !element.data ? <div className="no-data">
                                            <img src={graph} alt="graph" width="40px" />
                                            <p>No Graph data available</p>
                                        </div> : <div>
                                            <PieChartWithCenterLabel data={element.data} />
                                        </div>}
                                </Box>
                            ))}
                            <Box className="box add-widget-box">
                                <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />} onClick={addWidgetBtn}>Add Widget</AddToWidgetStyle>
                            </Box>
                        </div>
                    </div>
                ))}
                {/* <div className="cspm-executive-dashboard">
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
                            <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />} onClick={addWidgetBtn}>Add Widget</AddToWidgetStyle>
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
                            <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />} onClick={addWidgetBtn}>Add Widget</AddToWidgetStyle>
                        </Box>
                    </div>
                </div>
                <div className="registry-scan">
                    <h6>Registry Scan</h6>
                    <div className="box-container">
                        <Box className="box">
                            <p>Image Risk Assessment</p>
                            <p>1470<span>Total Vulnerabilities</span></p>
                            <div className='parent'>
                                <div className='div1'></div>
                                <div className='div2'></div>
                                <div className='div3'></div>
                                <div className='div4'></div>
                            </div>
                        </Box>
                        <Box className="box">
                            <p>Image Security Issues</p>
                            <p>2<span>Total Images</span></p>
                            <div>
                                <div className='parent'>
                                    <div className='div1'></div>
                                    <div className='div2'></div>
                                    <div className='div3'></div>
                                    <div className='div4'></div>
                                </div>
                            </div>
                        </Box>
                        <Box className="box add-widget-box">
                            <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />} onClick={addWidgetBtn}>Add Widget</AddToWidgetStyle>
                        </Box>
                    </div>
                </div> */}
                <DialogBox open={open} setOpen={setOpen} />
            </div>
        </div>
    );
}

export default Dashboard;
