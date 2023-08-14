import React, { Component } from 'react';

class Mysecondpage extends Component {
    state={
        ProjectSites:[]
    }
      componentDidMount() {
        fetch('http://103.10.24.222:5050/site')
          .then(function(res){
            return res.json();
          })
          .then((json) => {
            this.setState({ projectSites:json});
          });
      }
      
      
    render() {
        return <div className="drop-down">
        <p>I would like to render a dropdown here from the values object</p>
          <select>{
             this.state.projectSites.map((obj) => {
                 return <option value={obj.siteName}>{obj.siteName}</option>
             })
          }</select>
        </div>;
    }
}

export default Mysecondpage;
