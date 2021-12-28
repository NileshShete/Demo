import React, { Component } from 'react';
import {Button ,AppBar ,Toolbar} from '@material-ui/core'
import './demo.css'
import ms from "./ms.jpg" 
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Homepage from './homepage';
class Singlepage extends Component{
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

              <div className='nn'>
                  <h2 className='nn2'>MS DHONI</h2>
              <img src={ms} alt="ms" className='nn1' ></img>
               <p className='nn3'>Mahendra Singh Dhoni, is a former international cricketer who captained the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is currently the captain of Chennai Super Kings, a franchise based team of Indian Premier League.</p>
               </div>
               <Route path="/Homepage" component={Homepage}/>
                
  <div className='cp1'>© 2021 Copyright:
    <a href="https://demo.com/"> demo.com</a>
  </div>
            </div>
        )
    }
}export default Singlepage;
