import axios from 'axios'

const signUp = async (name, userName, email, password) => {
  const params = {
    name,
    userName,
    email,
    password
  };

  try {
    const res = await axios.post('http://localhost:4000/signup', params);
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
}

  export {
    signUp
  }
