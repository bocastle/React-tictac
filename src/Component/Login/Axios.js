import axios from 'axios'; 

const postLogin = async(id,password) => {
    try{
        const response = await axios.post(`http://localhost:4000/post`, {
            headers: {
                "id": "admin"
            },
            id: id,
            password: password
        });
        return response.data;
    } catch (error){
        console.log(error);
    }
};
export default postLogin;