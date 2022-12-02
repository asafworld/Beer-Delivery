const Sequelize = require('sequelize');
const { Sale, SaleProduct } = require('../../database/models/index');
const CustomHttpError = require('../middlewares/CustomHttpError');

const config = require('../../database/config/config');
 
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const getAllSales = async (id) => {
  const sales = await Sale.findAll({ where: { userId: id } });
  if (!sales || sales.length === 0) throw new CustomHttpError(404, 'NO SALES FOUND FOR THIS USER');
  return sales;
};

const createObjectToSale = (userId, sale) => (
  {
    userId,
    sellerId: sale.sellerId,
    totalPrice: sale.totalPrice,
    deliveryAddress: sale.deliveryAddress,
    deliveryNumber: sale.deliveryNumber,
    saleDate: sale.saleDate,
    status: sale.status,
  }
);

const createNewSale = async (userId, sale) => {
  try {
    const SaleTransaction = await sequelize.transaction(async (t) => {
      const newSale = await Sale.create(createObjectToSale(userId, sale), { transaction: t });
      await Promise.all(sale.products.map(async (product) => {
        await SaleProduct.create(
          { saleId: newSale.id, productId: product.productId, quantity: product.quantity },
          { transaction: t },
        );
    }));
      return newSale;
    });
    return SaleTransaction;
  } catch (error) {
    throw new CustomHttpError(500, 'SALE NOT FINISHED');
  }
};

module.exports = { getAllSales, createNewSale };