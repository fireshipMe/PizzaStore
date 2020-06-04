import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../Button/index';
import styles from './styles.module.scss';
import { pushItem } from '../../actions/cart';
import { QuantityPicker } from '../QuantityPicker/index';
// cant use hooks here because of loop
class PizzaDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
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
    this.props.pushItem(this.props.title, this.state.quantity);
  };

  render() {
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
        <Button text="Добавить в заказ" onClick={this.addToCart} />
      </div>
    );
  }
}

export default connect(null, { pushItem })(PizzaDescription);
