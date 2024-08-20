import api from "./instance";

export const getPageVisit = async () => {
  try {
    return (await api.get("/pageVisit/getPageVisit")).data;
  } catch (error) {
    console.error("Error fetching page-visit", error);
  }
};

export const addPageVisit = async (pageVisitObj) => {
  try {
    await api.post("/pageVisit/addPageVisit", pageVisitObj);
  } catch (error) {
    console.error("Error adding page-visit", error);
  }
};
