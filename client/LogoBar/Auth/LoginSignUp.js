import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Don\'t have an account? Sign up',
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }
  handleTouchTap() {
    var label = 'Don\'t have an account? Sign up';
    if (label === this.state.label) {
      label = 'Already have an account? Login';
    }
    this.setState({
      label,
    });
    this.props.flipForm();
  }
  render() {
    return (
      <FlatButton
          label={ this.state.label }
          onTouchTap={ this.handleTouchTap }
      />
    );
  }
}
LoginSignup.PropTypes = {
  flipForm: React.PropTypes.func.isRequired,
};

export default LoginSignup;