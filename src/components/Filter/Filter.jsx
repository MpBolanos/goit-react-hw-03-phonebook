import { Component } from 'react';
import PropTypes from 'prop-types';

import '../Filter/Filter.css';

export class Filter extends Component {
  render() {
    const { filter, addFilter } = this.props;
    return (
      <div className='filter'>
        <input
          type='text'
          name='filter'
          className='filter__input'
          value={filter}
          onChange={addFilter}
          placeholder='Enter name'
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func,
};