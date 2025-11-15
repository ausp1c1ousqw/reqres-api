import endpoints from "../config/endpoints.js";
import UserResponse from "./UserResponse.js";
import { Request } from "automation-framework/api";

class UserRequest extends Request {
  constructor() {
    super(UserResponse);
  }

  async registerUser(data) {
    const body = data.hashes()[0];
    return await this.post(endpoints.register, body);
  }

  async login(data) {
    const body = data.hashes()[0];
    return await this.post(endpoints.login, body);
  }

  async getUsers() {
    return await this.get(endpoints.users);
  }

  async getUserById(id) {
    return await this.get(endpoints.specificUser(id));
  }

  async getUsersOnSpecificPage(pageNumber) {
    return await this.get(endpoints.specificPage(pageNumber));
  }

  async updateUser(id, data) {
    const body = data.hashes()[0];
    return await this.patch(endpoints.specificUser(id), body);
  }

  async deleteUser(id) {
    return await this.delete(endpoints.specificUser(id));
  }
}
export default new UserRequest();
