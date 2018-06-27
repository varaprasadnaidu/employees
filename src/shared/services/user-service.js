import axios from 'axios';

 class UserService {

  getUser() {
    // Axios call to get data from API
   const userPromise = axios.get('https://demo1509725.mockable.io/product_details')
    .then(res => res.data)
    .catch(err => console.log("Error:", err.res))
    return userPromise;
    
 
  
  }

}

export default UserService