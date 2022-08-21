import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './NftData.css'
import './LandingPage.css'
import './ButtonAppBar.css'
import NftData from './NftData';
import LandingPage from './LandingPage';

const App = () => {

  return (
    <div className="App">
      <LandingPage/>
      <NftData/>
    </div>
  );
}

export default App;
