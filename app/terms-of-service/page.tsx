import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | INovaBeing",
  description: "The terms and conditions governing the use of INovaBeing's services and website.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Last Updated: May 11, 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to INovaBeing Pvt Ltd ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your
              use of our website located at www.inovabeing.com (the "Website") and the services offered by us
              (collectively, the "Services").
            </p>
            <p>
              Please read these Terms carefully before using our Website or Services. By accessing or using our Website
              or Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use
              our Website or Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Applicability of Indian Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India, including but not limited
              to the Indian Contract Act, 1872, the Information Technology Act, 2000, and the Consumer Protection Act,
              2019. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts
              in [City], India.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p>
              INovaBeing provides AI solutions, including but not limited to custom AI applications, data enrichment,
              and workflow automation. The specific details, features, and limitations of our Services are described on
              our Website or in a separate agreement between you and us.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our Services at any time without
              notice or liability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p>
              Some of our Services may require you to create an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities that occur under your account. You
              agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Update your information to keep it accurate and current</li>
              <li>Notify us immediately of any unauthorized access to or use of your account</li>
              <li>Ensure that you exit from your account at the end of each session</li>
            </ul>
            <p>
              We reserve the right to terminate or suspend your account at our discretion, without notice, for conduct
              that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other
              reason.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p>When using our Website or Services, you agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the integrity or performance of our Services</li>
              <li>Attempt to gain unauthorized access to our Services or related systems</li>
              <li>Collect or harvest any information from our Services without our consent</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p>
              All content on our Website, including but not limited to text, graphics, logos, icons, images, audio
              clips, digital downloads, and software, is the property of INovaBeing or its content suppliers and is
              protected by Indian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Services for
              their intended purposes. This license does not include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modifying or copying our materials</li>
              <li>Using our materials for any commercial purpose</li>
              <li>Attempting to decompile or reverse engineer any software contained on our Website</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
            <p>
              You retain ownership of any content you submit, post, or display on or through our Services ("User
              Content"). By providing User Content, you grant us a worldwide, royalty-free, non-exclusive, perpetual,
              irrevocable, and fully sublicensable license to use, reproduce, modify, adapt, publish, translate, create
              derivative works from, distribute, and display such User Content in connection with our Services.
            </p>
            <p>You represent and warrant that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate the rights of any third party</li>
              <li>Your User Content complies with these Terms and applicable laws</li>
            </ul>
            <p>
              We reserve the right to remove any User Content that violates these Terms or that we find objectionable
              for any reason, without notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <p>Certain Services may require payment. All payments are subject to the following terms:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prices are stated in Indian Rupees (INR) or US Dollars (USD) as specified</li>
              <li>Applicable taxes will be added to the price as required by law</li>
              <li>Payments are non-refundable unless otherwise specified</li>
              <li>We reserve the right to change our prices at any time</li>
            </ul>
            <p>
              For subscription-based Services, you authorize us to charge your payment method on a recurring basis. You
              can cancel your subscription at any time, but no refunds will be provided for partial billing periods.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, INovaBeing and its directors, employees, agents, and affiliates
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including
              but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use or inability to use our Services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our Services</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted through our Services</li>
              <li>
                Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any
                content posted, emailed, transmitted, or otherwise made available through our Services
              </li>
            </ul>
            <p>
              In no event shall our total liability to you for all claims exceed the amount paid by you, if any, for
              using our Services during the twelve (12) months preceding the event giving rise to the liability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless INovaBeing and its officers, directors, employees,
              agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses,
              or fees (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your User Content</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p>
              Our Services are provided on an "as is" and "as available" basis. INovaBeing expressly disclaims all
              warranties of any kind, whether express or implied, including but not limited to the implied warranties of
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>We do not warrant that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Our Services will meet your requirements</li>
              <li>Our Services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results that may be obtained from the use of our Services will be accurate or reliable</li>
              <li>Any errors in our Services will be corrected</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p>
              We may terminate or suspend your access to our Services immediately, without prior notice or liability,
              for any reason, including but not limited to a breach of these Terms.
            </p>
            <p>
              Upon termination, your right to use our Services will immediately cease. If you wish to terminate your
              account, you may simply discontinue using our Services or contact us to request account deletion.
            </p>
            <p>
              All provisions of these Terms which by their nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
              liability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
              will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Services after any revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you are no longer authorized to use our Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and INovaBeing regarding our Services and
              supersede all prior and contemporaneous agreements, proposals, or representations, written or oral,
              concerning our Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@inovabeing.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@inovabeing.com
              </a>
              <br />
              <strong>Address:</strong> INovaBeing Pvt Ltd, 123 AI Innovation Street, Tech Hub, India
              <br />
              <strong>Phone:</strong> +91 73969 85858
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
