"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const listCategories_1 = require("./app/useCases/categories/listCategories");
const createCategory_1 = require("./app/useCases/categories/createCategory");
const listProducts_1 = require("./app/useCases/products/listProducts");
const createProduct_1 = require("./app/useCases/products/createProduct");
const listProductsByCategory_1 = require("./app/useCases/categories/listProductsByCategory");
const listOrders_1 = require("./app/useCases/orders/listOrders");
const createOrder_1 = require("./app/useCases/orders/createOrder");
const changeOrderStatus_1 = require("./app/useCases/orders/changeOrderStatus");
const cancelOrder_1 = require("./app/useCases/orders/cancelOrder");
const deleteCategory_1 = require("./app/useCases/categories/deleteCategory");
const deleteProduct_1 = require("./app/useCases/products/deleteProduct");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
// List categorias;
exports.router.get('/categories', listCategories_1.listCategories);
// Create category;
exports.router.post('/categories', createCategory_1.createCategory);
// Delete category;
exports.router.delete('/categories/:categoryId', deleteCategory_1.deleteCategory);
// List products;
exports.router.get('/products', listProducts_1.listProducts);
// Create Product;
exports.router.post('/products', upload.single('image'), createProduct_1.createProduct);
// Get products by category;
exports.router.get('/categories/:categoryId/products', listProductsByCategory_1.listProductsByCategory);
// Delete products;
exports.router.delete('/products/:productId', deleteProduct_1.deleteProduct);
// List orders;
exports.router.get('/orders', listOrders_1.listOrders);
// Create order;
exports.router.post('/orders', createOrder_1.createOrder);
// Change order status;
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
// Delete/cancel order;
exports.router.delete('/orders/:orderId', cancelOrder_1.cancelOrder);
