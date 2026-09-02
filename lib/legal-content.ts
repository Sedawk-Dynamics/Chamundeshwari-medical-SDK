/**
 * Source of truth for the four statutory policy pages
 * (Privacy, Terms, Shipping & Delivery, Return/Refund & Cancellation).
 *
 * Each document is plain data — components/legal-page.tsx renders it, and
 * components/footer.tsx + app/sitemap.ts read `legalDocuments` for their links,
 * so adding a policy here is enough to publish it everywhere.
 *
 * Section headings are stored WITHOUT their numbers; the renderer numbers them
 * from their position, which keeps the table of contents and the body in sync.
 */

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  /** The shared address / phone / email card. */
  | { type: 'contact'; hours?: boolean }
  /** Phone + email only — used inside "how to request…" style sections. */
  | { type: 'contact-compact' }

export type LegalSection = {
  id: string
  heading: string
  blocks: LegalBlock[]
}

export type LegalDocument = {
  slug: string
  /** Full page heading. */
  title: string
  /** Short label for footer links. */
  navLabel: string
  metaTitle: string
  metaDescription: string
  /** Printed verbatim, as supplied by the business. */
  effectiveDate: string
  /** One-line summary shown under the page title. */
  summary: string
  intro: LegalBlock[]
  sections: LegalSection[]
}

/** Shared across all four documents until the business issues separate dates. */
const EFFECTIVE_DATE = '02-09-2025'

