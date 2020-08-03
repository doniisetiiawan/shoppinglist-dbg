import React from 'react';
import styled, {
  createGlobalStyle,
} from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import ListsContextProvider, {
  ListsContext,
} from '../context/ListsContextProvider';
import Lists from './Lists';
import List from './List';
import ItemsContextProvider, {
  ItemsContext,
} from '../context/ItemsContextProvider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <ListsContextProvider>
          <ItemsContextProvider>
            <ListsContext.Consumer>
              {({ lists }) => (
                <ItemsContext.Consumer>
                  {({ items }) => (
                    <Switch>
                      <Route
                        exact
                        path="/"
                        render={(props) => lists && (
                        <Lists
                          lists={lists}
                          {...props}
                        />
                        )}
                      />
                      <Route
                        path="/list/:id"
                        render={(props) => lists
                          && items && (
                            <List
                              lists={lists}
                              listItems={items}
                              {...props}
                            />
                        )}
                      />
                    </Switch>
                  )}
                </ItemsContext.Consumer>
              )}
            </ListsContext.Consumer>
          </ItemsContextProvider>
        </ListsContextProvider>
      </AppWrapper>
    </>
  );
}

export default App;
