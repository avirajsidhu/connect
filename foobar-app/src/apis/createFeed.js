import axios from 'axios'

const createFeed = async (userName, pictures) => {
  const params = {
    userName,
    pictures
  };

  try {
    const res = await axios.post('http://localhost:4000/createpost', params);
    return {
      "success": true,
      "result": res.data.result
    };
  } catch (err) {
    return{
      "success": false,
      "result": err
    };
  }
}

export {
  createFeed
}
