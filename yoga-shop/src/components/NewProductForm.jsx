import React from "react";
import PropTypes from "prop-types";

class NewProductForm extends React.Component {
  constructor(props){
    super(props);
    this.handleNewProductFormSubmission = this.handleNewProductFormSubmission.bind(this);
  }
  handleNewProductFormSubmission(event) {
    event.preventDefault()
    const { _product, _image, _price } = this.refs;
    this.props.onNewProductCreation(newProduct);
  }

  render() {
    return (
      <div>
        <form onSubmit={handleNewProductFormSubmission}>
          <input
            ref="_product"
            type="text"
            id="product"
            placeholder="Product Name"/>
          <input
            ref="_image"
            type="text"
            id="image"
            placeholder="Image"/>
          <input
            ref="_price"
            type="number"
            id="price"
            placeholder="Price"/>
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  }
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

export default NewProductForm;
