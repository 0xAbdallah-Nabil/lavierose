import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-900 to-rose-800 py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-rose-100 text-lg">LaVie Rose Weddings & Events</p>
          <p className="text-rose-200 text-sm mt-2">
            Last Updated: January 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            At LaVie Rose, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, store, and protect your data
            when you interact with our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our services or providing us with your information, you
            consent to the practices described in this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Personal Information
          </h3>
          <p className="text-gray-700 mb-4">
            When you book our services, we may collect:
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Full name and contact details (phone number, email address)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Event details (date, venue location, type of event)</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Payment information for deposits and final payments</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Any special requests or preferences you provide</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Non-Personal Information
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Website usage data (if applicable) such as IP address, browser
                type, and pages visited
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Social media interactions when you engage with our content
              </span>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We use your personal information to:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Process and confirm your bookings</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Communicate with you regarding event details, updates, and
                confirmations
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Arrange delivery, setup, and collection of hired items
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Process payments and issue invoices</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Improve our services and customer experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Send promotional materials and updates (only with your consent)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Comply with legal obligations</span>
            </li>
          </ul>
        </section>

        {/* Photography & Content Usage */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Photography & Content Usage
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                We may take photographs of our work at your event for marketing
                and promotional purposes, including social media and our
                website.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                If you do not wish for your event to be photographed or
                featured, please inform us in writing before the event date.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                We will make reasonable efforts to avoid capturing identifiable
                individuals unless consent is provided.
              </span>
            </li>
          </ul>
        </section>

        {/* How We Share Your Information */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            How We Share Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your personal information to third parties.
            However, we may share your data with:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                <strong>Service providers:</strong> Such as payment processors,
                delivery partners, or venue coordinators necessary to fulfill
                your booking
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                <strong>Legal authorities:</strong> If required by law or to
                protect our legal rights
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                <strong>Business transfers:</strong> In the event of a merger,
                acquisition, or sale of assets
              </span>
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Data Security
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </span>
            </li>
          </ul>
        </section>

        {/* Data Retention */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Data Retention
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy or as
                required by law.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                After this period, your data will be securely deleted or
                anonymized.
              </span>
            </li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Your Rights
          </h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Access the personal information we hold about you</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Request corrections to any inaccurate or incomplete data
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Request deletion of your personal information (subject to legal
                obligations)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Withdraw consent for marketing communications at any time
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Object to the processing of your data in certain circumstances
              </span>
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise any of these rights, please contact us via Instagram or
            the phone number listed on our page.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Third-Party Links
          </h2>
          <p className="text-gray-700">
            Our website or social media may contain links to third-party
            websites. We are not responsible for the privacy practices of these
            external sites. We encourage you to review their privacy policies
            before providing any personal information.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Children's Privacy
          </h2>
          <p className="text-gray-700">
            Our services are not directed at individuals under the age of 18. We
            do not knowingly collect personal information from children. If we
            become aware that we have inadvertently collected such data, we will
            take steps to delete it promptly.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-200 pb-3">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will be
            posted on this page with a revised "Last Updated" date. We encourage
            you to review this policy periodically.
          </p>
        </section>

        {/* Contact Us */}
        <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 border-b-2 border-rose-300 pb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy or
            how we handle your data, please contact us:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                <strong>Via Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/lavie_rose_weddingsandevents/"
                  blank="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:underline"
                >
                  @lavie_rose_weddingsandevents
                </a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                <strong>By Phone:</strong>{" "}
                <a
                  href=" tel:+61452195885"
                  className="text-rose-600 hover:underline"
                  rel="noopener noreferrer"
                >
                  +61 452 195 885
                </a>
              </span>
            </li>
          </ul>
        </section>

        {/* Closing Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
            Your privacy is important to us, and we are committed to protecting
            your personal information. Thank you for trusting LaVie Rose with
            your special moments!
          </p>
          <p className="text-rose-900 font-semibold text-xl">
            ✨ LaVie Rose Weddings & Events ✨
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

export default PrivacyPolicy;
