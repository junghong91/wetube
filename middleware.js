import multer from "multer";
import routes from "./routes";

// middleware to get file URL(경로)
const multerVideo = multer({ dest: "uploads/videos/" }); // server에 upload/videos 라는 folder에 저장할것

export const localMiddleware = (req, res, next) => {
  // locals에 로컬 변수를 저장하면, 이 변수를 template에서 사용할 수 있다.
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  // {
  //   isAuthenticated: false,
  //   id: 1
  // };
  next(); // middleware가 connection 과 route들 사이에 있기 때문에
};

export const uploadVideo = multerVideo.single("videoFile"); // single: upload only 1 file, "name" of the file to bring
