import React,{useContext} from 'react'
import useUploadImage from '../../hooks/uploadImage';
import { MyContext } from '../../context/myContext';
const Dashboard = () => {
    const { handleFileUpload } = useUploadImage();
    const {image}=useContext(MyContext)
    
    return (
        <div className='dashboard'>
            <div className="card">
              
                <img src={image}/>
            </div>
            <input
                type="file"
                // hidden accept="image/*"
                onChange={(e) => {
                    handleFileUpload(e.target.files);                
                }}
            />
            {console.log(image)}
           
        </div>
     );
}

export default Dashboard;