/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

function List({
  lists,
  listItems,
  match,
  history,
}) {
  const items = listItems
    && listItems.filter(
      (item) => item.listId === parseInt(match.params.id, 10),
    );
  const list = lists
    && lists.find(
      (list) => list.id === parseInt(match.params.id, 10),
    );

  return (
    <>
      {history && list && (
        <SubHeader
          goBack={() => history.goBack()}
          title={list.title}
          openForm={() => history.push(`${match.url}/new`)}
        />
      )}

      <ListItemWrapper>
        {items
          && items.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
      </ListItemWrapper>
    </>
  );
}

export default List;
