import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { Button } from '../Button/index';
import styles from './styles.module.scss';
import { pushItem, remItem } from '../../actions/cart';
import { QuantityPicker } from '../QuantityPicker/index';
// cant use hooks here because of loop
class PizzaDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      isAdded: false,
    };
  }

  componentDidMount() {
    // check if this pizza is in the cart
    const item = find(this.props.items, {
      title: this.props.title,
    });
    if (item) {
      this.setState({ isAdded: true, quantity: item.quantity });
    }
  }

  dec = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  inc = () => {
    if (this.state.quantity < 9) {
      this.setState({ quantity: this.state.quantity + 1 });
    }
  };

  addToCart = () => {
    console.log(this.props.items);
    if (!this.state.isAdded) {
      this.props.pushItem(
        this.props.title,
        this.state.quantity,
        this.props.price
      );
      this.setState({ isAdded: true });
    }
  };

  remFromCart = () => {
    if (this.state.isAdded) {
      this.props.remItem(this.props.title);
      this.setState({ isAdded: false });
    }
  };

  render = () => {
    return (
      <div className={styles.container}>
        <figure className={styles.imageContainer}>
          <img
            className={styles.image}
            src={this.props.imageLink}
            alt={this.props.title}
          ></img>
        </figure>
        <div className={styles.wrapperTitle}>
          <p className={styles.title}>{this.props.title}</p>
        </div>
        <div className={styles.wrapperDescription}>
          <p className={styles.description}>{this.props.description}</p>
        </div>
        <div className={styles.priceContainer}>
          <Price price={this.props.price} quantity={this.state.quantity} />
        </div>
        <div className={styles.quantityPicker}>
          <QuantityPicker
            value={this.state.quantity}
            onDecClick={() => this.dec()}
            onIncClick={() => this.inc()}
          />
        </div>
        {this.state.isAdded ? (
          <Button text="УБРАТЬ" onClick={this.remFromCart} isAdded="true" />
        ) : (
          <Button text="В КОРЗИНУ" onClick={this.addToCart} />
        )}
      </div>
    );
  };
}

const Price = ({ price, quantity }) => {
  const toEuro = () => {
    // Might consider using some exchanges API, but for now will use exchange rates as for today
    return price * 0.88;
  };

  return (
    <div>
      <p className={styles.price}>{(price * quantity).toPrecision(2) + ' $'}</p>
      <p className={styles.price}>
        {(toEuro() * quantity).toPrecision(2) + ' €'}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { items: state.cart };
};

export default connect(mapStateToProps, { pushItem, remItem })(
  PizzaDescription
);
