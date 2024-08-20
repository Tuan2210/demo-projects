import mongoose from "mongoose";

const pageVisitSchema = new mongoose.Schema({
  pageVisit: {
    type: Number,
  },
});

const PageVisit = mongoose.model("PageVisit", pageVisitSchema);

export default PageVisit;
