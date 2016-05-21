import React, { PropTypes } from 'react'
import colorHash from 'helpers/colorHash'

const ChatMessage = ({ message = {}, user = '', styles, style }) => {
  const username = typeof user === 'string' ? user : user.name
  const color = typeof user === 'string' ? colorHash(username) : `#${user.color}`

  return (
    <li style={style} className={styles.message}>
      <strong style={{color: color}}>{username}: </strong>
      {message.text}{' '}
      {message.edited &&
        <small className={styles.messageEdited}>(edited)</small>}
    </li>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  styles: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
}

export default ChatMessage
