import React from "react";

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-900 to-rose-800 py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-rose-100 text-lg">LaVie Rose Weddings & Events</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed">
            Welcome to LaVie Rose! We specialise in weddings and events,
            offering faux and fresh flowers, balloon garlands, prop rentals, and
            event packages. By placing an order with us, you agree to the
            following Terms & Conditions.
          </p>
        </div>

        {/* Bookings & Deposits */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Bookings & Deposits
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                A minimum deposit of $50 is required to secure your booking.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                The remaining balance must be paid in full before the event day.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Bookings are confirmed only once the deposit is received.
              </span>
            </li>
          </ul>
        </section>

        {/* Cancellations & Refunds */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Cancellations & Refunds
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Deposits are non-refundable but may be transferred to another
                date if we are available.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Any changes to your order must be requested at least [14 days]
                before the event.
              </span>
            </li>
          </ul>
        </section>

        {/* Delivery & Setup */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Delivery & Setup
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>The first 6km from our location are free.</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>A fee of $5 per km applies beyond the 6km radius.</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Extra costs will apply if the venue access is not on the ground
                floor (e.g., stairs, elevators, restricted access).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                The client must inform us about the venue location and
                conditions in advance. If the venue conditions are different
                from what was discussed, the delivery fee may be adjusted
                accordingly.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                The client must ensure access to the venue at the agreed time.
                Delays caused by venue restrictions may result in additional
                charges.
              </span>
            </li>
          </ul>
        </section>

        {/* Flowers & Decorations */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Flowers & Decorations
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Fresh flowers are subject to seasonal availability. If a
                requested flower is unavailable, we will substitute it with a
                similar variety of equal value.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                We do our best to make arrangements similar to the inspired
                photos provided, but we cannot guarantee they will be 100%
                identical. Each arrangement is custom-made, and we do not offer
                pre-made designs. All arrangements are prepared before the event
                date.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Faux flowers, balloon garlands, and props are rented in as-is
                condition. Any damage or loss will incur a replacement fee.
              </span>
            </li>
          </ul>
        </section>

        {/* Prop Rentals & Setup */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Prop Rentals & Setup
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                All props and decorations must be returned in their original
                condition.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>A security bond may be required for hired items.</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Any damage, loss, or late returns will result in additional
                charges.
              </span>
            </li>
          </ul>
        </section>

        {/* Liability & Responsibility */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Liability & Responsibility
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                LaVie Rose is not responsible for any damage, injury, or loss
                caused by our products once they are delivered or set up.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Clients are responsible for ensuring that hired items are used
                safely and appropriately.
              </span>
            </li>
          </ul>
        </section>

        {/* Photography & Marketing */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Photography & Marketing
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                We may take photos of our work at your event for promotional
                purposes. If you do not wish to have your event featured, please
                inform us in writing.
              </span>
            </li>
          </ul>
        </section>

        {/* Force Majeure */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Force Majeure
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                LaVie Rose is not liable for delays or cancellations due to
                unforeseen circumstances beyond our control, including natural
                disasters, government restrictions.
              </span>
            </li>
          </ul>
        </section>

        {/* Agreement */}
        <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-300 pb-3">
            Agreement
          </h2>
          <div className="text-gray-700 space-y-4">
            <p className="font-medium">
              By booking with LaVie Rose, you acknowledge that you have read,
              understood, and agreed to these Terms & Conditions.
            </p>
            <p>
              For any inquiries, contact us directly on Instagram, or via the
              phone number listed on our page.
            </p>
            <p className="font-medium text-rose-900">Thank You!</p>
          </div>
        </section>

        {/* Closing Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-lg text-gray-700 italic leading-relaxed">
            We appreciate your understanding and cooperation with our Terms &
            Conditions. Your trust and support mean the world to us, and we
            can't wait to be a part of your special event!
          </p>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="flex justify-center py-12">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
          <div className="w-20 h-px bg-gradient-to-r from-rose-400 to-transparent"></div>
          <span className="text-rose-400 text-xl">✨</span>
          <div className="w-20 h-px bg-gradient-to-l from-rose-400 to-transparent"></div>
          <div
            className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
