import React,{Component} from 'react';
// import {withRouter} from 'react-router-dom';
import Bootstrap from '../../bootstrap-grid.min.css';
import Axios from 'axios';
class Weather extends Component{
    constructor(props){
  super(props)
        Axios.get('https://api.openweathermap.org/data/2.5/weather',{
          params:{
            q:`${this.props.city},${this.props.country}`,
            APPID:'005986daff9ab3e36306018cb412150e'
          }
        }).then(response=>
        {
          this.setState({...response.data})
        })
        

}

render(){
    
    return(<div>
       
     <div style={{display:"flex",flexDirection:"column",marginTop:"20px",backgroundColor:"  aqua",height:"300px",width:"300px"}}>
     <div id="icon" style={{width:"100px",height:"200px"}}><img
        id="wicon"
        src={this.state && 'http://openweathermap.org/img/w/' +  this.state.weather[0].icon  + '.png'}
        alt="Weather icon"/></div>
      <div style={{display:"flex",padding:"20px"}}> <span>weather scripthion : </span> <span>{ this.state ?  this.state.weather[0].description:<span>loading...</span>}</span></div>
      <div style={{display:"flex",padding:"20px"}}><span> Temp :  { this.state ?  this.state.main.temp:<span>loading...</span>}</span></div>
      <div style={{display:"flex",padding:"20px"}}><span> Pressure : { this.state ?  this.state.main.pressure:<span>loading...</span>}</span> </div>
      <div style={{display:"flex",padding:"20px"}}><span>Humidity: { this.state ?  this.state.main.humidity:<span>loading...</span>}</span></div>
      </div>
     
   
      </div>)
       


        
  
}
}
export {Weather}
