import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | INovaBeing",
  description: "Learn about how INovaBeing uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Last Updated: May 11, 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              This Cookie Policy explains how INovaBeing Technologies Pvt LTD ("we", "our", "us") uses cookies and
              similar technologies on our website www.inovabeing.com (the "Website"). This policy should be read
              alongside our Privacy Policy, which explains how we use your personal information.
            </p>
            <p>
              By continuing to browse or use our Website, you agree to our use of cookies as described in this Cookie
              Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used
              to make websites work more efficiently and provide information to the website owners. Cookies can be
              "persistent" or "session" cookies. Persistent cookies remain on your device for a set period or until you
              delete them, while session cookies are deleted once you close your web browser.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the Website to function properly.
                They enable basic functions like page navigation, access to secure areas, and security features. The
                Website cannot function properly without these cookies.
              </li>
              <li>
                <strong>Preference Cookies:</strong> These cookies allow the Website to remember choices you make (such
                as your language preference or your login information) and provide enhanced, personalized features.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with the
                Website by collecting and reporting information anonymously. This helps us improve the Website and your
                experience.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The
                intention is to display ads that are relevant and engaging for the individual user.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">First-Party Cookies</h3>
            <p>
              These are cookies that are set by our Website. They are used to enhance your experience and provide
              functionality.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Third-Party Cookies</h3>
            <p>
              These are cookies set by our partners and service providers. They perform functions like analytics,
              advertising, and social media integration.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Specific Cookies We Use</h3>
            <table className="w-full border-collapse border border-gray-300 my-4">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                  <th className="border border-gray-300 p-2 text-left">Purpose</th>
                  <th className="border border-gray-300 p-2 text-left">Duration</th>
                  <th className="border border-gray-300 p-2 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">_ga</td>
                  <td className="border border-gray-300 p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border border-gray-300 p-2">2 years</td>
                  <td className="border border-gray-300 p-2">Analytics</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_gid</td>
                  <td className="border border-gray-300 p-2">Used by Google Analytics to distinguish users</td>
                  <td className="border border-gray-300 p-2">24 hours</td>
                  <td className="border border-gray-300 p-2">Analytics</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">_gat</td>
                  <td className="border border-gray-300 p-2">Used by Google Analytics to throttle request rate</td>
                  <td className="border border-gray-300 p-2">1 minute</td>
                  <td className="border border-gray-300 p-2">Analytics</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">session</td>
                  <td className="border border-gray-300 p-2">Maintains user session state</td>
                  <td className="border border-gray-300 p-2">Session</td>
                  <td className="border border-gray-300 p-2">Essential</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">theme</td>
                  <td className="border border-gray-300 p-2">Stores user's theme preference (light/dark)</td>
                  <td className="border border-gray-300 p-2">1 year</td>
                  <td className="border border-gray-300 p-2">Preference</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Similar Technologies</h2>
            <p>In addition to cookies, we may use other similar technologies on our Website:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Web Beacons:</strong> Small graphic images (also known as "pixel tags" or "clear GIFs") that may
                be included on our Website and emails to measure engagement.
              </li>
              <li>
                <strong>Local Storage:</strong> A type of web storage that allows websites to store data locally on your
                device without expiration date.
              </li>
              <li>
                <strong>Session Storage:</strong> Similar to local storage but data is cleared when the page session
                ends.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Cookie Consent</h2>
            <p>
              When you first visit our Website, you will be shown a cookie banner that allows you to accept or decline
              non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings"
              link in the footer of our Website.
            </p>
            <p>
              Please note that essential cookies cannot be disabled as they are necessary for the Website to function
              properly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p>Most web browsers allow you to manage your cookie preferences. You can:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Delete cookies from your device</li>
              <li>
                Block cookies by activating the setting on your browser that allows you to refuse all or some cookies
              </li>
              <li>Set your browser to notify you when you receive a cookie</li>
            </ul>
            <p>
              Please note that if you choose to block or delete cookies, you may not be able to access certain areas or
              features of our Website, and some services may not function properly.
            </p>
            <p>Here are links to instructions on how to manage cookies in common browsers:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your
              online activities tracked. Currently, our Website does not respond to "Do Not Track" signals.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Compliance with Indian Laws</h2>
            <p>
              Our use of cookies complies with the Information Technology Act, 2000, and the Information Technology
              (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. We
              are committed to ensuring that our cookie practices align with all applicable Indian regulations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
              business practices. Any changes will be posted on this page with an updated "Last Updated" date. We
              encourage you to check this page periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us
              at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@inovabeing.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@inovabeing.com
              </a>
              <br />
              <strong>Address:</strong> INovaBeing Technologies Pvt LTD, Door No. 1-60, A & B, 3rd Floor, KNR Square,
              opp. The Platina, Gachibowli, Hyderabad, Telangana 500032, India
              <br />
              <strong>Phone:</strong> +91 73969 85858
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
