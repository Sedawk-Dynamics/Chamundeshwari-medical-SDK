// Single source of truth for the "Products & Services" section and the header
// Product dropdown. Both are derived from `equipmentCatalogue` below, so a card
// added here shows up in the section AND in the nav (when `inNav` is true).
//
// Deep model-level listings per category live in `lib/meqube-data.ts`; the
// `catalogueSlug` field points a card at its matching category there.

export type EquipmentGroup = 'icu' | 'nicu' | 'ot' | "ambulance-setup" | "home-care-services" | "refurb-equipments" | 'services' | 'bipap'

export interface EquipmentCard {
  /** Stable id — also used as the card's DOM id (`equipment-<slug>`). */
  slug: string
  /** Headline shown on the card in the Products & Services section. */
  name: string
  /** Shorter label used in the header Product dropdown. */
  navLabel: string
  group: EquipmentGroup
  image: string
  badges: string[]
  desc: string
  highlights: string[]
  /** Matching category slug in lib/meqube-data.ts, when one exists. */
  catalogueSlug?: string
  /** Whether this appears in the header Product dropdown. */
  inNav: boolean
}

export const equipmentGroups: { key: EquipmentGroup | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'icu', label: 'ICU' },
  { key: 'nicu', label: 'NICU' },
  { key: 'ot', label: 'OT' },
  { key: "ambulance-setup", label: "Ambulance Setup" },
  { key: "home-care-services", label: "Home Care Services" },
  { key: "refurb-equipments", label: "Refurb Equipments" },
  { key: 'services', label: 'Services' },
]

/** Fired by the header dropdown so the section can filter + scroll to a card. */
export const EQUIPMENT_FILTER_EVENT = 'equipment:filter'

export interface EquipmentFilterDetail {
  group: EquipmentGroup
  slug: string
}

