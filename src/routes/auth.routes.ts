import { Router } from "express";
import { signUp, signIn } from "../controllers/user.controller";

const router = Router();
/**
 * @api {post} /signup/ Allow the User to Signup
 * @apiName PostSignup
 * @apiGroup Auth
 *
 * @apiSuccess {String} _id id's User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password  Password of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *      "_id": "659749ebc40d60efda46958a",
 *      "email": "nicolas@gmail.com",
 *      "password": "$2b$10$P4Pt422POXJpoNND3vTNReIco.VPxNXUPEAuZVLfhsqtc4BD1rnB.",
 *      }
 *
 * @apiError UserFound The user already exists.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *          "msg": "The user already exists"
 *      }
 */
router.post('/signup',signUp );

/**
 * @api {post} /signup/ Allow the User to Signin
 * @apiName PostSignin
 * @apiGroup Auth
 *
 * @apiSuccess {String} token of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTcxN2M3YTljY2U3MmJkNWExMWI4MyIsImVtYWlsIjoibWF0aWFzbnphbW9yYUBnbWFpbC5jb20iLCJpYXQiOjE3MDQ0MTQxMzYsImV4cCI6MTcwNDUwMDUzNn0.SsWqKsdfpIbxamZSM-HQdwQM5-vbied_cAnf2vse3QA"
 *      }
 *
 * @apiError UserNotFound The Email or Password are incorrect .
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *          "msg": "The email or password are incorrect"
 *      }
 */
router.post('/signin', signIn);

export default router;