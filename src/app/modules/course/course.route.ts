import express from "express";
import { courseControllers } from "./course.controllers";
import { validateRequest } from "../../middlewares/validateRequest";
import { courseValidations } from "./course.validation";

const router = express.Router();

router.post(
  "/course",
  validateRequest(courseValidations.createCourseValidationSchema),
  courseControllers.createCourse
);
router.get("/courses", courseControllers.getAllCourse);

router.get(
  "/courses/:courseId/reviews",
  courseControllers.getSingleCourseWithReviews
);

router.put(
  "/courses/:courseId",
  validateRequest(courseValidations.updateCourseValidationSchema),
  courseControllers.updateCourse
);

router.get("/course/best", courseControllers.getBestCourse);

export const CourseRoutes = router;
