import React, { useState } from 'react';
import { Button, Form } from 'bootstrap-4-react';
import { withRouter } from 'react-router-dom';

const SearchForm = ({ history }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?name=${query}`);
  };

  return (
    <Form inline my='2 lg-0' onSubmit={handleSubmit}>
      <Form.Input
        type='search'
        placeholder='Search for movie...'
        mr='md-2'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button outline danger my='2 sm-0'>
        <i className='fa fa-search'></i>
      </Button>
    </Form>
  );
};

export default withRouter(SearchForm);
