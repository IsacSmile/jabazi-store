import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, PRODUCTS, INITIAL_ORDERS } from '../data/products';

export interface CartItem {
  product: Product;
  selectedSize: string;
  unitPrice: number;
  quantity: number;
}

export interface OrderItem {
  id: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export interface ShippingDetails {
  name: string;
  email?: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: ShippingDetails;
}

interface ToastState {
  message: string;
  type: 'info' | 'success';
  isVisible: boolean;
}

interface ShopContextType {
  cart: CartItem[];
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  addToCart: (product: Product, sizeName?: string, qty?: number) => void;
  removeFromCart: (productId: string, sizeName: string) => void;
  updateQuantity: (productId: string, sizeName: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  orders: Order[];
  addOrder: (orderData: { items: OrderItem[]; subtotal: number; shippingAddress: ShippingDetails }) => Order;
  toast: ToastState;
  showToast: (message: string, type?: 'info' | 'success') => void;
  hideToast: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const LOCAL_STORAGE_CART_KEY = 'shahbazi_cart_v1';
const LOCAL_STORAGE_WISHLIST_KEY = 'shahbazi_wishlist_v1';
const LOCAL_STORAGE_ORDERS_KEY = 'shahbazi_orders_v1';

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Cart from LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
      return saved ? JSON.parse(saved) : [
        {
          product: PRODUCTS[0],
          selectedSize: '3ml',
          unitPrice: PRODUCTS[0].price,
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  // Initialize Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY);
      return saved ? JSON.parse(saved) : [PRODUCTS[1].id, PRODUCTS[3].id];
    } catch {
      return [];
    }
  });

  // Initialize Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  // Toast State
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  const showToast = (message: string, type: 'info' | 'success' = 'success') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const addToCart = (product: Product, sizeName = '3ml', qty = 1) => {
    const matchedSizeObj = product.sizes.find((s) => s.name === sizeName) || product.sizes[0];
    const unitPrice = matchedSizeObj.price;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === sizeName
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      }

      return [...prev, { product, selectedSize: sizeName, unitPrice, quantity: qty }];
    });

    showToast(`Added ${product.name} (${sizeName}) to cart`);
    setCartDrawerOpen(true);
  };

  const removeFromCart = (productId: string, sizeName: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedSize === sizeName)));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId: string, sizeName: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === sizeName) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(exists ? 'Removed from saved scents' : 'Saved to your favorites', exists ? 'info' : 'success');
      return updated;
    });
  };

  const addOrder = (orderData: { items: OrderItem[]; subtotal: number; shippingAddress: ShippingDetails }): Order => {
    const newOrder: Order = {
      id: `JBZ-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      items: orderData.items,
      subtotal: orderData.subtotal,
      shipping: 0,
      tax: 0,
      total: orderData.subtotal,
      shippingAddress: orderData.shippingAddress,
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartDrawerOpen,
        setCartDrawerOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        wishlist,
        toggleWishlist,
        orders,
        addOrder,
        toast,
        showToast,
        hideToast,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
