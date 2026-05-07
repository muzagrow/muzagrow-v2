import { o as createVNode, aC as Fragment, aD as __astro_tag_component__ } from './astro/server_CCibinO9.mjs';

const frontmatter = {
  "title": "CFO: -68% en Costos Operacionales de Finanzas",
  "excerpt": "El departamento de finanzas de una empresa de 300 empleados procesaba nómina, facturas y reportes de forma manual. 120 horas al mes. Lo bajamos a 38 horas — ahorrando $15,000 USD al mes.",
  "pubDate": "2025-05-02T00:00:00.000Z",
  "industry": "Finanzas / Operaciones",
  "client": "Empresa de manufactura (anonimizado)",
  "challenge": "Procesos de finanzas 100% manuales consumiendo 120h/mes",
  "duration": "6 semanas",
  "featured": true,
  "metrics": [{
    "label": "Reducción horas manuales",
    "value": "-68%",
    "context": "De 120h a 38h por mes"
  }, {
    "label": "Ahorro mensual",
    "value": "$15K",
    "context": "USD en horas de trabajo financiero"
  }, {
    "label": "Errores en reportes",
    "value": "-92%",
    "context": "Antes vs después de automatización"
  }, {
    "label": "Tiempo de cierre mensual",
    "value": "-5 días",
    "context": "De 8 días a 3 días"
  }],
  "techStack": ["n8n", "SAP Integration", "Google Sheets", "DocuSign", "Resend", "Notion"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "el-problema",
    "text": "El Problema"
  }, {
    "depth": 3,
    "slug": "el-inventario-de-procesos-manuales",
    "text": "El inventario de procesos manuales"
  }, {
    "depth": 2,
    "slug": "la-solución",
    "text": "La Solución"
  }, {
    "depth": 3,
    "slug": "sprint-1-semanas-1-2-quick-wins",
    "text": "Sprint 1 (Semanas 1-2): Quick wins"
  }, {
    "depth": 3,
    "slug": "sprint-2-semanas-3-4-cierre-mensual",
    "text": "Sprint 2 (Semanas 3-4): Cierre mensual"
  }, {
    "depth": 3,
    "slug": "sprint-3-semanas-5-6-reportes-y-nómina",
    "text": "Sprint 3 (Semanas 5-6): Reportes y nómina"
  }, {
    "depth": 2,
    "slug": "los-resultados-al-mes-2",
    "text": "Los Resultados al Mes 2"
  }, {
    "depth": 3,
    "slug": "ahorro-económico",
    "text": "Ahorro económico"
  }, {
    "depth": 2,
    "slug": "lo-que-aprendimos",
    "text": "Lo que aprendimos"
  }, {
    "depth": 2,
    "slug": "el-follow-up-del-cfo-mes-3",
    "text": "El follow-up del CFO (mes 3)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "el-problema",
      children: "El Problema"
    }), "\n", createVNode(_components.p, {
      children: "El CFO de una empresa manufacturera de 300 empleados llegó con números claros:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“Tengo un equipo de 4 personas en finanzas. Calculé que gastamos 120 horas al mes en tareas completamente manuales: nómina, facturas, conciliaciones, reportes al directorio. Eso es 3 personas trabajando full time en copiar y pegar. Necesito cambiar eso.”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "El CFO ya tenía el diagnóstico. Lo que necesitaba era el diseño y la ejecución."
    }), "\n", createVNode(_components.h3, {
      id: "el-inventario-de-procesos-manuales",
      children: "El inventario de procesos manuales"
    }), "\n", createVNode(_components.p, {
      children: "En la sesión de Discovery mapeamos 7 procesos:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Procesamiento de nómina:"
        }), " 28h/mes — cálculos en Excel, verificación manual"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Conciliación bancaria:"
        }), " 22h/mes — comparar extractos con ERP"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Generación de facturas:"
        }), " 18h/mes — crear y enviar facturas a clientes"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cierre contable mensual:"
        }), " 24h/mes — recopilar datos de todos los departamentos"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reportes al directorio:"
        }), " 16h/mes — generar deck de KPIs financieros"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cuentas por pagar:"
        }), " 8h/mes — aprobar y procesar pagos a proveedores"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Auditoría interna:"
        }), " 4h/mes — preparar documentación para auditoría"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Total: 120 horas/mes. $15,000 USD/mes si costamos el tiempo al valor de mercado."
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "la-solución",
      children: "La Solución"
    }), "\n", createVNode(_components.p, {
      children: "Diseñamos automatización por prioridad de impacto/esfuerzo:"
    }), "\n", createVNode(_components.h3, {
      id: "sprint-1-semanas-1-2-quick-wins",
      children: "Sprint 1 (Semanas 1-2): Quick wins"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Conciliación bancaria automatizada:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "n8n conecta al banco (API) y al ERP (SAP)"
      }), "\n", createVNode(_components.li, {
        children: "Compara transacciones automáticamente"
      }), "\n", createVNode(_components.li, {
        children: "Genera reporte de discrepancias para revisión humana"
      }), "\n", createVNode(_components.li, {
        children: "Solo se requiere acción en el 3-5% de casos con discrepancia"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " 22h → 4h/mes. Solo supervisar excepciones."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Generación y envío de facturas:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cuando se registra una venta en SAP, n8n genera factura en PDF"
      }), "\n", createVNode(_components.li, {
        children: "La envía automáticamente al cliente con DocuSign para firma"
      }), "\n", createVNode(_components.li, {
        children: "Notifica al vendedor cuando está firmada"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " 18h → 2h/mes (solo revisión de casos especiales)."]
    }), "\n", createVNode(_components.h3, {
      id: "sprint-2-semanas-3-4-cierre-mensual",
      children: "Sprint 2 (Semanas 3-4): Cierre mensual"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cierre contable automatizado:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "n8n solicita automáticamente los datos a cada departamento (templates pre-llenados)"
      }), "\n", createVNode(_components.li, {
        children: "Consolida la información en el formato correcto"
      }), "\n", createVNode(_components.li, {
        children: "Genera el borrador del cierre para revisión del equipo"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " 24h → 6h/mes (de compilar datos a validar el borrador)."]
    }), "\n", createVNode(_components.h3, {
      id: "sprint-3-semanas-5-6-reportes-y-nómina",
      children: "Sprint 3 (Semanas 5-6): Reportes y nómina"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Dashboard financiero automático:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cada lunes, n8n extrae KPIs de SAP, Sheets y banco"
      }), "\n", createVNode(_components.li, {
        children: "Genera deck en Google Slides con gráficas actualizadas"
      }), "\n", createVNode(_components.li, {
        children: "Envía resumen ejecutivo por email al directorio"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " 16h → 1h/mes (solo contextualizar el deck)."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Procesamiento de nómina asistido:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "n8n pre-llena el 85% de la nómina automáticamente"
      }), "\n", createVNode(_components.li, {
        children: "Marca para revisión humana los casos especiales (vacaciones, bajas, bonos)"
      }), "\n", createVNode(_components.li, {
        children: "El equipo solo revisa, no construye desde cero"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " 28h → 8h/mes."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "los-resultados-al-mes-2",
      children: "Los Resultados al Mes 2"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Proceso"
          }), createVNode(_components.th, {
            children: "Antes"
          }), createVNode(_components.th, {
            children: "Después"
          }), createVNode(_components.th, {
            children: "Ahorro"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Conciliación bancaria"
          }), createVNode(_components.td, {
            children: "22h"
          }), createVNode(_components.td, {
            children: "4h"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-82%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Generación de facturas"
          }), createVNode(_components.td, {
            children: "18h"
          }), createVNode(_components.td, {
            children: "2h"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-89%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Cierre contable"
          }), createVNode(_components.td, {
            children: "24h"
          }), createVNode(_components.td, {
            children: "6h"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-75%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Reportes directorio"
          }), createVNode(_components.td, {
            children: "16h"
          }), createVNode(_components.td, {
            children: "1h"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-94%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Nómina"
          }), createVNode(_components.td, {
            children: "28h"
          }), createVNode(_components.td, {
            children: "8h"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-71%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Cuentas por pagar"
          }), createVNode(_components.td, {
            children: "8h"
          }), createVNode(_components.td, {
            children: "3h"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-63%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Auditoría interna"
          }), createVNode(_components.td, {
            children: "4h"
          }), createVNode(_components.td, {
            children: "14h"
          }), createVNode(_components.td, {
            children: createVNode(_components.em, {
              children: "Aumentó"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "TOTAL"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "120h"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "38h"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-68%"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "*La auditoría interna aumentó porque ahora tenemos logs automáticos de todo — el equipo de auditoría usa más tiempo analizando datos (trabajo de valor) vs buscando documentos."
    }), "\n", createVNode(_components.h3, {
      id: "ahorro-económico",
      children: "Ahorro económico"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Horas liberadas: 82h/mes"
      }), "\n", createVNode(_components.li, {
        children: "Costo promedio del tiempo financiero: $185 USD/hora (incluyendo prestaciones, espacio, overhead)"
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Ahorro mensual: $15,170 USD"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Costo del proyecto: $22,000 USD"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "ROI: Recuperado en 1.5 meses"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "lo-que-aprendimos",
      children: "Lo que aprendimos"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. El CFO ya sabía el problema — necesitaba el diseño"
      })
    }), "\n", createVNode(_components.p, {
      children: "Los CFOs son analíticos. Llegó con los números. Nuestra conversación fue sobre arquitectura, no sobre convencerlo de que había un problema. Esto aceleró mucho el Discovery."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. SAP + n8n es posible pero requiere más tiempo"
      })
    }), "\n", createVNode(_components.p, {
      children: "Las integraciones con ERPs legacy como SAP son posibles pero más complejas. Pasamos una semana extra en integración que no teníamos planeada. Ahora lo incluimos en el estimate de tiempo para proyectos con ERP."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. La auditoría “empeoró” — y eso es bueno"
      })
    }), "\n", createVNode(_components.p, {
      children: "El equipo de auditoría inicialmente protestó porque “ahora tenemos más trabajo”. El problema era que antes no había datos que auditar — no había registros. Ahora sí. Más trabajo de auditoría = mejor control financiero."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "el-follow-up-del-cfo-mes-3",
      children: "El follow-up del CFO (mes 3)"
    }), "\n", createVNode(_components.p, {
      children: "A los 3 meses, el CFO hizo un análisis de “qué más podemos hacer”:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Identificamos 4 procesos adicionales en finanzas con potencial de automatización"
      }), "\n", createVNode(_components.li, {
        children: "Estimado de ahorro adicional: $6,000 USD/mes"
      }), "\n", createVNode(_components.li, {
        children: "Arrancamos el segundo proyecto con confianza — ya conocemos los sistemas, ya conocemos el equipo."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Eso es exactamente el modelo de Ongoing Optimization."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/caso-3.mdx";
const file = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/content/blog/caso-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/content/blog/caso-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
