import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: '350px';
  margin: '80px auto';
  border: 'gray 2px solid';
  border-radius: '5px';
  padding: '16px 16px';
`

const SubscriptionForm = ({height}) =>
  <Form
    action="https://buttondown.email/api/emails/embed-subscribe/jportella93"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/jportella93', 'popupwindow')"
    className="embeddable-buttondown-form"
  >
    <label htmlFor="bd-email">
      Te ha resultado interesante?<br/>
      Deja tu e-mail para recibir los siguientes articulos<br/>
    </label>
    <input type="email" name="email" id="bd-email" placeholder="Tu email..."/>
    <input type="hidden" value="1" name="embed" />
    <input type="submit" value="Subscribirse" />
  </Form>

SubscriptionForm.propTypes = {
  height: PropTypes.string,
}

export default SubscriptionForm
