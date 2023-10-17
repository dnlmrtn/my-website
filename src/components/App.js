import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Work from '../routes/Work';
import Personal from '../routes/Personal';
import Projects from '../routes/Projects';
import Layout from './Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="personal" element={<Personal />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;