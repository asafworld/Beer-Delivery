const md5 = require('md5');
const { User } = require('../../database/models/index');
const { generateToken } = require('../utils/JWT');
const CustomHttpError = require('../middlewares/CustomHttpError');

const getUser = async (email, pass) => {
  const hash = md5(pass); 
  const user = await User.findOne({
    where: { email, password: hash },
  });
  if (!user) throw new CustomHttpError(404, 'NOT FOUND');
  const token = await generateToken({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };
};

module.exports = { getUser };