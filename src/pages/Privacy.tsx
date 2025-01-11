import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Statement AI Automation B.V.</h1>
          <p className="text-sm text-foreground/60 mb-8">
            Version: 1.0<br />
            Date: January 11, 2025
          </p>

          <p>
            Welcome to the website of AI Automation B.V. ("AI Automation" or "we"). AI Automation respects your privacy and ensures that the personal information you provide to us is treated confidentially. In this privacy statement, we explain which data we collect, for what purposes we use this data, and what rights you have.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Applicability</h2>
          <p>
            This privacy statement applies to all processing of personal data that takes place via our website http://ai-automation.nl/ (hereinafter: the "Website") and the services we offer. By visiting the Website and/or using our services, you agree to the contents of this privacy statement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Who is responsible for processing your data?</h2>
          <p>
            The party responsible for processing your personal data is:<br />
            AI Automation B.V.
          </p>
          <p>
            If you have any questions about this privacy statement, you can contact us via the email address [info@ai-automation.nl] (if applicable) or through the contact form on the Website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. What data do we collect?</h2>
          <h3 className="text-xl font-bold mt-6 mb-3">3.1 Data you provide to us</h3>
          <p><strong>Contact Form</strong></p>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Message</li>
          </ul>
          <p>When you fill out our contact form, we use this information to address your question or comment and to get in touch with you.</p>
          
          <p><strong>Newsletter</strong></p>
          <ul>
            <li>Name (optional)</li>
            <li>Email Address</li>
          </ul>
          <p>If you sign up for our newsletter, we use your email address to send you our newsletter. You can unsubscribe at any time via the unsubscribe link in the newsletter.</p>

          <h3 className="text-xl font-bold mt-6 mb-3">3.2 Data collected automatically</h3>
          <p>When you visit our Website, certain data is collected automatically, such as:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>The operating system you use</li>
            <li>Your browser settings</li>
            <li>Date and time of your visit</li>
            <li>The pages you visit</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Purposes and legal grounds for processing</h2>
          <p>We process your personal data for the following purposes, based on the corresponding legal grounds:</p>
          
          <p><strong>Contact</strong></p>
          <ul>
            <li>Purpose: to handle your question or request submitted via the contact form or email, and to communicate with you.</li>
            <li>Legal ground: consent (when you fill out and submit the form), or our legitimate interest to respond to your contact request.</li>
          </ul>

          <p><strong>Sending newsletters</strong></p>
          <ul>
            <li>Purpose: to keep you informed about our services, offers, and news.</li>
            <li>Legal ground: consent, given when you sign up for our newsletter. You can unsubscribe at any time.</li>
          </ul>

          <p><strong>Website analysis and maintenance</strong></p>
          <ul>
            <li>Purpose: to secure and improve the Website and to analyze the use of the Website.</li>
            <li>Legal ground: our legitimate interest to offer and improve our services.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Retention period</h2>
          <p>
            We do not retain your personal data any longer than necessary for the purpose for which we collected it, unless we are legally required to retain your data for a longer period.
          </p>
          <ul>
            <li>Contact Form: your data is retained until your question or request has been addressed, unless a further (business) relationship arises.</li>
            <li>Newsletter: your data is retained until you unsubscribe from the newsletter.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Disclosure of data to third parties</h2>
          <p>
            AI Automation does not sell your personal data to third parties. We only share your personal data in the following cases:
          </p>
          <ul>
            <li>With service providers that process data on our behalf, such as IT providers or marketing parties who assist us in managing the Website and sending newsletters. These parties have a data processing agreement with us and process your data only for our purposes.</li>
            <li>When we are legally obliged to disclose your data, for example to government authorities.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
          <p>
            Our Website may use functional, analytical, and possibly tracking cookies. A cookie is a small text file that is stored on your device when you visit a website.
          </p>
          <ul>
            <li>Functional cookies: are necessary for the proper functioning of the Website and are placed without consent.</li>
            <li>Analytical cookies: are used to gather statistics on the use of the Website and to improve the website experience.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Security</h2>
          <p>
            We take appropriate technical and organizational measures to protect your personal data against loss or unlawful use. Think of using secure connections (SSL certificates), encryption, and access controls.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Your rights</h2>
          <p>Under the General Data Protection Regulation (GDPR), you have several rights with regard to your personal data:</p>
          <ul>
            <li>Right of access: you have the right to request which personal data we process about you.</li>
            <li>Right to rectification: if you believe your personal data is incorrect or incomplete, you can request to have it corrected or supplemented.</li>
            <li>Right to erasure ("right to be forgotten"): you can request us to delete your personal data when it is no longer needed for the purposes for which it was collected, or if you withdraw your consent.</li>
            <li>Right to restriction of processing: you can request us to temporarily restrict the processing of your personal data.</li>
            <li>Right to data portability: you have the right to receive the data we hold about you in a structured, commonly used, and machine-readable format, and to transfer those data to another controller.</li>
            <li>Right to object: you can object to the processing of your personal data if we rely on our legitimate interest.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Complaints</h2>
          <p>
            If you have a complaint about the processing of your personal data by AI Automation, we recommend that you first contact us via the contact form on our Website (or via [info@ai-automation.nl]). If we are unable to resolve the issue together, you can also submit a complaint to the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) via www.autoriteitpersoonsgegevens.nl.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes</h2>
          <p>
            AI Automation may update this privacy statement from time to time, for example if we make changes to the Website or if there are changes in laws and regulations. The most recent version of the privacy statement will always be published on the Website. We recommend that you check this privacy statement regularly.
          </p>

          <p className="mt-8">
            If you have any questions, comments, or requests regarding this privacy statement or the processing of your personal data, please contact us via the contact form on the Website or (if applicable) via [info@ai-automation.nl].
          </p>

          <p className="text-sm text-foreground/60 mt-8">
            Last updated: January 11, 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;