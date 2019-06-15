const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'pk_test_7XARlGU7KhB75ysMvpSxfDvG00mtqr7j4s'
    : 'pk_test_7XARlGU7KhB75ysMvpSxfDvG00mtqr7j4s';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;