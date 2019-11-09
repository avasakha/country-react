import React,{Component} from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom'

class Input extends Component {
    state = {
        name:'',
        suggest:[]
    }
changeHandler = (event) =>{
    // debugger
    const {value, name} = event.target;
    this.setState({[name]:value});
    if(value.length > 2){
        Axios.get("https://restcountries.eu/rest/v2/name/" + value).then(response =>{
            this.setState({suggest:response.data})
        })
    } else{
        this.setState({suggest:[]})
    }
}
gotoCountry = countryCode => () => {
    this.props.history.push('/country/' + countryCode);
}

    render() {
        return <div style={{display:'flex',position:'relative'}}>
            <input type="text" autoComplete="off" value={this.state.name} name="name" onChange={this.changeHandler}></input>
            <button>Go</button>
            {(this.state.suggest.length > 0) && <ul style={{position: 'absolute',width:100, listStyle:'none',zIndex: 0}}>
            {this.state.suggest.map(country=><li key={country.alpha2Code} onClick={this.gotoCountry(country.alpha2Code)} >{country.name}<img src={country.flag} style={{display:'flex',
  padding:'10 20',
  alignItems:'center',
  cursor:'pointer',width:50,}}></img></li>)}
            </ul>}

        </div>;
    }

}
const withRouterInput = withRouter(Input)
export { withRouterInput as Input }
