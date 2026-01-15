import AXIOS_INSTANCE from "../axios";

export const getHomeInfo = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/home`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
