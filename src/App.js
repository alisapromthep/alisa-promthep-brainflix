
import './App.scss';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import CommentForm from './components/CommentForm/CommentForm';

function App() {
  return (
    <>
    <Header />
    <main>
      <VideoPlayer />
      <CommentForm />
    </main>
    </>
  );
}

export default App;
