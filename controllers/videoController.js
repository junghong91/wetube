import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos }); // pagetitle이 home tempplate 로 전달됨

export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy }
  } = req;
  console.log(searchingBy);
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(40124));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
