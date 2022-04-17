import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/icon/logo.svg'

const RegisterPage  = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={logo} height="75vh"/>
            </div>
            <div className={classes.mainbox}>
                xxx
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '3vh',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        zIndex: '2',
    },
    mainbox: {
        display: 'flex',
        margin: '5vh 0 3vh',
        minHeight: '85vh',
        height: 'auto',
        width: '70vw',
        background: '#FFFFFF',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        zIndex: '2',
        padding: '2% 2% 2% 2%',
    }

})

export default RegisterPage;