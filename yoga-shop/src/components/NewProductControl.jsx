import React from "react";
import NewProductForm from  "./NewProductForm";
import PropTypes from "prop-types";

class NewProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {
      formVisibleOnPage: false
    };
  }

  showForm(){
    this.setState({ formVisibleOnPage: true });
  }

  hideForm() {
    this.setState({formVisibleOnPage: false});
  }

  render(){
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formIsVisibleOnPage) {
      formAreaContent = <NewProductForm
          onNewProductCreation={this.props.onNewProductCreation}
          hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Add Product</button>;
    }
    return (
      <div>
        {formAreaContent}
      </div>

    );
  }
}

NewProductControl.propTypes = {
  onNewProductCreation: PropTypes.func
}

export default NewProductControl;
