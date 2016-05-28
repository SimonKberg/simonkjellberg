import React, { Component, PropTypes } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { TransitionMotion, spring, presets } from 'react-motion'

import ChatMessage from './ChatMessage'
import {
  getChatMessageIds,
  getChatMessageEntities,
  getChatUserEntities
} from './chatSelectors'

const { bool, object, array } = PropTypes

class ChatMessageList extends Component {
  static propTypes = {
    open: bool,
    messageIds: array,
    messages: object,
    users: object,
    styles: object
  }

  list = null
  shouldScroll = true

  componentDidMount () {
    this.scrollToBottom()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  componentWillUpdate () {
    if (this.list) {
      const maxScroll = this.list.scrollTop + this.list.offsetHeight

      this.shouldScroll = maxScroll === this.list.scrollHeight
    }
  }

  componentDidUpdate () {
    if (this.shouldScroll) {
      setTimeout(this.scrollToBottom, 0)
    }
  }

  scrollToBottom = () => {
    if (this.list) {
      this.list.scrollTop = this.list.scrollHeight
    }
  }

  getStyles (style = {}) {
    const { messageIds, messages, users } = this.props
    console.log(messageIds, messages, users)
    return messageIds.map(id => {
      const message = messages[id]
      const user = message.username || users[message.user]

      console.log(id, message, user)

      return {
        key: id,
        style: {...style},
        data: {
          message,
          user
        }
      }
    })
  }

  getWillEnterStyles = () => ({
    translateX: -50,
    opacity: 0
  })

  getWillLeaveStyles = () => ({
    translateX: spring(-50),
    opacity: spring(0)
  })

  onListMount = (el) => {
    this.list = el
  }

  render () {
    const { open, styles } = this.props

    const transition = {
      defaultStyles: this.getStyles({
        translateX: 0,
        opacity: 0
      }),
      styles: this.getStyles({
        translateX: spring(0),
        opacity: spring(1, presets.gentle)
      }),
      willEnter: this.getWillEnterStyles,
      willLeave: this.getWillLeaveStyles
    }

    const list = {
      className: classNames(styles.messageList, {
        [styles.messageListOpen]: open
      }),
      ref: this.onListMount,
      onTransitionEnd: this.scrollToBottom
    }

    return (
      <div className={styles.messageListWrapper}>
        <TransitionMotion {...transition}>
          {motion =>
            <ul {...list}>
              {motion.map(({ key, style: { opacity, translateX }, data }) => {
                const props = {
                  key,
                  styles,
                  style: {
                    opacity,
                    transform: `translateX(${translateX}%)`
                  }
                }

                return <ChatMessage {...data} {...props} />
              })}
            </ul>
          }
        </TransitionMotion>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messageIds: getChatMessageIds(state),
  messages: getChatMessageEntities(state),
  users: getChatUserEntities(state)
})

export default connect(mapStateToProps)(ChatMessageList)
