import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.value.map(pet => (
          <Pet
            petVal={pet}
            isAdopted={pet.isAdopted}
            onAdoptPet={this.props.onAdoptPet}
          />
        ))}
        {/* <Pet petVal={this.props.value[0]} onAdoptPet={this.props.onAdoptPet} /> */}
      </div>
    );
  }
}

export default PetBrowser;
