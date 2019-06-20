import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import ArticleSearch from './components/ArticleSearch';


it('renders correctly', () => {
  const tree = renderer
    .create(<ArticleSearch/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

