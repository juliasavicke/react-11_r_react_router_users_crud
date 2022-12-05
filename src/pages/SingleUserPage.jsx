import { useHistory, useParams } from 'react-router-dom';
import { Icon, Section, Title } from '../components/styled/UI.styled';
import { useState, useEffect } from 'react';

function SingleUserPage(props) {
  const allParams = useParams();
  const currentUserId = allParams.userId;
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getCurrentUser();
  }, []);

  async function getCurrentUser() {
    try {
      let url = `https://dummyjson.com/users/${currentUserId}`;
      const response = await fetch(url);
      const dataInJs = await response.json();
      setCurrentUser(dataInJs);
    } catch (error) {
      console.warn('did not get users');
    } finally {
    }
  }
  console.log('currentUser ===', currentUser);

  function goBack() {
    // programine navigacija
    // window.location.href = '/users' vanila js
    history.push('/users');
  }

  // susikurti data state for current user currentUser
  // parsisiusti su feth useEffecte duomenis apie konkretu useri
  // is gautu duomenu atvaizduojam daugiau info apie useri

  return (
    <Section>
      <img src={currentUser.image}></img>
      <Icon icon='phone-square' />
      <h1>
        {currentUser.firstName} {currentUser.lastName}
      </h1>
      <p>{currentUser.email}</p>
      <p>
        {currentUser.gender === 'female' ? 'She' : 'He'} is {currentUser.height}{' '}
        height, weights 80 km. Has a green eyes and{' '}
        {currentUser && currentUser.hair && currentUser.hair.color} straight
        hair studies in university : {currentUser.university}
      </p>
      <button onClick={goBack}> Back To Users</button>
    </Section>
  );
}
export default SingleUserPage;
