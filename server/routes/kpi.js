import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    // console.log(kpis )
    return res.status(200).json(kpis);
    // console.log("Hi from kpis")
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

export default router;
