export const SOLUTION_AREAS = [
  {
    id: 'error-detection',
    number: '01',
    title: 'Error Detection',
    navLabel: 'Error Detection',
    subtitle: 'Automated CAD & Drawing Verification',
    headline: 'Catch non-manufacturable geometry before raw materials are cut.',
    oneSentenceDesc: 'Compare engineering drawings with CAD files and identify potential discrepancies.',
    description:
      'Deterministic geometric checks and neural feature extractors parse 2D DXF/DWG contours and 3D STEP models. We isolate open loops, unmachinable internal radii, missing datum callouts, and conflicting tolerances before quotation or nesting.',
    metrics: [
      { label: 'Unclosed contours caught', value: '100%' },
      { label: 'Engineering review time', value: '-84%' },
      { label: 'Pre-production scrap', value: '-32%' }
    ],
    features: [
      {
        name: 'Open Loop & Overlap Detection',
        desc: 'Identifies unclosed polyline vertices, duplicate micro-segments, and inverted normals that crash nesting & CAM kernels.'
      },
      {
        name: 'Tool Access & Corner Radii',
        desc: 'Flags sharp internal corners requiring unavailable CNC endmills or impossible EDM burn depths.'
      },
      {
        name: 'Drawing vs Model Reconciliation',
        desc: 'Extracts title-block tolerances, revision discrepancies, and datum references to ensure 2D and 3D align.'
      },
      {
        name: 'CAM Kernel Readiness Check',
        desc: 'Validates surface watertightness, manifold edges, and surface normals for automated toolpath generators.'
      }
    ],
    visualType: 'cad-error',
    caseStudy: {
      client: 'Tier-1 Sheet Metal & Stamping Supplier',
      problem: 'Received 400+ customer DXF drawings weekly with unclosed curves and zero-radius internal slots, requiring 4 junior engineers doing manual repair.',
      result: 'Automated 96% of drawing validation and auto-healing in 1.4s per file, cutting quote turnaround from 48h to under 15 minutes.'
    }
  },
  {
    id: 'quoting',
    number: '02',
    title: 'Quoting',
    navLabel: 'Quoting',
    subtitle: 'Drawing Feature Extraction & Cost Engine',
    headline: 'Generate precise manufacturing estimates directly from technical data.',
    oneSentenceDesc: 'Extract manufacturing-relevant information from engineering drawings to support faster quoting.',
    description:
      'Extract bounding stock, cut lengths, bend lines, hole matrices, surface finishes, and specific alloy grades automatically. Feed extracted attributes directly into live ERP machine hourly rates and material coil index pricing.',
    metrics: [
      { label: 'Drawing parsing speed', value: '1.2s' },
      { label: 'Quote turnaround', value: '< 10 min' },
      { label: 'Estimating variance', value: '< 2.4%' }
    ],
    features: [
      {
        name: 'Automatic Feature Extraction',
        desc: 'Extracts pierce counts, total perimeter cut linear meters, hole diameters, and countersinks from 2D and 3D files.'
      },
      {
        name: 'Sheet Metal & Bending Calculus',
        desc: 'Calculates developed flat patterns, bend deduction k-factors, and press brake stroke cycle times.'
      },
      {
        name: 'Material & Nest Yield Estimation',
        desc: 'Runs instantaneous preliminary rectangular and true-shape nesting algorithms to predict actual scrap percentage.'
      },
      {
        name: 'ERP & Machine Rate Mapping',
        desc: 'Connects directly with machine hourly rates (fiber laser, waterjet, milling, press brake) to produce line-item cost breakdowns.'
      }
    ],
    visualType: 'quote-breakdown',
    caseStudy: {
      client: 'Custom Heavy Fabrication & Machining Plant',
      problem: 'Estimators spent 35–50 minutes per RFQ manually tracing blueprints and calculating cut lengths, resulting in delayed bids and lost opportunities.',
      result: 'Standardized quote generation down to 4 minutes per assembly with 99.1% cost accuracy compared to final shop-floor job logs.'
    }
  },
  {
    id: 'ai-agents',
    number: '03',
    title: 'AI Agents',
    navLabel: 'AI Agents',
    subtitle: 'Autonomous Workflow & Engineering Hand-offs',
    headline: 'Agents that triage RFQ mailboxes, route BOMs, and prep CAM jobs.',
    oneSentenceDesc: 'Automate repetitive manufacturing workflows, from order intake to operational checks.',
    description:
      'Purpose-built industrial agents with deterministic tool execution. They monitor inbound engineering email threads, download customer archives, inspect attachments, generate structured BOM entries, and notify engineers only on high-severity flags.',
    metrics: [
      { label: 'RFQ inbox triage', value: 'Autonomous' },
      { label: 'BOM generation time', value: '18s' },
      { label: 'Human intervention needed', value: '14%' }
    ],
    features: [
      {
        name: 'RFQ Mailbox Ingestion',
        desc: 'Extracts revisions, purchase orders, drawings, and customer requirements from email text, PDFs, and ZIP archives.'
      },
      {
        name: 'Multi-Level BOM Assembly Parser',
        desc: 'Deconstructs STEP assemblies into child part hierarchies, categorizing manufactured vs. off-the-shelf fasteners.'
      },
      {
        name: 'CAM & Laser Pre-flight Runner',
        desc: 'Converts CAD files into clean DXF layers, applies default lead-in rules, and queues parts to scheduled cut runs.'
      },
      {
        name: 'Deterministic Audit Log',
        desc: 'Every file edit and cost decision is stamped with step-by-step mathematical reasoning and full operator override capability.'
      }
    ],
    visualType: 'agent-pipeline',
    caseStudy: {
      client: 'Contract Electronics & Enclosure Manufacturer',
      problem: 'Engineering teams spent half their week manually unpacking ZIP files, sorting drawings, and cross-checking PDF BOMs against ERP entries.',
      result: 'Autonomous agents now ingest, classify, and populate 90% of incoming jobs straight into the ERP queue with zero manual data entry.'
    }
  },
  {
    id: 'custom-solutions',
    number: '04',
    title: 'Custom Solutions',
    navLabel: 'Custom Solutions',
    subtitle: 'Specialized Industrial AI & Machine Vision',
    headline: 'Tailored algorithms built for your exact proprietary manufacturing process.',
    oneSentenceDesc: 'Build AI-powered tools tailored to specific manufacturing processes and business needs.',
    description:
      'When off-the-shelf software fails your proprietary tooling, metallurgy, or quality inspection standards, AAI Labs designs custom mathematical models and computer vision pipelines deployed on-premise or in your private cloud.',
    metrics: [
      { label: 'Proprietary tooling models', value: '100% Custom' },
      { label: 'Deployment architecture', value: 'Air-gapped' },
      { label: 'Data privacy', value: '100% Owned' }
    ],
    features: [
      {
        name: 'On-Premise & Air-Gapped Deployment',
        desc: 'Full model inference on internal hardware without sending proprietary IP or aerospace drawings outside your firewall.'
      },
      {
        name: 'High-Precision Automated Optical Inspection',
        desc: 'Sub-millimeter weld seam, surface scratch, and dimensional verification using specialized industrial camera feeds.'
      },
      {
        name: 'Legacy ERP & CAM Integration',
        desc: 'Custom API middleware connecting older machine controllers, AS400 databases, and modern engineering software.'
      },
      {
        name: 'Custom Heuristic Optimization',
        desc: 'Specialized nesting, cutting path minimization, and coil scheduling algorithms tailored to unusual constraint sets.'
      }
    ],
    visualType: 'custom-architecture',
    caseStudy: {
      client: 'Precision Aerospace Component Manufacturer',
      problem: 'Strict defence security compliance prohibited external cloud services, while high-tolerance parts required custom defect classification.',
      result: 'Delivered an on-premise vision and CAD validation appliance operating inside their secure VLAN with sub-millimeter precision.'
    }
  }
];
