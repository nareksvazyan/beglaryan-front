import AXIOS_INSTANCE from "../axios";

export const getImagesList = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/gallery`,{ params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};