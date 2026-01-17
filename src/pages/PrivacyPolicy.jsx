import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-primary py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="text-secondary hover:text-primary font-semibold transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-extrabold text-secondary mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base leading-relaxed">
          {/* Overview Section */}
          <section className="bg-gray-50 p-6 rounded-lg border border-secondary">
            <p className="mb-3">
              Perfect Solution (collectively, "Perfect Solution," "our," "we," or "us") values and respects the privacy of its customers and visitors. While operating our business and interacting with you, we collect, use, and share personal information as disclosed in this privacy policy ("Privacy Policy"). Your use of chrislarryus.homebuyer.homes, including any sub-domains thereof, affiliated websites, and mobile applications (collectively, the "Website"), which we own or maintain are governed by this Privacy Policy.
            </p>
            <p className="mb-3">
              This Privacy Policy provides you with detailed information about how Perfect Solution and its subsidiaries, divisions, affiliates, brands, and other companies that link to this Privacy Policy collect, use, share, and protect your information, and describes your choices and rights. This Privacy Policy also applies to information we receive from business partners and other third parties. We encourage you to read this Privacy Policy carefully and if you have any questions to contact us using the methods listed below.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this Privacy Policy to check for any changes.
            </p>
          </section>

          {/* Collecting Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Collecting Your Information</h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways, including when you provide information directly to us or when you visit our Website. The categories of information we collect, including in the last 12 months, include:
            </p>

            <h3 className="text-xl font-bold text-secondary mb-3">Categories of Information You May Provide to Us</h3>
            <p className="mb-3">
              This is information that you choose to provide directly to us, such as when you create an account, fill out forms, make a purchase, engage with our customer service team, or otherwise use the Website. Categories of information you provide to us include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Contact details, such as your name, email, phone number, and residential address; and</li>
              <li>Any other information you may provide to us.</li>
            </ul>

            <h3 className="text-xl font-bold text-secondary mb-3">Categories of Information We Collect About You</h3>
            <p className="mb-3">
              Our servers automatically collect information when you contact us or when you visit, use, or browse the Website. We may also collect information about you from our trusted third-party partners and vendors who support the Website or our services, such as Awesomely, LLC ("Awesomely").
            </p>
            <p className="mb-3">Categories of information we collect about you include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Device information, such as your IP address, operating system, browser version, language preferences, referring URLs, country, and location;</li>
              <li>Analytics data and inferences about you and your Website usage; and</li>
              <li>Browsing information, such as the pages you visit on the Website, dates and times of visits, and technical usage data.</li>
            </ul>
            <p className="mb-4">
              If you access the Website from a mobile device, we will collect information about the type of mobile device you use.
            </p>
            <p>
              Your use of our Website and services is strictly your choice. If you prefer that we do not receive the above-described information, please do not submit it to us. By not participating or providing certain information, you may limit your ability to take full advantage of our Website and services.
            </p>
          </section>

          {/* Using Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Using Your Information</h2>
            <p className="mb-4">
              We collect and use information for business and commercial purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Operate and Improve our Business</strong> – To provide services, increase efficiency, and improve our Website and offerings.</li>
              <li><strong>Process Transactions and Customer Service</strong> – To complete purchases, send confirmations, and provide support.</li>
              <li><strong>Marketing and Advertising</strong> – To personalize content and deliver promotions, articles, and offers.</li>
              <li><strong>Analytics</strong> – To analyze usage trends and improve services.</li>
              <li><strong>Security and Fraud Prevention</strong> – To protect users and systems.</li>
              <li><strong>Required By Law</strong> – For compliance, enforcement, and protection of rights and safety of Perfect Solution or others.</li>
            </ul>
          </section>

          {/* Disclosing Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Disclosing Your Information</h2>
            <p className="mb-3">
              We may disclose the categories of information described above with third parties that perform services for us or on our behalf. Categories of third parties include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Vendors and service providers (including Awesomely)</li>
              <li>Marketing partners and advertising networks</li>
              <li>Affiliates and subsidiaries</li>
              <li>Parties involved in business transfers, legal compliance, or fraud prevention</li>
            </ul>
            <p>
              We may share data for marketing and advertising purposes, which may be considered a "sale" or "sharing" under certain laws. In the past 12 months, we have shared:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Persistent identifiers (email, IP address, device identifiers)</li>
              <li>User activity and Website interaction data</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Cookies, Web Beacons, and Tracking Technologies</h2>
            <p className="mb-3">
              The Website may use cookies and similar technologies for functionality, analytics, advertising, fraud prevention, and personalization. Cookies may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Required cookies</li>
              <li>Social media cookies</li>
              <li>Analytics cookies</li>
              <li>Advertising cookies</li>
            </ul>
            <p>
              You may disable cookies through your browser settings, but this may affect Website functionality.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Data Security</h2>
            <p>
              We implement security measures designed to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security. Any transmission is at your own risk.
            </p>
          </section>

          {/* Policy for Children */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Policy for Children</h2>
            <p>
              We do not knowingly collect information from children under 18. By using the Website, you represent that you are at least 18 years old. If a child has provided information, contact us and we will delete it.
            </p>
          </section>

          {/* SMS Messaging */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">SMS Messaging</h2>
            <p className="mb-3">
              By signing up for promotional communications, you consent to receive messages from Perfect Solution via email, SMS, or phone. Consent is not a condition of purchase.
            </p>
            <p className="mb-3">To opt out:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>Email: use the unsubscribe link</li>
              <li>SMS: reply STOP, END, CANCEL, UNSUBSCRIBE, or QUIT</li>
            </ul>
            <p>
              We may share SMS consent data with vendors assisting with message delivery.
            </p>
          </section>

          {/* Do Not Track */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Do Not Track Signals</h2>
            <p>
              We recognize Do Not Track signals where required by applicable law, though no universal standard currently exists.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">International Data Transfers</h2>
            <p>
              We operate from the United States. Your information may be processed in the U.S. or other countries where we or our vendors operate. The English version of this Privacy Policy controls.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Links to Other Websites</h2>
            <p>
              We are not responsible for third-party websites or their privacy practices. Please review their privacy policies before providing information.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Your Privacy Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have rights including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Right to Know</li>
              <li>Right to Delete</li>
              <li>Right to Correct</li>
              <li>Right to Opt-Out of Sale or Sharing</li>
              <li>Right to Opt-Out of Targeted Advertising</li>
              <li>Right to Data Portability</li>
            </ul>
          </section>

          {/* How to Exercise Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">How to Exercise Your Rights</h2>
            <p className="mb-3">
              Email us at{' '}
              <a href="mailto:chrislarryus@yahoo.com" className="text-secondary hover:underline">
                chrislarryus@yahoo.com
              </a>
              . Requests will not result in discrimination. Verification may be required.
            </p>
            <p>
              You may appeal a decision by emailing{' '}
              <a href="mailto:chrislarryus@yahoo.com" className="text-secondary hover:underline">
                chrislarryus@yahoo.com
              </a>
              {' '}with the subject line "Data Access Request Appeal."
            </p>
          </section>

          {/* Retention Period */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">Retention Period</h2>
            <p>
              We retain information only as long as necessary for business purposes and legal obligations.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gray-50 p-6 rounded-lg border border-secondary">
            <h2 className="text-2xl font-bold text-secondary mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, contact us at:
            </p>
            <div className="space-y-2">
              <p><strong>Perfect Solution</strong></p>
              <p>600 1st Ave Ste 102 – 2475</p>
              <p>Seattle, WA 98104</p>
              <p className="mt-3">
                <a href="mailto:chrislarryus@yahoo.com" className="text-secondary hover:underline">
                  chrislarryus@yahoo.com
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-secondary">
          
        </div>
      </div>
    </div>
  );
}
