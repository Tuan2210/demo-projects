/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import PageVisit from "../models/PageVisit.js";

const pageVisitController = {
  addPageVisit: async (req, res) => {
    const { pageVisit } = req.body;

    if (!pageVisit)
      return res
        .status(400)
        .json({ success: false, message: "Missing this pageVisit" });

    try {
      // const existPageVisit = await PageVisit.findOne({ pageVisit });
      const existPageVisit = await PageVisit.findOneAndUpdate(
        { _id: "66bee10bd36baf103aa92a0e" },
        { pageVisit: pageVisit },
        { new: false }
      );

      if (existPageVisit) {
        existPageVisit.pageVisit = pageVisit;
        await existPageVisit.save();

        return res
          .status(200)
          .json({ message: "Updated successfully", data: existPageVisit });
      } else {
        const newPageVisit = new PageVisit({ pageVisit });
        await newPageVisit.save();

        return res
          .status(201)
          .json({ message: "Created successfully", data: newPageVisit });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Error!" });
    }
  },

  getPageVisit: async (req, res) => {
    try {
      const pageVisit = await PageVisit.findOne();
      res.status(200).json(pageVisit.pageVisit);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default pageVisitController;
