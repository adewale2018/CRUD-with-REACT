import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import './App.css';

const products = [
  {name: 'iPad ', price: '$1.2k'},
  {name: 'iPhone8', price: '$1.5k'},
  {name: 'Samsung', price: '$1k'},
  {name: 'Android', price: '$0.5k'}
]

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({ products });
  }

  getProducts = () => {
    return this.state.products;
    
  }

  onAdd = (name, price) => {
    const products = this.getProducts();
    products.push({
      name,
      price
    });

    console.log(products);
    
    this.setState({ products });
  }

  onDelete = (name) => {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    this.setState({products: filteredProducts})
  }
  
  onEditSubmit(name, price, originalName){
    let products = this.getProducts();

    products = products.map(product => {
      if(product.name === originalName) {
        product.name = name;
        product.price = price;
      }

      return product;
    });
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        <AddProduct 
          onAdd={this.onAdd}/>
        {
          this.state.products.map(product => {
            return (
             <div>
               <ProductItem 
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
             
             </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
