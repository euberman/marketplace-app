/*
App structure:

ShoppingCartApp
  Header
    Navigation
    ShoppingCart
  ShoppingCartOverlay
    ShoppingCartProduct
    ShoppingCartTotal
  ProductList
    Product
*/

const shoppingProducts = [
  {id: 0, name: "Nike VaporFly 4% Flyknit", price: 209, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-running-shoe-7R7zSn.jpg", quantityInCart: 0, inCart: false}, 
  {id: 1, name: "Nike Air Monarch IV PR", price: 89, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/vjsleghax3228bpidanh/air-monarch-iv-pr-shoe-qf64pl.jpg", quantityInCart: 0, inCart: false},
  {id: 2, name: "Nike Air Max Deluxe SE", price: 149, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/rkhls7wdxdydeg1vkwkt/air-max-deluxe-se-shoe-T6Vkl2.jpg", quantityInCart: 0, inCart: false}
];

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation />
        <ShoppingCartIcon quantity={this.props.quantity}
          amountToPay={this.props.amountToPay} />  
      </header>
    )
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <a href="#">Home</a>
        <a href="#">Browse</a>
        <a href="#">Contact</a>
      </nav>
    )
  }
}

class ShoppingCartIcon extends React.Component {
  constructor(props) {
    super(props);
    this.showOverlay = this.showOverlay.bind(this);
  }
  showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  }
  render() {
    return (
      <div id="cart">
        {/* Hide a number of items if it's equal 0 */}
        <span className={this.props.quantity == 0 ? "hide-price" : ""}>{this.props.quantity}</span>
        <i className="fas fa-shopping-cart"
          onClick={this.showOverlay}></i>
      </div>
    )
  }
}

class ShoppingCartOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.updateAmountToPay = this.updateAmountToPay.bind(this);
  }
  closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  }
  updateAmountToPay(item) {
    this.forceUpdate();
  }
  render() {
    let itemsInCart = this.props.data.itemsInCart.map((item, index) => {
      // Return key which defines an order of items inside a cart. The order in a cart is different than in database
      return <ShoppingCartProduct key={index} 
               item={item}
               indexInCart={index}
               removeFromCart={this.props.removeFromCart}
               updateAmountToPay={this.updateAmountToPay} />  
    });
    let amountToPay = 0;
    for (let i=0; i<this.props.data.items.length; i++) {
      amountToPay += this.props.data.items[i].price * this.props.data.items[i].quantityInCart;
    }
    return (
      <div id="overlay">
        <section id="shopping-cart">
          <div id="cart-header">
            <span id="cart-title">Shopping Cart</span>
            <i className="far fa-times-circle"
              onClick={this.closeOverlay.bind(this)}></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {itemsInCart}
            </tbody>
          </table>
          <span id="empty-cart">{(itemsInCart.length == 0) ? "Shopping cart is empty" : ""}</span>
          <h3 id="cart-total">Cart Total</h3>
          <div id="totals">
            <span>Cart Totals</span>
            <span>Number of items: {this.props.data.quantity}</span>
            <span>Total: £{amountToPay}</span>
          </div>
          <button id="checkout" 
            disabled={itemsInCart.length == 0 ? true : false} >Checkout</button>
        </section>
      </div>
    )  
  }
}

class ShoppingCartProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }
  handleRemoveFromCart(e) {
    this.props.removeFromCart(this.props.item, this.props.indexInCart);
  }
  handleQuantityChange(e) {
    this.props.item.quantityInCart = e.target.value;
    // Update total value
    this.forceUpdate();
    this.props.updateAmountToPay(this.props.item);
  }
  render() {
    return(
      <tr className="items-in-cart">
        <td><img src={this.props.item.image}></img></td>
        <td>{this.props.item.name}</td>
        <td>£{this.props.item.price}</td>
        <td>
          <input type="number" name="quantity" min="1" max="10" onChange={this.handleQuantityChange} />
        </td>
        <td>£{this.props.item.price * this.props.item.quantityInCart}</td>
        <td><i className="fas fa-trash"
              onClick={this.handleRemoveFromCart}></i></td>
      </tr>
    )
  }
}

class ProductList extends React.Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return <Product key={item.id}
               item={item}
               addToCart={this.props.addToCart} />
    });
    return (
      <section id="list">
        {items}
      </section>
    )
  }
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(e) {
    this.props.addToCart(this.props.item);
  }
  render() {
    return (
      <div className="items">
        <img src={this.props.item.image}></img>
        <div className="info">
          <h3>{this.props.item.name}</h3>
          <span>£ {this.props.item.price}</span>
          <button onClick={this.handleAddToCart}
            disabled={this.props.item.inCart}
            className={this.props.item.inCart ? "button-disabled" : ""}>
            {this.props.item.inCart ? "Item in a cart" : "Add to cart"}
          </button>
        </div>
      </div>
    )
  }
}

class ShoppingCartApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: shoppingProducts,
      quantity: 0,
      amountToPay: 0,
      itemsInCart: []
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  addToCart(item) {
    let itemsInCart = this.state.itemsInCart;
    itemsInCart.push(this.props.items[item.id]);
    shoppingProducts[item.id].inCart = true;
    shoppingProducts[item.id].quantityInCart = 1;
    this.setState({
      quantity: this.state.quantity + 1,
      amountToPay: this.state.amountToPay + this.props.items[item.id].price,
      itemsInCart: itemsInCart,
      items: shoppingProducts
    });
  }
  removeFromCart(item, indexInCart) {
    let itemsInCart = this.state.itemsInCart;
    shoppingProducts[item.id].inCart = false;
    shoppingProducts[item.id].quantityInCart = 0;
    itemsInCart.splice(indexInCart, 1);
    this.setState({
      quantity: this.state.quantity - 1,
      amountToPay: this.state.amountToPay - this.props.items[item.id].price,
      itemsInCart: itemsInCart,
      items: shoppingProducts
    });
  }
  render() {
    return (
      <main>
        <Header quantity={this.state.quantity}
          amountToPay={this.state.amountToPay} />
        <ShoppingCartOverlay data={this.state}
          removeFromCart={this.removeFromCart} />
        <ProductList items={this.props.items}
          addToCart={this.addToCart} />
      </main>
    )
  }
}

ReactDOM.render(<ShoppingCartApp items={shoppingProducts} />,
               document.getElementById('root'));

              //  body {
              //   padding: 0;
              //   margin: 0;
              //   background-color: rgb(243,243,243);
              //   font-family: 'Montserrat', sans-serif;
              // }
              // main, #root {
              //   width: 100%;
              // }
              // main {
              //   display: flex;
              //   justify-content: center;
              // }
              // header {
              //   width: 100%;
              //   height: 4em;
              //   display: flex;
              //   position: fixed;
              //   justify-content: space-between;
              //   align-items: center;
              //   background-color: rgb(10,20,10);
              // }
              // header nav {
              //   margin-left: 2em;
              // }
              // header nav a {
              //   margin-right: 2em;
              //   text-decoration: none;
              //   color: rgb(220,230,220);
              // }
              // header nav a:hover {
              //   color: rgb(180,220,220);
              // }
              // header #cart {
              //   margin-right: 2em;
              //   color: rgb(220,230,220);
              // }
              // header #cart i {
              //   font-size: 1.5em;
              //   cursor: pointer;
              // }
              // header #cart i:hover {
              //   color: rgb(180,220,220);
              // }
              // #list {
              //   margin: 2em 2em 2em 2em;
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              // }
              // .items img {
              //   max-width: 75%;
              //   height: 30em;
              //   margin-right: 1em;
              // }
              // .items {
              //   display: flex;
              //   align-items: center;
              //   justify-content: center;
              //   width: 100%;
              //   margin: 0.5em 1em 0.5em 1em;
              //   -webkit-box-shadow: 0px 1px 2px 0px rgba(10,20,10,0.75);
              //   -moz-box-shadow: 0px 1px 2px 0px rgba(10,20,10,0.75);
              //   box-shadow: 0px 1px 2px 0px rgba(10,20,10,0.75);
              // }
              // .items:first-child {
              //   margin-top: 3em;
              // }
              // .info {
              //   display: flex;
              //   flex-direction: column;
              //   align-items: flex-start;
              //   justify-content: center;
              // }
              // .info button {
              //   margin-top: 1em;
              //   background-color: rgba(10,20,10,1);
              //   color: rgb(220,230,220);
              //   padding: 0.5em;
              //   border: none;
              //   cursor: pointer;
              // }
              // .info .button-disabled {
              //   background-color: rgb(180,40,40);
              //   cursor: default;
              // }
              // .hide-price {
              //   display: none;
              // }
              // #overlay {
              //   position: fixed;
              //   display: none;
              //   justify-content: center;
              //   align-items: center;
              //   width: 100%;
              //   height: 100%;
              //   background-color: rgba(10,20,10,0.75);
              // }
              // #shopping-cart {
              //   display: flex;
              //   flex-direction: column;
              //   background-color: rgb(243,243,243);
              //   z-index: 3;
              //   position: fixed;
              //   width: 90%;
              // }
              // #empty-cart {
              //   font-size: 2em;
              //   text-align: center;
              // }
              // #shopping-cart h2 {
              //   text-align: center;
              // }
              // #cart-header {
              //   display: flex;
              //   justify-content: space-between;
              //   align-items: center;
              //   padding: 0.5em 2em 0.5em 2em;
              //   -webkit-box-shadow: 0px 1px 2px 0px rgba(10,20,10,0.75);
              //   -moz-box-shadow: 0px 1px 2px 0px rgba(10,20,10,0.75);
              //   box-shadow: 0px 1px 2px 0px rgba(10,20,10,0.75);
              // }
              // #cart-title {
              //   font-size: 2em;
              // }
              // #cart-total {
              //   font-size: 1.5em;
              //   margin-left: 0.5em;
              // }
              // #checkout {
              //   padding: 0.5em;
              // }
              // table {
              //   margin-top: 1em;
              // }
              // #totals {
              //   margin: 1em;
              // }
              // .fa-times-circle {
              //   font-size: 2em;
              //   cursor: pointer;
              // }
              // .fa-times-circle:hover {
              //   color: rgb(180,220,220);
              // }
              // .fa-trash {
              //   font-size: 1.5em;
              //   cursor: pointer;
              // }
              // .fa-trash:hover {
              //   color: rgb(180,220,220);
              // }
              // .items-in-cart img {
              //   width: 4em;
              //   height: auto;
              // }
              // .items-in-cart {
              //   text-align: center;
              // }
              // td {
              //   padding: 0 1.5em 0 1.5em;
              // }
              // #totals {
              //   display: flex;
              //   justify-content: space-between;
              // }