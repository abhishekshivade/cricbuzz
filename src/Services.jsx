import Server from "./Server";
class Services {
  demo(){
    console.log("in services class")
  };
  get(userName) {
    return Server.get(`/users/${userName}`);
  }

  create(user) {
    console.log("in create of services class")
    return Server.post("/users", user);
  }

  findByUserName(userName) {
    return Server.get(`/users/:${userName}`);
  }
}

export default Services;
