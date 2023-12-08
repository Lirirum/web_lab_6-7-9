
import React, { Component,  createContext,useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import ProductDetail from './ProductDetail';  
import Authorization from './Authorization';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataContext } from './DataContext';
import { ThemeContext } from './ThemeContext';
import { Provider ,connect  } from 'react-redux';
import CartMenu from './CartMenu';
import store from './store';
import AdminPage from './AdminPage';
import AnimatedList from './AnimatedList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      products: [
        { name: 'Товар 1', isSelected: false },
        { name: 'Товар 2', isSelected: false },
        { name: 'Товар 3', isSelected: false },
      ],
      userData:null,
      history: [],
      data:0
      
    
    };
  }



  
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  handleProductSelect = (index) => {
    const products = [...this.state.products];
    products[index].isSelected = !products[index].isSelected;
    this.setState({ products });
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return { data: prevState.data + 1 };
    }, () => {
      console.log(this.state.data); 
    });
  };



  render() {
    const selectedCount = this.state.products.filter((product) => product.isSelected).length;
    const contextValues = {
      data: this.state.data, 
      handleIncrement:this.handleIncrement ,
    };



    return (  
      <Provider store={store}>
      <ThemeContext.Provider   >
      <DataContext.Provider value={contextValues}>
      <Router>  
     <CartMenu></CartMenu>
    
      < Authorization></Authorization>
      <div >
        
        <Header
          isLoggedIn={this.state.isLoggedIn}
          onLoginClick={this.handleLoginClick}
          onLogoutClick={this.handleLogoutClick}
        />
      
     
      <Routes>
        <Route path="/" element={<Body products={this.state.products} onProductSelect={this.handleProductSelect} />} />
        <Route path="/product/:id" element={<ProductDetail   />} />
        <Route path="/admin" element={<AdminPage   />} />
        <Route path="/animatedList" element={<AnimatedList/>} />
      </Routes>
        
        <Footer></Footer>
      </div>
    

    </Router>
    </DataContext.Provider>  
    </ThemeContext.Provider>
    </Provider>
    );
  }
}
const mapStateToProps = (state) => ({
  menuIsOpen: state.cart.cartMenu,
});

export default connect(mapStateToProps)(App);