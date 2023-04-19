import React from 'react';
import "./App.css";

class Name extends React.Component{

    constructor(props){
        super(props);

       //console.log(props); 

        this.state = {
            name : props.name,
            surname : props.surname,
            age : Number(props.age)
        };
    }

    renderSomething(){
     
        return this.state.age >= 18 ? <h1>You can go the party</h1> : <h2></h2>
     
    }


    renderArray(){
        
        let array = []
        let i = 0;
        for(; i < 10;i++){
            array.push (<h1>Counting {i}</h1>)
        }

       /* setInterval(()=>{
            i++;
            array.push (<h1>Counting {i}</h1>)
            this.setState({ counting: array });
            //console.log(this.state.counting);
        },1000)*/

        return array;

    }




    render(){
        return (
            <div className="NameField">
              <h1>{this.state.name + "<->" + this.state.surname}</h1>

              {this.renderSomething()}

              {this.state.age >18 
                ? <h1>you can party</h1>
                : <h1>no you cant</h1>
            }
              {this.renderArray()}
              {this.state.counting}


              <label htmlFor="name">name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.tempName}

                onChange={(event)=>{ 
                    console.log(this.state)
                    this.setState({ tempName: event.target.value });
                    console.log(event.target.value) 
                }}

              />
              <label htmlFor="surname">surname:</label>

              <input
                type="surname"
                id="surname"
                name="surname"
                value={this.state.tempSurname}

                onChange={(event)=>{ 
                    console.log(this.state)
                    this.setState({ tempSurname: event.target.value });
                    console.log(event.target.value) 
                }}
              />

              <button onClick={() => {
                    this.setState({ surname: this.state.tempSurname,
                    name : this.state.tempName,
                    tempName : "",
                    tempSurname : ""
                    
                    });


              }}>
                Change Surname and Name
              </button>
            </div>
          );
    }

}
//Name(bkla ,sbfak ,fsabka)

export default Name;



/*
function Name() {

    return (
      <div className="App">
        <h1>Alberto</h1>
      </div>
    );
  }
  
  export default Name;

  */