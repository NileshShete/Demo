import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Button} from '@material-ui/core'
import Homepage from './homepage';
import Singlepage from './singlepage';
import Createpost from './createpost';
class App extends Component{
    render(){
        return(
            <div>
                <Router>
                  <Link to="/homepage" > <Button variant='outlined'>Homepage</Button></Link>

                  <Link to="/singlepage" ><Button variant='outlined' >Single Blog Page</Button></Link> 

                  <Link to="/createpost"><Button variant='outlined'>Create a Post</Button></Link> 

                   <Route path="/Homepage" component={Homepage}/>

                   <Route path="/Singlepage" component={Singlepage}/>

                   <Route path="/createpost" component={Createpost}/>

                </Router>

            </div>
        )
    }
}export default App;


