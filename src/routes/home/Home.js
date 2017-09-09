/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <div className={s.root}>
            <div className={s.container}>
              <h1>BitcoinCash.EARTH</h1>
              <h2>Social Philanthropy</h2>
              <p>Leveraging Bitcoin Cash micro-payments to help people rebuild their lives after natural disasters.</p>
            </div>
          </div>
        </Jumbotron>
        <Grid bsClass={s['container-fluid']}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} >
              <h2>I&lsquo;d like to request $</h2>
              <ol>
                <li>Create a <a href='https://bcc-wallet.btc.com/'>Bitcoin Cash wallet</a>.</li>
                <li>Go to 'Receive' and get your address.</li>
                <li>Share your address on social media sites with the #BitcoinCashEARTH hash tag</li>
              </ol>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} >
              <h2>I&lsquo;d like to donate $</h2>
              <ol>
                <li>Find someone in need of help via searching for the #BitcoinCashEARTH hashtag on twitter or facebook. Perform due diligence and confirm the person is legit and actually in need of help.</li>
                <li>Sign in to your <a href='https://bcc-wallet.btc.com/'>Bitcoin Cash wallet</a>.</li>
                <li>Go to 'Send' and paste the address of the person you intend to donate to in the Recipient address box.</li>
                <li>Input the amount you want to donate and send it.</li>
              </ol>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Home);
