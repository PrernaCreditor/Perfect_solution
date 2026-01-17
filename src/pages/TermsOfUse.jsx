import { Link } from "react-router-dom";

export default function TermsOfUse() {
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
            Terms & Conditions
          </h1>
          <p className="text-gray-600">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base leading-relaxed">
          {/* Overview Section */}
          <section className="bg-gray-50 p-6 rounded-lg border border-secondary">
            <h2 className="text-2xl font-bold text-secondary mb-4">OVERVIEW</h2>
            <div className="space-y-3 text-sm">
              <p className="font-bold">
                IMPORTANT – PLEASE CAREFULLY READ AND UNDERSTAND THESE TERMS OF USE ("TERMS" OR "AGREEMENT") BEFORE ACCESSING, USING, OR SUBMITTING ANY INFORMATION THROUGH OUR WEBSITE. THESE TERMS CONTAIN DISCLAIMERS OF WARRANTIES AND LIMITATIONS OF LIABILITIES (SEE SECTIONS 8 AND 9). THESE TERMS FORM AN ESSENTIAL BASIS OF OUR AGREEMENT. PLEASE PRINT AND RETAIN A COPY OF THIS AGREEMENT FOR YOUR RECORDS.
              </p>
              <p>
                Your use of chrislarryus.homebuyer.homes, including any sub-domains thereof, affiliated websites, and mobile applications (collectively, the "Website"), which are owned or maintained by Perfect Solution ("Perfect Solution," "we," "our," "us"), are governed by the policies, terms, and conditions set forth below. Please read them carefully. We offer the Website, including all information, tools, products, and services available from the Website to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here. By accessing, using, or submitting any information over the Website, you agree to the terms set forth herein. If you do not agree to these terms and conditions in their entirety, you are not authorized to use the Website in any manner or form whatsoever.
              </p>
              <p className="font-bold">
                THIS AGREEMENT CONTAINS ARBITRATION AND CLASS ACTION WAIVER PROVISIONS THAT WAIVE YOUR RIGHT TO A COURT HEARING, RIGHT TO A JURY TRIAL AND RIGHT TO PARTICIPATE IN A CLASS ACTION. ARBITRATION IS MANDATORY AND IS THE EXCLUSIVE REMEDY FOR ANY AND ALL DISPUTES UNLESS SPECIFIED BELOW IN SECTION 10 OR IF YOU OPT-OUT. PLEASE CAREFULLY REVIEW THE DISPUTE RESOLUTION PROVISIONS IN SECTION 10 BELOW WHICH DESCRIBES YOUR RIGHT TO OPT-OUT.
              </p>
              <p>
                You can review the most current version of the Terms at any time on this page. We reserve the right to update, change, or replace any part of these Terms by posting updates and/or changes to our Website. It is your responsibility to check this page periodically for changes. YOUR CONTINUED USE OF OR ACCESS TO THE WEBSITE FOLLOWING THE POSTING OF ANY CHANGES CONSTITUTES BINDING ACCEPTANCE OF THOSE CHANGES.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">TABLE OF CONTENTS</h2>
            <ul className="list-decimal list-inside space-y-2 ml-4 text-sm">
              <li>WEBSITE USE</li>
              <li>PRIVACY & SECURITY DISCLOSURE</li>
              <li>GENERAL CONDITIONS AND WEBSITE USER CONDUCT RESTRICTIONS</li>
              <li>NO PROFESSIONAL ADVICE</li>
              <li>ACCURACY, COMPLETENESS, AND TIMELINESS OF INFORMATION</li>
              <li>MODIFICATIONS TO THE WEBSITE</li>
              <li>SOCIAL MEDIA</li>
              <li>DISCLAIMER OF WARRANTIES</li>
              <li>DISCLAIMER OF LIABILITIES</li>
              <li>DISPUTE RESOLUTION BY MANDATORY BINDING ARBITRATION AND CLASS ACTION WAIVER</li>
              <li>INDEMNIFICATION</li>
              <li>THIRD-PARTY WEBSITES AND LINKS</li>
              <li>TESTIMONIALS, REVIEWS, AND OTHER SUBMISSIONS</li>
              <li>DIGITAL MILLENNIUM COPYRIGHT ACT NOTICE; INTELLECTUAL PROPERTY RIGHTS</li>
              <li>ELECTRONIC COMMUNICATIONS</li>
              <li>ASSIGNMENT</li>
              <li>NO WAIVER</li>
              <li>SEVERABILITY</li>
              <li>TERMINATION</li>
              <li>ENTIRE AGREEMENT</li>
              <li>QUESTIONS OR ADDITIONAL INFORMATION</li>
            </ul>
          </section>

          {/* Detailed Terms */}
          <section className="border-t border-secondary pt-6">
            <h2 className="text-2xl font-bold text-secondary mb-6">TERMS OF USE</h2>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">1. WEBSITE USE</h3>
                <p>
                  By using the Website and agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence. If you use the Website, you affirm that you have the legal capacity to enter into a binding contract with us, have read this Agreement, and understand and agree to its terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">2. PRIVACY & SECURITY DISCLOSURE</h3>
                <p>
                  Our Privacy Policy may be viewed at <Link to="/privacy-policy" className="text-secondary hover:underline">/privacy-policy</Link>. The Privacy Policy is incorporated into these Terms by reference and constitutes a part of these Terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">3. GENERAL CONDITIONS AND WEBSITE USER CONDUCT RESTRICTIONS</h3>
                <p className="mb-3">
                  All aspects of our Website are protected by U.S. and international copyright, trademark, and other intellectual property laws. You do not acquire any ownership or other rights by downloading or using the Website or any material on it.
                </p>
                <p className="mb-3">
                  You agree not to use or attempt to use the Website or any products or services in any unlawful manner or for any unlawful purpose.
                </p>
                <p>
                  Perfect Solution reserves the right to terminate your access to the Website or any of its services if it determines that you (1) do not comply with these Terms; (2) provide false, inaccurate, or incomplete information during our registration process; (3) engage in any conduct that would otherwise harm any of Perfect Solution's rights or interests in its Website, services, or other property; or (4) for any or no reason whatsoever without prior notice to you.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">4. NO PROFESSIONAL ADVICE</h3>
                <p>
                  Neither the Website nor any of Perfect Solution's services are intended to provide tax, legal, medical, insurance, or investment advice.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">5. ACCURACY, COMPLETENESS, AND TIMELINESS OF INFORMATION</h3>
                <p>
                  While we endeavor to provide accurate and current information on our Website, Perfect Solution reserves the right to correct errors or omissions at any time.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">6. MODIFICATIONS TO THE WEBSITE</h3>
                <p>
                  We reserve the right to modify or discontinue access to the Website without notice.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">7. SOCIAL MEDIA</h3>
                <p>
                  The comments and opinions expressed by users on social media do not reflect the opinions of Perfect Solution.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">8. DISCLAIMER OF WARRANTIES</h3>
                <p className="font-bold">
                  EXCEPT WHERE PROHIBITED BY LAW, THIS WEBSITE AND ALL SERVICES PROVIDED BY PERFECT SOLUTION ARE PROVIDED ON AN "AS IS" BASIS.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">9. DISCLAIMER OF LIABILITIES</h3>
                <p className="font-bold">
                  IN NO EVENT SHALL PERFECT SOLUTION OR ANY OF ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT OR CONSEQUENTIAL DAMAGES. PERFECT SOLUTION'S TOTAL LIABILITY SHALL NOT EXCEED USD $500.00.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">10. DISPUTE RESOLUTION BY MANDATORY BINDING ARBITRATION AND CLASS ACTION WAIVER</h3>
                <p>
                  YOU AGREE THAT ANY DISPUTE OR CLAIM ARISING FROM OR RELATING TO PERFECT SOLUTION, ITS WEBSITE, PRIVACY POLICY, OR SERVICES SHALL BE RESOLVED BY BINDING ARBITRATION.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">11. INDEMNIFICATION</h3>
                <p>
                  You agree to indemnify and hold harmless Perfect Solution, its affiliates, officers, directors, employees, and agents.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">12. THIRD-PARTY WEBSITES AND LINKS</h3>
                <p>
                  Perfect Solution is not responsible for third-party websites or content.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">13. TESTIMONIALS, REVIEWS, AND OTHER SUBMISSIONS</h3>
                <p>
                  You grant Perfect Solution the right to use all submissions for marketing and promotional purposes.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">14. DIGITAL MILLENNIUM COPYRIGHT ACT NOTICE; INTELLECTUAL PROPERTY RIGHTS</h3>
                <p>
                  All intellectual property is owned or licensed by Perfect Solution.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">15. ELECTRONIC COMMUNICATIONS</h3>
                <p>
                  You consent to receive electronic communications from Perfect Solution.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">16. ASSIGNMENT</h3>
                <p>
                  You may not assign your rights under these Terms. Perfect Solution may assign its rights freely.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">17. NO WAIVER</h3>
                <p>
                  Failure by Perfect Solution to enforce any provision shall not constitute a waiver.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">18. SEVERABILITY</h3>
                <p>
                  If any provision is held unenforceable, the remaining provisions shall remain in effect.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">19. TERMINATION</h3>
                <p>
                  Sections 1–20 shall survive termination of this Agreement.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">20. ENTIRE AGREEMENT</h3>
                <p>
                  These Terms constitute the entire agreement between you and Perfect Solution.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-secondary mb-3">21. QUESTIONS OR ADDITIONAL INFORMATION</h3>
                <p>
                  Please contact us at:
                </p>
                <div className="mt-3 ml-4 space-y-1">
                  <p>600 1st Ave Ste 102 - 2475</p>
                  <p>Seattle, WA 98104</p>
                  <p className="mt-2">
                    <a href="mailto:chrislarryus@yahoo.com" className="text-secondary hover:underline">
                      chrislarryus@yahoo.com
                    </a>
                  </p>
                </div>
              </section>
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
