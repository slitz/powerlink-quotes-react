import React, { Component } from 'react';
import MultiselectTwoSides from 'react-multiselect-two-sides';

class Listbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      value: []
    };
  }

  handleChange = (value) => {
    this.setState({value});
  }

  render() {
    const {header, options, values, handleChange} = this.props
    //const selectedCount = value.length;
    //const availableCount = options.length - selectedCount;

    return (
      <MultiselectTwoSides
        {...this.state}
        className="msts_theme_example"
        options={options}
        value={values}
        onChange={this.handleChange}
        availableHeader="Available"
        //availableFooter={`Available: ${availableCount}`}
        selectedHeader={header}
        //selectedFooter={`Selected: ${selectedCount}`}
        labelKey="name"
        showControls
        searchable
      />
    );
  }
}

export default Listbox;
