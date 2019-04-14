import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    if(this.nameInput.value && this.priceInput.value !== null) {
      this.props.onAdd(this.nameInput.value, this.priceInput.value);
      this.nameInput.value = '';
      this.priceInput.value = ''; 
    }
    
  }
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <h3> Add Product</h3>
        <input 
          placeholder="Product's Name" 
          ref={nameInput => this.nameInput = nameInput}/>
        <input 
          placeholder="Product's Price" 
          ref={priceInput => this.priceInput = priceInput}/>
        <button className="addBtn">Add Product</button>
      </form>
      
    );
  }
}

export default AddProduct;
