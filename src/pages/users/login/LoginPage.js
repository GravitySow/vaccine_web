import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    logo: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3vh',
        marginLeft: '-3vw',
    },
    buttonForget:{
        cursor: 'pointer',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px', 
        lineHeight: '21px',
        paddingTop: '8px',

        color: '#1E7BE5',
    },
    buttonSignin:{
        cursor: 'pointer',
        background: '#5E5BD8',
        borderRadius: '30px',
        padding: '8px 33px 8px 33px',

        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'white',
        
        '&:hover': {
            background: '#211e9c',
        }
    },
});
const LoginPage  = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.logo}>
                {/* <img src={iam} height="80vh"/> */}
            </div>
            
            <TextField type="username" id="standard-basic" label="รหัสบัตรประชาชน" style={{width: '23vw'}}/> <br/>
            <TextField type="password" id="standard-basic" label="Password" style={{width: '23vw', marginTop: '40px'}}/><br/>
            
            <div style={{marginTop: '50px', display: 'flex', justifyContent: 'space-between'}}>
                <div className={classes.buttonForget}>
                    ลงทะเบียนเพื่อจองวัคซีน
                </div>
                <div className={classes.buttonSignin}>
                    เข้าสู่ระบบ
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
