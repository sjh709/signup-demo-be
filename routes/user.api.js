const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();

// 회원가입
router.post('/', userController.createUser);

module.exports = router;
