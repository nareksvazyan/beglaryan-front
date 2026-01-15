import AXIOS_INSTANCE from "../axios";

export const getAboutSectionInfo = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/about`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const getReviews = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/reviews`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};
export const getMissonInfo = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/misson`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};