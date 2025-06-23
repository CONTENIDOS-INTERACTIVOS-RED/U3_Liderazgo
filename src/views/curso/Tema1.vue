<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teorías y estilos de liderazgo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 El estudio del liderazgo ha evolucionado significativamente en las últimas décadas, consolidándose como un componente esencial en la gestión organizacional. Explorar las diversas teorías y formas de liderazgo permite a los futuros administradores desarrollar habilidades para influir de manera positiva en sus equipos y alcanzar los objetivos institucionales.
        .d-flex.bg-azul.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-4.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Las <b>teorías del liderazgo</b> han transitado desde enfoques centrados en los <i>rasgos innatos</i> de los líderes hasta modelos que consideran las interacciones entre líderes y seguidores en contextos específicos. Por ejemplo, la <b>teoría de los rasgos</b> plantea que ciertos individuos poseen características inherentes que los predisponen al liderazgo. En contraste, la <b>teoría del liderazgo</b> situacional sostiene que la efectividad del liderazgo depende de la capacidad del líder para adaptarse a las circunstancias particulares (Campos & Campos, 2020).

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 En paralelo, los <b>estilos de liderazgo</b> representan las diversas maneras en que los líderes interactúan con sus equipos. El <b>liderazgo transformacional</b> se distingue por inspirar y motivar a los colaboradores hacia la innovación y el cambio, fomentando un compromiso que trasciende los intereses individuales. Por su parte, el <b>liderazgo transaccional</b> se apoya en un sistema de recompensas y sanciones como medio para alcanzar los objetivos establecidos (Villar-Vargas & Araya-Castillo, 2019).
        .bg-marron.p-4(data-aos='fade-up')
          span La elección del estilo de liderazgo adecuado es crucial para el éxito organizacional. Un estudio reciente resalta la necesidad de alinear el enfoque de liderazgo con los estilos empleados para facilitar el aprendizaje organizativo y la transformación (Villar-Vargas & Araya-Castillo, 2019). Asimismo, una revisión contemporánea de las teorías de liderazgo sugiere avanzar hacia una investigación <i>interparadigmática</i>, que integre diversos enfoques para lograr una comprensión más holística del fenómeno (González & Rodríguez, 2021).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    .row.mb-4.bg-verde.p-4.pb-xl-0(data-aos='fade-up')
      .col-2.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.p-4.pt-xl-0
        p.my-auto En el ámbito de la <b>Administración de Empresas</b>, comprender las teorías y estilos de liderazgo resulta fundamental para formar profesionales capaces de dirigir equipos con eficacia, adaptarse a entornos cambiantes y promover una cultura organizacional positiva. Esta unidad proporcionará las herramientas conceptuales necesarias para identificar y aplicar los estilos de liderazgo más apropiados en diferentes contextos empresariales, contribuyendo así al cumplimiento de los objetivos estratégicos de las organizaciones.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Principales teorías del liderazgo: rasgos, conductual, situacional y transformacional

    p.mb-4 El liderazgo es un fenómeno complejo que ha sido objeto de diversas investigaciones a lo largo del tiempo. Las teorías del <i>liderazgo</i> buscan explicar cómo los líderes influyen en sus seguidores y en las organizaciones. Entre las principales se encuentran las teorías de los <b>rasgos, conductual, situacional y transformacional</b>, cada una con enfoques y aplicaciones distintas:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Teoría rasgos
              p Sostiene que ciertos individuos poseen <b>características innatas</b> (atributos físicos, capacidades intelectuales, rasgos de personalidad) que los predisponen al liderazgo. Aunque ha sido criticada por su enfoque <b>determinista</b>, sirvió como base para estudios posteriores.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Teoría conductual 
              p Se enfoca en las <b>acciones</b> del líder, no en sus características personales. Distingue entre un estilo <b>orientado a las tareas</b> (organización y supervisión) y uno <b>orientado a las relaciones</b> (motivación y bienestar del equipo). Ha influido en programas de formación en liderazgo.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Teoría situacional
              p Propuesta por <b>Hersey y Blanchard</b>, plantea que la efectividad del liderazgo depende de la <b>adaptabilidad</b> del líder al nivel de madurez de los empleados. Identifica cuatro estilos: <b>directivo, persuasivo, participativo y delegador</b>, aplicables según la situación.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Teoría transformacional 
              p Desarrollada por <b>Bass y Avolio</b>, describe a líderes que <b>inspiran y motivan</b> a sus seguidores más allá de los intereses personales. Se caracteriza por: <b>influencia idealizada, motivación inspiradora, estimulación intelectual y consideración individualizada.</b>
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen') 

    h2 Aplicación práctica
    .row.mb-4.bg-azul.p-4.py-xl-0(data-aos='fade-up')
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.p-4.p-xl-0
        .my-auto
          p.mb-4 El conocimiento y aplicación de estas teorías permite a los futuros administradores desarrollar habilidades de liderazgo <b>adaptativas</b>. Por ejemplo:
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p En un proyecto de implementación de un nuevo sistema de gestión, un líder podría usar un <b>estilo directivo</b> al inicio para establecer objetivos claros, y luego un enfoque <b>participativo</b> para fomentar la colaboración.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p En contextos de <b>cambio organizacional</b>, el liderazgo transformacional resulta clave para <b>inspirar y guiar</b> a los empleados hacia una nueva visión.
    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Estilos de liderazgo: autocrático, democrático, liberal, transaccional y transformador

    p.mb-4 El liderazgo es un componente esencial en la gestión organizacional, y su efectividad depende en gran medida del estilo adoptado por el líder. A continuación, se describen cinco estilos de liderazgo ampliamente reconocidos, con sus características principales, ejemplos y aplicaciones prácticas:

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Autocrático")
            p.mb-3 Se caracteriza por una <b>toma de decisiones centralizada</b>, donde el líder ejerce un control absoluto y espera obediencia sin cuestionamientos. Es efectivo en situaciones en las que se requieren decisiones rápidas o cuando los subordinados carecen de experiencia. Sin embargo, puede limitar la creatividad y disminuir la motivación del equipo. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Ejemplo:</b> en una planta de producción industrial, el gerente decide unilateralmente cambios en los turnos de trabajo debido a una urgencia.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Aplicación:</b> se justifica cuando se requiere disciplina estricta y cumplimiento inmediato.
          .div(titulo="Democrático")
            p.mb-3 El líder <b>fomenta la participación del equipo</b> en la toma de decisiones, valorando las opiniones y promoviendo un entorno colaborativo. Aumenta la satisfacción laboral y la creatividad, aunque puede ser menos eficiente si se necesita actuar con rapidez. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Ejemplo:</b> en un proyecto de lanzamiento de un producto, el gerente reúne al equipo para decidir estrategias de forma conjunta. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Aplicación:</b> ideal para fomentar compromiso, creatividad y sentido de pertenencia en el equipo.
          .div(titulo="Liberal (laissez-faire)")
            p.mb-3 El líder <b>ofrece mínima supervisión</b>, permitiendo que el equipo tome decisiones. Es útil cuando los miembros son altamente competentes y autónomos. La falta de dirección, sin embargo, puede afectar la productividad.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Ejemplo:</b> en una agencia de publicidad, el director creativo deja que los diseñadores trabajen de forma autónoma en sus campañas.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Aplicación:</b> apropiado en equipos especializados o creativos donde la autonomía potencia la innovación y la originalidad.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Transaccional")
            p.mb-3 Basado en un sistema de <b>recompensas y sanciones</b>. El líder establece objetivos claros y supervisa su cumplimiento. Es efectivo en entornos estructurados, aunque no promueve la innovación. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Ejemplo:</b> en una empresa de ventas, se otorgan bonos a quienes alcanzan metas y se exige capacitación adicional a quienes no lo hacen.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Aplicación:</b> adecuado para tareas repetitivas, con metas claras y donde la motivación extrínseca impulsa el rendimiento.
          .div(titulo="Transformacional")
            p.mb-3 El líder <b>inspira y motiva</b> a través de una visión compartida. Promueve la innovación y el crecimiento personal, siendo eficaz en contextos de cambio. Requiere habilidades avanzadas de comunicación y empatía. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Ejemplo:</b> en una reestructuración empresarial, el CEO comunica una visión inspiradora y motiva a los empleados a innovar y aprender.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Aplicación:</b> útil en procesos de cambio organizacional, crecimiento estratégico o transformación digital, donde se necesita compromiso y habilidades blandas.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Liderazgo ético: importancia de la integridad en el ejercicio del liderazgo

    p.mb-4 El <b>liderazgo ético</b> se ha consolidado como un pilar esencial en la gestión empresarial contemporánea, en un entorno donde la confianza y la integridad resultan determinantes para el éxito organizacional. Este tipo de liderazgo se caracteriza por la promoción de valores como la <b>honestidad, la equidad y la responsabilidad</b>, orientando a las organizaciones hacia prácticas sostenibles y socialmente responsables.

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-verde.p-4.d-flex(data-aos='fade-up')
        span La <b>integridad</b> en el ejercicio del liderazgo es clave porque permite generar <i>confianza</i> entre los colaboradores, clientes y demás partes interesadas. Un <b>líder íntegro</b> actúa con coherencia entre lo que dice y lo que hace, convirtiéndose en un modelo a seguir que refuerza una cultura organizacional basada en principios éticos sólidos. Esta coherencia fortalece las relaciones a largo plazo y mejora la <b>reputación corporativa</b>.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-marron.p-4.d-flex(data-aos='fade-up')
        span Además, el liderazgo ético favorece decisiones más <b>justas y equitativas</b>, al considerar no solo los resultados financieros, sino también el impacto <b>social y ambiental</b> de las acciones empresariales. Este enfoque integral ayuda a prever riesgos éticos y legales, fomentando una gestión más <b>proactiva y preventiva</b>.

    .row.bg-verde-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        p.mb-0.text-white En la actualidad, las organizaciones enfrentan retos complejos y una creciente presión por demostrar su <b>responsabilidad social</b>. En este contexto, el liderazgo ético se convierte en una <b>ventaja competitiva</b>. La adopción de normas como la <b>ISO 37001</b>, sistema de gestión antisoborno, evidencia el compromiso con la <b>transparencia y la integridad</b> en los procesos organizacionales.

    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        p.mb-4 Instituciones como el <b>Instituto para la Ética en la Comunicación y las Organizaciones (IECO)</b> promueven un liderazgo con visión <b>humanista</b>, centrado en la <b>dignidad humana y el bien común.</b> Este modelo subraya la importancia de formar líderes capaces de equilibrar los objetivos económicos con principios éticos, lo cual es esencial para el <b>desarrollo sostenible.</b>
        .bg-azul.p-4(data-aos='fade-up')
          span El <b>liderazgo ético y la integridad</b> son fundamentales para construir organizaciones responsables y sostenibles. Inculcar estos valores en la formación de los futuros profesionales de administración de empresas resulta clave para consolidar un entorno empresarial más justo y equitativo.
    
    h2 Estudio de caso: liderazgo ético en una empresa de tecnología
    p.mb-4 A modo de aplicación, se presenta a continuación un estudio de caso que permite al estudiante analizar el liderazgo ético en un contexto real simulado:
    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Contexto")
            p <i>Innovatech S.A.S.</i> es una empresa emergente del sector tecnológico que desarrolla soluciones de software para instituciones educativas. Tras cinco años de crecimiento acelerado, la compañía planea expandirse internacionalmente. Para liderar esta nueva etapa, se nombra a <b>Laura Gómez</b> como Gerente General. Laura es reconocida por su estilo de liderazgo ético, su fuerte compromiso con la transparencia y su enfoque humano en la gestión del talento.
          .div(titulo="Situación")
            p En el primer año de expansión, Innovatech enfrenta una decisión crítica: un importante cliente internacional ofrece firmar un contrato millonario, pero solicita un “<b>pago por agilización</b>” para cerrar el acuerdo. Algunos miembros del comité comercial argumentan que aceptar la propuesta “no es inusual” en negociaciones internacionales y que los beneficios económicos serían sustanciales para el crecimiento de la empresa.
          .div(titulo="Desarrollo del caso")
            p Laura convoca una reunión extraordinaria con los líderes de cada área y plantea la situación de forma transparente. Expone que, aunque aceptar el pago podría traer ingresos a corto plazo, va en contra de los valores éticos que han guiado el crecimiento de Innovatech. Además, señala que la práctica podría derivar en <b>sanciones legales</b> bajo normas internacionales como la <b>ISO 37001 (Sistema de Gestión Antisoborno)</b> y dañar gravemente la imagen de la empresa a largo plazo. Propone, en cambio, fortalecer la propuesta de valor basada en la <b>calidad y la ética</b>, buscando clientes que compartan estos principios. Asimismo, lanza una <b>campaña interna de concientización</b> sobre integridad empresarial y refuerza la política de <b>cero tolerancia</b> a prácticas corruptas. Gracias a esta postura, Innovatech gana reconocimiento en el sector como una empresa íntegra y confiable. Aunque la expansión inicial es más lenta de lo previsto, la empresa logra atraer inversionistas y clientes <b>comprometidos con prácticas éticas</b>, asegurando un crecimiento sólido y sostenible.

    .row.mb-5.bg-verde.p-4.py-xl-0(data-aos='fade-up')
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-9.d-flex
        .my-auto
          p.mb-3.text-bold Preguntas de reflexión
          p.mb-2 1.	¿Qué riesgos enfrentaba Laura al rechazar el pago solicitado?
          p.mb-2 2.	¿Qué habilidades blandas demostró Laura en su gestión del conflicto?
          p.mb-2 3.	¿Cómo impacta el liderazgo ético en la sostenibilidad de una empresa?
          p.mb-2 4.	¿Qué otras estrategias podrían haberse implementado para reforzar la cultura ética en Innovatech?

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.researchgate.net/publication/327335398_Modelos_de_LiderazgoResearchGate") Modelos de liderazgo
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://asana.com/es/resources/leadership-styles") 11 estilos de liderazgo y cómo encontrar el tuyo
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://blog.ganttpro.com/es/tipologia-de-liderazgo/") Los tipos y estilos de liderazgo más conocidos y sus implicaciones
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://es.wikipedia.org/wiki/Liderazgo_transaccional") Liderazgo transaccional
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://arxiv.org/abs/2410.18095") Ethical Leadership in the Age of AI: Challenges, Opportunities and Framework for Ethical Leadership
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://es.wikipedia.org/wiki/Instituto_para_la_%C3%89tica_en_la_Comunicaci%C3%B3n_y_las_Organizaciones") Instituto para la Ética en la Comunicación y las Organizaciones
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://es.wikipedia.org/wiki/ISO_37001") ISO 37001:2016 Sistemas de gestión antisoborno
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=lF0zgdl-DNU") [Vídeo] Teorías del liderazgo y del comportamiento humano
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://psico-smart.com/articulos/articulo-el-papel-del-liderazgo-en-la-gestion-de-crisis-y-su-impacto-en-la-moral-de-los-empleados-165723") El papel del liderazgo en la gestión de crisis y su impacto en la moral de los empleados
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.mckinsey.com/featured-insights/destacados/desarrollar-una-fuerza-laboral-resiliente-y-adaptable-para-un-futuro-incierto/es") Desarrollar una fuerza laboral resiliente y adaptable para un futuro incierto
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://vorecol.com/es/articulos/articulo-impacto-de-la-pandemia-en-el-clima-laboral-y-estrategias-para-mantener-la-motivacion-y-el-bienestar-de-los-empleados-608") Impacto de la pandemia en el clima laboral y estrategias para mantener la motivación y el bienestar de los empleados
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.bizneo.com/blog/formacion-de-equipos/") Formación de equipos de trabajo | Etapas y Claves
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://hirint.io/diversidad-en-el-trabajo-crear-equiposefectivos/") La diversidad en el trabajo para crear equipos efectivos
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://ifeelonline.com/salud-laboral/gestion-de-crisis-en-el-trabajo/") Gestión de crisis en el trabajo: 4 estrategias clave para líderes empresariales
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://incae.edu/como-liderar-en-tiempos-de-crisis/") ¿Cómo liderar en tiempos de crisis?
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.cmiuniversal.com/resolucion-adecuada-de-conflictos-y-rsc/") Resolución adecuada de conflictos y RSC
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://es.wikipedia.org/wiki/Triple_resultado") Triple resultado
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://es.wikipedia.org/wiki/ISO_26000") ISO 26000
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=dfbFndVZSAw") [Vídeo] La gestión del cambio en tiempos de crisis
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p
    
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
