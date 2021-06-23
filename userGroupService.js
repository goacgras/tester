import api from "api";

const userGroupService = {
  createUserGroup: (args = {}) => api.post("/user-group", args),
};

export default userGroupService;
