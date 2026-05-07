export const SITE = {
  name: 'MUZA GROW',
  tagline: 'Infraestructura de Crecimiento con IA & Automatización',
  description: 'Diseñamos infraestructura de crecimiento para corporativos en LATAM. Service Design + Automatización IA para que tu equipo haga lo que importa.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.muzagrow.com',
  email: 'hola@muzagrow.com',
  location: 'Ciudad de México, LATAM',
  calendlyUrl: import.meta.env.PUBLIC_CALENDLY_URL || 'https://calendly.com/moises-muzagrow',
  whatsapp: '',
  linkedin: 'https://mx.linkedin.com/company/muza-desarollo',
};

export const NAV_LINKS = [
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/nosotros' },
];

export const SERVICES = [
  {
    num: '01',
    title: 'Growth Architecture',
    titleEm: 'Discovery',
    description: 'Hablamos directo. Entendemos tu operación. Identificamos dónde se pierde tiempo, dinero y eficiencia. Resultado: strategy document + roadmap listo para build.',
    deliverable: 'Strategy document + execution roadmap',
    forWho: 'Empresas que no saben por dónde empezar',
    tags: ['Diagnóstico', 'Roadmap', 'Estrategia'],
  },
  {
    num: '02',
    title: 'Automation Design',
    titleEm: '& Build',
    description: 'Diseñamos los workflows que resuelven tu problema. Construimos con n8n, IA agents, integraciones. Desplegamos y testamos. Resultado: sistema automático funcionando.',
    deliverable: 'Working automated system',
    forWho: 'Empresas que ya saben qué quieren',
    tags: ['n8n', 'Agentes IA', 'Integraciones'],
  },
  {
    num: '03',
    title: 'Ongoing',
    titleEm: 'Optimization',
    description: 'Lanzar no es el final. Monitoreamos, iteramos, mejoramos basado en resultados reales. Ajustamos conforme tu negocio crece. Resultado: métricas de ROI comprobadas.',
    deliverable: 'Continuous improvement + metrics',
    forWho: 'Empresas que lanzaron y quieren mejorar',
    tags: ['Monitoreo', 'Métricas', 'ROI'],
  },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Descubrimiento',
    titleEm: 'del problema',
    description: 'Conversación directa con Moises. Sin formularios infinitos. Entendemos tu operación real, identificamos cuellos de botella y oportunidades.',
    items: ['Auditoría de procesos', 'Identificación de oportunidades', 'Propuesta de solución'],
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'Diseño de',
    titleEm: 'solución',
    description: 'Creamos el strategy document y arquitectura de la solución. Roadmap claro con timelines y entregables definidos antes de escribir una línea de código.',
    items: ['Strategy document', 'Architecture & workflows', 'Roadmap claro'],
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Construcción',
    titleEm: '& Deploy',
    description: 'Build con IA + n8n + integraciones. Testing riguroso. Deployment con documentación completa. Tu equipo lo entiende y puede operarlo.',
    items: ['Build + Testing', 'Deployment', 'Documentación'],
  },
  {
    num: '04',
    icon: '📊',
    title: 'Optimización',
    titleEm: 'continua',
    description: 'Monitoring de performance, iteración basada en métricas reales. Escalamos conforme tu negocio crece. ROI medible y comprobado.',
    items: ['Monitoring', 'Iteración por métricas', 'Escalabilidad'],
  },
];

export const BUYER_PROFILES = [
  {
    role: 'Manager de Procesos',
    pain: 'Tu equipo gasta 40% del tiempo en tareas manuales que nadie quiere hacer.',
    solution: 'Automatizamos procesos repetitivos. Tu equipo enfoca en estrategia, no en copiar datos.',
    metric: '-60%',
    metricLabel: 'tiempo manual',
    color: 'teal',
  },
  {
    role: 'CEO',
    pain: 'Creces rápido pero tus operaciones no escalan. Contratas más gente pero los costos suben igual.',
    solution: 'Diseñamos infraestructura que escala sin contratar 10 personas más. Crece sin límite lineal.',
    metric: '3x',
    metricLabel: 'capacidad operativa',
    color: 'orange',
  },
  {
    role: 'CFO / Dir. Finanzas',
    pain: 'Nómina, reportes, facturas — 120 horas/mes en procesos manuales. Costo real: miles de dólares.',
    solution: 'Automatizamos el ciclo completo. ROI claro, medible, antes de comprometerte.',
    metric: '-68%',
    metricLabel: 'costos operacionales',
    color: 'coral',
  },
];

export const TOOLS = [
  'n8n', 'OpenAI', 'Claude', 'Make',
  'Notion', 'WhatsApp', 'Slack',
  'Google Workspace',
];
