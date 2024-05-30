const express = require('express');
const router = express.Router();

// 회원가입
router.post('/', (req, res) => {
  res.send('create user controller will be here');
});

module.exports = router;
