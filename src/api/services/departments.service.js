import AXIOS_INSTANCE from "../axios";

export const getDepartmentsList = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/department`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const getDepartmentById = async (departmentId,obj) => {
    try {
      const res = await AXIOS_INSTANCE.get(
        `/department?filters[department_id][$eq]=${departmentId}`,
         {params:obj}
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  };