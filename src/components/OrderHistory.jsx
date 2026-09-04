import React from "react";
import { Package, Clock, CheckCircle, Truck, ShoppingBag, ArrowRight } from "lucide-react";

export default function OrderHistory({ orders, onShopClick }) {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] min-h-[70vh]">
      <div className="container max-w-4xl">
        
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-[#EBE5DC]">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B88E4B] block mb-2 font-sans">
            Account Purchases
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#191715] font-normal mb-2">
            Order History
          </h1>
          <p className="text-xs sm:text-sm text-[#635E57] font-sans">
            Track and review your past artisanal attar orders from Jabazi Store.
          </p>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="text-center py-16 bg-[#F6F2EC] rounded-md border border-[#EBE5DC]">
            <Package className="w-10 h-10 text-[#999187] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#191715] mb-2">No Orders Found</h3>
            <p className="text-xs text-[#635E57] font-sans max-w-xs mx-auto mb-6">
              You haven't placed any orders yet. Discover our collection of pure concentrated attars.
            </p>
            <button
              onClick={onShopClick}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Explore Shop
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => {
              const statusColor =
                order.status === "Delivered"
                  ? "bg-[#5DB889]/10 text-[#5DB889] border-[#5DB889]/30"
                  : order.status === "Shipped"
                  ? "bg-[#B88E4B]/10 text-[#B88E4B] border-[#B88E4B]/30"
                  : "bg-blue-50 text-blue-700 border-blue-200";

              return (
                <div
                  key={order.id}
                  className="bg-white border border-[#EBE5DC] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Order Top Bar */}
                  <div className="bg-[#F6F2EC] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#EBE5DC] text-xs font-sans">
                    <div className="flex flex-wrap items-center gap-6">
                      <div>
                        <span className="text-[#999187] block uppercase text-[10px] tracking-wider">Order ID</span>
                        <span className="font-bold text-[#191715]">#{order.id}</span>
                      </div>
                      <div>
                        <span className="text-[#999187] block uppercase text-[10px] tracking-wider">Date Placed</span>
                        <span className="font-medium text-[#191715]">{order.date}</span>
                      </div>
                      <div>
                        <span className="text-[#999187] block uppercase text-[10px] tracking-wider">Total Amount</span>
                        <span className="font-bold text-[#B88E4B]">${order.totalAmount}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`px-3 py-1 rounded-full border text-xs font-semibold flex items-center gap-1.5 ${statusColor}`}>
                      {order.status === "Delivered" ? (
                        <CheckCircle className="w-3.5 h-3.5" />
                      ) : order.status === "Shipped" ? (
                        <Truck className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      <span>{order.status}</span>
                    </div>
                  </div>

                  {/* Order Products List */}
                  <div className="p-5 divide-y divide-[#F2EDE6]">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-16 object-cover rounded bg-[#F6F2EC] border border-[#EBE5DC] shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="font-serif text-base font-normal text-[#191715]">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#999187] font-sans">
                            Quantity: {item.quantity} • ${item.price} each
                          </span>
                        </div>
                        <span className="font-sans font-bold text-sm text-[#191715]">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer & Shipping info */}
                  {order.shippingAddress && (
                    <div className="bg-[#FAF7F2] p-4 border-t border-[#EBE5DC] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans text-[#635E57] gap-2">
                      <div>
                        <span>Shipped to: </span>
                        <strong className="text-[#191715]">{order.shippingAddress.name}</strong> ({order.shippingAddress.city}, {order.shippingAddress.state})
                      </div>
                      <button
                        onClick={onShopClick}
                        className="text-[#B88E4B] hover:text-[#191715] font-semibold flex items-center gap-1 self-start sm:self-auto transition-colors"
                      >
                        <span>Reorder Fragrances</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
