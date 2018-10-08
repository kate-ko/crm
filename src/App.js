import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UpdatePopup from './сomponents/UpdatePopup';
import { CLIENTS } from './init-data';
import moment, { updateLocale } from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight, faCheck, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faAngleLeft, faAngleRight, faCheck, faWindowClose);

const ITEMSPERPAGE = 15

class App extends Component {
  constructor() {
    super()
    this.fields = ["Name", "Surname", "Country", "First Contact", "Email", "Sold", "Owner"]
    this.state = {
      allClients: CLIENTS,
      clients: [],
      searchedClient: "",
      searchType: "name",
      currentPage: 1,
      showUpdatePopup: false,
      clientToChange: -1 // id of the client to change in popup form or -1 if none
    }
  }

  searchClient = (event) => this.setState({
    searchedClient: event.target.value
  })

  changeSearchType = (event) => this.setState({
    searchType: event.target.value
  })

  changePage = (action) => {
    let currentPage = this.state.currentPage
    action === "plus" ? currentPage++ : currentPage--
    this.setState({ currentPage })
  }

  editName = (id) => {
    let showUpdatePopup = !this.state.showUpdatePopup
    this.setState({ showUpdatePopup, clientToChange: id })
  }

  updateClients = (state, id) => {
    let clients = this.state.allClients
    let index = clients.findIndex(c => c._id === id)
    clients[index].name = state.name + " " + state.surname
    clients[index].country = state.country
    this.setState({ allClients: clients, showUpdatePopup: false })
  }

  closeUpdatePopup = () => this.setState({ showUpdatePopup: false })

  renderClients = (clients) =>
    <div id="grid-container">
      <div id="grid-header">
        {this.fields.map((f, i) => <div key={i}>{f}</div>)}
      </div>
      {clients.map(c => {
        let name = c.name.split(" ");
        let firstContact = moment(c.firstContact).format("MM/DD/YY")
        return (<div className="item" key={c._id} onClick={() => this.editName(c._id)}>
          <div>{name[0]}</div><div>{name[1]}</div><div>{c.country}</div>
          <div>{firstContact}</div>
          <div>{c.emailType ? c.emailType : "-"}</div>
          <div>{c.sold ? <FontAwesomeIcon icon="check" /> : "-"}</div>
          <div>{c.owner}</div></div>)
      })}
    </div>

  showSearchBar = () => <div className="search-bar">
    <input type="text" placeholder="Search" value={this.state.searchedClient} onChange={this.searchClient}></input>
    <span> </span>
    <select value={this.state.searchType} onChange={this.changeSearchType}>
      <option value="name">Name</option>
      <option value="country">Country</option>
      <option value="owner">Owner</option>
    </select>
  </div>

  // Pagination and search bar
  showPagination = (startIndex, endIndex, lastPage) =>
    <div className="pagination">
      {this.state.currentPage !== 1 ? <FontAwesomeIcon onClick={(e) => this.changePage("minus")} icon="angle-left" size="1x" /> : null}
      <span> </span> {startIndex} - {endIndex} <span> </span>
      {this.state.currentPage !== lastPage ? <FontAwesomeIcon onClick={() => this.changePage("plus")} icon="angle-right" size="1x" /> : null}
    </div>

  showNavBar = () =>
    <ul id="nav-bar">
      <li><Link to="/"><span>Clients</span></Link></li>
      <li><Link to="/"><span>Actions</span></Link></li>
      <li><Link to="/"><span>Analytics</span></Link></li>
    </ul>


  render() {
    let searchType = this.state.searchType.toLowerCase()
    let clients = [...this.state.allClients]
    let startIndex = (this.state.currentPage - 1) * ITEMSPERPAGE
    let endIndex = startIndex + ITEMSPERPAGE - 1
    clients = clients.filter(c => c[searchType].toLowerCase().includes(this.state.searchedClient.toLowerCase()))
    let lastPage = Math.ceil(clients.length / ITEMSPERPAGE)
    clients = clients.slice(startIndex, endIndex + 1) // for pagination

    return (
      <Router>
        <div className="App">
          {this.showNavBar()}
          <div className="container">
            <div className="row-bar">
              {this.showSearchBar()}
              {this.showPagination(startIndex, endIndex, lastPage)}
            </div>
            {this.renderClients(clients)}
          </div>
          {this.state.showUpdatePopup ? <UpdatePopup id={this.state.clientToChange}
            clients={clients}
            updateClients={this.updateClients}
            closeUpdatePopup={this.closeUpdatePopup}
          /> : null}
          <Switch>
            <Route path="/actions" exact render={() => "not now"} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
