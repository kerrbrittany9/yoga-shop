import React from "react";

class NewProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  handleDisplayingNewProductForm(event){
    
  }

  render(){
    return (
      <button onClick={this.handleDisplayingNewProductForm}>Add Product</button>
    );
  }

}

export default NewProductControl;
