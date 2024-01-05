import { Router } from "express";
import passport from "passport";

const router = Router();

/**
 * @api {get} /private/ Allow the private rute for authenticated Users.
 * @apiName GetPrivate
 * @apiGroup Private
 *
 * @apiSuccess {String} msg Success messagge.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "msg": "Success"
 *       }
 *
 * @apiError Unauthorized Unauthorized User .
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *      {
 *          "msg": "Unauthorized"
 *      }
 */
router.get('/private', passport.authenticate('jwt', { session:false }), (req, res) => {
    res.send({msg: 'Success'});
});

export default router;