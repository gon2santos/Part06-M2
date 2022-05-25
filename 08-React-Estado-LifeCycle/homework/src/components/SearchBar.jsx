import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.inptRef = React.createRef();
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.onSearch(this.inptRef.current.value);
      }}>
        <input type="text" placeholder="Ingrese Ciudad..." ref={this.inptRef} />
        <input type="submit" value="Agregar" />
      </form>
    )
  }
}