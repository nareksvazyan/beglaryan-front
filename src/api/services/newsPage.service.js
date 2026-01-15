import AXIOS_INSTANCE from "../axios";

export const getNewsList = async (obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(`/newses`, { params: obj });
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const getNewsById = async (id,obj) => {
  try {
    const res = await AXIOS_INSTANCE.get(
      `/newses?filters[news_id][$eq]=${id}`,
       {params:obj}
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};