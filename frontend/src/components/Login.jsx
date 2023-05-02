import React, {useState} from 'react'
import {connect} from "react-redux"
import {login} from "../actions/auth"
import {Navigate, useNavigate} from "react-router-dom"
import PropTypes from "prop-types"

// MUI
import {
	Grid,
	Typography,
	Button,
	TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
	formContainer: {
		width: "70%",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "3rem",
		border: "5px solid lightWhite",
		padding: "3rem",
        height: '100%'
	},
	loginBtn: {
        marginTop: '1rem',
		backgroundColor: "green",
		color: "white",
		fontSize: "1.1rem",
		"&:hover": {
			backgroundColor: "blue",
		},
	},
});
function Login({login, isAuthenticated, isCostumer}) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [user, setUser]=useState({
        username:"",
        password:""
    })

    const {username, password}=user
    

    const loginChange=(e)=>setUser({...user, [e.target.name]:e.target.value})
     const handleLoginSubmit=(e)=>{
         e.preventDefault();
         login({username, password})
     }
    
     if (isAuthenticated && isCostumer){
        return <Navigate to="/" />
    }else if(isAuthenticated && !isCostumer){
        return <Navigate to="/" />
    }else{  
    return (
        <div className={classes.formContainer}>
            
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <Grid item container justifyContent="center">
                        <Typography variant="h4">SIGN IN</Typography>
                    </Grid>
                    <form onSubmit={(e)=>handleLoginSubmit(e)}>
                    <Grid item container style={{ marginTop: "1rem" }}>
                        <TextField
                            id="username"
                            label="Username"
                            name="username" 
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={ e =>loginChange(e)} 
                        />
				    </Grid>
                    <Grid item container style={{ marginTop: "1rem" }}>
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={ e =>loginChange(e)} 
                        />
				    </Grid>
                    <Grid
                        item
                        container
                        xs={8}
                        style={{ marginTop: "1rem", marginLeft: "auto", marginRight: "auto" }}
				    >
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            // className={classes.loginBtn}
                            // disabled={state.disabledBtn}
                        >
                            SIGN IN
                        </Button>
				    </Grid>
                  

                    </form>

                    <Grid
                        item
                        container
                        justifyContent="center"
                        style={{ marginTop: "1rem" }}
                    >
                        <Typography variant="small">
                            Don't have an account yet?{" "}
                            <span
                                onClick={() => navigate("/")}
                                style={{ cursor: "pointer", color: "green" }}
                            >
                                SIGN UP
                            </span>
                        </Typography>
                    </Grid>
                </div>
            </div>
        </div>
    )
    }
}

Login.propTypes={
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    isCostumer:PropTypes.bool
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    isCostumer: state.auth.isCostumer
});

export default connect(mapStateToProps, {login})(Login)
