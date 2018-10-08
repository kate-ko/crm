import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UpdatePopup extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      surname: "",
      country: ""
    }
  }

  componentDidMount() {
    const clients = this.props.clients
    const id = this.props.id
    let client = clients.find(c => c._id === id)
    let name = client.name.split(" ");
    this.setState({ name: name[0], surname: name[1], country: client.country, wasChanged: true })
  }

  changeValue = (event, property) => {
    let value = event.target.value
    property === "name" ? this.setState({ name: value }) : property === "surname" ?
      this.setState({ surname: value }) : this.setState({ country: value })
  }

  updateClients = () => {
      this.props.updateClients(this.state, this.props.id)
  }

  render() {
    return <div className="edit-form">
      <FontAwesomeIcon onClick={this.props.closeUpdatePopup} icon="window-close" />
      <div className="edit-form-input">
        <div>Name:</div><div><input value={this.state.name} onChange={(e) => this.changeValue(e, "name")}></input></div>
        <div>Surname:</div><div><input value={this.state.surname} onChange={(e) => this.changeValue(e, "surname")}></input></div>
        <div>Country:</div><div><input value={this.state.country} onChange={(e) => this.changeValue(e, "country")}></input></div>
      </div>
      <button id="update" onClick={this.updateClients}>Update</button>
    </div>
  }
}

export default UpdatePopup;