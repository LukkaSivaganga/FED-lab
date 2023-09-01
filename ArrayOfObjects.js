import React,{Component} from'react'
 class ArrayOfObjects extends Component{
    constructor(props){
        super(props);
        this.state={
            countrieslist:[],
        }
    }
    saveInput=(e)=>{
        console.log(e.target.value);
        this.setState({inputval:e.target.value});
    }
    addNewItem=()=>{
        let{countrieslist,inputval}=this.state;
        this.setState({countrieslist:[...countrieslist,inputval]});
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.saveInput}/>
                <button type="button" onClick={this.addNewItem}>ADD</button>
                <ul>
                    {this.state.countrieslist.map(ele=>{
                        return<li>{ele}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default ArrayOfObjects;

          