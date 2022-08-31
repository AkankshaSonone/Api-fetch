import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}