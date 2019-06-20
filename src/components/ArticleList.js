import React from 'react';

class ArticleList extends React.Component {

  render(){
    const items = this.props.articles;
    return(
      <article>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.webUrl}>{item.webTitle}</a>
            </li>
          ))}
        </ul>
      </article>
    )
  }
}

export default ArticleList;