import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }
  onChangeType = AgType => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: AgType
      }
    });
  };
  onAdoptPet = id => {
    let updatedPets = this.state.pets;
    let pet = updatedPets.find(pet => pet.id === id);
    // let pet = this.state.pets.find(pet => pet.id === id);
    pet.isAdopted = true;
    this.setState({
      pets: updatedPets
    });
  };
  onFindPetsClick = () => {
    console.log("clickin");
    let apiURL = "";
    if (this.state.filters.type === "all") {
      apiURL = "/api/pets";
    } else if (this.state.filters.type === "cat") {
      apiURL = "/api/pets?type=cat";
    } else if (this.state.filters.type === "dog") {
      apiURL = "/api/pets?type=dog";
    } else if (this.state.filters.type === "micropig") {
      apiURL = "/api/pets?type=micropig";
    }

    fetch(apiURL)
      .then(res => res.json())
      .then(allPets => {
        // console.log(allPets);
        this.setState({ pets: allPets });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header"> React Animal Shelter </h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.onAdoptPet}
                value={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
