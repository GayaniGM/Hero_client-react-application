import React, { Component } from "react";

class Hero extends Component{
    //there are 2 proprties need to be inside the class
  /*
    state = {
        heroId: this.heroId.hero._Id,
        heroName: this.props.hero.name,
        movies: this.props.movies,
        likeCount: this.props.likeCount,
        imageUrl: this.props.imageUrl
    };
 */

    render() {
        return(
        <React.Fragment>
            <div className="card" style={{ width : '18rem'}}>
            <img className="card-img-top" src="https://cdn.vox-cdn.com/thumbor/q2-vz_xdKhyPrzSGq4-7FIj1oWU=/0x0:846x346/920x613/filters:focal(365x46:499x180):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55091987/Screenshot_2016-11-03_12.07.41.0.0.png" alt=""></img>
            <div className="card-body">
        <h5 className="card-title">{this.props.hero.heroName}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul>
               {this.showMovies()} 
            </ul>
            <div style={{ textAlign: "center"}}>
            <button className="btn btn-primary" onClick={() => this.likeAvenger(1)}>Like Dobby{" "}
            <span className="badge badge-light">{this.props.hero.likeCount}</span>
            </button>
            </div>
            </div>
        </div>
        </React.Fragment>
        );
    };


showMovies(){

if(this.props.hero.movies.length === 0) return <p>No movies Available</p>;
return this.props.hero.movies.map(movie => (<li key={this.props.hero.movies.indexOf(movie)}>{movie}</li>));

}

//event handler for button like in reference 
likeAvenger = (counter) => {

    this.setState({ likeCount: this.props.hero.likeCount + counter});
}

    //creating a function to validate, verify any data
    isHero(){
//We can write above using one line of code
return(this.props.hero.heroId < 1000 ) ? "Avengers" : "Value is not an Avenger" 

    }
}

export default Hero;