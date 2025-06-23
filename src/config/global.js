export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Habilidades Básicas y Avanzadas de liderazgo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos del liderazgo estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Habilidades básicas y avanzadas de liderazgo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Liderazgo transformador y ético',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Liderazgo en contextos organizacionales sostenibles',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pensamiento sistémico y motivación organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Pensamiento sistémico en la toma de decisiones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Teorías de la motivación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ciclo motivacional y desempeño laboral',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Lazzati, S. C. & Tailhade, M. (2019). Liderazgo gerencial: ( ed.). Ediciones Granica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151212',
    },
    {
      referencia:
        'Gómez Moldes, J. (2019). Liderazgo educacional: ( ed.). Editorial Académica Universitaria (Edacun).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151748',
    },
    {
      referencia:
        'Rodríguez Aranday, F. (2024). Liderazgo transformador: (1 ed.). Instituto Mexicano de Contadores Públicos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280488',
    },
    {
      referencia:
        'Lapuente Álvarez, I. (2020). Liderazgo y rendimiento deportivo: ( ed.). Wanceulen Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175840',
    },
    {
      referencia:
        'Siliceo Aguilar, A. (2021). Liderazgo: imperativo ético: ( ed.). Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/191645',
    },
    {
      referencia:
        'Paladino, M. Debeljuh, P. & Delbosco, P. (2019). Integridad: un liderazgo diferente: ( ed.). LID Editorial Empresarial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/199881',
    },
    {
      referencia:
        'López González, J. (Coord.), Picazo Villaseñor, N. (Coord.) & Martínez, E. A. (Coord.). (2023). Liderazgo de acción positiva: (1 ed.). Ediciones Octaedro, S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/233426',
    },
    {
      referencia:
        'Villa Sánchez, A. (2024). 13 perspectivas del liderazgo: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279524',
    },
    {
      referencia:
        'Villace Fernández, C. (2024). El liderazgo y el gobierno estratégico de las universidades: (1 ed.). Editorial Universidad de Burgos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/255023',
    },
    {
      referencia:
        'Rojas, Á. (2022). El eslabón perdido del liderazgo 4.0: (1 ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/260284',
    },
    {
      referencia:
        'Udaondo, M. (2020). Comunica: las claves de la comunicación para el liderazgo: (1 ed.). LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/270018',
    },
    {
      referencia:
        'Doménech, P. (2024). Liderazgo Kumano: una nueva propuesta para dirigir: (1 ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280214',
    },
    {
      referencia:
        'Köhler Peláez, M. (2022). Comunicación + Liderazgo: un enfoque constructivista por competencias: ( ed.). Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/207663',
    },
    {
      referencia:
        'Labrador, M. J. (Coord.), Rodríguez, A. (Coord.) & Betzhold, J. (Coord.). (2024). Liderazgo y transformación en la comunicación estratégica, marketing y negocios: (1 ed.). RIL editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/281464',
    },
    {
      referencia:
        'Guilera, L. (2021). Competencias directivas: claves para la gestión y el liderazgo (2a. Ed.): ( ed.). Marge Books.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175253',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo: (1 ed.). Universidad Nacional Autónoma de México (UNAM).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Goldverg, D. (2024). Liderazgo para los tiempos actuales: nuevos paradigmas y habilidades de coaching: (1 ed.). Ediciones Granica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/253130',
    },
    {
      referencia:
        'De Arco Paternina, L. K. Santana Galindo, P. V. & Gómez, Y. V. (2022). Habilidades blandas para el profesional del siglo XXI (Soft skills): (1 ed.). Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232097',
    },
    {
      referencia:
        'Rey Romero, M. R. & Peña Lapeira, C. J. (2021). Las Competencias Blandas en el emprendimiento: (1 ed.). Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231775',
    },
    {
      referencia:
        'Gonzalez Molina, M. G. (Il.) & Calixto Sandoval, N. P. (Il.). (2024). Desarrolla tus habilidades y potencia tu vida: (1 ed.). Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279920',
    },
    {
      referencia:
        'Rodríguez-Ponce, E. (2007). Estilos de liderazgo, toma de decisiones estratégicas y eficacia: un estudio empírico en pequeñas y medianas empresas. Interciencia, 32(8), 522–528.',
      link: 'https://www.redalyc.org/articulo.oa?id=33932805',
    },
    {
      referencia:
        'Paz, M., Sánchez, R., & Sánchez, L. (2021). Principios del liderazgo ético en directivos de la Universidad de La Guajira. Revista de Ciencias Sociales, 27(4), 190–205.',
      link: 'https://www.redalyc.org/articulo.oa?id=28069360014',
    },
    {
      referencia:
        'Ormaza Cevallos, M. G., & Lozano Jaramillo, G. A. (2022). Liderazgo transformacional: un enfoque efectivo para el rendimiento laboral de las pymes ecuatorianas. Revista Científica Conocimiento y Sociedad, 28(1), 45–60.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/9378092.pdf',
    },
    {
      referencia:
        'Huamán-Gil, L. A. (2024). Impacto del liderazgo estratégico en el compromiso organizacional. Revista Arbitrada Interdisciplinaria KOINONIA, 9(18), 4–16.',
      link: 'https://ve.scielo.org/pdf/raiko/v9n18/2542-3088-raiko-9-18-4.pdf',
    },
    {
      referencia:
        'Vázquez Mendoza, J. H., Vázquez Martínez, N., & Vázquez Martínez, R. A. (2023). El rol del liderazgo sistémico en instituciones de educación superior en México. Ciencia Latina Revista Científica Multidisciplinar, 7(5), 7654–7665.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/9482038.pdf',
    },
    {
      referencia:
        'Bellido-Cabrera, J., Valiente-Saldaña, Y. M., Alvites-Gasco, A. M., & Diaz-Gómez, C. (2025). Reconocimiento laboral y compromiso organizacional en una empresa agroindustrial peruana. Revista Arbitrada Interdisciplinaria KOINONIA, 10(19), 202–220.',
      link:
        'https://ve.scielo.org/pdf/raiko/v10n19/2542-3088-raiko-10-19-202.pdf',
    },
    {
      referencia:
        'Suárez Pineda, J. A., & Garzón Daza, C. G. (2019). Competitividad y sostenibilidad organizacional: una estrategia para el fortalecimiento empresarial. En J. Cortés Cabrera (Ed.), La administración de empresas: una perspectiva desde el profesional mateísta hacia el futuro (pp. 85–106). Editorial Fundación Universitaria San Mateo.',
      link: 'https://books.scielo.org/id/955tc/pdf/cortes-9786289572506-05.pdf',
    },
    {
      referencia:
        'Madero, S. (2019). La motivación extrínseca e intrínseca y su relación con la productividad laboral. Espacios, 45(3), 36.',
      link:
        'https://ve.scielo.org/pdf/espacios/v45n3/0798-1015-espacios-45-03-36.pdf',
    },
    {
      referencia:
        'Macías, J., & Vanga, M. (2021). Motivación y productividad laboral en colaboradores de una cooperativa de ahorro y crédito. Revista Arbitrada Interdisciplinaria KOINONIA, 9(18), 4–16.',
      link: 'https://ve.scielo.org/pdf/raiko/v9n18/2542-3088-raiko-9-18-4.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad de una persona u organización para ajustarse con eficacia a cambios en el entorno o condiciones de trabajo.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Habilidad para tomar decisiones y ejecutar tareas sin supervisión constante, asumiendo responsabilidad sobre los resultados.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'Ambiente psicológico y emocional percibido por los empleados dentro de una empresa, influenciado por la cultura y las relaciones laborales.',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'Transmisión clara, coherente y oportuna de información que permite la comprensión y alineación entre los miembros de una organización.',
    },
    {
      termino: 'Compromiso organizacional',
      significado:
        'Grado de identificación, implicación y lealtad que un empleado siente hacia la empresa en la que trabaja.',
    },
    {
      termino: 'Competencias',
      significado:
        'Conjunto de conocimientos, habilidades y actitudes necesarias para desempeñar un rol laboral de manera eficiente.',
    },
    {
      termino: 'Desarrollo profesional',
      significado:
        'Proceso continuo de adquisición de habilidades y conocimientos que fortalecen el desempeño y crecimiento de un empleado en su carrera.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Capacidad para lograr los objetivos establecidos utilizando el mínimo de recursos posible, sin sacrificar la calidad.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de comprender y compartir las emociones, ideas o puntos de vista de otra persona en un entorno laboral.',
    },
    {
      termino: 'Evaluación del desempeño',
      significado:
        'Proceso sistemático para medir y valorar el cumplimiento de las funciones asignadas a un empleado dentro de una organización.',
    },
    {
      termino: 'Feedback',
      significado:
        'Retroalimentación constructiva que se ofrece con el fin de mejorar el desempeño individual o colectivo en el contexto laboral.',
    },
    {
      termino: 'Funciones',
      significado:
        'Tareas específicas asignadas a un puesto de trabajo que definen su contribución al logro de los objetivos organizacionales.',
    },
    {
      termino: 'Gestión del talento humano',
      significado:
        'Conjunto de prácticas destinadas a atraer, desarrollar, motivar y retener a los colaboradores dentro de una organización.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'Herramientas cuantitativas o cualitativas que permiten medir el desempeño y los resultados en áreas clave de una empresa.',
    },
    {
      termino: 'Innovación',
      significado:
        'Implementación de nuevas ideas, procesos o productos que generan valor y mejoran la competitividad organizacional.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad para influir, motivar y guiar a un grupo hacia el logro de metas compartidas, promoviendo un entorno de confianza.',
    },
    {
      termino: 'Manual de funciones',
      significado:
        'Documento que especifica las tareas, responsabilidades y perfil requerido para cada cargo dentro de una organización.',
    },
    {
      termino: 'Motivación',
      significado:
        'Impulso interno o externo que lleva a una persona a actuar con energía y dirección hacia un objetivo determinado.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Información que se entrega a un empleado sobre su desempeño con el fin de reforzar conductas positivas o corregir desviaciones.',
    },
    {
      termino: 'Rol',
      significado:
        'Papel o función que desempeña una persona dentro de un grupo u organización, incluyendo sus obligaciones y expectativas.',
    },
  ],
}
