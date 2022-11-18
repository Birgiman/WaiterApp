"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsByCategory = void 0;
const Product_1 = require("../../models/Product");
function listProductsByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { categoryId } = req.params;
            const products = yield Product_1.Product.find().where('category').equals(categoryId);
            res.json(products);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
}
exports.listProductsByCategory = listProductsByCategory;
