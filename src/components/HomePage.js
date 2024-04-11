import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("in useEffect fun");
    const checkToken = () => {
      try {
        const mytoken = JSON.parse(localStorage.getItem('mytoken'));

        if (mytoken!=null && mytoken.token!=null) {
          const decodedToken = JSON.parse(atob(mytoken.token.split(".")[1]));
          const expirationTime = decodedToken.exp * 1000;
          const currentTime = Date.now();

          if (expirationTime < currentTime) {
            console.log("expire time");
            localStorage.removeItem('mytoken');
            navigate('/login');
          }else{
            console.log("session not expired");
          }
        } 
        else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    checkToken();
  }, [navigate]);

  return (
    <div>
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
