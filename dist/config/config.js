"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    JWTSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/apiMongodb',
        USER: process.env.USER || '',
        PASSWORD: process.env.PASWORD || ''
    }
};
