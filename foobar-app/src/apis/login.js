import axios from 'axios';

const login = async (userName, password) => {
  const params = {
    userName,
    password
  };

  try {
    const res = await axios.post('http://localhost:4000/login', params);
    return {
      "success": true,
      "result": res.data.result
    };
  } catch (err) {
    return {
      "success": false,
      "result": err
    };
  }
   // .then(res => {
   //   alert(res.data.message);
   // })
   // .catch(err => {
   //   alert("Not authenticated!");
   //   console.log(err);
   // });
}

export {
  login
}
