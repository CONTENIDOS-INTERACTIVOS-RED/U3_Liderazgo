<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Poder, autoridad y política en el liderazgo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p.mb-4 El liderazgo efectivo en el ámbito organizacional no puede comprenderse plenamente sin analizar las dinámicas de <b>poder, autoridad y política</b>. Estos elementos son fundamentales para entender cómo se toman decisiones, se ejerce la influencia y se configuran las relaciones dentro de las organizaciones.
      ImagenInfografica.color-secundario.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-18.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='29.4%' y='70.3%' numero='+')
          .h5.mb-2 1. Poder
          p.mb-3 Es la capacidad de influir en el comportamiento de otros para alcanzar objetivos específicos. Se manifiesta en diferentes formas:
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Poder legítimo:</b> basado en la posición jerárquica.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Poder de recompensa:</b> capacidad de otorgar beneficios.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Poder coercitivo:</b> capacidad de imponer sanciones.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Poder de referencia:</b> basado en la admiración y el respeto.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Poder experto:</b> sustentado en el conocimiento y la experiencia.
        .tarjeta.bg-white.p-4(x='79.2%' y='51%' numero='+')
          .h5.mb-2 2. Autoridad
          p <b>Es el derecho legítimo</b> de ejercer poder y tomar decisiones. <b>Según Max Weber</b>, existen tres tipos:
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Tradicional:</b> basada en costumbres y tradiciones.

          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Carismática:</b> derivada del carisma y cualidades personales del líder.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Legal-racional:</b> fundamentada en normas y procedimientos. Esta última es la más común en las organizaciones modernas por su estructura formal y definida.
        .tarjeta.bg-white.p-4(x='26%' y='40%' numero='+')
          .h5.mb-2 3. Política organizacional
          p Son las acciones que las personas llevan a cabo para adquirir, desarrollar y usar el poder con fines personales o grupales. Aunque suele percibirse de forma negativa, puede ser una herramienta útil para manejar la complejidad organizacional y lograr objetivos estratégicos. Es fundamental que se practique con ética y transparencia para evitar conflictos y mantener un ambiente laboral saludable.
      
      .d-flex.bg-verde-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-19.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.pe-xl-3.mb-0.text-white Comprender la interacción entre estos elementos permite a los líderes <b>influir con efectividad, tomar decisiones acertadas y fomentar una cultura organizacional positiva.</b> Desarrollar habilidades para gestionar el poder, la autoridad y la política de forma ética contribuye al éxito de los equipos y de la organización en su conjunto.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
      
          #t_2_1.titulo-segundo(data-aos="flip-up")
            div.d-flex
              span.me-3 2.1
              h2 Conceptos de poder, autoridad y su aplicación en las organizaciones

          .row.mb-4
            .col-3.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-12.col-xl-9
              p.mb-4 El <b>poder y la autoridad</b> son conceptos clave en la administración de empresas, ya que determinan cómo se ejerce el control, la influencia y la legitimidad dentro de las organizaciones. Comprender estas nociones permite a los futuros profesionales <b>gestionar de manera efectiva los recursos humanos y estructurales</b>, fomentando entornos de trabajo más equitativos y eficaces.
              h2 Poder en las organizaciones
              .bg-azul.p-4(data-aos='fade-up')
                span El poder es la <b>capacidad de influir en el comportamiento de otros</b> para alcanzar objetivos. Según <i>Max Weber</i>, es “la probabilidad de imponer la propia voluntad dentro de una relación social, aun contra toda resistencia”.

          .row
            .col-6.col-xl-4.mb-4(data-aos="zoom-in")
              .d-flex.bg-verde.h-100.p-2.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold Coercitivo
                  span Se basa en la capacidad de imponer <b>castigos o sanciones.</b>
            .col-6.col-xl-4.mb-4(data-aos="zoom-in")
              .d-flex.bg-verde.h-100.p-2.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-22.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold De recompensa
                  span Deriva de la habilidad para otorgar <b>beneficios o incentivos.</b>
            .col-6.col-xl-4.mb-4(data-aos="zoom-in")
              .d-flex.bg-verde.h-100.p-2.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-23.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold Legítimo
                  span Proviene de la <b>posición jerárquica</b> dentro de la organización.
            .col-6.col-xl-4.mb-4(data-aos="zoom-in")
              .d-flex.bg-verde.h-100.p-2.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-24.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold De referencia
                  span Surge del <b>carisma o admiración</b> que inspira el líder.
            .col-6.col-xl-8.mb-4(data-aos="zoom-in")
              .d-flex.bg-verde.h-100.p-2.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-25.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-xl-3.mb-3.text-bold Experto
                  span Se sustenta en el <b>conocimiento o habilidades especializadas</b> del líder.
            
      p.mb-4 Estas formas de poder no son excluyentes; muchas veces se combinan para lograr una mayor influencia organizacional.

      h2 Autoridad en las organizaciones
      p.mb-4 La autoridad es el <b>derecho legítimo</b> de ejercer poder y tomar decisiones dentro de una estructura formal. <i>Weber</i> identificó tres tipos ideales:

      .row.bg-fondo-2.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Tradicional
                  p.text-small.px-4.text-center.pb-2 Basada en costumbres y tradiciones arraigadas.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Carismática
                  p.text-small.px-4.text-center.pb-2 Derivada de las cualidades personales del líder y su capacidad para generar lealtad.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Legal-racional
                  p.text-small.px-4.text-center.pb-2 Fundada en normas formales y procedimientos establecidos. Predomina en las organizaciones modernas.

          h2 Aplicación en las organizaciones

          .row
            .col-12.col-xl-7
              .bg-verde-oscuro.p-4(data-aos='fade-up')
                p.mb-4.text-white La interacción entre poder y autoridad es crucial para el funcionamiento organizacional. Mientras que el poder puede existir sin autoridad (por ejemplo, a través del conocimiento o del carisma), la autoridad implica siempre un reconocimiento formal y legítimo de ese poder.
                span.text-white Un gerente puede tener la autoridad para asignar tareas (<b>poder legítimo</b>), pero su capacidad de influencia también dependerá de su <b>liderazgo experto</b> y del respeto que genera (<b>poder de referencia</b>).
            .col-5.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

      .row.mb-4.bg-azul.p-4.py-xl-0(data-aos='fade-up')
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
        .col-12.col-xl-10.d-flex.p-4.p-xl-0
          .my-auto
            p.mb-4 Entender esta dinámica ayuda a <b>prevenir abusos de poder</b> y a fomentar una <b>cultura organizacional ética</b>, donde la autoridad se ejerza con responsabilidad, y la influencia se construya sobre la base de la competencia, el respeto y la legitimidad.
            span El dominio de estos conceptos permite a los futuros administradores liderar con efectividad, ética y legitimidad, construyendo ambientes donde la influencia se ejerce con responsabilidad y la autoridad es reconocida por su competencia real.

      .row.bg-marron.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Ejemplos prácticos: poder y autoridad en las organizaciones
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Ejemplos prácticos: poder y autoridad en las organizaciones, donde se aborda cómo se manifiestan distintas formas de poder y autoridad dentro de contextos organizacionales.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos prácticos: poder y autoridad en las organizaciones
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Influencia y manejo político en equipos de trabajo

      p.mb-4 La <b>influencia y el manejo político</b> en los equipos son elementos clave en la administración de empresas, ya que afectan directamente la dinámica interna, la toma de decisiones y el logro de objetivos. Comprender estos conceptos permite a los futuros líderes desarrollar habilidades blandas fundamentales para actuar de forma ética y efectiva.

      .row.position-relative.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Influencia en equipos
                p Es la capacidad de afectar percepciones, actitudes y comportamientos. Se ejerce mediante la <b>persuasión</b>, la <b>comunicación efectiva</b> y el <b>ejemplo personal</b>. Un líder influyente inspira confianza, motiva y fomenta la colaboración. <br><b>Ejemplo:</b> un líder que practica la <b>empatía y la escucha activa</b> mejora la moral del equipo, fortaleciendo el compromiso y la cohesión. Valorar las contribuciones individuales refuerza la implicación de los miembros.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Manejo político en equipos
                p Consiste en el uso estratégico de <b>relaciones, poder y recursos</b> para alcanzar objetivos. En equipos, implica saber <b>navegar dinámicas de poder, gestionar conflictos de intereses y construir alianzas.</b> <br><b>Ejemplo:</b> en un proyecto interdepartamental con prioridades distintas y recursos limitados, un líder político negocia acuerdos, alinea intereses y asegura el respaldo necesario para avanzar sin generar fricciones.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Habilidades blandas requeridas
                p Incluyen la <b>inteligencia emocional, comunicación asertiva, empatía y resolución de conflictos.</b> Estas competencias permiten tomar decisiones inclusivas y crear un ambiente de confianza y respeto mutuo. Comprender las motivaciones del equipo facilita una gestión más humana y efectiva.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Aplicación en casos prácticos 
                p En un equipo de desarrollo de productos con desacuerdos sobre las prioridades del diseño, un líder influyente mediará entre posturas mediante <b>diálogo abierto y constructivo</b>. Al mismo tiempo, aplicará habilidades políticas para <b>equilibrar las demandas</b> de los departamentos involucrados, priorizando el beneficio general del proyecto.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen') 
      .d-flex.bg-verde.p-4.flex-column.bg-full-width.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-36.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.pe-xl-3.mb-0 Comprender y aplicar la influencia y el manejo político en los equipos es fundamental para el éxito organizacional. Estas habilidades permiten liderar equipos diversos, resolver conflictos y consolidar una <b>cultura ética y colaborativa.</b>

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 El papel del liderazgo en la construcción de cultura organizacional y ética empresarial

      p.mb-4 El liderazgo cumple un rol esencial en la formación de la <b>cultura organizacional</b> y en la promoción de una <b>ética empresarial sólida.</b> A través de sus decisiones y comportamientos, los líderes establecen normas, valores y principios que definen la identidad y el funcionamiento de una organización.

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Influencia en la cultura organizacional")
              p La cultura organizacional está compuesta por <b>valores, creencias y normas compartidas</b> que guían el comportamiento interno. Los líderes son modelos a seguir: sus acciones determinan la coherencia y dirección cultural. Un liderazgo ético y coherente genera un ambiente de <b>confianza y colaboración</b>; en cambio, la falta de integridad promueve <b>desconfianza y desmotivación.</b>
            .div(titulo="Promoción de la ética empresarial")
              p La ética empresarial implica aplicar <b>principios morales</b> en las decisiones y en la relación con los <i>stakeholders</i>. Los líderes éticos promueven la <b>transparencia, la responsabilidad social y el respeto a los derechos humanos</b>, fortaleciendo la <b>reputación y la sostenibilidad</b> de la organización.
            .div(titulo="Habilidades blandas requeridas")
              p Para impulsar una cultura ética, los líderes deben contar con <b>empatía, comunicación efectiva y capacidad para resolver conflictos.</b> Estas habilidades facilitan la toma de decisiones justas y centradas en el bienestar colectivo, consolidando un entorno laboral saludable y equitativo.
            .div(titulo="Ejemplo práctico")
              p Una empresa enfrenta una decisión crítica: <b>recortar costos o preservar empleos.</b> Un líder ético evalúa opciones como reducir jornadas o beneficios antes de recurrir a despidos. Esta acción demuestra <b>coherencia con los valores organizacionales, fortalece la confianza del personal</b> y refuerza una cultura basada en la responsabilidad social y el respeto por las personas.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Tabla 1.</b> Cuadro comparativo: factores internos y externos en la cultura y ética organizacional

      .tabla-a.mb-4
        table
          thead
            tr
              th.bg-marron.text-bold.text-center Factor
              th.bg-marron.text-bold.text-center Tipo
              th.bg-marron.text-bold.text-center Impacto en la cultura y ética organizacional
          tbody
            tr
              td.text-bold Estilo de liderazgo 
              td.text-center Interno
              td Influye directamente en la coherencia ética y toma de decisiones.
            tr
              td.text-bold Clima laboral
              td.text-center Interno
              td Afecta la motivación y el compromiso con los valores de la empresa.
            tr
              td.text-bold Valores organizacionales
              td.text-center Interno
              td Determinan el marco ético que guía las acciones del personal.
            tr
              td.text-bold Estructura jerárquica
              td.text-center Interno
              td Define responsabilidades y canales de comunicación que afectan la ética.
            tr
              td.text-bold Recursos humanos
              td.text-center Interno
              td Su capacitación y comportamiento modelan la ética diaria.
            tr
              td.text-bold Clientes y mercados
              td.text-center Externo
              td Presionan a la empresa a responder con prácticas responsables.
            tr
              td.text-bold Normativa legal
              td.text-center Externo
              td Obliga a cumplir normativas que pueden reforzar la ética organizacional.
            tr
              td.text-bold Competencia
              td.text-center Externo
              td Exige estándares de comportamiento frente a otras organizaciones.
            tr
              td.text-bold Tendencias tecnológicas
              td.text-center Externo
              td Impulsa cambios en procesos que pueden afectar prácticas éticas.
            tr
              td.text-bold Condiciones económicas
              td.text-center Externo
              td Condiciona decisiones estratégicas con implicaciones éticas.

      .row.bg-marron.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Entorno laboral, equipos de trabajo y estrategias en crisis
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Entorno laboral, equipos de trabajo y estrategias en crisis, donde se aborda la gestión del entorno laboral en contextos críticos, la formación de equipos efectivos, la diversidad organizacional y el liderazgo en momentos de crisis.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Entorno laboral, equipos de trabajo y estrategias en crisis
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://doi.org/10.35381/racji.v10i18.4370") Liderazgo político en la transparencia administrativa: desafíos éticos y la corrupción estructural en América Latina
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://doi.org/10.22201/fcpys.2448492xe.2021.242.76524") Liderazgo político para un mundo nuevo: cambios globales y pandemia de la Covid-19
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://es.wikipedia.org/wiki/Formas_de_poder_seg%C3%BAn_French_y_Raven") Formas de poder según French y Raven
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://cadenaser.com/nacional/2024/12/17/alberto-gonzalez-pascual-experto-en-liderazgo-un-buen-jefe-sobreestima-a-sus-trabajadores-cadena-ser/") Un buen jefe sobreestima a sus trabajadores
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.sinnaps.com/blog-gestion-proyectos/lideres-influencian-equipo") ¿Cómo los líderes influencian en el equipo?
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://mexico.unir.net/noticias/comunicacion-mercadotecnia/que-es-liderazgo-politico/") ¿Qué es el liderazgo político? Importancia y claves
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://canvas-for-you.com/liderazgo-etico-la-clave-para-fortalecer-culturas-organizacionales/") Liderazgo ético: la clave para fortalecer culturas organizacionales
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://blog.kellyservices.com.mx/el-impacto-del-liderazgo-etico-en-las-organizaciones") El impacto del liderazgo ético en las organizaciones
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.esade.edu/beyond/es/que-es-liderazgo-etico-caracteristicas-ejemplos/") ¿Qué es el liderazgo ético? Características y ejemplos
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=BcMFn7bvkHM") [Vídeo] Tipos de liderazgo
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

  
  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    cuestionario: {
      tema: 'Unidad 1',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué define principalmente al liderazgo ético en una organización?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imposición de normas estrictas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Búsqueda de ganancias rápidas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actuar con integridad y responsabilidad social',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Delegar todas las decisiones importantes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica fundamental de un equipo de trabajo efectivo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Confianza mutua y comunicación abierta',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Supervisión constante del líder',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Competencia interna entre miembros',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructura jerárquica rígida',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de poder se basa en la admiración y respeto que inspira un líder?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Poder legítimo', esCorrecta: false },
            { id: 'b', texto: 'Poder de referencia', esCorrecta: true },
            { id: 'c', texto: 'Poder coercitivo', esCorrecta: false },
            { id: 'd', texto: 'Poder de recompensa', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué estrategia es clave para gestionar conflictos de manera sostenible en una empresa?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imponer sanciones a las partes involucradas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar los problemas menores',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitar la mediación entre las partes',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permitir que el conflicto se resuelva solo con el tiempo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué implica la toma de decisiones basada en la sostenibilidad empresarial?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Priorizar únicamente el beneficio económico',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Considerar solo el impacto en el mercado local',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Favorecer decisiones rápidas sin análisis',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el impacto económico, social y ambiental',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
