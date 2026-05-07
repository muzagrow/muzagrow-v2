import { o as createVNode, aC as Fragment, aD as __astro_tag_component__ } from './astro/server_CCibinO9.mjs';

const frontmatter = {
  "title": "Manager de Procesos: -60% en Tiempo Manual",
  "excerpt": "Un equipo de operaciones gastaba 8 horas semanales en captura manual de datos entre CRM, email y Slack. Lo automatizamos. Ahora tarda 3 horas — y el equipo hace trabajo real.",
  "pubDate": "2025-03-15T00:00:00.000Z",
  "industry": "Operaciones B2B",
  "client": "Empresa de Servicios (anonimizado)",
  "challenge": "Captura manual de datos entre 3 sistemas desconectados",
  "duration": "3 semanas",
  "featured": true,
  "metrics": [{
    "label": "Reducción tiempo manual",
    "value": "-60%",
    "context": "De 8h a 3.2h por semana"
  }, {
    "label": "Horas ahorradas/mes",
    "value": "19h",
    "context": "Por operador del equipo"
  }, {
    "label": "Errores de datos",
    "value": "-85%",
    "context": "Captura manual vs automatizada"
  }, {
    "label": "ROI estimado",
    "value": "340%",
    "context": "Primer año post-implementación"
  }],
  "techStack": ["n8n", "HubSpot CRM", "Google Sheets", "Slack", "Gmail"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "el-problema",
    "text": "El Problema"
  }, {
    "depth": 3,
    "slug": "situación-inicial",
    "text": "Situación inicial"
  }, {
    "depth": 2,
    "slug": "la-solución",
    "text": "La Solución"
  }, {
    "depth": 3,
    "slug": "flujo-1-lead-automático-a-crm",
    "text": "Flujo 1: Lead automático a CRM"
  }, {
    "depth": 3,
    "slug": "flujo-2-reporte-semanal-automático",
    "text": "Flujo 2: Reporte semanal automático"
  }, {
    "depth": 3,
    "slug": "flujo-3-notificaciones-de-avance-de-pipeline",
    "text": "Flujo 3: Notificaciones de avance de pipeline"
  }, {
    "depth": 2,
    "slug": "los-resultados",
    "text": "Los Resultados"
  }, {
    "depth": 2,
    "slug": "lo-que-aprendimos",
    "text": "Lo que aprendimos"
  }, {
    "depth": 2,
    "slug": "tiene-sentido-para-tu-empresa",
    "text": "¿Tiene sentido para tu empresa?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
      children: "El Manager de Procesos de una empresa de servicios B2B llegó con una queja que suena familiar:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“Mi equipo gasta literalmente media jornada copiando datos de un sistema a otro. Un lead entra por email, lo copiamos a CRM, luego actualizamos un Sheet, luego avisamos por Slack. Todo manual. Todo propenso a errores.”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["El diagnóstico fue claro en la primera sesión: ", createVNode(_components.strong, {
        children: "3 sistemas desconectados, 3 equipos, 1 proceso manual que nadie quería hacer"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "situación-inicial",
      children: "Situación inicial"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CRM (HubSpot):"
        }), " Leads entraban pero el equipo tenía que crear contactos manualmente"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Google Sheets:"
        }), " Reporte semanal manual, copiando datos de HubSpot"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Slack:"
        }), " Notificaciones manuales cuando un lead avanzaba de etapa"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Costo real:"
      }), " 2 personas × 4 horas semanales × 4 semanas = 32 horas/mes de trabajo que podía ser automático."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "la-solución",
      children: "La Solución"
    }), "\n", createVNode(_components.p, {
      children: "Diseñamos un flujo n8n que conecta los tres sistemas:"
    }), "\n", createVNode(_components.h3, {
      id: "flujo-1-lead-automático-a-crm",
      children: "Flujo 1: Lead automático a CRM"
    }), "\n", createVNode(_components.p, {
      children: "Cuando llega un email con patrón de lead (formulario, referido, etc.), n8n:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Extrae nombre, empresa, email, teléfono del cuerpo del email"
      }), "\n", createVNode(_components.li, {
        children: "Crea contacto en HubSpot con todos los datos"
      }), "\n", createVNode(_components.li, {
        children: "Asigna al rep de ventas correcto (rotación round-robin)"
      }), "\n", createVNode(_components.li, {
        children: "Envía alerta a Slack con resumen del lead"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " De 8 minutos por lead a 0 minutos."]
    }), "\n", createVNode(_components.h3, {
      id: "flujo-2-reporte-semanal-automático",
      children: "Flujo 2: Reporte semanal automático"
    }), "\n", createVNode(_components.p, {
      children: "Cada lunes a las 8am, n8n:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Consulta HubSpot API para deals de la semana"
      }), "\n", createVNode(_components.li, {
        children: "Genera reporte estructurado en Google Sheets"
      }), "\n", createVNode(_components.li, {
        children: "Envía resumen por Slack al Manager"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " 3 horas semanales de trabajo eliminadas."]
    }), "\n", createVNode(_components.h3, {
      id: "flujo-3-notificaciones-de-avance-de-pipeline",
      children: "Flujo 3: Notificaciones de avance de pipeline"
    }), "\n", createVNode(_components.p, {
      children: "Cuando un deal cambia de etapa en HubSpot:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "n8n detecta el cambio via webhook"
      }), "\n", createVNode(_components.li, {
        children: "Genera mensaje contextual con datos del deal"
      }), "\n", createVNode(_components.li, {
        children: "Notifica al equipo correcto en el canal correcto de Slack"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " El equipo siempre sabe qué pasa, sin preguntar."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "los-resultados",
      children: "Los Resultados"
    }), "\n", createVNode(_components.p, {
      children: "Tres semanas después del deployment, medimos:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Métrica"
          }), createVNode(_components.th, {
            children: "Antes"
          }), createVNode(_components.th, {
            children: "Después"
          }), createVNode(_components.th, {
            children: "Cambio"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Horas/semana en captura"
          }), createVNode(_components.td, {
            children: "8h"
          }), createVNode(_components.td, {
            children: "3.2h"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-60%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Errores de captura de datos"
          }), createVNode(_components.td, {
            children: "~15/semana"
          }), createVNode(_components.td, {
            children: "~2/semana"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-85%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Tiempo de respuesta a leads"
          }), createVNode(_components.td, {
            children: "4 horas promedio"
          }), createVNode(_components.td, {
            children: "12 minutos"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "-95%"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Satisfacción del equipo"
          }), createVNode(_components.td, {
            children: "6/10"
          }), createVNode(_components.td, {
            children: "9/10"
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "+3 pts"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "lo-que-aprendimos",
      children: "Lo que aprendimos"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. El problema real no era la captura, era la frustración"
      })
    }), "\n", createVNode(_components.p, {
      children: "El equipo sabía que su trabajo era repetitivo e inútil. Eso genera frustración, errores y rotación. La automatización no solo ahorró tiempo — mejoró el ambiente del equipo."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. Empezar con el flujo más doloroso"
      })
    }), "\n", createVNode(_components.p, {
      children: "Identificamos cuál de los tres flujos generaba más frustración. Empezamos por ahí. El win temprano generó confianza en el proceso."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. Documentación es tan importante como el build"
      })
    }), "\n", createVNode(_components.p, {
      children: "El equipo necesitaba entender qué hace el sistema. Pasamos un día extra documentando cada flujo. Valió la pena — no hubo preguntas de soporte semanas después."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tiene-sentido-para-tu-empresa",
      children: "¿Tiene sentido para tu empresa?"
    }), "\n", createVNode(_components.p, {
      children: "Si tu equipo repite este tipo de trabajo manual, podemos diagnosticar el problema específico y diseñar la solución correcta. Sin suposiciones."
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

const url = "src/content/blog/caso-1.mdx";
const file = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/content/blog/caso-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/content/blog/caso-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
