import React from  "react";
import ProductList from './ProductList';
import NewProductControl from './NewProductControl';

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProductList: [],
    };
    this.addNewProductToInventory = this.addNewProductToInventory.bind(this);
  }

  addNewProductToInventory(newProduct) {
    var newMasterProductList = this.state.masterProductList.slice();
    newMasterProductList.push(newProduct);
    this.setState({masterProductList: newMasterProductList});
  }
  render() {
    return (
      <div>
        <ProductList
            productList = {this.state.masterProductList}
            currentRoute= {this.props.location.pathname}/>
          <NewProductControl onNewProductCreation= {this.addNewProductToInventory}/>
      </div>
    );
  }
}

export default Products;
