import React, {useState} from 'react'
import { connect } from 'react-redux'
import  PropTypes from "prop-types"
import { create_costumeruser } from '../actions/auth'
import {Navigate, useNavigate} from "react-router-dom"

// MUI
import {
	Grid,
	Typography,
	Button,
	TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";


const CostumerSignup = ({create_costumeruser, isAuthenticated,isCostumer}) => {
    const navigate = useNavigate();
    const [costumer, setCostumer]=useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const handleChange=(e)=>setCostumer({
        ...costumer,
        [e.target.name]:e.target.value })
        
    const {username, email, password, password2}=costumer
     
   const handleSubmit=(e)=>{
       e.preventDefault();
       const newCostumer={
           username,
           email,
           password,
           password2
       }
       console.log(newCostumer)
    create_costumeruser(newCostumer)
   }
    if(isAuthenticated && isCostumer){
        return <Navigate to="/costumer/dashboard"/>
    }
    return (
        <div className='container' style={{marginTop:'5rem', width:'60%'}}>
            <Grid item container justifyContent="center">
                <Typography variant="h4">SIGNUP AS A CUSTOMER</Typography>
            </Grid>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form onSubmit={ e =>handleSubmit(e)}>
                        <Grid item container style={{ marginTop: "2rem" }}>
                            <TextField
                                id="username"
                                label="Username"
                                name="username" 
                                variant="outlined"
                                fullWidth
                                value={username}
                                onChange={(e)=>handleChange(e)}
                            />
				        </Grid>
         
                        <Grid item container style={{ marginTop: "1rem" }}>
                            <TextField
                                id="email"
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                type="email"
                                value={email}
                                onChange={(e)=>handleChange(e)}
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
                                onChange={(e)=>handleChange(e)} 
                            />
				        </Grid>
                        <Grid item container style={{ marginTop: "1rem" }}>
                            <TextField
                                id="password2"
                                label="Confirm password"
                                name="password2"
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={password2}
                                onChange={(e)=>handleChange(e)} 
                            />
				        </Grid>
                        {/* <button type="submit" className="btn btn-primary">Signup</button> */}
                        <Grid
                            item
                            container
                            xs={8}
                            style={{ marginTop: "1rem", marginLeft: "auto", marginRight: "auto" }}
                        >
                            <Button
                                variant="contained"
                                className="btn btn-primary"
                                fullWidth
                                type="submit"
                                // className={classes.loginBtn}
                                // disabled={state.disabledBtn}
                            >
                                SIGN IN
                            </Button>
				         </Grid>

                         <Grid
                        item
                        container
                        justifyContent="center"
                        style={{ marginTop: "1rem" }}
                    >
                        <Typography variant="small">
                            have an account yet?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                style={{ cursor: "pointer", color: "green" }}
                            >
                                SIGN IN
                            </span>
                        </Typography>
                    </Grid>
                  
                    </form>
                </div>
            </div>
        </div>
    )
}

CostumerSignup.propTypes={
    create_costumeruser:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    isCostumer:PropTypes.bool
}


const mapStateToProps= state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isCostumer:state.auth.isCostumer
})

export default  connect(mapStateToProps, {create_costumeruser})(CostumerSignup)
