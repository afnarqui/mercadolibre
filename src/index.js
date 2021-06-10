import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

const Home = React.lazy(() => import('./components/views/Home'))

ReactDOM.render(<Suspense fallback={ <div /> }><Home /></Suspense>, document.getElementById('app'))