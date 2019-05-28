import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Collapsible from 'react-collapsible';
import Listbox from './Listbox'

class App extends Component {
  state = {
    stationOptions: [
      {name: 'Foo', value: 0},
      {name: 'Bar', value: 1},
      {name: 'Baz', value: 2},
      {name: 'Qux', value: 3},
      {name: 'Quux', value: 4},
      {name: 'Corge', value: 5}
    ],
    stationValues: [],
    kitOptions: [
      {name: 'Kit1', value: 0},
      {name: 'Kit2', value: 1},
      {name: 'Kit3', value: 2}
    ],
    kitValues: [],
    cloudPlanOptions: [
      {name: '1yr Prepaid Commerical', value: 0},
      {name: '2yr Prepaid Commerical', value: 1},
      {name: '3yr Prepaid Commerical', value: 2}
    ],
    cloudPlanValues: [],
    warrantyPlanOptions: [
      {name: '1yr Prepaid Assure Plan', value: 0},
      {name: '2yr Prepaid Assure Plan', value: 1},
      {name: '3yr Prepaid Assure Plan', value: 2}
    ],
    warrantyPlanValues: [],
    activationAndValidationOptions: [
      {name: 'CPSUPPORT-ACTIVE', value: 0},
      {name: 'CPF-ACTIVE', value: 1},
      {name: 'CT4000-INSTALLVALID', value: 2}
    ],
    activationAndValidationValues: [],
    stationsListBoxHeader: 'Charging Stations',
    kitsListBoxHeader: 'Kits',
    cloudPlansListBoxHeader: 'Cloud Plans',
    warrantyPlansListBoxHeader: 'Warranty Plans',
    activateAndValidateListBoxHeader: 'Activation & Validation'
  }

  handleChange = (value) => {
    this.setState({value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">QUOTE BUILDER</h1>
        </header>
        <section>
          <Collapsible
          trigger={this.state.stationsListBoxHeader}
          open={true}
          transitionTime={200}>
            <Listbox
             options={this.state.stationOptions}
             values={this.state.stationValues}
             handleChange={this.handleChange}
            />
          </Collapsible>
          <Collapsible
          trigger={this.state.kitsListBoxHeader}
          transitionTime={200}>
            <Listbox
             options={this.state.kitOptions}
             values={this.state.kitValues}
             handleChange={this.handleChange}
            />
          </Collapsible>
          <Collapsible
          trigger={this.state.cloudPlansListBoxHeader}
          transitionTime={200}>
            <Listbox
             options={this.state.cloudPlanOptions}
             values={this.state.cloudPlanValues}
             handleChange={this.handleChange}
            />
          </Collapsible>
          <Collapsible
          trigger={this.state.warrantyPlansListBoxHeader}
          transitionTime={200}>
            <Listbox
             options={this.state.warrantyPlanOptions}
             values={this.state.warrantyPlanValues}
             handleChange={this.handleChange}
            />
          </Collapsible>
          <Collapsible
          trigger={this.state.activateAndValidateListBoxHeader}
          transitionTime={200}>
            <Listbox
             options={this.state.activationAndValidationOptions}
             values={this.state.activationAndValidationValues}
             handleChange={this.handleChange}
            />
          </Collapsible>
        </section>

      </div>
    );
  }
}

export default App;
