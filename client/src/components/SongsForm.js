import React from 'react';

class SongsForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {/* // override the form handling -- we got this  */}
        <input
          placeholder="Add A Song"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
      </div>
    )
  }
}
{/* </div> */}
{/* <div> */}
{/* <input
  required
  value={this.state.rank}
  onChange={this.handleChange}
  // todo - make sure this ^^^ isn't BS
/> */}
{/* </div> */}
{/* <div> */}
  {/* <input type="submit" value="Add Song" /> */}
{/* </div> */}

export default SongsForm;
