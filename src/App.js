import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

import Counter from './Counter';
import { getUser } from './redux/ducks/user';

 
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])
  useEffect(() => {
    dispatch(getUser())
  }, [])
  useEffect(() => {
    dispatch(getUser())
  }, [])
  const user = useSelector((state) => state.user.user)
  console.log(user)
  const count = useSelector((state) => state.counter.count)
  return (
    <div className="App">
      {user && <h1>{user.firstName} {user.lastname}</h1>}
      
      <Counter />

    </div>
  );
}

export default App;
