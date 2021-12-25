import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Pivot } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import {PivotItem} from './PivotItem'

initializeIcons(/* optional base url */);
function App() {
  return (
    <div className="App">
      <Pivot aria-label="Count and Icon Pivot Example">
        <PivotItem itemIcon={true && "Emoji2"}>
          abc
        </PivotItem>
        <PivotItem itemIcon={false || "Recent"}>
          adsfd
        </PivotItem>
        <PivotItem itemIcon="Globe">
          afd
        </PivotItem>
        <PivotItem itemIcon="Ringer">
          a123bc
        </PivotItem>
      </Pivot>
    </div>
  );
}

export default App
;