// import { useState } from 'react'
// import favicon from '../src/assets/images/favicon-32x32.png'
import './App.css';
import './custom.css';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';
import RatingList from '../components/RatingList.jsx';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <RatingList />
      <Footer />
      <Button />
    </div>
  )
}

export default App