const privacyPolicy: LegalDocument = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  navLabel: 'Privacy Policy',
  metaTitle: 'Privacy Policy',
  metaDescription:
    'How MRL Advanced MEDI Systems (Chamundeshwari Medical Systems Pvt. Ltd.) collects, uses, stores and protects the information you share through mrlmedisystems.com.',
  effectiveDate: EFFECTIVE_DATE,
  summary:
    'How we collect, use, store and protect the information you share with us.',
  intro: [
    {
      type: 'p',
      text: 'MRL Advanced MEDI Systems, operating under Chamundeshwari Medical Systems Pvt. Ltd. ("MRL Advanced MEDI Systems", "we", "us", or "our"), respects your privacy and is committed to protecting the personal information you provide to us.',
    },
    {
      type: 'p',
      text: 'This Privacy Policy explains how we collect, use, store and protect information when you visit or interact with our website, mrlmedisystems.com, or contact us regarding our medical equipment, rental, repair, maintenance, AMC, installation, training and related services.',
    },
    {
      type: 'p',
      text: 'By using our website or submitting your information to us, you acknowledge that you have read and understood this Privacy Policy.',
    },
  ],
  sections: [
    {
      id: 'information-we-collect',
      heading: 'Information We Collect',
      blocks: [
        {
          type: 'p',
          text: 'We may collect information that you voluntarily provide to us, including:',
        },
        {
          type: 'ul',
          items: [
            'Full name',
            'Company, hospital, clinic or organisation name',
            'Email address',
            'Phone number',
            'Billing or business address',
            'Delivery or installation address',
            'Information about the medical equipment or services you are enquiring about',
            'Information provided through enquiry, quotation, demo or contact forms',
            'Details required for order processing, rental arrangements, AMC or service requests',
            'Any other information you voluntarily provide to us',
          ],
        },
        {
          type: 'p',
          text: 'We may also automatically collect limited technical information when you visit our website, such as:',
        },
        {
          type: 'ul',
          items: [
            'IP address',
            'Browser type',
            'Device type',
            'Operating system',
            'Pages visited',
            'Date and time of website access',
            'Referring website or source',
            'Basic website usage information',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-your-information',
      heading: 'How We Use Your Information',
      blocks: [
        { type: 'p', text: 'We may use the information collected to:' },
        {
          type: 'ul',
          items: [
            'Respond to enquiries and requests for quotations',
            'Provide product demonstrations and information',
            'Process equipment sales and rental requests',
            'Arrange delivery, installation and commissioning',
            'Provide repair and maintenance services',
            'Manage Annual Maintenance Contracts (AMC)',
            'Provide customer and technical support',
            'Communicate regarding orders, services, rentals or enquiries',
            'Process payments where applicable',
            'Maintain business and transaction records',
            'Improve our products, services and website',
            'Prevent fraud, misuse or unauthorised activity',
            'Comply with applicable legal and regulatory requirements',
          ],
        },
      ],
    },
    {
      id: 'medical-information',
      heading: 'Medical Information',
      blocks: [
        {
          type: 'p',
          text: 'MRL Advanced MEDI Systems supplies and services medical equipment. Our website is primarily intended for business, institutional and equipment-related enquiries.',
        },
        {
          type: 'p',
          text: 'We do not intentionally request unnecessary patient medical records or sensitive patient information through our website.',
        },
        {
          type: 'p',
          text: 'You should not submit patient medical records, medical reports, diagnostic information or other sensitive patient information through general website enquiry forms unless specifically requested through an appropriate and authorised channel.',
        },
        {
          type: 'p',
          text: 'If such information is inadvertently provided to us, we will handle it only to the extent reasonably necessary for the relevant request, service or legal obligation.',
        },
      ],
    },
    {
      id: 'cookies-and-similar-technologies',
      heading: 'Cookies and Similar Technologies',
      blocks: [
        {
          type: 'p',
          text: 'Our website may use cookies and similar technologies to improve website functionality, understand website usage and provide a better user experience.',
        },
        { type: 'p', text: 'Cookies may help us:' },
        {
          type: 'ul',
          items: [
            'Remember certain preferences',
            'Understand how visitors use the website',
            'Improve website performance',
            'Monitor website traffic and functionality',
          ],
        },
        {
          type: 'p',
          text: 'You may control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.',
        },
      ],
    },
    {
      id: 'sharing-of-information',
      heading: 'Sharing of Information',
      blocks: [
        { type: 'p', text: 'We do not sell or rent your personal information.' },
        {
          type: 'p',
          text: 'We may share information where reasonably necessary with:',
        },
        {
          type: 'ul',
          items: [
            'Employees and authorised representatives of MRL Advanced MEDI Systems',
            'Service engineers and technical personnel',
            'Delivery, logistics and installation partners',
            'Payment processing providers',
            'Website, hosting and technology service providers',
            'Professional advisors where necessary',
            'Government authorities or regulatory bodies where required by law',
          ],
        },
        {
          type: 'p',
          text: 'Where third-party service providers are involved, we expect them to handle information appropriately and only for the purposes for which it is provided.',
        },
      ],
    },
    {
      id: 'payment-information',
      heading: 'Payment Information',
      blocks: [
        {
          type: 'p',
          text: 'Where online payments are made through a third-party payment gateway, payment information may be processed directly by the relevant payment service provider.',
        },
        {
          type: 'p',
          text: 'We do not intend to store complete card numbers, CVV numbers, UPI PINs, banking passwords or other confidential payment credentials on our website.',
        },
        {
          type: 'p',
          text: 'Payment processing is subject to the applicable terms and privacy policies of the payment service provider.',
        },
      ],
    },
    {
      id: 'data-security',
      heading: 'Data Security',
      blocks: [
        {
          type: 'p',
          text: 'We take reasonable administrative, technical and organisational measures to protect personal information against unauthorised access, misuse, alteration, disclosure or destruction.',
        },
        {
          type: 'p',
          text: 'However, no method of electronic transmission or storage is completely secure. Therefore, while we take reasonable steps to protect your information, we cannot guarantee absolute security.',
        },
      ],
    },
    {
      id: 'data-retention',
      heading: 'Data Retention',
      blocks: [
        {
          type: 'p',
          text: 'We retain personal information for as long as reasonably necessary to:',
        },
        {
          type: 'ul',
          items: [
            'Provide requested products or services',
            'Maintain business and transaction records',
            'Meet contractual obligations',
            'Resolve disputes',
            'Comply with applicable legal, tax and regulatory requirements',
            'Protect our legitimate business interests',
          ],
        },
        {
          type: 'p',
          text: 'When information is no longer reasonably required, it may be deleted or securely disposed of, subject to applicable legal requirements.',
        },
      ],
    },
    {
      id: 'third-party-websites',
      heading: 'Third-Party Websites',
      blocks: [
        {
          type: 'p',
          text: 'Our website may contain links to third-party websites, services or platforms.',
        },
        {
          type: 'p',
          text: 'We are not responsible for the privacy practices, content or security of third-party websites. We recommend reviewing the privacy policies of such websites before providing personal information.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      heading: "Children's Privacy",
      blocks: [
        {
          type: 'p',
          text: 'Our website and services are primarily intended for hospitals, healthcare organisations, clinics, healthcare professionals, businesses and other customers.',
        },
        {
          type: 'p',
          text: 'We do not knowingly collect personal information from children through our website.',
        },
        {
          type: 'p',
          text: 'If you believe that a child has provided personal information to us, please contact us so that appropriate action can be taken.',
        },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your Rights',
      blocks: [
        { type: 'p', text: 'Subject to applicable law, you may contact us to:' },
        {
          type: 'ul',
          items: [
            'Request information about personal data we hold about you',
            'Request correction of inaccurate information',
            'Request deletion where legally permissible',
            'Withdraw consent where processing is based on consent',
            'Raise concerns regarding the handling of your information',
          ],
        },
        {
          type: 'p',
          text: 'Certain information may need to be retained where required by law or for legitimate business purposes.',
        },
      ],
    },
    {
      id: 'changes-to-this-privacy-policy',
      heading: 'Changes to This Privacy Policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our services, website, technology or legal requirements.',
        },
        {
          type: 'p',
          text: 'Any updated version will be published on this page with a revised effective date.',
        },
      ],
    },
    {
      id: 'contact-us',
      heading: 'Contact Us',
      blocks: [
        {
          type: 'p',
          text: 'If you have questions, concerns or requests regarding this Privacy Policy, please contact us:',
        },
        { type: 'contact', hours: true },
      ],
    },
  ],
}

const termsAndConditions: LegalDocument = {
  slug: 'terms-and-conditions',
  title: 'Terms & Conditions',
  navLabel: 'Terms & Conditions',
  metaTitle: 'Terms & Conditions',
  metaDescription:
    'Terms governing the use of mrlmedisystems.com and the supply, rental, installation, AMC and service of medical equipment by MRL Advanced MEDI Systems.',
  effectiveDate: EFFECTIVE_DATE,
  summary:
    'The terms that govern your use of our website, equipment and services.',
  intro: [
    { type: 'p', text: 'Welcome to MRL Advanced MEDI Systems.' },
    {
      type: 'p',
      text: 'These Terms & Conditions ("Terms") govern your access to and use of the website mrlmedisystems.com and your interactions with MRL Advanced MEDI Systems, operating under Chamundeshwari Medical Systems Pvt. Ltd.',
    },
    {
      type: 'p',
      text: 'By accessing our website, submitting an enquiry, requesting a quotation, purchasing equipment, renting equipment or engaging our services, you agree to these Terms.',
    },
    {
      type: 'p',
      text: 'If you do not agree with these Terms, please do not use the website or our services.',
    },
  ],
  sections: [
    {
      id: 'about-our-business',
      heading: 'About Our Business',
      blocks: [
        {
          type: 'p',
          text: 'MRL Advanced MEDI Systems provides medical equipment and related services, including:',
        },
        {
          type: 'ul',
          items: [
            'Sale of new medical equipment',
            'Sale of refurbished medical equipment',
            'Medical equipment rental',
            'ICU equipment',
            'NICU equipment',
            'Operating Theatre equipment',
            'Ambulance equipment and setup',
            'Home ICU setup',
            'Medical equipment repair',
            'Annual Maintenance Contracts (AMC)',
            'Preventive maintenance',
            'Installation and commissioning',
            'Equipment servicing',
            'Biomedical equipment training',
            'Equipment sourcing and procurement',
          ],
        },
        {
          type: 'p',
          text: 'The availability of products and services may vary depending on location, equipment availability, manufacturer specifications and project requirements.',
        },
      ],
    },
    {
      id: 'website-information',
      heading: 'Website Information',
      blocks: [
        {
          type: 'p',
          text: 'We make reasonable efforts to ensure that information displayed on our website is accurate and up to date.',
        },
        {
          type: 'p',
          text: 'However, product images, specifications, features, availability and descriptions may change based on manufacturer updates, equipment configuration or stock availability.',
        },
        {
          type: 'p',
          text: 'Website content should not be considered a substitute for the official technical documentation, operating manual or manufacturer instructions for any medical device.',
        },
      ],
    },
    {
      id: 'product-availability',
      heading: 'Product Availability',
      blocks: [
        {
          type: 'p',
          text: 'All products and equipment are subject to availability.',
        },
        {
          type: 'p',
          text: 'Displaying a product on our website does not necessarily mean that the product is currently available for immediate purchase or rental.',
        },
        {
          type: 'p',
          text: 'We may source equipment from manufacturers, authorised suppliers or other appropriate sources based on customer requirements.',
        },
      ],
    },
    {
      id: 'product-pricing',
      heading: 'Product Pricing',
      blocks: [
        {
          type: 'p',
          text: 'Where prices are displayed, they are subject to change unless specifically confirmed in a quotation or order.',
        },
        {
          type: 'p',
          text: "For equipment requiring configuration, installation, transportation or customisation, the final price may depend on the customer's requirements.",
        },
        {
          type: 'p',
          text: 'Applicable taxes, transportation, installation, commissioning, training, accessories or other charges may be charged separately where applicable and will be communicated to the customer.',
        },
      ],
    },
    {
      id: 'quotations-and-orders',
      heading: 'Quotations and Orders',
      blocks: [
        {
          type: 'p',
          text: 'A quotation issued by MRL Advanced MEDI Systems may include:',
        },
        {
          type: 'ul',
          items: [
            'Product details',
            'Quantity',
            'Price',
            'Applicable taxes',
            'Delivery charges',
            'Installation charges',
            'Warranty information',
            'Payment terms',
            'Delivery timeline',
            'Other applicable commercial conditions',
          ],
        },
        {
          type: 'p',
          text: 'A quotation does not constitute acceptance of an order until the order is confirmed by MRL Advanced MEDI Systems.',
        },
      ],
    },
    {
      id: 'payment',
      heading: 'Payment',
      blocks: [
        {
          type: 'p',
          text: 'Customers may be required to make full or partial payment depending on the applicable quotation, order or service agreement.',
        },
        {
          type: 'p',
          text: 'Payments may be made through the payment methods made available by us.',
        },
        {
          type: 'p',
          text: 'For online payments, transactions may be processed through third-party payment gateways.',
        },
        {
          type: 'p',
          text: 'Customers are responsible for providing accurate payment and billing information.',
        },
      ],
    },
    {
      id: 'delivery',
      heading: 'Delivery',
      blocks: [
        {
          type: 'p',
          text: 'Delivery timelines provided by us are estimates unless specifically confirmed in writing.',
        },
        { type: 'p', text: 'Delivery may be affected by:' },
        {
          type: 'ul',
          items: [
            'Product availability',
            'Manufacturer or supplier delays',
            'Transportation conditions',
            'Customer site readiness',
            'Installation requirements',
            'Government restrictions',
            'Force majeure events',
            'Other circumstances outside our reasonable control',
          ],
        },
        {
          type: 'p',
          text: 'Customers should ensure that the delivery location is accessible and suitable for the equipment being supplied.',
        },
      ],
    },
    {
      id: 'installation-and-commissioning',
      heading: 'Installation and Commissioning',
      blocks: [
        {
          type: 'p',
          text: 'Where installation or commissioning is included, the customer must ensure that the installation site meets the necessary technical and environmental requirements.',
        },
        { type: 'p', text: 'This may include appropriate:' },
        {
          type: 'ul',
          items: [
            'Electrical connections',
            'Space and access',
            'Medical gas connections where applicable',
            'Internet/network infrastructure where applicable',
            'Safety requirements',
            'Other manufacturer-specified requirements',
          ],
        },
        {
          type: 'p',
          text: 'Additional work required because of site conditions may be chargeable separately.',
        },
      ],
    },
    {
      id: 'medical-equipment-use',
      heading: 'Medical Equipment Use',
      blocks: [
        {
          type: 'p',
          text: 'Medical equipment must be operated only by appropriately trained and authorised personnel.',
        },
        {
          type: 'p',
          text: 'Customers are responsible for ensuring that equipment is used in accordance with:',
        },
        {
          type: 'ul',
          items: [
            'Manufacturer instructions',
            'Applicable safety procedures',
            'Applicable laws and regulations',
            'Recommended maintenance requirements',
            'Appropriate clinical and institutional protocols',
          ],
        },
        {
          type: 'p',
          text: 'MRL Advanced MEDI Systems does not provide medical diagnosis or treatment through its website.',
        },
      ],
    },
    {
      id: 'rental-services',
      heading: 'Rental Services',
      blocks: [
        {
          type: 'p',
          text: 'Equipment rental may be offered on short-term or long-term arrangements depending on availability and customer requirements.',
        },
        {
          type: 'p',
          text: 'Rental terms, duration, charges, security deposit, transportation, installation, maintenance responsibilities and return conditions may be specified separately in the rental agreement or quotation.',
        },
        {
          type: 'p',
          text: 'The customer must take reasonable care of rented equipment and must not modify, relocate or transfer the equipment without appropriate authorisation where such permission is required.',
        },
      ],
    },
    {
      id: 'refurbished-equipment',
      heading: 'Refurbished Equipment',
      blocks: [
        {
          type: 'p',
          text: 'Refurbished equipment may have previously been used and may have undergone inspection, servicing, repair, testing or refurbishment.',
        },
        {
          type: 'p',
          text: 'The condition, age, configuration, accessories and warranty of refurbished equipment may vary.',
        },
        {
          type: 'p',
          text: 'Specific warranty and condition details will be provided in the relevant quotation or order documentation.',
        },
      ],
    },
    {
      id: 'warranty',
      heading: 'Warranty',
      blocks: [
        {
          type: 'p',
          text: 'Where a warranty is provided, it will be subject to the specific warranty terms applicable to the equipment.',
        },
        {
          type: 'p',
          text: 'The website currently states that a standard one-year warranty may be provided with equipment, subject to applicable product and commercial conditions.',
        },
        { type: 'p', text: 'Warranty coverage may exclude damage caused by:' },
        {
          type: 'ul',
          items: [
            'Misuse',
            'Negligence',
            'Unauthorised modification',
            'Improper installation',
            'Accidental damage',
            'Electrical or environmental issues',
            'Normal wear and tear',
            'Consumable parts',
            'Damage caused contrary to manufacturer instructions',
          ],
        },
        {
          type: 'p',
          text: 'The exact warranty applicable to a particular product will be specified in the quotation, invoice or warranty documentation.',
        },
      ],
    },
    {
      id: 'amc-and-repair-services',
      heading: 'AMC and Repair Services',
      blocks: [
        {
          type: 'p',
          text: 'AMC services may include preventive maintenance, servicing and technical support according to the applicable AMC agreement.',
        },
        {
          type: 'p',
          text: 'The exact scope, response time, exclusions, spare parts coverage, labour coverage and other conditions will depend on the AMC agreement.',
        },
        {
          type: 'p',
          text: 'Repair services may be subject to inspection and diagnosis before the final repair cost is confirmed.',
        },
      ],
    },
    {
      id: 'customer-responsibilities',
      heading: 'Customer Responsibilities',
      blocks: [
        { type: 'p', text: 'Customers are responsible for:' },
        {
          type: 'ul',
          items: [
            'Providing accurate information',
            'Providing correct delivery and installation details',
            'Ensuring site readiness',
            'Providing authorised personnel for equipment operation',
            'Following manufacturer instructions',
            'Maintaining equipment appropriately',
            'Providing access to equipment for authorised service personnel',
            'Making payments according to agreed terms',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual Property',
      blocks: [
        {
          type: 'p',
          text: 'All website content, including text, graphics, logos, images, designs, layouts, trademarks and other materials, is owned by or licensed to MRL Advanced MEDI Systems or its respective rights holders.',
        },
        {
          type: 'p',
          text: 'You may not reproduce, copy, modify, distribute, publish or commercially exploit website content without prior written permission.',
        },
      ],
    },
    {
      id: 'prohibited-use',
      heading: 'Prohibited Use',
      blocks: [
        { type: 'p', text: 'You agree not to:' },
        {
          type: 'ul',
          items: [
            'Use the website for unlawful purposes',
            'Attempt to gain unauthorised access to the website',
            'Introduce malicious code or harmful software',
            'Interfere with website security or functionality',
            'Copy website content for commercial use without permission',
            'Submit false or misleading information',
            'Use the website in a manner that may damage our business or reputation',
          ],
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      heading: 'Limitation of Liability',
      blocks: [
        {
          type: 'p',
          text: 'To the extent permitted by applicable law, MRL Advanced MEDI Systems shall not be responsible for indirect, incidental, consequential or special losses arising from the use of the website or services.',
        },
        {
          type: 'p',
          text: 'Nothing in these Terms is intended to exclude liability that cannot legally be excluded under applicable law.',
        },
      ],
    },
    {
      id: 'force-majeure',
      heading: 'Force Majeure',
      blocks: [
        {
          type: 'p',
          text: 'We shall not be liable for delays or failure to perform obligations caused by circumstances beyond our reasonable control, including natural disasters, fire, flood, war, strikes, government restrictions, transportation disruptions, supplier delays, epidemics, technical failures or other similar events.',
        },
      ],
    },
    {
      id: 'changes-to-these-terms',
      heading: 'Changes to These Terms',
      blocks: [
        { type: 'p', text: 'We may modify these Terms from time to time.' },
        {
          type: 'p',
          text: 'Updated Terms will be published on this page with the revised effective date.',
        },
        {
          type: 'p',
          text: 'Your continued use of the website after changes are published constitutes acceptance of the updated Terms.',
        },
      ],
    },
    {
      id: 'governing-law',
      heading: 'Governing Law',
      blocks: [
        {
          type: 'p',
          text: 'These Terms shall be governed by and interpreted in accordance with the applicable laws of India.',
        },
        {
          type: 'p',
          text: 'Any disputes shall be subject to the jurisdiction of the appropriate courts having jurisdiction over Bangalore, Karnataka, unless otherwise agreed in writing.',
        },
      ],
    },
    {
      id: 'contact-us',
      heading: 'Contact Us',
      blocks: [{ type: 'contact' }],
    },
  ],
}

const shippingPolicy: LegalDocument = {
  slug: 'shipping-and-delivery-policy',
  title: 'Shipping & Delivery Policy',
  navLabel: 'Shipping & Delivery Policy',
  metaTitle: 'Shipping & Delivery Policy',
  metaDescription:
    'Delivery coverage, timelines, shipping charges, installation and commissioning for medical equipment supplied by MRL Advanced MEDI Systems across India.',
  effectiveDate: EFFECTIVE_DATE,
  summary:
    'How we deliver, install and commission medical equipment across India.',
  intro: [
    {
      type: 'p',
      text: 'This Shipping & Delivery Policy explains the delivery and installation process for medical equipment supplied by MRL Advanced MEDI Systems, operating under Chamundeshwari Medical Systems Pvt. Ltd.',
    },
    {
      type: 'p',
      text: 'We supply, rent and service medical equipment for hospitals, clinics, nursing homes, healthcare institutions and other customers across India.',
    },
  ],
  sections: [
    {
      id: 'delivery-coverage',
      heading: 'Delivery Coverage',
      blocks: [
        {
          type: 'p',
          text: 'We provide delivery services across India, subject to product availability, location, transportation feasibility and applicable commercial conditions.',
        },
        { type: 'p', text: 'Delivery availability may vary depending on:' },
        {
          type: 'ul',
          items: [
            'Equipment type',
            'Customer location',
            'Equipment size and weight',
            'Installation requirements',
            'Transportation requirements',
            'Site accessibility',
            'Product availability',
          ],
        },
      ],
    },
    {
      id: 'order-confirmation',
      heading: 'Order Confirmation',
      blocks: [
        {
          type: 'p',
          text: 'Orders are processed after confirmation of the applicable quotation, purchase order or other agreed commercial documentation and receipt of the required payment or advance, where applicable.',
        },
        {
          type: 'p',
          text: 'Customers may receive order or delivery confirmation through email, phone or other communication channels.',
        },
      ],
    },
    {
      id: 'delivery-timeline',
      heading: 'Delivery Timeline',
      blocks: [
        {
          type: 'p',
          text: 'Delivery timelines depend on the equipment, availability, location and installation requirements.',
        },
        {
          type: 'p',
          text: 'For standard available equipment, delivery may generally be arranged within the timeline communicated in the quotation or order confirmation.',
        },
        {
          type: 'p',
          text: 'Specially sourced, imported, refurbished, customised or project-specific equipment may require additional time.',
        },
        {
          type: 'p',
          text: 'The estimated delivery timeline will be communicated to the customer wherever reasonably possible.',
        },
      ],
    },
    {
      id: 'factors-that-may-cause-delays',
      heading: 'Factors That May Cause Delays',
      blocks: [
        { type: 'p', text: 'Delivery may be delayed due to:' },
        {
          type: 'ul',
          items: [
            'Product availability',
            'Manufacturer or supplier delays',
            'Import or customs-related procedures',
            'Transportation disruptions',
            'Weather conditions',
            'Government restrictions',
            'Customer site not being ready',
            'Installation or commissioning requirements',
            'Incorrect or incomplete delivery information',
            'Force majeure events',
          ],
        },
        {
          type: 'p',
          text: 'We will make reasonable efforts to communicate material delivery delays to the customer.',
        },
      ],
    },
    {
      id: 'shipping-charges',
      heading: 'Shipping Charges',
      blocks: [
        {
          type: 'p',
          text: 'Shipping and transportation charges may vary depending on:',
        },
        {
          type: 'ul',
          items: [
            'Delivery location',
            'Equipment type',
            'Equipment size and weight',
            'Special handling requirements',
            'Installation requirements',
            'Transportation method',
          ],
        },
        {
          type: 'p',
          text: 'Any applicable delivery or transportation charges will be communicated in the quotation or order confirmation.',
        },
      ],
    },
    {
      id: 'installation-and-commissioning',
      heading: 'Installation and Commissioning',
      blocks: [
        {
          type: 'p',
          text: 'Certain medical equipment requires professional installation, testing and commissioning.',
        },
        {
          type: 'p',
          text: 'Where installation is included in the order, our authorised personnel or designated service team may coordinate the installation.',
        },
        {
          type: 'p',
          text: 'The customer must ensure that the site is ready before installation, including any required:',
        },
        {
          type: 'ul',
          items: [
            'Electrical connections',
            'Medical gas connections',
            'Space and access',
            'Environmental conditions',
            'Network or connectivity requirements',
            'Other technical requirements specified by the manufacturer',
          ],
        },
        {
          type: 'p',
          text: 'If additional site preparation is required, additional charges may apply.',
        },
      ],
    },
    {
      id: 'delivery-inspection',
      heading: 'Delivery Inspection',
      blocks: [
        {
          type: 'p',
          text: 'Customers should inspect the equipment and packaging upon delivery.',
        },
        {
          type: 'p',
          text: 'If there is visible damage to the packaging or equipment, the customer should immediately notify the delivery personnel and contact MRL Advanced MEDI Systems.',
        },
        {
          type: 'p',
          text: 'Any damage or discrepancy should preferably be reported as soon as possible with supporting photographs or other relevant evidence.',
        },
      ],
    },
    {
      id: 'incorrect-or-incomplete-delivery',
      heading: 'Incorrect or Incomplete Delivery',
      blocks: [
        {
          type: 'p',
          text: 'If the customer receives an incorrect item, missing accessory or other delivery discrepancy, the customer should contact us promptly.',
        },
        {
          type: 'p',
          text: 'We will review the matter and, where the discrepancy is confirmed to be attributable to us, take appropriate corrective action.',
        },
      ],
    },
    {
      id: 'rental-equipment-delivery',
      heading: 'Rental Equipment Delivery',
      blocks: [
        {
          type: 'p',
          text: 'For rental equipment, delivery, installation, collection and other related charges may depend on the rental agreement.',
        },
        {
          type: 'p',
          text: 'The customer is responsible for ensuring safe access to the delivery and installation location.',
        },
        {
          type: 'p',
          text: 'Rental equipment must be returned according to the agreed rental terms and in the agreed condition, subject to normal wear and tear.',
        },
      ],
    },
    {
      id: 'home-icu-equipment-delivery',
      heading: 'Home ICU Equipment Delivery',
      blocks: [
        {
          type: 'p',
          text: "Where home ICU equipment is provided, delivery and installation may be arranged based on the customer's location and equipment requirements.",
        },
        {
          type: 'p',
          text: 'The installation location must be suitable for safe operation of the equipment.',
        },
        {
          type: 'p',
          text: "The customer or responsible healthcare professional should ensure that the equipment is used only for its intended purpose and according to the manufacturer's instructions.",
        },
      ],
    },
    {
      id: 'delivery-of-refurbished-equipment',
      heading: 'Delivery of Refurbished Equipment',
      blocks: [
        {
          type: 'p',
          text: 'Refurbished equipment is delivered according to the specifications and condition agreed in the relevant quotation or order.',
        },
        {
          type: 'p',
          text: 'Delivery timelines may vary depending on inspection, refurbishment, servicing and equipment availability.',
        },
      ],
    },
    {
      id: 'failed-delivery',
      heading: 'Failed Delivery',
      blocks: [
        { type: 'p', text: 'A delivery may be unsuccessful if:' },
        {
          type: 'ul',
          items: [
            'The delivery address is incorrect',
            'No authorised person is available to receive the equipment',
            'The site is inaccessible',
            'The site is not ready for installation',
            'The customer refuses delivery without an agreed reason',
            'Additional site requirements have not been completed',
          ],
        },
        {
          type: 'p',
          text: 'Additional transportation or rescheduling charges may apply where the failed delivery or rescheduling is attributable to the customer.',
        },
      ],
    },
    {
      id: 'delayed-delivery-due-to-unforeseen-events',
      heading: 'Delayed Delivery Due to Unforeseen Events',
      blocks: [
        {
          type: 'p',
          text: 'MRL Advanced MEDI Systems shall not be responsible for delivery delays caused by circumstances beyond our reasonable control, including natural disasters, severe weather, transportation disruptions, government restrictions, strikes, supplier delays or other force majeure events.',
        },
      ],
    },
    {
      id: 'contact-us',
      heading: 'Contact Us',
      blocks: [
        {
          type: 'p',
          text: 'For delivery-related questions or support, please contact:',
        },
        { type: 'contact', hours: true },
      ],
    },
  ],
}

const refundPolicy: LegalDocument = {
  slug: 'return-refund-and-cancellation-policy',
  title: 'Return, Refund & Cancellation Policy',
  navLabel: 'Return, Refund & Cancellation',
  metaTitle: 'Return, Refund & Cancellation Policy',
  metaDescription:
    'Return, refund and cancellation terms for medical equipment purchases, rentals, AMC and services from MRL Advanced MEDI Systems.',
  effectiveDate: EFFECTIVE_DATE,
  summary:
    'Return, refund and cancellation terms for our equipment, rentals and services.',
  intro: [
    {
      type: 'p',
      text: 'This Return, Refund & Cancellation Policy applies to purchases, rentals, services and other transactions made with MRL Advanced MEDI Systems, operating under Chamundeshwari Medical Systems Pvt. Ltd.',
    },
    {
      type: 'p',
      text: 'Because our business involves medical equipment, customised requirements, equipment rentals, installation, AMC and technical services, return and refund eligibility may vary depending on the nature of the transaction.',
    },
  ],
  sections: [
    {
      id: 'general-policy',
      heading: 'General Policy',
      blocks: [
        {
          type: 'p',
          text: 'Medical equipment is often supplied according to specific technical, clinical, configuration and installation requirements.',
        },
        {
          type: 'p',
          text: 'Therefore, equipment cannot be returned solely because the customer has changed their mind after an order has been confirmed, particularly where the equipment has been specially sourced, configured, imported, installed, commissioned or used.',
        },
        {
          type: 'p',
          text: 'Each return or refund request will be evaluated based on the applicable quotation, purchase order, invoice, warranty terms and other agreed commercial conditions.',
        },
      ],
    },
    {
      id: 'cancellation-before-order-processing',
      heading: 'Cancellation Before Order Processing',
      blocks: [
        {
          type: 'p',
          text: 'A customer may request cancellation before the order has been processed or equipment has been procured.',
        },
        {
          type: 'p',
          text: 'Cancellation requests should be submitted promptly through email or other official communication channels.',
        },
        {
          type: 'p',
          text: 'If the cancellation is accepted, any eligible refund will be processed after deduction of applicable costs, where applicable.',
        },
      ],
    },
    {
      id: 'cancellation-after-procurement',
      heading: 'Cancellation After Procurement',
      blocks: [
        {
          type: 'p',
          text: 'Once equipment has been specially sourced, procured, configured or dispatched, cancellation may not be possible.',
        },
        {
          type: 'p',
          text: 'Where cancellation is accepted, the customer may be responsible for costs already incurred, including:',
        },
        {
          type: 'ul',
          items: [
            'Procurement costs',
            'Supplier cancellation charges',
            'Transportation costs',
            'Customisation charges',
            'Installation or preparation costs',
            'Taxes or statutory charges that cannot be recovered',
            'Other reasonable expenses incurred for the order',
          ],
        },
      ],
    },
    {
      id: 'cancellation-of-rental-services',
      heading: 'Cancellation of Rental Services',
      blocks: [
        {
          type: 'p',
          text: 'Rental cancellation terms may depend on the rental agreement.',
        },
        {
          type: 'p',
          text: 'If equipment has already been reserved, transported, installed or made available for the customer, cancellation charges may apply.',
        },
        {
          type: 'p',
          text: 'Any security deposit or advance amount will be handled according to the applicable rental agreement.',
        },
      ],
    },
    {
      id: 'return-of-rental-equipment',
      heading: 'Return of Rental Equipment',
      blocks: [
        {
          type: 'p',
          text: 'Rented equipment must be returned at the end of the agreed rental period or earlier where early termination is permitted under the rental agreement.',
        },
        {
          type: 'p',
          text: 'The equipment must be returned in reasonable condition, subject to normal wear and tear.',
        },
        {
          type: 'p',
          text: 'The customer may be responsible for costs arising from:',
        },
        {
          type: 'ul',
          items: [
            'Physical damage',
            'Loss of equipment',
            'Missing accessories',
            'Unauthorised modifications',
            'Improper use',
            'Negligence',
            'Delayed return',
          ],
        },
        {
          type: 'p',
          text: 'Inspection may be carried out after the equipment is returned.',
        },
      ],
    },
    {
      id: 'damaged-or-defective-equipment',
      heading: 'Damaged or Defective Equipment',
      blocks: [
        {
          type: 'p',
          text: 'If equipment is delivered with a manufacturing defect or a verified issue attributable to the supplied equipment, the customer should contact us promptly.',
        },
        {
          type: 'p',
          text: 'Depending on the nature of the issue, we may:',
        },
        {
          type: 'ul',
          items: [
            'Repair the equipment',
            'Replace the affected component',
            'Replace the equipment where applicable',
            'Provide service support',
            'Process another appropriate remedy',
          ],
        },
        {
          type: 'p',
          text: 'The resolution will depend on the equipment, manufacturer warranty, applicable warranty terms and nature of the issue.',
        },
      ],
    },
    {
      id: 'warranty-claims',
      heading: 'Warranty Claims',
      blocks: [
        {
          type: 'p',
          text: 'Where a product is covered by warranty, warranty claims will be handled according to the applicable warranty terms.',
        },
        {
          type: 'p',
          text: 'The website states that a standard one-year warranty may be provided with machines, subject to applicable terms and conditions.',
        },
        { type: 'p', text: 'Warranty may not cover damage caused by:' },
        {
          type: 'ul',
          items: [
            'Misuse',
            'Accidental damage',
            'Improper operation',
            'Negligence',
            'Unauthorised repairs',
            'Unauthorised modification',
            'Electrical faults or voltage fluctuations',
            'Improper installation',
            'Normal wear and tear',
            'Consumable components',
            'Failure to follow manufacturer instructions',
          ],
        },
        {
          type: 'p',
          text: 'The specific warranty applicable to the product will be determined by the quotation, invoice, warranty document or manufacturer warranty.',
        },
      ],
    },
    {
      id: 'refurbished-equipment',
      heading: 'Refurbished Equipment',
      blocks: [
        {
          type: 'p',
          text: 'Refurbished equipment is sold based on its condition, specifications and warranty terms communicated at the time of sale.',
        },
        {
          type: 'p',
          text: 'Returns of refurbished equipment are not automatically accepted simply because the customer changes their mind.',
        },
        {
          type: 'p',
          text: 'Any return or refund request will be evaluated based on the agreed commercial terms and the condition of the equipment.',
        },
      ],
    },
    {
      id: 'amc-services',
      heading: 'AMC Services',
      blocks: [
        {
          type: 'p',
          text: 'Annual Maintenance Contracts are service agreements and are subject to the specific AMC terms agreed with the customer.',
        },
        {
          type: 'p',
          text: 'Cancellation, termination, refund eligibility, service scope, spare parts coverage and other conditions will be governed by the applicable AMC agreement.',
        },
        {
          type: 'p',
          text: 'Where services have already been provided, charges for completed services may not be refundable.',
        },
      ],
    },
    {
      id: 'installation-and-service-charges',
      heading: 'Installation and Service Charges',
      blocks: [
        {
          type: 'p',
          text: 'Installation, commissioning, inspection, repair, calibration, training and other service charges may be non-refundable once the service has been completed or the service team has been deployed.',
        },
        {
          type: 'p',
          text: 'If a service appointment is cancelled before deployment, cancellation charges may apply depending on the circumstances.',
        },
      ],
    },
    {
      id: 'refund-eligibility',
      heading: 'Refund Eligibility',
      blocks: [
        {
          type: 'p',
          text: 'Where a refund is approved, the amount may be subject to deductions for applicable costs already incurred.',
        },
        { type: 'p', text: 'Possible deductions may include:' },
        {
          type: 'ul',
          items: [
            'Procurement costs',
            'Supplier charges',
            'Transportation charges',
            'Installation charges',
            'Service charges',
            'Customisation charges',
            'Payment gateway or transaction charges, where applicable',
            'Taxes or statutory charges that cannot be recovered',
            'Other costs specifically agreed with the customer',
          ],
        },
      ],
    },
    {
      id: 'refund-processing',
      heading: 'Refund Processing',
      blocks: [
        {
          type: 'p',
          text: 'Once a refund is approved, we will initiate the refund through the applicable payment method or process agreed with the customer.',
        },
        {
          type: 'p',
          text: "The time taken for the amount to appear in the customer's account may depend on the payment gateway, bank or financial institution.",
        },
        {
          type: 'p',
          text: 'We are not responsible for delays caused by banks or third-party payment providers after the refund has been initiated.',
        },
      ],
    },
    {
      id: 'how-to-request-a-return-refund-or-cancellation',
      heading: 'How to Request a Return, Refund or Cancellation',
      blocks: [
        { type: 'p', text: 'Customers should contact us with:' },
        {
          type: 'ul',
          items: [
            'Customer name',
            'Organisation name',
            'Order or invoice number, if applicable',
            'Product or service details',
            'Date of purchase or service',
            'Reason for the request',
            'Supporting photographs or documents, where relevant',
          ],
        },
        { type: 'p', text: 'Requests should be sent to:' },
        { type: 'contact-compact' },
      ],
    },
    {
      id: 'return-approval',
      heading: 'Return Approval',
      blocks: [
        {
          type: 'p',
          text: 'No equipment should be returned without prior confirmation from MRL Advanced MEDI Systems.',
        },
        { type: 'p', text: 'Unauthorised returns may not be accepted.' },
        {
          type: 'p',
          text: 'Where a return is approved, we will provide the applicable return instructions.',
        },
        {
          type: 'p',
          text: 'The customer may be responsible for safe packaging and transportation of the equipment unless otherwise agreed.',
        },
      ],
    },
    {
      id: 'non-returnable-situations',
      heading: 'Non-Returnable Situations',
      blocks: [
        { type: 'p', text: 'Returns may not be accepted where:' },
        {
          type: 'ul',
          items: [
            'Equipment has been used or installed, unless covered by an applicable warranty or approved return arrangement',
            'Equipment has been specially sourced or configured',
            'Equipment has been customised for the customer',
            'Equipment has been damaged after delivery',
            'Equipment has been modified without authorisation',
            'Accessories or components are missing',
            'The customer has violated the applicable rental or purchase agreement',
            'The return is requested solely because the customer changed their mind after confirmation',
            'The applicable manufacturer or supplier terms do not permit return',
          ],
        },
      ],
    },
    {
      id: 'exchange-or-replacement',
      heading: 'Exchange or Replacement',
      blocks: [
        {
          type: 'p',
          text: 'Where a product is confirmed to have a defect attributable to the supplied equipment and replacement is considered appropriate, MRL Advanced MEDI Systems may provide a replacement or other suitable remedy, subject to product availability and applicable warranty terms.',
        },
      ],
    },
    {
      id: 'disputes-regarding-returns-or-refunds',
      heading: 'Disputes Regarding Returns or Refunds',
      blocks: [
        {
          type: 'p',
          text: 'If you have a concern regarding a return, refund, cancellation or service issue, please contact our support team first so that we can review and resolve the matter.',
        },
      ],
    },
    {
      id: 'changes-to-this-policy',
      heading: 'Changes to This Policy',
      blocks: [
        {
          type: 'p',
          text: 'MRL Advanced MEDI Systems may update this policy from time to time.',
        },
        {
          type: 'p',
          text: 'Any changes will be published on this page with the revised effective date.',
        },
      ],
    },
    {
      id: 'contact-us',
      heading: 'Contact Us',
      blocks: [{ type: 'contact', hours: true }],
    },
  ],
}

/** Footer, sitemap and cross-links iterate this list in display order. */
export const legalDocuments: LegalDocument[] = [
  privacyPolicy,
  termsAndConditions,
  shippingPolicy,
  refundPolicy,
]

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((doc) => doc.slug === slug)
}
