import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { QuantityPicker } from '../QuantityPicker/index';
import { INC, DEC, REM_ITEM } from '../../actions/actionTypes';
//again cant use hooks because of loops
class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  inc = () => {
    if (this.props.quantity < 9) {
      this.props.dispatch({
        type: INC,
        title: this.props.title,
        quantity: this.props.quantity,
      });
    }
  };

  dec = () => {
    if (this.props.quantity > 1) {
      this.props.dispatch({
        type: DEC,
        title: this.props.title,
        quantity: this.props.quantity,
      });
    }
  };

  render = () => {
    return (
      <div className={styles.item}>
        <span className={styles.name}>{this.props.title}</span>
        <span
          className={styles.remove}
          onClick={() =>
            this.props.dispatch({ type: REM_ITEM, title: this.props.title })
          }
        >
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
        <span className={styles.quantity}>
          <QuantityPicker
            value={this.props.quantity}
            onDecClick={() => this.dec()}
            onIncClick={() => this.inc()}
          />
        </span>
      </div>
    );
  };
}

export default connect()(Item);
