import React, { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import countriesList from "../../data/countries.json";
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newsletter: false,
    phone: "",
    country: "Australia",
    eventType: "",
    services: "",
    eventDate: "",
    referralSource: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.eventType)
      newErrors.eventType = "Please select an event type";
    if (!formData.services) newErrors.services = "Please select a service";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required";
    if (!formData.guestCount.trim())
      newErrors.guestCount = "Guest count is required";
    if (!formData.budget.trim()) newErrors.budget = "Budget is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    // Get reCAPTCHA token
    const recaptchaResponse = window.grecaptcha?.getResponse();
    if (!recaptchaResponse) {
      setStatus({
        type: "error",
        message: "Please complete the reCAPTCHA verification.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzo9BjgD1VGhNtbtj_OmGsKWZcNwaWnF6f_qcVjNnfvCuWi5r4OKg6Icybzir09i1c4/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            newsletter: formData.newsletter ? "Yes" : "No",
            recaptchaToken: recaptchaResponse,
          }),
        },
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        newsletter: false,
        phone: "",
        country: "Australia",
        eventType: "",
        services: "",
        eventDate: "",
        referralSource: "",
        guestCount: "",
        budget: "",
        message: "",
      });

      // Reset reCAPTCHA
      window.grecaptcha?.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
      window.grecaptcha?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const countries = countriesList.countries;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-rose-50/20 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Let's Create Magic Together
          </h2>
          <p className="text-gray-600 text-lg">
            Tell us about your dream event
          </p>
        </div>

        {status.message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
              status.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            )}
            <p>{status.message}</p>
          </div>
        )}

        <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
            />
            <label htmlFor="newsletter" className="text-sm text-gray-700">
              Sign up for news and updates
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+61 452 195 885"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Event <span className="text-red-500">*</span>
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                errors.eventType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select event type</option>
              <option value="Corporate">Corporate</option>
              <option value="Social">Social</option>
              <option value="Wedding">Wedding</option>
              <option value="Other">Other</option>
            </select>
            {errors.eventType && (
              <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What services are you interested in?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                errors.services ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select services</option>
              <option value="Full Event Management & Decor">
                Full Event Management & Decor
              </option>
              <option value="Decor & Styling">Decor & Styling</option>
              <option value="Decor & On-the-day Coordination">
                Decor & On-the-day Coordination
              </option>
            </select>
            {errors.services && (
              <p className="text-red-500 text-sm mt-1">{errors.services}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Event <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                errors.eventDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.eventDate && (
              <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How did you hear about us?
            </label>
            <select
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
            >
              <option value="">Select an option</option>
              <option value="Friends/Family">Friends/Family</option>
              <option value="Online">Online</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guest Count <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="e.g., 100-150"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                  errors.guestCount ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.guestCount && (
                <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Budget <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., $20,000 - $30,000"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition ${
                  errors.budget ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.budget && (
                <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your dream event..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none"
            ></textarea>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <div
              className="g-recaptcha"
              data-sitekey="6LfK3E0sAAAAAPl3-Tn2cIfUwns6gQVi1laBNhA0"
            ></div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-rose-900 to-rose-800 text-white py-4 px-8 rounded-lg font-medium text-lg hover:shadow-xl hover:shadow-rose-900/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
