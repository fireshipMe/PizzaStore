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
    if (
      find(this.props.items, {
        title: this.props.title,
      })
    ) {
      console.log(1);
      this.setState({ isAdded: true });
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
      this.props.pushItem(this.props.title, this.state.quantity);
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
        <p className={styles.price}>{this.props.price + ' P'}</p>
        <QuantityPicker
          value={this.state.quantity}
          onDecClick={() => this.dec()}
          onIncClick={() => this.inc()}
        />
        {this.state.isAdded ? (
          <Button text="Убрать" onClick={this.remFromCart} />
        ) : (
          <Button text="Добавить в заказ" onClick={this.addToCart} />
        )}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { items: state.cart };
};

export default connect(mapStateToProps, { pushItem, remItem })(
  PizzaDescription
);
