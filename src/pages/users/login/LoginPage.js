import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/icon/logo.svg'

const LoginPage  = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <img src={logo} height="75vh"/>
                    </div>
                    <TextField type="username" id="standard-basic" label="รหัสบัตรประชาชน" style={{width: '23vw'}}/> <br/>
                    <TextField type="password" id="standard-basic" label="Password" style={{width: '23vw', marginTop: '30px'}}/><br/>
                    <div style={{marginTop: '30px', display: 'flex', justifyContent: 'space-between'}}>
                        <div className={classes.buttonForget} style={{marginRight: '4vw'}}>
                            ลงทะเบียนเพื่อจองวัคซีน
                        </div>
                        <div className={classes.buttonSignin}>
                            เข้าสู่ระบบ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
    container: {   
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: '2',
    },

    content: { 
        width: '50vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

export default LoginPage;
