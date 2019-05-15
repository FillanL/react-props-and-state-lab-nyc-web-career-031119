import React from "react";

class Pet extends React.Component {
  render() {
    console.log("inside pet, pet is: ", this.props.petVal);
    return (
      <div className="card" id={`${this.props.petVal.id}`}>
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.petVal.gender === "male" ? "♀" : "♂"}
            Name: {this.props.petVal.name}
          </a>
          <div className="meta">
            <span className="date"> {this.props.petVal.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petVal.age}</p>
            <p>Weight: {this.props.petVal.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? 
            <button className="ui disabled button">Already adopted</button> :
            <button className="ui primary button" onClick={(e)=>{this.props.onAdoptPet(this.props.petVal.id)}}>Adopt pet</button>
          }
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    );
  }
}

export default Pet;
