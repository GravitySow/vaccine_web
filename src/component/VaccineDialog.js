import React, { useState,useEffect } from 'react';
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
import userService from '../service/userService';
import Swal from 'sweetalert2'

const VaccineDialog  = (props) => {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    const [value, setValue] = React.useState(null);
    const [locale, setLocale] = React.useState('th');
    const [vaccine, setVaccine] = useState({});
    const [hospital, setHospital] = useState({});
    const [data, setData] = useState({
        userId: Number(localStorage.getItem("userId")),
        vaccineCount: 0,
        vaccineId: "",
        hospitalId: "",
        date: ""
      });
    const localeMap = {
        th: thLocale,
    };
    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleListItemClick = (value) => {
        onClose(value);
    };
    useEffect( () => {
        setAPI()
    }, []);
    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: Number(value)
        }));
        console.log(data);
    };
    const handleChangeVaccineId = e => {
        setData(prevState => ({
            ...prevState,
            vaccineId: e.value
        }));
    };
    const handleChangeHospitalId = e => {
        setData(prevState => ({
            ...prevState,
            hospitalId: e.value
        }));
    };

        return (
            <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
            <DialogTitle>???????????????????????????</DialogTitle>
            <div className={classes.container}>
                <div className={classes.block}>
                    <div className={classes.topic}>
                        ????????????????????? 
                    </div>
                    <input name="vaccineCount" onChange={handleChange} className={classes.inputN}/>
                </div>
                <div className={classes.block}>
                    <div className={classes.topic}>
                        ????????????????????????????????????????????????
                    </div>
                    <Select
                        onChange={handleChangeVaccineId}
                        options={vaccine}
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
                </div>
                <div className={classes.block}>
                <div className={classes.topic}>
                    ???????????????????????????????????????????????????????????????
                </div>
                <Select 
                    onChange={handleChangeHospitalId}
                    options={hospital}
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
                </div>
                <div className={classes.block}>
                    <div className={classes.topic}>
                        ????????????????????????????????????????????????????????????
                    </div>
                    <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    locale={localeMap[locale]}
                    >
                    <DatePicker
                        label="Custom input"
                        mask="__/__/____"
                        value={value}
                        minDate={new Date()}
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
                </div>
                <div className={classes.buttonGroup}>
                    <button className={classes.buttonCancel} onClick={handleClose}>??????????????????</button>
                    <button className={classes.buttonSave} onClick={onSubmit}>??????????????????</button>
                </div>
                
            </div>
            </Dialog>
        );
        function setDay(newValue) {
            console.log(newValue);
            setValue(newValue);
        
            setData(prevState => ({
              ...prevState,
              date: newValue
            }));
        }
        async function setAPI(){
            const response = await userService.getCovidVaccine();
            let o = response.data.map(function (data) {
                return { value: data.id, label: data.name };
            })
            setVaccine(response.data.map(function (data) {
                return { value: data.id, label: data.name };
            }));
            
            const response2 = await userService.getHospital();
            setHospital(response2.data.map(function (data) {
                return { value: data.id, label: data.name };
            }));
        }

        async function onSubmit(){
            if(data.vaccineCount == 0 || data.hospitalId == 0 || data.vaccineId == "" || data.date == ""){
                return;
            }
            let response = await userService.reserveVaccine(data);
            if(response.status == 200){
                handleClose();
            }
        }
}

const useStyles = makeStyles({
    container: {
        padding: '0px 30px 20px 35px',
        lineHeight: '30px',
    },
    block: {
        marginBottom: '4%',
    },
    topic: {
        marginTop: '0px',
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
    inputN: {
        height: '40px',
        width: '20%',
        background: '#FFFFFF',
        border: '1px solid #C2C2C2',
        boxSizing: 'border-box',
        borderRadius: '50px',
        padding: '0px 15px',
    },
    buttonGroup: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '30px',
    },
    buttonSave: {
        width: '80px',
        cursor: 'pointer',
        background: '#FFFFFF',
        borderRadius: '30px',
        padding: '8px 0px 8px 0px',
        color: '#1E7BE5',
        marginLeft: '10px',
        border: '1px solid #1E7BE5',
        boxSizing: 'border-box',
        
        '&:hover': {
          background: '#1E7BE5',
          color: '#FFFFFF',
        },
    },
    buttonCancel: {
        width: '80px',
        cursor: 'pointer',
        background: '#FFFFFF',
        borderRadius: '30px',
        padding: '8px 0px 8px 0px',
        color: '#BEBEBE',
        border: '1px solid #BEBEBE',
        boxSizing: 'border-box',
        
        '&:hover': {
          background: '#BEBEBE',
          color: '#FFFFFF',
        },
    },
})


VaccineDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default VaccineDialog;
