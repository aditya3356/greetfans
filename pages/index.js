import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import StripeBanner from '../components/stripeBanner';
import Amplify, {API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { listUsers, listPlatforms } from '../src/graphql/queries';
import { useEffect, useState } from 'react';
import {fetchData} from '../fetcher';

Amplify.configure(awsconfig);

function Home( props ) {
  const [profileData, setProfileData] = useState([]);
  const [platformData, setPlatformData] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    fetchPlatform();
  }, []);

  // useEffect(() => {
  //   fetchData(profileData, platformData);
  // })

  const fetchProfile = async () => {
    try {
      const profileData = await API.graphql(graphqlOperation(listUsers));
      const profileList = profileData.data.listUsers.items;
      console.log('profile list', profileList);

      setProfileData(profileList);
      // console.log(profileData);
    } catch (error) {
      console.log('error on fetching profile', error);
    }
  };

  const fetchPlatform = async () => {
    try {
      const platformData = await API.graphql(graphqlOperation(listPlatforms));
      const platformList = platformData.data.listPlatforms.items;
      // console.log('platform list', platformList);

      let stripeUserId = platformList[0]["stripeUserId"];

      let updatedPlatformList = {...platformList[0]};
      
      delete updatedPlatformList["stripeUserId"];

      updatedPlatformList["stripe"] = {
        "stripeUserId": stripeUserId
      };

      console.log('updated platform list', updatedPlatformList);

      setPlatformData(updatedPlatformList);
      // console.log(platformData);
    } catch (error) {
      console.log('error on fetching platform', error);
    }
  };

  return (
    <Layout
      isAuthenticated={props.isAuthenticated}
      userProfile={props.userProfile}
      title="Welcome"
      isSplashPage="true"
    >
      <div className="home">
        <div className="container">
          <div className="text">
            <h1>Manage your coffee roastery with ease.</h1>
            <h2>
              Roastery is a Stripe demo that is using Stripe Connect to power
              a SaaS platform for coffee roasters.
            </h2>
            <Link href="/signup">
              <a className="btn btn-primary">Get started</a>
            </Link>
          </div>
        </div>

        <StripeBanner />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          height: 100%;
          align-items: center;
          padding-bottom: 30%;
        }

        h1 {
          font-size: 40px;
          font-weight: 600;
          color: #fff;
          width: 70%;
          margin-bottom: 30px;
        }

        h2 {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          width: 60%;
          margin-bottom: 30px;
        }

        .text {
          padding: 20px;
          position: relative;
          width: 100%;
          border: 0;
        }
      `}</style>
    </Layout>
  );
}

export default withAuthenticator(Home);
