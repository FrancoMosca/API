"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/clubes', (_req, res) => {
    console.log(res);
});
router.post('/clubes', (_req, res) => {
    console.log(res);
});
