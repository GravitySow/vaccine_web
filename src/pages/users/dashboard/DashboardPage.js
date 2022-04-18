import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/icon/logo.svg'
import userService from '../../../service/userService';
import * as ReactDOM from 'react-dom';

const DashboardPage  = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    useEffect( () => {
        test();
    }, []);

    return (
        <div className={classes.container} id="root">
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
        </div>
    )
    
    async function test(){
        const response = await userService.getVaccine(1);
        console.log(response);
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
    font: {
        fontWeight: 'bold',
        marginRight: '20px'
    },
    font2: {
        fontWeight: 'bold',
        margin: '0px 20px 0px 20px'
    },
    
});

export default DashboardPage;
