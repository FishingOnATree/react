import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  state = {
    query: ''
  };
  updateQuery = (query) => {
    this.setState(() => ({query: query.trim()}))
  };
  resetQuery = (query) => {
    this.updateQuery('')
  };
  render() {
    console.log('Props', this.props)
    const showingContacts = this.state.query === ''
      ? this.props.contacts: this.props.contacts.filter((c) => (
          c.name.toLowerCase().includes(this.state.query.toLowerCase())));
    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <a
            href='#create'
            onClick={this.props.onNavigate}
            className='add-contact'
          >Add Contact</a>
        </div>
        {showingContacts.length !== this.props.contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {this.props.contacts.length}</span>
            <button onClick={this.resetQuery}>Show all</button>
          </div>
        )}
        <ol className='contact-list'>
          {showingContacts
            .map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}>
              </div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                onClick={() => this.props.onDeleteContact(contact)}
                className='contact-remove'>Remove</button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts
