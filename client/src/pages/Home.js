import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
 
  const { loading, data } = useQuery(QUERY_THOUGHTS); //<-------WHOA!
  const thoughts = data?.thoughts || [];
  console.log(thoughts);
  //time for big data with option chaining
  //if anything exists in the 'data' property store it if not store '[]'
  //b-c if 'data' is undefined
  


  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {
            loading ? (<div>Loading...</div>):
            (<ThoughtList thoughts={thoughts} title= "Some Feed for Thought(s)..." />)
          }
        </div>
      </div>
    </main>
  );
};

export default Home;
