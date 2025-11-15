import { Response } from "automation-framework/api";

class UserResponse extends Response {
  verifyUserId(id) {
    this.verifyProperty("id", id);
  }
  verifyToken() {
    this.verifyProperty("token");
  }
  verifyPage(pageNumber) {
    this.verifyProperty("page", pageNumber);
  }
  verifyEmployeesList() {
    this.verifyType("data", "array");
    this.verifyKeysInArray("data", ["id", "first_name", "last_name"]);
  }
  verifyThatBodyContain(data) {
    const expected = data.hashes()[0];
    this.contains(expected);
  }
  verifyUpdateAt() {
    this.verifyProperty("updatedAt");
    this.expectPropertyToBeRecent("updatedAt");
  }
}
export default UserResponse;
