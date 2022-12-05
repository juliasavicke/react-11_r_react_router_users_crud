import { Section, Title } from '../components/styled/UI.styled';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import SingleUserPage from './SingleUserPage';

const Li = styled.li`
  list-style-type: none;
`;

const UserLink = styled(Link)`
  display: block;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5em 1em;
  margin-bottom: 4px;
  &:hover {
    background-color: #fff;
  }
`;

function UsersPage(props) {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      let url = 'https://dummyjson.com/users';
      const response = await fetch(url);
      const dataInJs = await response.json();
      setUsersArr(dataInJs.users);
    } catch (error) {
      console.warn('did not get users');
    } finally {
    }
  }
  console.log('usersArr ===', usersArr);

  return (
    <Section>
      <Title>Users Page</Title>
      <p>This is our users page</p>
      <Route path={'/users/:userId'}>
        <SingleUserPage></SingleUserPage>
      </Route>
      <ul>
        {usersArr.map((uObj) => (
          <Li key={uObj.id}>
            <UserLink to={`/users/${uObj.id}`}>
              {uObj.firstName} {uObj.lastName} {uObj.id}
            </UserLink>
          </Li>
        ))}
        <li></li>
      </ul>
    </Section>
  );
}
export default UsersPage;
