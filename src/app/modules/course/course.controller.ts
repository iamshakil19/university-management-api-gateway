import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { CourseService } from './course.service';

const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.createCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getSingleCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse
};
