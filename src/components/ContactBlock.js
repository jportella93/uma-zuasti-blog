import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { palette } from '../components/constants';
import { A } from '../components/TextStyles';
import mailRedSrc from '../img/mail-red.svg';
import mailWhiteSrc from '../img/mail-white.svg';
import phoneRedSrc from '../img/phone-red.svg';
import phoneWhiteSrc from '../img/phone-white.svg';

const iconSrcs = {
  mail: {
    red: mailRedSrc,
    white: mailWhiteSrc
  },
  phone: {
    red: phoneRedSrc,
    white: phoneWhiteSrc
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
  margin: 0 auto 50px;
`

const FirstContactLink = styled.a`
  margin-bottom: 24px;
`

const ContactItemBlock = styled.div`
  display: flex;
  align-items: center;
`

const ContactItemImg = styled.img`
  margin-right: 14px;
`

const MenuItem = styled(A)`
  font-weight: ${({ bold }) => bold && 'bold'};
`

const ContactBlock = ({color, bold}) => (
  <Container>

    <FirstContactLink href="mailto:umazuasti@gmail.com">
      <ContactItemBlock>
        <ContactItemImg src={iconSrcs.mail[color]} />
        <MenuItem color={palette[color]} bold={bold}>umazuasti@gmail.com</MenuItem>
      </ContactItemBlock>
    </FirstContactLink>

    <a href="tel:636231517">
      <ContactItemBlock>
        <ContactItemImg src={iconSrcs.phone[color]} />
        <MenuItem color={palette[color]} bold={bold}>636231517</MenuItem>
      </ContactItemBlock>
    </a>

  </Container>
)

ContactBlock.propTypes = {
  color: PropTypes.oneOf(['white', 'red']),
  bold: PropTypes.bool
}

ContactBlock.defaultProps = {
  color: 'white',
  bold: false
}

export default ContactBlock;
