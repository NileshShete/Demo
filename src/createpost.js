import React, { Component } from 'react';
import './demo.css'
import {Button,AppBar,Toolbar, TextField} from '@material-ui/core'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Homepage from './homepage';
class Createpost extends Component{
    render(){
        return(
            <div>
               <AppBar color="default" >
                <Toolbar>
                <Link to="/homepage" > <Button variant='outlined'>Homepage</Button></Link>
                <Button  color="primary" ></Button>
                <Button variant='outlined' color="primary" >Create a Post</Button>
              </Toolbar>
              </AppBar>
              
         <div className='cp12'>
           <TextField label="ENTER YOUR TITILE"></TextField><br></br><br></br>
           <TextField label="DESCRIPTION" ></TextField><br></br><br></br><br></br><br></br>
           <Button variant='outlined' color="primary" >SUBMIT</Button>
         </div>
         <Route path="/Homepage" component={Homepage}/>
<footer class="page-footer font-small cyan darken-3"/>

  <div className='cp22'>© 2021 Copyright:
    <a href="https://demo.com/"> demo.com</a>
  </div>
 


            </div>
        )
    }
}export default Createpost;
