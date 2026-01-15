const DEPARTMENTS_RESOURCE = {
  getDepartmentsList: {
    method: "get",
    url: "/department",
  },
  getDepartmentById: {
    method: "get",
    url: "/department/:id",
  },
};

export const { getDepartmentsList, getDepartmentById } = DEPARTMENTS_RESOURCE;
