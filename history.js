// Define Alpine.js data
const pizzaCart = {
    username: '',
    cartId: '',
    open: false,
    History: false,
    change: 0,
    paymentAmount: 0,
    cartTotal: 0,
    message: 'message here',
    pizzas: [],
    cartPizzas: [],
    featuredpizzas: [],
    historyCartsIds: [],
    pastOrderedPizzas: [],
    // Function to fetch past orders for a specific cart code
    async getPastOrders(cartCode) {
        try {
            const response = await axios.get(`https://api.example.com/history/${cartCode}`); // Replace with your actual API endpoint
            this.pastOrderedPizzas = response.data.orders;
        } catch (error) {
            console.error('Error fetching past orders:', error);
        }
    },
    // Function to toggle login status
    login() {
        if (this.username) {
            this.cartId = Math.floor(Math.random() * 100000); // Generate a random cart ID for demonstration
            this.message = `Welcome, ${this.username}! Your cart is now open.`;
        } else {
            this.message = 'Please enter a username to log in.';
        }
    },
    // Function to logout
    logout() {
        this.username = '';
        this.cartId = '';
        this.message = 'You have been logged out.';
        this.cartPizzas = [];
        this.cartTotal = 0;
    },
};

// Initialize Alpine.js
window.addEventListener('DOMContentLoaded', () => {
    Alpine.data('pizzaCart', () => pizzaCart);
});

