import React from 'react'
import loading from './loading.json'
import { Player } from '@lottiefiles/react-lottie-player'

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.player = React.createRef()
  }
  render() {
    return (
      <Player
        ref={this.player}
        autoplay={true}
        loop={true}
        controls={true}
        src={loading}
        speed={2}
        style={{ height: '300px', width: '300px' }}
      ></Player>
    )
  }
}

export default Spinner
