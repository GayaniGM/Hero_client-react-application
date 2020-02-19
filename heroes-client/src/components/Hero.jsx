import React, { Component } from "react";
import { render } from "@testing-library/react";

class Hero extends Component{
    //there are 2 proprties need to be inside the class
    state = {
        heroId: 100,
        heroName: "Hero 01",
        image : ""
    };
    render() {
        return(
        <React.Fragment>
            <h1 style={{ color : "red", fontSize : "40px" }}>Hero Component : {this.isHero()} </h1>
            <h3>Hero Id is {this.state.heroId}</h3>
            <button className="btn btn-primary">Submit</button>
            <div className="card" style={{ width : '18rem'}}>
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyvfeN3L09jrWf3Lv8439MVXoAHhdOeJFS-UqcoycA060fGXIl" alt="Card image cap"></img>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul>
                <li>
                    Super power 01
                </li>
                <li>
                    Super power 02
                </li>
                <li>
                    Super power 03
                </li>
            </ul>
            
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </React.Fragment>
        );
    };

    //creating a function to validate, verify any data

    isHero(){
// if(this.state.heroId < 1000) {
//     return "Avengers"
// }else{
//     return "Value is not an Avenger"
// }

//We can write above using one line of code
return(this.state.heroId < 1000 ) ? "Avengers" : "Value is not an Avenger" 

    }
}

export default Hero;