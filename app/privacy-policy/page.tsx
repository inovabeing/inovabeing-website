import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | INovaBeing",
  description:
    "Our commitment to protecting your privacy and personal data in compliance with Indian and global regulations.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Last Updated: May 11, 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              INovaBeing Pvt Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your
              personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website www.inovabeing.com or use our services.
            </p>
            <p>
              We are based in India and comply with the Information Technology Act, 2000, Information Technology
              (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and
              other applicable Indian laws. We also adhere to international standards and best practices for data
              protection.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number, and company details</li>
              <li>Billing and payment information</li>
              <li>Communication preferences</li>
              <li>Information provided when you contact us</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Sensitive Personal Data or Information (SPDI)</h3>
            <p>As defined under Indian IT Rules, we may collect the following SPDI with your explicit consent:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Financial information such as bank account or credit card details</li>
              <li>Authentication information such as passwords</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Usage Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, time spent on pages</li>
              <li>Referring website or source</li>
              <li>Location information</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Collect Information</h2>
            <p>We collect information through:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Direct interactions when you fill out forms, subscribe to newsletters, or contact us</li>
              <li>Automated technologies such as cookies and similar tracking technologies</li>
              <li>Third-party sources such as business partners, analytics providers, and social media platforms</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To process transactions and send related information</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send administrative information, updates, and marketing communications</li>
              <li>To improve our website, products, and services</li>
              <li>To protect our rights, privacy, safety, and property</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal grounds:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Compliance with legal obligations</li>
              <li>Our legitimate interests</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers and business partners who help us deliver our services</li>
              <li>Professional advisors such as lawyers, auditors, and insurers</li>
              <li>Government authorities when required by law</li>
              <li>In connection with a business transaction such as a merger or acquisition</li>
            </ul>
            <p>
              We do not sell your personal information. Any third parties with whom we share your data are contractually
              obligated to maintain its confidentiality and security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p>
              As a company based in India, we may transfer your data to other countries. When we do, we ensure
              appropriate safeguards are in place to protect your information and comply with applicable data protection
              laws. These safeguards may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Standard contractual clauses approved by relevant authorities</li>
              <li>Binding corporate rules for transfers within our group</li>
              <li>Consent for specific transfers</li>
              <li>Necessary transfers for the performance of a contract</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication procedures</li>
              <li>Staff training on data protection</li>
            </ul>
            <p>
              In accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011, we maintain documented security practices and procedures.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was
              collected, including legal, accounting, or reporting requirements. Different types of data may be kept for
              different periods based on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Legal obligations</li>
              <li>Ongoing business relationships</li>
              <li>Potential disputes or complaints</li>
              <li>Industry standards</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>Under applicable laws, you may have the following rights:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate or incomplete data</li>
              <li>Right to erasure (or "right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:info@inovabeing.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@inovabeing.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children. If you are a parent or guardian and believe your child has provided us with
              personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last
              Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Grievance Officer</h2>
            <p>
              In accordance with the Information Technology Act, 2000, and the rules made thereunder, the contact
              details of the Grievance Officer are provided below:
            </p>
            <p className="mt-4">
              <strong>Name:</strong> Privacy Officer
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:info@inovabeing.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@inovabeing.com
              </a>
              <br />
              <strong>Address:</strong> INovaBeing Technologies Pvt LTD, Door No. 1-60, A & B, 3rd Floor, KNR Square,
              opp. The Platina, Gachibowli, Hyderabad, Telangana 500032, India
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
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
              <strong>Phone:</strong> +91 0000-000-000
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
