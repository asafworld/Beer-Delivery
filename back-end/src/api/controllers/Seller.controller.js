const {
    getSellers,
    getAllSalesBySeller,
    updateSalesBySeller,
} = require('../services/Seller.service');

const getAllSellers = async (_req, res) => {
    const sales = await getSellers();
    return res.status(200).json(sales);
};

const getSalesBySeller = async (req, res) => {
    const id = Number(req.headers.id);
    const sales = await getAllSalesBySeller(id);
    return res.status(200).json(sales);
};

const updateSaleBySeller = async (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;
    const sale = await updateSalesBySeller(id, status);
    return res.status(200).json({ message: sale });
};

module.exports = { getAllSellers, getSalesBySeller, updateSaleBySeller };
