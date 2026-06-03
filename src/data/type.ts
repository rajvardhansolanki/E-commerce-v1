export type Role = "admin" | "customer";
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";
export type PaymentMethod =
  | "credit_card"
  | "debit_card"
  | "upi"
  | "net_banking"
  | "cod"
  | "wallet";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";
export type AddressType = "home" | "work" | "other";
export type ProductCondition = "new" | "refurbished";
export type ReviewStatus = "approved" | "pending" | "rejected";
export type CouponType = "percentage" | "flat" | "free_shipping";
export type NotificationType = "order" | "offer" | "system" | "review";

export interface Image {
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface Address {
  id: string;
  type: AddressType;
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string; // bcrypt hash placeholder
  phone: string;
  avatar: string;
  role: Role;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  addresses: Address[];
  wishlist: string[]; // product IDs
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId: string | null;
  isActive: boolean;
  sortOrder: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  website: string;
  isActive: boolean;
}

export interface Variant {
  id: string;
  sku: string;
  attributes: Record<string, string>; // e.g. { color: "Black", storage: "128GB" }
  price: number;
  originalPrice: number;
  stock: number;
  images: Image[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  brandId: string;
  condition: ProductCondition;
  tags: string[];
  images: Image[];
  variants: Variant[];
  basePrice: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  specifications: Specification[];
  inStock: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  orderId: string;
  rating: number; // 1–5
  title: string;
  body: string;
  images: string[];
  helpfulCount: number;
  status: ReviewStatus;
  createdAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  couponCode: string | null;
  discountAmount: number;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  variantId: string;
  productName: string;
  variantAttributes: Record<string, string>;
  image: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  subtotal: number;
  shippingCharge: number;
  discountAmount: number;
  taxAmount: number;
  total: number;
  couponCode: string | null;
  trackingNumber: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  type: CouponType;
  value: number; // percent or flat amount
  minOrderValue: number;
  maxDiscount: number | null;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
  expiresAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  isActive: boolean;
  sortOrder: number;
}
