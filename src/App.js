import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './NftData.css'
import './SearchBar.css'
import './ButtonAppBar.css'
import './NftSearchItem.css'

import NftData from './components/NftData';
import SearchBar from "./components/SearchBar"
import useNfts from './hooks/useNfts';
import NftSearchItem from './components/NftSearchItem';

const App = () => {

  const [nftCollection, search] = useNfts("")

  return (
    <div className="App">
      <SearchBar onSubmit={search}/>
      <NftSearchItem nft={nftCollection}/>
      <NftData/>
    </div>
  );
}

export default App;
