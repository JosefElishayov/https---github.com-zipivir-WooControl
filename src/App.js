import React, {useState} from 'react';

import { MyContext } from '../context/myContext';
import AppRoutes from './appRoutes';

const App = () => {
    const [image,setImage]=useState()
    return (
        <MyContext.Provider value={{
            image,setImage
        }}>
        <div>
            <AppRoutes/>
        </div>
        </MyContext.Provider>
     );
}
export default App; 