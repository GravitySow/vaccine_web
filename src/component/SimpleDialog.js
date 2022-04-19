import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import thLocale from 'date-fns/locale/th';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const SimpleDialog  = (props) => {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    const [value, setValue] = React.useState(null);
    const [locale, setLocale] = React.useState('th');
    const localeMap = {
        th: thLocale,
    };
    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleListItemClick = (value) => {
        onClose(value);
    };
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'xxx', label: 'XXX' }
    ]

        return (
            <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
            <DialogTitle>จองวัคซีน</DialogTitle>
            <div className={classes.container}>
                <div className={classes.topic}>
                    เข็มที่ 
                </div>
                <input className={classes.input}/>
                <div className={classes.topic}>
                    วัคซีนที่ต้องการ
                </div>
                <Select 
                    options={options}
                    menuPortalTarget={document.body}
                    styles={{
                        menuPortal: (base) => ({
                            ...base,
                            zIndex: '9999',
                        }),
                        control: (base) => ({ 
                            ...base,
                            width: '50%',
                            border: '1px solid #C2C2C2',
                            boxSizing: 'border-box',
                            borderRadius: '50px',
                            padding: '0px 10px',
                        }),
                    }}
                />
                <div className={classes.topic}>
                    สถานที่สะดวกรับวัคซีน
                </div>
                <Select 
                    options={options}
                    styles={{
                        menuPortal: (base) => ({
                            ...base,
                            zIndex: '9999',
                        }),
                        control: (base) => ({ 
                            ...base,
                            width: '50%',
                            border: '1px solid #C2C2C2',
                            boxSizing: 'border-box',
                            borderRadius: '50px',
                            padding: '0px 10px',
                        }),
                    }}
                    menuPortalTarget={document.body}
                />
                <div className={classes.topic}>
                    วันที่สะดวกรับวัคซีน
                </div>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  locale={localeMap[locale]}
                >
                  <DatePicker
                    label="Custom input"
                    mask="__/__/____"
                    value={value}
                    
                    onChange={setDay}
                    renderInput={({inputRef, inputProps, InputProps}) => (
                      <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <input
                          className={classes.input}
                          ref={inputRef}
                          {...inputProps}
                        />
                        {InputProps?.endAdornment}
                      </Box>
                    )}
                  />
                </LocalizationProvider>
                BUTTON
            </div>
            
            {/* <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                        <PersonIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={email} />
                </ListItem>
                ))}

                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                <ListItemAvatar>
                    <Avatar>
                    <AddIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Add account" />
                </ListItem>
            </List> */}
            </Dialog>
        );
        function setDay(newValue) {
            console.log(newValue);
            setValue(newValue);
        
            // setData(prevState => ({
            //   ...prevState,
            //   birthday: newValue
            // }));
        }
}
const useStyles = makeStyles({
    container: {
        padding: '0px 10px 20px 35px',
        lineHeight: '30px',
    },
    topic: {
        marginTop: '10px',
        color: '#979797',
    },
    input: {
        height: '40px',
        width: '90%',
        background: '#FFFFFF',
        border: '1px solid #C2C2C2',
        boxSizing: 'border-box',
        borderRadius: '50px',
        padding: '0px 15px',
    },
})


SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SimpleDialog;
