import React from 'react'
import AsyncComponent from 'shared/components/async'

const loader = cb => System.import('./Chat').then(Chat => cb(Chat.default))

// require.ensure([], require => cb(require('./Chat')))

export default (props) => <AsyncComponent {...props} loader={loader} />
