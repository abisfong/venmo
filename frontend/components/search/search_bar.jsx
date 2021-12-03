import React from 'react';
import Input from '../inputs/input';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = debounce(inputEl => this.props.search(inputEl.value), 400);
  }

  render() {
    const updateField = this.props.updateField;
    const update = this.props.update;
    return (
      <Input
        id='to'
        type='text'
        className='to'
        onChange={update(updateField, this.search)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(getSearchResults(input))
});

export default connect(null, mapDispatchToProps)(SearchBar);
