export const SITE = {
  name: 'MUZA GROW',
  tagline: 'Automatización de Procesos & Service Design para Empresas LATAM',
  description: 'Automatización de procesos manuales + Service Design para empresas LATAM. Reduce costos operacionales 60-70%. Casos reales: $240k-500k ahorrados. Auditoría gratis 30 min.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.muzagrow.com',
  email: 'hola@muzagrow.com',
  location: 'Ciudad de México, LATAM',
  calendlyUrl: import.meta.env.PUBLIC_CALENDLY_URL || 'https://calendly.com/moises-muzagrow',
  whatsapp: '',
  linkedin: 'https://mx.linkedin.com/company/muza-desarollo',
};

export const NAV_LINKS = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Inversión', href: '/inversion' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export const SERVICES = [
  {
    num: '01',
    title: 'Auditoría de Procesos',
    titleEm: 'Growth Architecture Discovery',
    description: 'Mapeamos tu operación completa. Identificamos dónde se pierden horas, costos y eficiencia. Resultado: strategy document con roadmap de automatización listo para ejecutar.',
    deliverable: 'Strategy document + execution roadmap',
    forWho: 'Empresas que no saben por dónde empezar a automatizar',
    idealIf: 'Operaciones caóticas, múltiples sistemas desconectados, o sin claridad en procesos',
    tags: ['Diagnóstico', 'Roadmap', 'Automatización', 'Service Design'],
  },
  {
    num: '02',
    title: 'Automatización con n8n',
    titleEm: 'Automation Design & Build',
    description: 'Diseñamos los flujos que resuelven tu problema. Construimos con n8n, agentes IA e integraciones. Desplegamos y testamos. Resultado: sistema automático funcionando 24/7.',
    deliverable: 'Sistema automatizado funcionando',
    forWho: 'Empresas que ya saben qué quieren automatizar',
    idealIf: 'Ya hiciste Discovery, o ya sabes exactamente qué procesos manuales necesitas eliminar',
    tags: ['n8n', 'Agentes IA', 'Integraciones', 'LATAM'],
  },
  {
    num: '03',
    title: 'Optimización de Procesos',
    titleEm: 'Ongoing Optimization & ROI',
    description: 'Lanzar no es el final. Monitoreamos métricas, iteramos y mejoramos basado en resultados reales. ROI medible y comprobado. Reducción de costos operacionales garantizada.',
    deliverable: 'Mejora continua + métricas de ROI',
    forWho: 'Empresas que lanzaron y quieren reducir costos aún más',
    idealIf: 'Lanzaste un sistema y quieres exprimir el máximo ROI con optimización continua',
    tags: ['Monitoreo', 'Métricas', 'ROI', 'Reducción de costos'],
  },
];

export const PROCESS_STEPS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Descubrimiento',
    titleEm: 'del problema',
    description: 'Conversación directa con el equipo. Sin formularios infinitos. Entendemos tu operación real, identificamos cuellos de botella y oportunidades.',
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
