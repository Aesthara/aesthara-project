export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#005280] via-[#094185] to-[#005280] py-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-[#DF9F57]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-[#FFC32E]/20 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/80">
            Effective Date: 15 March 2026 | Last Updated: 17 March 2026
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white shadow-xl rounded-3xl border border-slate-200 p-10">
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <p className="mb-4">
                At Aesthara ("we," "our," or "us"), we value your privacy and are
                committed to protecting the information you share with us through
                our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-2">
                We may collect personal information such as your name, email
                address, phone number, company name, and project details when you
                fill out a contact form or communicate with us.
              </p>
              <p>
                We may also automatically collect certain technical information
                such as your IP address, browser type, device information, and
                website usage data through cookies and analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                <li>Respond to inquiries and provide our services</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and performance</li>
                <li>Send updates or marketing communications (where applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                3. Cookies &amp; Analytics
              </h2>
              <p>
                Our website may use cookies and third-party analytics tools (such as
                Google Analytics) to understand visitor behavior and improve site
                performance. You can manage or disable cookies through your browser
                settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information only with trusted third-party service providers who help
                us operate our website, manage inquiries, or deliver services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                5. Data Security
              </h2>
              <p>
                We take reasonable steps to protect your personal information.
                However, no online transmission or storage method is completely
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                7. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for their privacy practices or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                9. Children’s Privacy
              </h2>
              <p>
                Our services are not intended for individuals under 18. We do not
                knowingly collect personal information from children. If we learn
                that such information has been provided, we will take steps to
                delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#005280] mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact
                us:
              </p>
              <p className="mt-2">
                Aesthara
                <br />
                Email:{' '}
                <a className="text-[#005280]" href="mailto:kawaljeet@aesthara.in">
                  kawaljeet@aesthara.in
                </a>
                <br />
                Contact: +91 98195 50115
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
