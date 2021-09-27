/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Text,
  View
} from 'react-native';

import { getPopularMovie } from './services/services';


const App = () => {
  const [movie, setMovie] = useState('');
  const [err, setErr] = useState(null);

  useEffect(() => {
    getPopularMovie().then(movie => {
      setMovie(movie[0]);
    }).catch(err =>{
      setErr(err)
    });

  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Text>Movie Name: {movie.original_title} </Text>
      <Text>Movie Language: {movie.original_language} </Text>
      {/* <Text>Overview: {movie.overview} </Text> */}
      <Text>Release data: {movie.release_date} </Text>
      { err ? <Text style={{ color: 'red' }}>Our server is error.</Text> : null }
    </View>
  );
};

export default App;
