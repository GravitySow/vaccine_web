import axios from 'axios';

const client = axios.create({
    baseURL: 'http://gravitys.ddns.net:8081/users/'
});
export class UserService {
   
    getVaccine(data) {
        return client.post("getvaccinereserve",{userId: 1});
    }
    login(data){
        return client.post("login",data);
    }
    register(data){
        return client.post("register",data);
    }
}
const userService = new UserService();
export default userService;