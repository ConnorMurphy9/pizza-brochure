const router = require('express').Router();
const userRoutes = require('./users');
const pizzaRoutes = require('./pizzas');

router.use('/users', userRoutes);
router.use('/pizzas', pizzaRoutes);


router.get('/', function(req, res, next) {  
    res.status(200).send("Hi, it works!")  
}); 

module.exports = router;
