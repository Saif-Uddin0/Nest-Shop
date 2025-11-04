import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-white text-gray-700 border-t border-gray-200 mt-10">
            <div class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-10">


                <div class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" alt="Nest Logo" class="h-10" />

                    </div>
                    <p class="text-sm">Awesome grocery store website template</p>
                    <div class="space-y-2 text-sm">
                        <p><strong>Address:</strong> 5171 W Campbell Ave, Kent, Utah 53127 United States</p>
                        <p><strong>Call Us:</strong> (+91) - 540-025-124553</p>
                        <p><strong>Email:</strong> sale@Nest.com</p>
                        <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                    </div>
                    <div>
                        <h3 class="font-semibold mt-4 mb-2">Install App</h3>

                    </div>
                </div>


                <div>
                    <h3 class="font-semibold text-lg mb-3">Company</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-green-600">About Us</a></li>
                        <li><a href="#" class="hover:text-green-600">Delivery Information</a></li>
                        <li><a href="#" class="hover:text-green-600">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-green-600">Terms & Conditions</a></li>
                        <li><a href="#" class="hover:text-green-600">Contact Us</a></li>
                        <li><a href="#" class="hover:text-green-600">Support Center</a></li>
                        <li><a href="#" class="hover:text-green-600">Careers</a></li>
                    </ul>
                </div>


                <div>
                    <h3 class="font-semibold text-lg mb-3">Account</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-green-600">Sign In</a></li>
                        <li><a href="#" class="hover:text-green-600">View Cart</a></li>
                        <li><a href="#" class="hover:text-green-600">My Wishlist</a></li>
                        <li><a href="#" class="hover:text-green-600">Track My Order</a></li>
                        <li><a href="#" class="hover:text-green-600">Help Ticket</a></li>
                        <li><a href="#" class="hover:text-green-600">Shipping Details</a></li>
                        <li><a href="#" class="hover:text-green-600">Compare Products</a></li>
                    </ul>
                </div>


                <div>
                    <h3 class="font-semibold text-lg mb-3">Corporate</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-green-600">Become a Vendor</a></li>
                        <li><a href="#" class="hover:text-green-600">Affiliate Program</a></li>
                        <li><a href="#" class="hover:text-green-600">Farm Business</a></li>
                        <li><a href="#" class="hover:text-green-600">Farm Careers</a></li>
                        <li><a href="#" class="hover:text-green-600">Our Suppliers</a></li>
                        <li><a href="#" class="hover:text-green-600">Accessibility</a></li>
                        <li><a href="#" class="hover:text-green-600">Promotions</a></li>
                    </ul>
                </div>


                <div>
                    <h3 class="font-semibold text-lg mb-3">Popular</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-green-600">Milk & Flavoured Milk</a></li>
                        <li><a href="#" class="hover:text-green-600">Butter and Margarine</a></li>
                        <li><a href="#" class="hover:text-green-600">Eggs Substitutes</a></li>
                        <li><a href="#" class="hover:text-green-600">Marmalades</a></li>
                        <li><a href="#" class="hover:text-green-600">Sour Cream and Dips</a></li>
                        <li><a href="#" class="hover:text-green-600">Tea & Kombucha</a></li>
                        <li><a href="#" class="hover:text-green-600">Cheese</a></li>
                    </ul>
                </div>
                <div>
                    <h1>Install App</h1>
                    <p>From App Store or Google Play</p>
                    <div class="flex space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10" />
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" class="h-10" />
                    </div>
                    <p>Secured Payment Gateways</p>
                </div>
            </div>

            <div class="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
                © 2025 Nest Mart & Grocery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;