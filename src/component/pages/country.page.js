import React,{Component} from 'react';
import world from '../../world.svg';
import {Input} from '../input';
import {withRouter} from 'react-router-dom'
import Axios from 'axios';
import GoogleApiWrapper from './map.page.js'
import MapContainer from './map.page.js'
import Bootstrap from '../../bootstrap-grid.min.css';
import {Weather} from './weather.page'



class Country extends Component{
  constructor(props) {
    super(props);
    this.getCountry(props.match.params.code);
  }
  
  getCountry = (code) => {
    this.setState(null);
    Axios.get('https://restcountries.eu/rest/v2/alpha/' + code).then(response => {
      this.setState({ ...response.data })
    })
  }

  gotoCountry = code => () => {
    this.getCountry(code);
  }

  // componentDidMount() {
  //   this.getCountry();
  // }

  // componentDidUpdate() {
  //   this.getCountry();
  // }

  goBack = () => {
    this.props.history.push('/');
  }
  render(){
  return(<div>
    <div style={{display:"flex",justifyContent:"space-between"}} >
    <div  style={{width:100,marginTop:20}}>
<img  src={world} className="nav-logo"></img>
</div>
<span style={{marginTop:40,fontSize:'30px'}}>country info {this.state && this.state.name}</span>
<button onClick={this.goBack}   style={{width:50,height:30,marginTop:50,}}> Back</button>
</div>
<hr style={{width:1000}}></hr>
  
<div style={{display:"flex",justifyContent:"space-between"}}>
<div > <img src= {this.state && this.state.flag} style={{width:"300px",height:"300px"}}/></div>
<div style={{ backgroundColor: "yellow",width:'450px',height:'300px'}}>
<div style={{marginLeft:"30px",marginTop:'30px',padding:"20px",fontSize:'30px',fontWeight:'bold'}}>{this.state && this.state.altSpellings[1]}</div>
<div style={{marginLeft:"30px",marginTop:'30px',padding:"20px",fontSize:'30px',fontWeight:'bold'}}>{this.state && this.state.altSpellings[2]}</div>
</div>
<div style={{backgroundColor:' rgb(206, 167, 62)',height:"300px"}}>
<div style={{padding:"25px",fontSize:"20px"}}> Regoin : {this.state && this.state.region}</div>
<div style={{padding:"25px",fontSize:"20px"}}> Capital : {this.state && this.state.capital}</div>
<div style={{padding:"25px",fontSize:"20px"}}> Population : {this.state && this.state.population}</div>
<div style={{padding:"25px",fontSize:"20px"}}> Colling code : {this.state && this.state.callingCodes}</div>
</div>
</div>

 <div style={{display:"flex",justifyContent:"space-around",}}>
 <div>{this.state && <Weather city={this.state.capital} country={this.state.alpha2Code}/>}</div> 
  <div style={{position:"relative",width:"500px",height:"300px",marginTop:"20px"}}>{this.state && <GoogleApiWrapper latlng={this.state.latlng}/>}</div>
<div><ul style={{listStyle:"none",width:"130px",height:"200px"}}><h3 style={{display:"flex"}}> Neightbers <span>:</span> </h3>{ this.state && this.state.borders.map((item,index)=><li  style={{ backgroundColor:" firebrick",padding:'2px',cursor:"pointer"}} onClick={this.gotoCountry(item)}>{item}</li>)}

</ul>
</div>
</div>


  


  

 
  </div>)
}
}
 withRouter(Country)
export {Country}
