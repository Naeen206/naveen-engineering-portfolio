// Personal, Academic, Experience, Skills & Project Data
// Centralized configuration for easy customization and maintenance

const PORTFOLIO_DATA = {
  personal: {
    name: "Naveen Kumar P",
    title: "Electronics and Communication Engineering Student",
    tagline: "Building practical solutions at the intersection of embedded systems, IoT, electronics, and automotive technology.",
    subtagline: "Passionate about hands-on hardware-software interfacing, microcontrollers, and continuous engineering learning, actively seeking internship and graduate placement opportunities.",
    college: "SIMATS Engineering",
    academicYear: "Third Year",
    graduationYear: "2028",
    cgpa: "8.4 / 10",
    location: "Chennai, Tamil Nadu, India",
    email: "naveenkumar25102006@gmail.com",
    github: "https://github.com/Naeen206",
    linkedin: "https://www.linkedin.com/in/n\u1d00\u1d20\u1d07\u1d07\u0274-k\u1d1c\u1d0d\u1d00\u0280-5120a9373", // Updated with provided profile
    linkedinIsPlaceholder: false, // Set to true if a placeholder badge is needed
    careerInterests: [
      "Embedded Systems",
      "Internet of Things (IoT)",
      "Electronics",
      "VLSI",
      "Automotive Electronics"
    ]
  },

  about: {
    summary: [
      "I am a third-year Electronics and Communication Engineering undergraduate at SIMATS Engineering, Chennai, maintaining an academic CGPA of 8.4/10. My core engineering interests lie in embedded systems, IoT, digital design (VLSI), and automotive electronics.",
      "During my three-month industrial trainee internship at HL Mando, I gained valuable hands-on exposure to automotive manufacturing by assisting on the Power Pack Assembly line and participating in servo motor assembly for automotive steering systems.",
      "I actively translate theoretical concepts into physical hardware projects, including developing a tested Smart Energy Audit System utilizing an ESP32 microcontroller, microwave radar sensing, and precision electrical sensors. I am currently advancing my engineering foundations through professional Embedded Systems and IoT training with HCLTech."
    ],
    highlights: [
      { label: "Degree", value: "B.E. in Electronics & Communication" },
      { label: "Institution", value: "SIMATS Engineering, Chennai" },
      { label: "Current Status", value: "Third Year (Graduation: 2028)" },
      { label: "Academic Standing", value: "CGPA: 8.4 / 10" },
      { label: "Industry Exposure", value: "HL Mando (Automotive Steering)" },
      { label: "Professional Training", value: "HCLTech (Embedded & IoT)" }
    ]
  },

  skills: [
    {
      category: "Programming & Embedded Development",
      icon: "code",
      items: [
        { name: "C", type: "Core Language" },
        { name: "Embedded C", type: "Microcontroller Firmware" },
        { name: "ESP32", type: "SoC & Wi-Fi/BLE" },
        { name: "Arduino IDE", type: "Embedded Prototyping" }
      ]
    },
    {
      category: "Digital Design & Hardware Description",
      icon: "cpu",
      items: [
        { name: "Verilog", type: "Hardware Description Language (HDL)" }
      ]
    },
    {
      category: "Engineering & Simulation Tools",
      icon: "activity",
      items: [
        { name: "MATLAB", type: "Numerical Analysis & Modeling" },
        { name: "Proteus", type: "Circuit Schematic & Simulation" }
      ]
    },
    {
      category: "Development & Version Control Tools",
      icon: "git-branch",
      items: [
        { name: "Git", type: "Version Control" },
        { name: "GitHub", type: "Repository & Collaboration" }
      ]
    },
    {
      category: "Core Areas of Interest",
      icon: "compass",
      items: [
        { name: "Embedded Systems", type: "Focus Domain" },
        { name: "Internet of Things (IoT)", type: "Focus Domain" },
        { name: "VLSI", type: "Focus Domain" },
        { name: "Electronics", type: "Focus Domain" },
        { name: "Automotive Electronics", type: "Focus Domain" }
      ]
    }
  ],

  experience: [
    {
      role: "Short-Term Trainee",
      company: "HL Mando",
      duration: "March 2026 – May 2026",
      location: "Chennai, Tamil Nadu, India",
      line: "Power Pack Assembly Line",
      badge: "Automotive Manufacturing",
      summary: "Completed a three-month short-term trainee internship at HL Mando, assisting with assembly-line activities and participating in servo motor assembly for automotive steering systems.",
      responsibilities: [
        "Assisted with assembly-line activities on the Power Pack Assembly line.",
        "Participated in servo motor assembly for automotive steering applications.",
        "Gained practical exposure to a manufacturing and assembly-line environment."
      ],
      technologies: ["Power Pack Assembly", "Servo Motors", "Automotive Steering Systems", "Assembly Line Workflow"]
    }
  ],

  projects: [
    {
      id: "smart-energy-audit",
      title: "Smart Energy Audit System Using Microwave Occupancy Detection",
      subtitle: "Occupancy-Aware Electrical Monitoring & Test Load Automation",
      status: "Tested & Verified Prototype",
      statusType: "success",
      badge: "Featured Embedded Project",
      overview: "An ESP32-based engineering project combining microwave occupancy detection with electrical monitoring to explore occupancy-aware energy management.",
      description: "Designed and tested an automated energy auditing setup that correlates room human presence with active load power consumption. The system uses Doppler microwave sensing for penetration through non-metallic enclosures and uninterrupted presence detection, coupled with voltage and current transducers monitored by an ESP32 controller to actuate a controlled test load via an isolated relay module.",
      components: [
        { name: "ESP32 Development Board", role: "Central Microcontroller (ADC, Logic & Control)" },
        { name: "RCWL-0516 Microwave Sensor", role: "Doppler Radar Occupancy Detection (360° sensing)" },
        { name: "ACS712 Current Sensor", role: "Hall-Effect AC/DC Current Monitoring" },
        { name: "ZMPT101B Voltage Sensor", role: "High-Precision AC Voltage Transformer" },
        { name: "5V Relay Module", role: "Optocoupler-Isolated Test Load Switching" },
        { name: "LED Bulb Test Load", role: "AC Electrical Appliance Emulation" }
      ],
      systemFlow: [
        { step: "1", title: "Occupancy Detection", desc: "RCWL-0516 Doppler radar detects physical motion/presence independent of temperature." },
        { step: "2", title: "Microcontroller Processing", desc: "ESP32 reads sensor signals, computes occupancy state, and samples AC waveforms." },
        { step: "3", title: "Electrical Monitoring", desc: "ACS712 current and ZMPT101B voltage modules measure active circuit parameters." },
        { step: "4", title: "Automated Actuation", desc: "ESP32 triggers relay module to energize or cut power to the LED bulb test load." }
      ],
      notes: "System flow connections represent the validated conceptual hardware integration tested on benchtop prototypes.",
      github: "https://github.com/Naeen206"
    }
  ],

  certifications: [
    {
      title: "Embedded Systems and IoT",
      provider: "HCLTech",
      status: "Currently Pursuing",
      statusType: "in-progress",
      badge: "Industry Training Program",
      description: "Comprehensive professional technical training curriculum covering microcontrollers, peripheral communication interfaces (UART, SPI, I2C), embedded C firmware, sensor interfacing, and IoT architecture.",
      credentialUrl: null, // Add verifiable URL when issued
      credentialNote: "Training in progress. Formal credential verification details will be updated upon completion."
    }
  ],

  resume: {
    filePath: "assets/docs/Naveen_Kumar_P_Resume.pdf",
    fileName: "Naveen_Kumar_P_Resume.pdf",
    lastUpdated: "Academic Year 2025–2026"
  }
};
