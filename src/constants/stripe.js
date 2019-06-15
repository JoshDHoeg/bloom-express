const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_test_7XARlGU7KhB75ysMvpSxfDvG00mtqr7j4s'
: 'pk_test_7XARlGU7KhB75ysMvpSxfDvG00mtqr7j4s';

export default STRIPE_PUBLISHABLE;