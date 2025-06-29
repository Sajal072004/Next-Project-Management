"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.getUsers);
router.post("/", user_controller_1.postUser);
router.get("/:cognitoId", user_controller_1.getUser);
exports.default = router;
