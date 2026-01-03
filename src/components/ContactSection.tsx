import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { sendEmailUser, submitToSheet } from "../utils/utils";

export function ContactSection() {
  const [formData, setFormData] = useState({
    type: "employer",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setSubmitted(true);
    const dataToSheet = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      phone: formData.phone,
      company: formData.company,
      industry: formData.industry,
      type: formData.type,
    };

    const dataEmailAdmin = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
    };

    try {
      const responseOnSubmission = await submitToSheet(dataToSheet);
      // await sendEmailAdmin(dataEmailAdmin);
      await sendEmailUser(dataEmailAdmin);
      alert("Submitted successfully!");
      if (Object.keys(responseOnSubmission).length > 0 && responseOnSubmission.success) {
        setSubmitted(true);
      }
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          type: "employer",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      setSubmitted(false);
      console.log(err, 'Submission error');
      alert("Submission failed");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-slate-900 mb-4">Let's Start a Conversation</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Whether you're seeking exceptional talent or exploring your next
              career move, our team is here to help. Reach out to discuss your
              specific needs.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <div className="text-slate-900 mb-1">Phone</div>
                  <p className="text-slate-600">+91 - 9113730080</p>
                  <p className="text-sm text-slate-500">
                    Mon - Fri, 9am - 6pm IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <div className="text-slate-900 mb-1">Email</div>
                  <p className="text-slate-600">
                    recruitutalentsolutions@gmail.com
                  </p>
                  <p className="text-sm text-slate-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <div className="text-slate-900 mb-1">Office Locations</div>
                  <p className="text-slate-600">We love being remote</p>
                  <p className="text-sm text-slate-500">
                    With global reach and local expertise
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h4 className="text-slate-900 mb-2">Schedule a Consultation</h4>
              <p className="text-sm text-slate-600 mb-4">
                Book a 30-minute discovery call with one of our recruitment
                specialists
              </p>
              <button className="w-full px-5 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors">
                View Available Times
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">
                    We've received your message and will be in touch within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-slate-900 mb-3">I am a:</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, type: "employer" })
                        }
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.type === "employer"
                            ? "border-slate-800 bg-slate-800 text-blue-700"
                            : "border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        Employer
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, type: "candidate" })
                        }
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.type === "candidate"
                            ? "border-slate-800 bg-slate-800 text-blue-700"
                            : "border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        Job Seeker
                      </button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-slate-900 mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-slate-900 mb-2"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-slate-900 mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-slate-900 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-slate-900 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-slate-900 mb-2"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none"
                      >
                        <option value="">Select...</option>
                        <option value="technology">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-slate-900 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your hiring needs or career goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-slate-800 text-blue-500 rounded-lg hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5 text-current" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
