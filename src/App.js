import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps';

const config = require('./config.json')

function App() {
  return (
    <ReactBingmaps 
  bingmapKey = {config.dev.bing_maps_key} > 
</ReactBingmaps>
  );
}

export default App;
