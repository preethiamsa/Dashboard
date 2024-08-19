import { DialogActions, DialogContent, DialogTitle, Dialog, IconButton, styled, Button, Checkbox, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import DataContext from '../context/context';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import dummyData from '../data.json'


const tabStyles = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid black',
}

const DialogBox = ({ open, setOpen }) => {
    const { data, setData } = useContext(DataContext)
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [checkBoxValue, setCheckBoxValue] = useState(() => {
        const initialState = {}
        Object.keys(data.category).forEach(key => {
            data.category[key].forEach(item => {
                initialState[item.title] = true;
            });
        });
        return initialState;
    })


    const handlecheckBox = (e,title) => {
        e.preventDefault();
        setCheckBoxValue(prev => ({ ...prev, [title]: !prev[title] }))
        console.log(checkBoxValue);
    }

    const CustomDialog = styled(Dialog)({
        '& .MuiDialog-container': {
            position: 'absolute !important',
            right: 0,
        },
        '& .MuiPaper-root': {
            width: '100%',
            margin: 0,
            height: '100%',
            maxHeight: '100%'
        },
    });


    const cancelButton = {
        color: '#101d6b',
        borderColor: '#101d6b',
        borderRadius: '10px',
        borderWidth: '1px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'white'
        }
    }

    const confirmButton = {
        backgroundColor: '#101d6b',
        borderRadius: '10px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#101d6b'
        }
    }

    const closeBtn = () => {
        setOpen(false)
    }

    const confirmBtn = () => {
        const filteredData = {
            category: {}
        };

        Object.keys(dummyData.category).forEach((category) => {
            const filteredItems = dummyData.category[category].filter((item) => checkBoxValue[item.title]);
            filteredData.category[category] = filteredItems;
        });
        setData(filteredData);
        closeBtn();
    };



    return (
        <div>
            <CustomDialog open={open}>
                <DialogTitle sx={{ backgroundColor: '#010088', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                    <p>Add Widget</p>
                    <IconButton onClick={closeBtn}><CloseIcon sx={{ color: 'white' }} /></IconButton>
                </DialogTitle>
                <DialogContent sx={{ padding: '30px', margin: '10px' }}>
                    <p>Personalize your dashboard by adding the following widget</p>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="CSPM" value="1" />
                                    <Tab label="CWPP" value="2" />
                                    <Tab label="Image" value="3" />
                                    <Tab label="Ticket" value="4" />
                                </TabList>
                            </Box>
                            {Object.keys(dummyData.category).map((keys, index) => (
                                dummyData.category[keys].map(element => (
                                    <TabPanel value={(index + 1).toString()} key={element.title} sx={{ padding: '10px 0 0 0' }}>
                                        <Box sx={tabStyles}>
                                            <Checkbox size="small" checked={checkBoxValue[element.title]} onChange={(e) => handlecheckBox(e,element.title)} />
                                            <p>{element.title}</p>
                                        </Box>
                                    </TabPanel>
                                )
                                )
                            ))}
                        </TabContext>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" sx={{ ...cancelButton }} onClick={closeBtn}>Cancel</Button>
                    <Button variant="contained" sx={{ ...confirmButton }} onClick={confirmBtn}>Confirm</Button>
                </DialogActions>
            </CustomDialog>
        </div>
    )
}

export default DialogBox