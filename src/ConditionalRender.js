import React from 'react';
class ConditionalRender extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }
  render() {
    return (
      <div>
        <conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default ConditionalRender;
