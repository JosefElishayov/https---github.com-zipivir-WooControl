import React, {useState} from 'react';
import Dashboard from './components/Dashboard';
import { MyContext } from '../context/myContext';

const App = () => {
    const [image,setImage]=useState()
    return (
        <MyContext.Provider value={{
            image,setImage
        }}>
        <div>
            <h2 className='app-title'>העלאת תמונות!!!</h2>
            <hr />
            <Dashboard />
        </div>
        </MyContext.Provider>
     );
}
export default App; 