import { Songs } from './Context';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import DataSongs from './data/songs.json'

function App() {
  return (
    <div className="">
      <Songs.Provider value={{ DataSongs }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-detailSong-navbar-player overflow-hidden'>
          <DetailSong />
          <ListSong />
        </div>
      </Songs.Provider>
    </div>
  );
}

export default App;
