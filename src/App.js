import React from 'react';
import './App.css';
import {Layout} from './components/Layout/Layout'
import Vehicles from './containers/Vehicles/Vehicles'

function App() {
  return (
    <div className="App">
      <Layout>
        <Vehicles>

        </Vehicles>
      </Layout>
    </div>
  );
}

export default App;
