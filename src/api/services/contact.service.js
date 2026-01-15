import AXIOS_INSTANCE from "../axios";

export const getContactInfo = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/contact`,{ params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};