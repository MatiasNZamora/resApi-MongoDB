"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
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
router.get('/private', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    res.send({ msg: 'Success' });
});
exports.default = router;
