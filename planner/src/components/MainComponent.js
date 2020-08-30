import React,{Component} from 'react';
import Header from './HeaderComponent';
import {Switch, Route,Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import NotesComponent from './NotesComponent';

class Main extends Component {
  constructor(props){
      super(props);
  }

  render() {
      return(   
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={()=><Home/>}/>
                <Route path="/notes" component={()=><NotesComponent/>}/>
            </Switch>
            <Footer/>
        </div>
      );
  }
}
export default Main;