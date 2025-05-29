import React from 'react'
import developers from '../helper/developers'
import { useParams } from 'react-router-dom';
import slugify from '../helper/Slugify';

const DeveloperDetails = () => {
    console.log(developers);
    const {name}=useParams()
    const developer = developers.find((dev)=>slugify(dev.name)===name)
    
  return (
    <div>DeveloperDetails</div>
  )
}

export default DeveloperDetails