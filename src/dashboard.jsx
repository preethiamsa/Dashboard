import React, { useContext, useEffect } from 'react';
import { Box, Button, IconButton, InputAdornment, InputBase, styled, TextField, Typography } from '@mui/material';
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
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import dummyJson from './data.json'


const CustomButton = styled(Button)({
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '4px 8px',
    textTransform: 'capitalize',
    border: '2px solid #E7E9ED',
    '&:hover': {
        backgroundColor: 'white'
    }
});

const AddToWidgetStyle = styled(Button)({
    color: 'black',
    border: '1px solid grey',
    padding: '6px 10px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: 'inherit',
        border: '1px solid grey'
    }
});
const buttonStyle = { color: '#101d6b', border: '2px solid #101d6b', boxShadow: 'none' };

const flexBox = { display: 'flex', alignItems: 'center', gap: '10px', width: '150px' }

const Dashboard = () => {

    const [open, setOpen] = useState(false);
    const [inputVal,setInputVal] = useState('');

    const { data ,setData} = useContext(DataContext)
    const searchByTitle = (title) => {
        const result = {
          category: {}
        };
        for (const category in dummyJson.category) {
          const matchingItems = dummyJson.category[category].filter(item => item.title.includes(title));
      
          if (matchingItems.length > 0) {
            result.category[category] = matchingItems;
          }
        }
        return Object.keys(result.category).length > 0 ? result : null;
      };
      

      const handleInputChange = (e) => {
        const title = e.target.value;
        setInputVal(title);
        const result = searchByTitle(title);
        if (result) {
          setData(result)
        } else {
          console.log('Title not found.');
        }
      };


    const addWidgetBtn = () => {
        setOpen(true);
    }
 

    const ColorAssignFunc = ()=>{
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
                            case 'Critical': {
                                val.color = '#6E0F0A';
                                break;
                            }
                            case 'High': {
                                val.color = '#C82819';
                                break;
                            }
                            case 'Medium': {
                                val.color = '#EB9132';
                                break;
                            }
                            case 'Low': {
                                val.color = '#F0C341';
                                break;
                            }
                            default:
                                break;
                        }
                    });
                }
            });
        });
    }


    useEffect(() => {
        ColorAssignFunc();
    }, [])


    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'white',height:'40px',padding:'0 10px'}}>
                <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <p style={{color:'#C7CDD1'}}>Home </p>
                    <KeyboardArrowRightIcon sx={{color:'#C7CDD1'}}/>
                    <p style={{fontWeight:'600'}}>Dashboard V2</p>
                </div>
                <div>
                    <TextField
                        id="input-with-icon-textfield"
                        placeholder='Search anything...'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={inputVal}
                        onChange={handleInputChange}
                        sx={{width:'400px'}}
                        size='small'
                        variant="outlined"
                    />
                </div>
                <div style={{width:'300px',display:'flex',gap:'50px'}}>
                    <KeyboardArrowDownIcon style={{color:'#C7CDD1'}}/>
                    <NotificationsActiveOutlinedIcon style={{color:'#C7CDD1'}}/>
                </div>
            </div>
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <h5>CNAPP Dashboard</h5>
                </div>
                <div className="dashboard-btn-container">
                    <CustomButton variant="contained" endIcon={<AddIcon />} onClick={addWidgetBtn}>
                        Add Widget
                    </CustomButton>
                    <CustomButton variant="contained" sx={{ minWidth: '24px' }}><LoopIcon sx={{ width: '18px' }} /></CustomButton>
                    <CustomButton variant="contained" sx={{ minWidth: '24px' }}><MoreVertIcon sx={{ width: '18px' }} /></CustomButton>
                    <CustomButton variant="contained" startIcon={<WatchLaterIcon />} endIcon={<KeyboardArrowDownIcon />} sx={{ ...buttonStyle }}>Last 2 days</CustomButton>
                </div>
            </div>
            <div className="category">
                {Object.keys(data.category).map((key) => (
                    <div key={key}>
                        <h6 style={{ fontSize: '14px', fontWeight: '600', padding: '0 0 5px 20px' }}>{key}</h6>
                        <div className="box-container">
                            {data.category[key].map((element, index) => (
                                <Box className="box" key={index}>
                                    <p style={{ fontSize: '13px', fontWeight: '600' }}>{element.title}</p>
                                    {key === "Registry Scan" ? <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <p style={{ fontWeight: '600' }}>{element.total}<span style={{ fontWeight: '500' }}> Total {index == 0 ? "Vulnerabilities" : "Images"}</span></p>
                                        <div className='parent'>
                                            {element.data.map((e, i) => (
                                                <div style={{ backgroundColor: e.color, width: ((e.value / element.total || 7) * 100) + '%' }} className={`div${i + 1}`}></div>
                                            ))}
                                        </div>
                                        <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                            {element.data.map(e => (
                                                <div style={{ ...flexBox }}>
                                                    <Box className='colorBox' sx={{ backgroundColor: e.color }}></Box>
                                                    <p>{e.label}{' '}({e.value})</p>
                                                </div>
                                            ))}
                                        </Box>
                                    </Box> :
                                        !element.data ? <div className="no-data">
                                            <img src={graph} alt="graph" width="40px" />
                                            <p>No Graph data available!</p>
                                        </div> : <div className='pie-chart'>
                                            <PieChartWithCenterLabel data={element.data} />
                                            <Box>
                                                {element.data.map(e => (
                                                    <div style={{ ...flexBox }}>
                                                        <Box className='colorBox' sx={{ backgroundColor: e.color }}></Box>
                                                        <p>{e.label}{' '}({e.value})</p>
                                                    </div>
                                                ))}
                                            </Box>
                                        </div>}
                                </Box>
                            ))}
                            <Box className="box add-widget-box">
                                <AddToWidgetStyle variant="outlined" startIcon={<AddIcon />} onClick={addWidgetBtn}>Add Widget</AddToWidgetStyle>
                            </Box>
                        </div>
                    </div>
                ))}
                <DialogBox open={open} setOpen={setOpen} />
            </div>
        </div>
    );
}

export default Dashboard;
