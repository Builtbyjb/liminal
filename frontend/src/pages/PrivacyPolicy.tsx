import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated: string = "March 8, 2025";
  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Privacy Policy</h1>
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <Shield />
          <p className="text-sm">Last Updated: {lastUpdated} </p>
        </div>
        <p className="mb-4">
          ThinkLedger ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your
          personal and business data. This Privacy Policy outlines how we collect, use, store, and protect your
          information when you use our services. which requires access to your Google Workspace account.
        </p>
        <p className="mb-4">
          By using our services, you consent to the data practices described in this Privacy Policy.
        </p>
      </div>

      <div className="w-full space-y-4">
        <section id="communication-preferences">
          <h2 className="font-medium py-4 text-xl">Communications & Email Preferences</h2>
          <div className="pb-4 space-y-4">
            <p>
              When you sign up for our product waitlist or subscribe to our updates, we will only send you relevant
              communications related to our product, including launch updates, early access opportunities, and exclusive
              announcements. We do not send spam, and you can unsubscribe at any time by clicking the unsubscribe link
              in our emails.
            </p>
            <p>We respect your privacy and will never sell, rent, or share your email address with third parties.</p>
          </div>
        </section>

        <section id="data-security">
          <h2 className="font-medium py-4 text-xl">Data security measures</h2>
          <div className="pb-4 pt-2 text-muted-foreground space-y-4">
            <p>We implement industry-leading security measures to protect your information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Encryption:</strong>
                Data is encrypted in transit and at rest using industry-standard protocols (TLS, AES-256).
              </li>
              <li>
                <strong>Access Controls:</strong>
                Restricted access based on least privilege principles and multi-factor authentication.
              </li>
              <li>
                <strong>Regular Audits:</strong>
                Routine security assessments and penetration testing to identify vulnerabilities.
              </li>
              <li>
                <strong>Data Minimization:</strong>
                We only store necessary data and purge outdated information as per retention policies.
              </li>
              <li>
                <strong>Compliance Standards:</strong>
                Adherence to PIPEDA and other relevant data protection laws.
              </li>
            </ul>
          </div>
        </section>

        <section id="cookie-policy">
          <h2 className="font-medium py-4 text-xl">Tracking & cookies data</h2>
          <div className="pb-4 space-y-4">
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain
              information.
            </p>
            <p>
              Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies
              are sent to your browser from a website and stored on your device. Tracking technologies also used are
              beacons, tags, and scripts to collect and track information and to improve and analyze our service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. You can
              also edit your cookie settings by clicking on the Cookie Preferences button at the bottom of the page.
            </p>
            <p>Examples of Cookies we use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Analytics cookies:</strong>
                These cookies help us understand how visitors interact with the website, helping us improve our
                services.
              </li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <h2 className="font-medium py-4 text-xl">Contact us</h2>
          <div className="pb-4 space-y-4">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: support@thinkledger.app</li>
              <li>By visiting the contact section at the bottom of the page.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
