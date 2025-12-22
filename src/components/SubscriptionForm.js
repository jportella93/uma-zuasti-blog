import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { palette } from './constants';

const Form = styled.form`
  max-width: 560px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 18px;
  text-align: left;
  background: ${palette.white};

  label {
    display: block;
    color: #222;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 12px;
  }

  input[type='email'] {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 8px;
    padding: 12px 14px;
    font-size: 1rem;
    line-height: 1.4;
  }

  input[type='email']:focus-visible {
    outline: 3px solid rgba(197, 49, 81, 0.35);
    outline-offset: 2px;
  }

  input[type='submit'] {
    margin-top: 12px;
    background-color: ${palette.red};
    color: ${palette.white};
    border: 0;
    border-radius: 10px;
    padding: 12px 16px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
  }

  input[type='submit']:active {
    filter: brightness(0.9);
  }
`

const SubscriptionForm = () =>
  <Form
    action="https://buttondown.email/api/emails/embed-subscribe/umazuasti"
    method="post"
    target="popupwindow"
    // Buttondown's embed expects a popup; React requires onSubmit handler (not an HTML string).
    onSubmit={() => window.open('https://buttondown.email/umazuasti', 'popupwindow')}
    className="embeddable-buttondown-form"
  >
    <label htmlFor="bd-email">
      ¿Te ha resultado interesante?
      <br />
      Deja tu email para recibir los siguientes artículos.
    </label>
    <input type="email" name="email" id="bd-email" placeholder="Tu email…" required />
    <input type="hidden" value="1" name="embed" />
    <input type="submit" value="Suscribirme" />
  </Form>

SubscriptionForm.propTypes = {
  height: PropTypes.string,
}

export default SubscriptionForm
