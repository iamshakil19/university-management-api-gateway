import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllDepartment);
router.get('/:id', AcademicDepartmentController.getSingleDepartment);

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.createDepartment
);

router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.updateDepartment
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.deleteDepartment
);

export const academicDepartmentRoutes = router;
