import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/icon/logo.svg'
import userService from '../../../service/userService';
import * as ReactDOM from 'react-dom';
import SimpleDialog from '../../../component/SimpleDialog';
import Button from '@mui/material/Button';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const DashboardPage  = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log("open");
    };

    const handleClose = (value) => {
        setOpen(false);
        console.log("close");
        test();
    };
    useEffect( () => {
        test();
    }, []);

    return (
        <div className={classes.container}>
            {data.map((item, index) => {
                return(
                    <div className={classes.boxVaccine}>
                        <div className={classes.text}>
                            <span className={classes.font}>วัคซีนเข็มที่ {item.vaccineCount} </span><br />
                            <span className={classes.font2}>ชื่อวัคซีน</span> {item.vaccine.name} <br />
                            <span className={classes.font2}>วันที่จองวัตซีน</span> {item.createDate}<br />
                            <span className={classes.font2}>สถานที่</span> {item.hospital.name}<br />
                            <span className={classes.font2}>วันที่ได้รับวัคซีน</span> {item.date} <br />
                        </div>
                    </div>
                );
            })}
            <div className={classes.groupButton}>
                <div className={classes.button}>วัคซีนโควิด-19</div>
            </div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                // maxWidth="xl"
                // fullWidth="true"
            />
        </div>
    )
    
    async function test(){
        const response = await userService.getVaccine(1);
        // console.log(response);
        setData(response.data)
    }
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5vh',
        flexDirection: 'column',
    },
    boxVaccine: {
        width: '80vw',
        background: '#FFFFFF',
        opacity: '1',
        borderRadius: '45px',
        padding: '20px 20px 20px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: '20px',
        color: '#000000',
        textAlign: 'left',
        lineHeight: '33px',
    },
    text: {
        opacity: '1',
    },
    font: {
        fontWeight: 'bold',
        marginRight: '20px',
    },
    font2: {
        fontWeight: 'bold',
        margin: '0px 20px 0px 20px',
    },
    groupButton:{
        margin: '20px',
        display: 'flex',
        width: '80vw',
        justifyContent: 'flex-end',
    },
    button:{
        cursor: 'pointer',
        background: '#979797',
        borderRadius: '20px',
        padding: '8px 33px 8px 33px',
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'white',
        borderStyle: 'unset',   
        
        '&:hover': {
            background: '#5E5BD8',
        }
    },
});

export default DashboardPage;
