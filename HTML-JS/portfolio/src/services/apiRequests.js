import axios from "axios";
import { API_URL } from "@constants/url";
// import api from "./instance";

export const getPageVisit = async () => {
  try {
    return (await axios.get(`${API_URL}/api/pageVisit/getPageVisit`)).data;
    // return (await api.get("/pageVisit/getPageVisit")).data;
  } catch (error) {
    console.error("Error fetching page-visit", error);
  }
};

export const addPageVisit = async (pageVisitObj) => {
  try {
    await axios.post(`${API_URL}/api/pageVisit/addPageVisit`, pageVisitObj);
    // await api.post("/pageVisit/addPageVisit", pageVisitObj);
  } catch (error) {
    console.error("Error adding page-visit", error);
  }
};
