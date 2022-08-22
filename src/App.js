import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './NftData.css'
import './LandingPage.css'
import './ButtonAppBar.css'
import NftData from './NftData';
import LandingPage from './LandingPage';
import SearchBar from "./SearchBar"
import useNfts from './hooks/useNfts';
import NftSearchItem from './NftSearchItem';

const App = () => {

  const [nftCollection, search] = useNfts("")

  return (
    <div className="App">
      <SearchBar onSubmit={search}/>
      <LandingPage/>
      <NftSearchItem nft={nftCollection}/>
      <NftData/>
    </div>
  );
}

export default App;
