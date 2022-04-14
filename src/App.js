
import './App.scss';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import CommentForm from './components/CommentForm/CommentForm';
import CommentCard from './components/CommentCard/CommentCard';

function App() {
  return (
    <>
    <Header />
    <main>
      <VideoPlayer />
      <CommentForm />
      <CommentCard />
      <CommentCard />
    </main>
    </>
  );
}

export default App;
