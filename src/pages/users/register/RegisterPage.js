import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../../../assets/icon/logo.svg';
import {Container, Row, Col} from 'react-bootstrap';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import thLocale from 'date-fns/locale/th';
const RegisterPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [locale, setLocale] = React.useState('th');
  const localeMap = {
    th: thLocale,
  };
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={logo} height="75vh" onClick={clickLogo}/>
      </div>
      <div className={classes.mainbox}>
        <Container fluid className={classes.text}>
          <from>
            <Row>
              <Col className={classes.box}>*ชื่อ/Name</Col>
              <Col className={classes.box}>*นามสกุล/Surname</Col>
            </Row>
            <Row>
              <Col className={classes.box}>
                <input className={classes.input}></input>
              </Col>
              <Col className={classes.box}>
                <input className={classes.input}></input>
              </Col>
            </Row>
            <Row>
              <Col className={classes.box}>*เลขประจำตัวประชาชน</Col>
            </Row>
            <Row>
              <Col md={6} className={classes.box}>
                <input className={classes.input}></input>
              </Col>
            </Row>
            <Row>
              <Col className={classes.box}>*Password</Col>
              <Col className={classes.box}>*Confirm Password</Col>
            </Row>
            <Row>
              <Col className={classes.box}>
                <input className={classes.input}></input>
              </Col>
              <Col className={classes.box}>
                <input className={classes.input}></input>
              </Col>
            </Row>
            <Row>
              <Col className={classes.box}>*วัน/เดือน/ปีเกิด Date of Birth</Col>
            </Row>
            <Row>
              <Col md={6} className={classes.box}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  locale={localeMap[locale]}
                >
                  <DatePicker
                    label="Custom input"
                    mask="__/__/____"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
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
              </Col>
            </Row>
            <Row>
              <Col className={classes.box}>*เพศ</Col>
            </Row>
            <Row>
              <Col md={6} className={classes.box}>
                <input className={classes.input}></input>
              </Col>
            </Row>
            <Row>
              <Col className={classes.box}>*อีเมล/Email</Col>
            </Row>
            <Row>
              <Col md={6} className={classes.box}>
                <input className={classes.input}></input>
              </Col>
            </Row>
            <Row>
              <Col className={classes.box}>*เบอร์ติดต่อ/Telephone</Col>
            </Row>
            <Row>
              <Col md={6} className={classes.box}>
                <input className={classes.input}></input>
              </Col>
            </Row>
            <Row>
              <Col className={classes.box}>*ที่อยู่/Address</Col>
            </Row>
            <Row>
              <Col className={classes.box}>
                <input className={classes.input}></input>
              </Col>
            </Row>
            <div className={classes.register}> 
                <button type="submit" className={classes.buttonRegister}>
                    ลงทะเบียน
                </button>
            </div>
          </from>
        </Container>
      </div>
    </div>
  );

  function clickLogo(){
    window.location = "/";
  }
};
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
    cursor: 'pointer',
  },
  mainbox: {
    display: 'flex',
    margin: '5vh 0 3vh',
    minHeight: '85vh',
    height: 'auto',
    width: '70vw',
    background: '#FFFFFF',
    borderRadius: '20px',
    boxShadow:
      '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    zIndex: '2',
    padding: '1% 2% 2% 2%',
  },
  text: {
    lineHeight: '50px',
    color: '#979797',
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  input: {
    height: '35px',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid #C2C2C2',
    boxSizing: 'border-box',
    borderRadius: '50px',
    padding: '0px 15px',
  },
  buttonRegister: {
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
    borderStyle: 'unset',
    marginTop: '30px',
    
    '&:hover': {
      background: '#211e9c',
    },
  },
  register:{
      display: 'flex',
      justifyContent: 'flex-end',
  }
});

export default RegisterPage;
