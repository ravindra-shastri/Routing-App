import React from 'react';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <>
        <div>
          Test
        </div>
      </>

    )
  }
}
