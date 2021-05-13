import React from 'react';
import Scheduler from './components/Scheduler';
import { Stack } from '@fluentui/react/lib/Stack';
import Footer from './components/Footer';

function App() {
  return (
    <Stack verticalAlign="space-between" styles={{ root: { height: '100%'}}}>
      <Scheduler />
      <Footer />
    </Stack>
  );
}

export default App;
