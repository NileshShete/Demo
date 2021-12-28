import React, { Component } from 'react';
import {Button ,AppBar ,Toolbar} from '@material-ui/core'
import abc from "./abc.jpg" 
import './demo.css'
class Homepage extends Component{
    render(){
        return(
            <div>
               
               <AppBar color="default" >
                <Toolbar> 
                <Button variant='outlined' color="primary" >Home</Button>
                <Button  color="primary" ></Button>
                <Button variant='outlined' color="primary" >Create a Post</Button>
              </Toolbar>
              </AppBar>

           <img src={abc} alt="abc" ></img>
           
        <footer class="page-footer font-small cyan darken-3"/>
            
  <div className='cp1'>© 2021 Copyright:
    <a href="https://demo.com/"> demo.com</a>
  </div>
        
            </div>
        )
    }
}export default Homepage;