export const equipmentCatalogue: EquipmentCard[] = [
  /* ── ICU ────────────────────────────────────────────────────────────── */
  {
    slug: 'patient-monitor',
    name: 'Multi-Parameter Patient Monitor',
    navLabel: 'Patient Monitor',
    group: 'icu',
    image: '/images/patient-monitor.jpg',
    badges: ['Sale', 'Rental', 'AMC'],
    desc: 'Continuous bedside monitoring of ECG, SpO2, NIBP, Temperature, EtCO2 and more on a high-resolution colour display.',
    highlights: ['12-lead ECG capability', 'Wireless connectivity', 'Central station compatible'],
    catalogueSlug: 'patient-monitor',
    inNav: true,
  },
  {
    slug: 'icu-ventilator',
    name: 'ICU Mechanical Ventilator',
    navLabel: 'Ventilator',
    group: 'icu',
    image: '/images/ventilator.png',
    badges: ['Sale', 'Rental'],
    desc: 'Advanced volume and pressure-controlled ventilation with lung-protective algorithms for adult and paediatric patients.',
    highlights: ['High-flow NIV mode', 'Touch-screen interface', 'Built-in nebuliser'],
    catalogueSlug: 'ventilator',
    inNav: true,
  },
  {
    slug: 'defibrillator',
    name: 'Defibrillator / Cardiac Monitor',
    navLabel: 'Defibrillator',
    group: 'icu',
    image: '/images/defibrillator.png',
    badges: ['Sale', 'Rental'],
    desc: 'High-energy biphasic defibrillator with AED mode, pacing, 12-lead ECG and real-time CPR guidance.',
    highlights: ['AED guidance mode', 'Pacemaker capability', 'Data logging & export'],
    catalogueSlug: 'defibrillator',
    inNav: true,
  },
  {
    slug: 'infusion-pump',
    name: 'Smart Infusion Pump System',
    navLabel: 'Infusion Pump',
    group: 'icu',
    image: '/images/infusion-pump.png',
    badges: ['Sale', 'Rental', 'AMC'],
    desc: 'Syringe and volumetric infusion pumps with drug libraries, dose error reduction and wireless fleet management.',
    highlights: ['Drug-error reduction', 'Occlusion alarm', 'RFID barcode scan'],
    inNav: true,
  },
  {
    slug: 'bipap',
    name: 'BiPAP / Non-Invasive Ventilator',
    navLabel: 'BiPAP',
    group: 'icu',
    image: '/images/meqube/products/Resmed-Stellar-150.jpg',
    badges: ['Sale', 'Rental'],
    desc: 'Non-invasive bilevel ventilation with invasive capability for respiratory insufficiency, COPD and sleep-disordered breathing.',
    highlights: ['Bilevel & CPAP modes', 'Optional heated humidifier', 'Integrated SpO2 monitoring'],
    catalogueSlug: 'bipap',
    inNav: true,
  },
  {
    slug: 'portable-ventilator',
    name: 'Portable / Transport Ventilator',
    navLabel: 'Portable Ventilator',
    group: 'icu',
    image: '/images/meqube/products/CAREFUSION-LTV-1000.jpg',
    badges: ['Sale', 'Rental'],
    desc: 'Compact volume and pressure ventilation for ambulance, ward transfer and emergency transport use.',
    highlights: ['Invasive & non-invasive modes', 'Internal battery operation', 'Assist-control & SIMV'],
    catalogueSlug: 'portable-ventilator',
    inNav: true,
  },
  {
    slug: 'ecg-machine',
    name: 'ECG Machine',
    navLabel: 'ECG Machine',
    group: 'icu',
    image: '/images/meqube/products/GE-AC-M5500-HD-ECG-System.jpg',
    badges: ['Sale', 'AMC'],
    desc: 'Diagnostic 12-lead electrocardiography with advanced analysis algorithms and digital record export.',
    highlights: ['12-lead acquisition', 'Automated interpretation', 'Digital record export'],
    catalogueSlug: 'ecg-machine',
    inNav: true,
  },
  {
    slug: 'pulse-oximeter',
    name: 'Pulse Oximeter',
    navLabel: 'Pulse Oximeter',
    group: 'icu',
    image: '/images/meqube/products/MASIMO-RADICAL-7.jpg',
    badges: ['Sale', 'Rental'],
    desc: 'Non-invasive monitoring of arterial oxygen saturation and pulse rate with motion-tolerant signal processing.',
    highlights: ['Motion-tolerant SpO2', 'Handheld & bedside use', 'Trend memory & alarms'],
    catalogueSlug: 'pulse-oximeter',
    inNav: true,
  },

  /* ── NICU ───────────────────────────────────────────────────────────── */
  {
    slug: 'neonatal-incubator',
    name: 'Neonatal Incubator',
    navLabel: 'Infant Incubator',
    group: 'nicu',
    image: '/images/nicu-equipment.png',
    badges: ['Sale', 'Rental'],
    desc: 'Closed servo-controlled incubator maintaining precise temperature and humidity for premature and low-birth-weight neonates.',
    highlights: ['Servo control ±0.1°C', 'Phototherapy compatible', 'Integrated SpO2 probe'],
    catalogueSlug: 'infant-incubator',
    inNav: true,
  },
  {
    slug: 'neonatal-ventilator',
    name: 'Neonatal Ventilator',
    navLabel: 'Neonatal Ventilator',
    group: 'nicu',
    image: '/images/ventilator.png',
    badges: ['Sale', 'Rental'],
    desc: 'High-frequency oscillatory and conventional ventilation for the most vulnerable neonatal and paediatric patients.',
    highlights: ['Volume guarantee mode', 'HFO capability', 'Real-time graphics'],
    inNav: true,
  },
  {
    slug: 'fetal-monitor',
    name: 'Fetal Monitor',
    navLabel: 'Fetal Monitor',
    group: 'nicu',
    image: '/images/meqube/products/Philips-Avalon-FM20.jpg',
    badges: ['Sale', 'Rental'],
    desc: 'Antepartum and intrapartum monitoring of maternal vitals alongside single or multiple fetal heart rates.',
    highlights: ['Twin & triplet FHR support', 'Maternal NIBP & SpO2', 'Toco and CTG tracing'],
    catalogueSlug: 'fetal-monitor',
    inNav: true,
  },
  {
    slug: 'drager-babylog-8000-ventilator',
    name: 'Drager Babylog 8000 Ventilator',
    navLabel: 'Babylog 8000 Ventilator',
    group: 'nicu',
    image: '/images/meqube/products/DRAGER-BABYLOG-8000.jpg',
    badges: ['Sale', 'Rental', 'AMC'],
    desc: 'Purpose-built neonatal ventilator delivering gentle, lung-protective ventilation for premature and critically ill newborns.',
    highlights: ['Volume guarantee & HFO', 'Ultra-low tidal volumes', 'Continuous flow sensing'],
    inNav: true,
  },
  {
    slug: 'baby-warmer-phototherapy',
    name: 'Baby Warmer & Phototherapy Unit',
    navLabel: 'Baby Warmer & Phototherapy',
    group: 'nicu',
    image: '/images/meqube/products/BABY-WARMER-PHOTOTHERAPY.jpg',
    badges: ['Sale', 'Rental'],
    desc: 'Combined radiant warmer and overhead phototherapy trolley that keeps neonates thermally stable while treating jaundice.',
    highlights: ['Servo & manual heater control', 'High-intensity LED phototherapy', 'Mobile trolley with storage'],
    inNav: true,
  },
  {
    slug: 'bubble-cpap',
    name: 'Bubble CPAP System',
    navLabel: 'Bubble CPAP',
    group: 'nicu',
    image: '/images/meqube/products/BUBBLE-CPAP-FISHER-PAYKEL.jpg',
    badges: ['Sale', 'Rental'],
    desc: 'Non-invasive bubble CPAP system providing gentle, continuous distending pressure for neonates with respiratory distress.',
    highlights: ['Heated humidification', 'Non-invasive & invasive modes', 'Simple bubble-pressure control'],
    inNav: true,
  },
  {
    slug: 'fetal-doppler',
    name: 'Fetal Doppler',
    navLabel: 'Fetal Doppler',
    group: 'nicu',
    image: '/images/meqube/products/FETAL-DOPPLER-ACCUSURE.jpg',
    badges: ['Sale'],
    desc: 'Handheld pocket Doppler for quick, reliable detection and monitoring of the fetal heart rate in clinic or at the bedside.',
    highlights: ['Instant digital heart-rate readout', 'Built-in speaker', 'Compact & battery powered'],
    inNav: true,
  },

  /* ── OT ─────────────────────────────────────────────────────────────── */
  {
    slug: 'anaesthesia-workstation',
    name: 'Anaesthesia Workstation',
    navLabel: 'Anesthesia Machine',
    group: 'ot',
    image: '/images/meqube/products/ANESTHESIA-MACHINE1.jpg',
    badges: ['Sale', 'AMC'],
    desc: 'Complete anaesthesia delivery system with integrated ventilator, vaporisers, gas monitoring and electronic records.',
    highlights: ['Fresh gas decoupling', 'Agent identification', 'Automatic leak test'],
    catalogueSlug: 'anesthesia-machine',
    inNav: true,
  },
  {
    slug: 'operating-table',
    name: 'Surgical Operating Table',
    navLabel: 'Surgical Operating Table',
    group: 'ot',
    image: '/images/ot-equipment.png',
    badges: ['Sale'],
    desc: 'Electro-hydraulic modular operating table with carbon-fibre tabletop, multiple procedure positioning and radiolucency.',
    highlights: ['360° rotation', 'Carbon-fibre X-ray top', 'Memory positioning'],
    inNav: true,
  },
  {
    slug: 'electro-surgical-unit',
    name: 'Electro Surgical Unit',
    navLabel: 'Electro Surgical Unit',
    group: 'ot',
    image: '/images/meqube/products/Covidien-Valleylab-Force-FX-C.jpg',
    badges: ['Sale', 'AMC'],
    desc: 'High-power digital electrosurgical generator delivering a consistent cut and coagulation effect across tissue types.',
    highlights: ['Monopolar & bipolar output', 'Tissue-response sensing', 'Return-electrode monitoring'],
    catalogueSlug: 'electro-surgical-unit',
    inNav: true,
  },
  {
    slug: 'laproscopy-unit',
    name: 'Laparoscopy / Endoscopy Unit',
    navLabel: 'Laproscopy Unit',
    group: 'ot',
    image: '/images/meqube/products/Storz-Image-1-Hub-HD.jpg',
    badges: ['Sale', 'AMC'],
    desc: 'Full-HD imaging towers with camera control unit, light source and monitor for minimal-access surgery.',
    highlights: ['1920 x 1080 HD imaging', 'Complete tower system', 'Multi-specialty optics'],
    catalogueSlug: 'laproscopy-unit',
    inNav: true,
  },
  {
    slug: 'neuro-surgery',
    name: 'Neuro Surgery Systems',
    navLabel: 'Neuro Surgery',
    group: 'ot',
    image: '/images/meqube/products/NEURO-SURGERY.jpg',
    badges: ['Sale'],
    desc: 'Ultrasonic surgical aspiration systems for precise tissue fragmentation and removal in neurosurgical procedures.',
    highlights: ['Ultrasonic aspiration', 'Tissue-select precision', 'Integrated irrigation'],
    catalogueSlug: 'neuro-surgery',
    inNav: true,
  },
  {
    slug: 'cardio-thoracic-equipments',
    name: 'Cardio Thoracic Equipments',
    navLabel: 'Cardio Thoracic Equipments',
    group: 'ot',
    image: '/images/meqube/products/Terumo-Sarns-8000-heart-lung-machine.jpg',
    badges: ['Sale', 'AMC'],
    desc: 'Heart-lung machines, centrifugal blood pumps, IABP consoles and heater-coolers for cardiac and thoracic theatres.',
    highlights: ['Modular perfusion systems', 'Centrifugal blood pumps', 'IABP & heater-cooler units'],
    catalogueSlug: 'cardio-thoracic-equipments',
    inNav: true,
  },
  {
    slug: 'injector',
    name: 'Contrast Media Injector',
    navLabel: 'Injector',
    group: 'ot',
    image: '/images/meqube/products/Medrad-Mark-V.jpg',
    badges: ['Sale'],
    desc: 'Angiographic injection systems that deliver contrast media at programmed pressure and flow rates.',
    highlights: ['Programmable flow rate', 'Angiographic contrast delivery', 'Pressure-limited injection'],
    catalogueSlug: 'injector',
    inNav: true,
  },

  /* ── Ambulance Setup ───────────────────────────────────────────────────────── */
  {
    slug: 'ambulance',
    name: 'Ambulance Setup',
    navLabel: 'Ambulance',
    group: 'ambulance-setup',
    image: '/images/ambulance.jpg',
    badges: ['Sale', 'Rental'],
    desc: 'Fully fitted ambulances for critical-care and neonatal transfers — equipped with transport incubator, multi-parameter monitor, oxygen, suction and stretcher systems.',
    highlights: [
      'Neonatal transport incubator',
      'Onboard oxygen & suction',
      'Stretcher & spine board',
    ],
    inNav: false,
  },

  /* ── Home Care Services ───────────────────────────────────────────────────────── */
  {
    slug: 'home-care',
    name: 'Home Care Services',
    navLabel: 'Home Care',
    group: 'home-care-services',
    // PLACEHOLDER IMAGE — swap for a real home-care photo when available.
    image: '/images/hero-icu.png',
    badges: ['Sale', 'Rental'],
    desc: 'Hospital-grade equipment set up in the patient’s own home — oxygen concentrators, BiPAP/CPAP units, hospital beds and monitors, delivered, installed and serviced.',
    highlights: [
      'Delivery & home installation',
      'Oxygen, BiPAP & hospital beds',
      'On-call service support',
    ],
    inNav: false,
  },

  /* ── Refurb Equipments ───────────────────────────────────────────────────────── */
  {
    slug: "ge-engstrom-care-station",
    name: "GE Engstrom Care Station",
    navLabel: "Infant Incubator",
    group: "refurb-equipments",
    image: "/images/refurb-1.jpeg",
    badges: ["Sale", "Rental"],
    desc: "Closed servo-controlled incubator maintaining precise temperature and humidity for premature and low-birth-weight neonates.",
    highlights: [
      "Servo control ±0.1°C",
      "Phototherapy compatible",
      "Integrated SpO2 probe",
    ],
    catalogueSlug: "infant-incubator",
    inNav: true,
  },
  {
    slug: "drager-baby-log-8000",
    name: "Drager baby log 8000",
    navLabel: "Infant Incubator",
    group: "refurb-equipments",
    image: "/images/refurb-2.jpeg",
    badges: ["Sale", "Rental"],
    desc: "Closed servo-controlled incubator maintaining precise temperature and humidity for premature and low-birth-weight neonates.",
    highlights: [
      "Servo control ±0.1°C",
      "Phototherapy compatible",
      "Integrated SpO2 probe",
    ],
    catalogueSlug: "infant-incubator",
    inNav: true,
  },
  {
    slug: "anesthesia-workstation",
    name: "Anesthesia workstation",
    navLabel: "Infant Incubator",
    group: "refurb-equipments",
    image: "/images/refurb-3.jpeg",
    badges: ["Sale", "Rental"],
    desc: "Closed servo-controlled incubator maintaining precise temperature and humidity for premature and low-birth-weight neonates.",
    highlights: [
      "Servo control ±0.1°C",
      "Phototherapy compatible",
      "Integrated SpO2 probe",
    ],
    catalogueSlug: "infant-incubator",
    inNav: true,
  },
  {
    slug: "branded-ICU-refurb-ventilators",
    name: "Branded ICU Refurb ventilators",
    navLabel: "Infant Incubator",
    group: "refurb-equipments",
    image: "/images/refurb-4.jpeg",
    badges: ["Sale", "Rental"],
    desc: "Closed servo-controlled incubator maintaining precise temperature and humidity for premature and low-birth-weight neonates.",
    highlights: [
      "Servo control ±0.1°C",
      "Phototherapy compatible",
      "Integrated SpO2 probe",
    ],
    catalogueSlug: "infant-incubator",
    inNav: true,
  },
  {
    slug: "neonatal-incubator",
    name: "Neonatal Incubator",
    navLabel: "Infant Incubator",
    group: "refurb-equipments",
    image: "/images/refurb-5.jpeg",
    badges: ["Sale", "Rental"],
    desc: "Closed servo-controlled incubator maintaining precise temperature and humidity for premature and low-birth-weight neonates.",
    highlights: [
      "Servo control ±0.1°C",
      "Phototherapy compatible",
      "Integrated SpO2 probe",
    ],
    catalogueSlug: "infant-incubator",
    inNav: true,
  },
  {
    slug: "neonatal-incubator",
    name: "Neonatal Incubator",
    navLabel: "Infant Incubator",
    group: "refurb-equipments",
    image: "/images/refurb-6.jpeg",
    badges: ["Sale", "Rental"],
    desc: "Closed servo-controlled incubator maintaining precise temperature and humidity for premature and low-birth-weight neonates.",
    highlights: [
      "Servo control ±0.1°C",
      "Phototherapy compatible",
      "Integrated SpO2 probe",
    ],
    catalogueSlug: "infant-incubator",
    inNav: true,
  },

  /* ── Services ───────────────────────────────────────────────────────── */
  {
    slug: 'biomedical-service',
    name: 'Biomedical Equipment Service',
    navLabel: 'Biomedical Service',
    group: 'services',
    image: '/images/about-team.png',
    badges: ['AMC', 'Repair'],
    desc: 'Comprehensive Annual Maintenance Contracts and on-call repair services by factory-trained biomedical engineers.',
    highlights: ['Preventive maintenance', 'OEM spare parts', 'Calibration certificates'],
    inNav: false,
  },
  {
    slug: 'rental-programme',
    name: 'Equipment Rental Programme',
    navLabel: 'Equipment Rental',
    group: 'services',
    image: '/images/hero-icu.png',
    badges: ['Rental'],
    desc: 'Flexible short- and long-term rental of critical-care equipment — ideal for capacity expansion or trial before purchase.',
    highlights: ['Daily / monthly plans', 'Delivery & installation', 'Swap guarantee'],
    inNav: false,
  },

  /* ── BiPAP (shown under "All" only — no dedicated tab) ─────────────── */
  {
    slug: 'bmc-bipap',
    name: 'BMC BiPAP',
    navLabel: 'BMC BiPAP',
    group: 'bipap',
    image: '/images/meqube/products/Resmed-Stellar-100.jpg',
    badges: ['Sale'],
    desc: 'Bi-level positive airway pressure therapy device for non-invasive respiratory support at home or in hospital.',
    highlights: ['Dual pressure support', 'Compact & portable', 'Comfort breathing modes'],
    inNav: false,
  },
  {
    slug: 'philips-bipap',
    name: 'Philips BiPAP',
    navLabel: 'Philips BiPAP',
    group: 'bipap',
    image: '/images/meqube/products/PHILIPS-RESPRONICS-SYSTEM-ONE.jpg',
    badges: ['Sale'],
    desc: 'Philips Respironics bi-level therapy system delivering reliable non-invasive ventilatory support with adaptive comfort features.',
    highlights: ['Auto-adjusting pressure', 'Integrated humidification', 'Quiet operation'],
    inNav: false,
  },
]

export interface NavProductLink {
  label: string
  slug: string
  group: EquipmentGroup
  href: string
}

/**
 * Header Product dropdown entries, derived from the catalogue and sorted
 * alphabetically. Every entry resolves to a card in the section.
 */
export const navProductLinks: NavProductLink[] = equipmentCatalogue
  .filter((item) => item.inNav)
  .map((item) => ({
    label: item.navLabel,
    slug: item.slug,
    group: item.group,
    href: '#equipment',
  }))
  .sort((a, b) => a.label.localeCompare(b.label))
