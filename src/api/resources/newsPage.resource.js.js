const NEWSPAGE_RESOURCE = {
  getNewsList: {
    method: "get",
    url: "/newses",
  },
  getNewsById: {
    method: "get",
    url: "/newses/:id",
  },
};

export const { getNewsList,getNewsById } = NEWSPAGE_RESOURCE;
