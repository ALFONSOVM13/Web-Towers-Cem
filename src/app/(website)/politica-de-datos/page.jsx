import React from "react";

const page = () => {
  return (
    <div className=" font-title py-20 px-8 md:p-12 lg:px-24 lg:py-16 bg-gray-100 text-gray-800">
      <div className="py-10 mb-12 border-b-2 border-gray-400 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide text-gray-900 leading-tight">
          Política de Tratamiento de Datos Personales
        </h1>
        <h2 className="text-2xl font-bold text-customGreen md:text-3xl  text-center mb-2 ">
          TOWERS CEM S.A.S
        </h2>
        <p className="text-center text-lg md:text-xl font-medium text-gray-600">
          <strong>NIT 901.851.364-5</strong>
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Tabla de Contenido
        </h2>
        <ul className="list-decimal list-inside space-y-3 text-lg text-gray-700">
          <li>
            <a href="#introduccion" className="hover:underline text-blue-600">
              Introducción
            </a>
          </li>
          <li>
            <a href="#responsable" className="hover:underline text-blue-600">
              Responsable del Tratamiento
            </a>
          </li>
          <li>
            <a href="#objetivo" className="hover:underline text-blue-600">
              Objetivo
            </a>
          </li>
          <li>
            <a href="#definiciones" className="hover:underline text-blue-600">
              Definiciones
            </a>
          </li>
          <li>
            <a
              href="#contenido-bases-datos"
              className="hover:underline text-blue-600"
            >
              Contenido de las Bases de Datos
            </a>
          </li>
          <li>
            <a href="#alcance" className="hover:underline text-blue-600">
              Alcance
            </a>
          </li>
          <li>
            <a href="#tratamiento" className="hover:underline text-blue-600">
              Tratamiento
            </a>
          </li>
          <li>
            <a href="#deberes" className="hover:underline text-blue-600">
              Deberes del Responsable de Tratamiento de Datos
            </a>
          </li>
          <li>
            <a
              href="#derechos-titulares"
              className="hover:underline text-blue-600"
            >
              Derechos de los Titulares
            </a>
          </li>
          <li>
            <a href="#atencion" className="hover:underline text-blue-600">
              Atención de Peticiones, Consultas y Reclamos
            </a>
          </li>
          <li>
            <a href="#procedimiento" className="hover:underline text-blue-600">
              Procedimiento para Atender los Derechos de los Titulares
            </a>
          </li>
          <li>
            <a href="#vigencia" className="hover:underline text-blue-600">
              Vigencia
            </a>
          </li>
        </ul>
      </section>
      <section id="introduccion" className="mb-6 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-4">Introducción</h2>
        <p className="leading-relaxed">
          El presente documento establece las Políticas de Tratamiento de Datos
          Personales de la sociedad TOWERS CEM S.A.S. identificada con el NIT
          901.851.364-5, persona jurídica con domicilio principal en la ciudad
          de Tubará, en adelante, TC que en cumplimiento de las disposiciones de
          la Ley 1581 de 2012 y el Decreto 1377 de 2013, describe en el marco
          del presente documento, los mecanismos por medio de los cuales TC
          garantizará un manejo adecuado de los datos personales recolectados en
          sus bases de datos, con el fin de permitir a los titulares el
          ejercicio del derecho constitucional de Hábeas Data.
        </p>
      </section>

      <section className="mb-6 scroll-mt-24" id="responsable">
        <h2 className="text-2xl font-semibold mb-4">
          Responsable del Tratamiento
        </h2>
        <p className="leading-relaxed">
          El sitio web{" "}
          <a
            href="https://www.towerscem.com"
            className="text-blue-600 hover:underline"
          >
            www.towerscem.com
          </a>{" "}
          es una propiedad de TOWERS CEM S.A.S, sociedad comercial legalmente
          constituida registrada ante la Cámara de Comercio de Barranquilla,
          identificada con el NIT 901.851.364-5, con domicilio principal en la
          de la ciudad de Tubará, en la Calle 13 #2-10, República de Colombia,
          correo electrónico:{" "}
          <a
            href="mailto:mileyvelasquez@towerscem.com"
            className="text-blue-600 hover:underline"
          >
            mileyvelasquez@towerscem.com
          </a>
          , teléfono +57 3225098967 en la ciudad de Tubará.
        </p>
      </section>

      <section className="mb-6 scroll-mt-24" id="objetivo">
        <h2 className="text-2xl font-semibold mb-4">Objetivo</h2>
        <p className="leading-relaxed">
          Establecer los criterios para la recolección, almacenamiento, uso,
          circulación y supresión automatizada o no, de los datos personales
          tratados por la sociedad TOWERS CEM S.A.S NIT 901.851.364-5, persona
          jurídica, representada legalmente por el señor Carlos Torres Cuello,
          identificado con cédula de ciudadanía No 1.140.901.189, en calidad de
          Responsable del Tratamiento.
        </p>
      </section>

      <section className="mb-6 scroll-mt-24" id="definiciones">
        <h2 className="text-2xl font-semibold mb-4">Definiciones</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Usuario:</strong> persona natural o jurídica que ingresa al
            sitio web de TC o hace algún uso de sus servicios.
          </li>
          <li>
            <strong>Sitio web:</strong> Dirección URL,{" "}
            <a
              href="https://www.towerscem.com"
              className="text-blue-600 hover:underline"
            >
              www.towerscem.com
            </a>{" "}
            propiedad de TC y al cual le aplican los presentes términos y
            condiciones.
          </li>
          <li>
            <strong>Propietario:</strong> TC, quien tiene el control del
            contenido que se ingresa, elimina o se mantiene en el sitio web, así
            como la publicación del mismo.
          </li>
          <li>
            <strong>Tratamiento de datos:</strong> Cualquier operación o
            conjunto de operaciones sobre datos personales, tales como la
            recolección, almacenamiento, uso, circulación o supresión.
          </li>
          <li>
            <strong>Autorización:</strong> Consentimiento previo, expreso e
            informado del Titular para llevar a cabo el Tratamiento de datos
            personales.
          </li>
          <li>
            <strong>Base de Datos:</strong> Conjunto organizado de datos
            personales que sea objeto de Tratamiento.
          </li>
          <li>
            <strong>Dato personal:</strong> Cualquier información vinculada o
            que pueda asociarse a una o varias personas naturales determinadas o
            determinables.
          </li>
          <li>
            <strong>Encargado:</strong> Persona natural o jurídica, pública o
            privada, que por sí misma o en asocio con otros, realice el
            Tratamiento de datos personales por cuenta del.
          </li>
          <li>
            <strong>Titular:</strong> Persona natural cuyos datos personales
            sean objeto de Tratamiento.
          </li>
          <li>
            <strong>Principio de legalidad:</strong> El Tratamiento de datos
            personales es una actividad reglada que debe sujetarse a lo
            establecido en la ley y en las demás disposiciones que la
            desarrollen.
          </li>
          <li>
            <strong>Principio de finalidad:</strong> El Tratamiento debe
            obedecer a una finalidad legítima de acuerdo con la Constitución y
            la Ley, la cual debe ser informada al Titular.
          </li>
          <li>
            <strong>Principio de libertad:</strong> El Tratamiento sólo puede
            ejercerse con el consentimiento, previo, expreso e informado del
            Titular. Los datos personales no podrán ser obtenidos o divulgados
            sin previa autorización, o en ausencia de mandato legal o judicial
            que releve el consentimiento.
          </li>
          <li>
            <strong>Principio de veracidad o calidad:</strong> La información
            sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada,
            comprobable y comprensible. Se prohíbe el Tratamiento de datos
            parciales, incompletos, fraccionados o que induzcan a error.
          </li>
          <li>
            <strong>Principio de transparencia:</strong> En el Tratamiento debe
            garantizarse el derecho del Titular a obtener del Responsable del
            Tratamiento o del Encargado del Tratamiento, en cualquier momento y
            sin restricciones, información acerca de la existencia de datos que
            le concierne.
          </li>
          <li>
            <strong>Principio de acceso y circulación restringida:</strong> El
            Tratamiento se sujeta a los límites que se derivan de la naturaleza
            de los datos personales, de las disposiciones de la ley y la
            Constitución. En este sentido, el Tratamiento sólo podrá́ hacerse por
            personas autorizadas por el Titular y/o por las personas previstas
            en la ley. Los datos personales, salvo la información pública, no
            podrán estar disponibles en Internet u otros medios de divulgación o
            comunicación masiva, salvo que el acceso sea técnicamente
            controlable para brindar un conocimiento restringido sólo a los
            titulares o terceros autorizados conforme a la ley.
          </li>
          <li>
            <strong>Principio de seguridad:</strong> La información sujeta a
            Tratamiento por el Responsable del Tratamiento o Encargado del
            Tratamiento se deberá́ manejar con las medidas técnicas, humanas y
            administrativas que sean necesarias para otorgar seguridad a los
            registros evitando su adulteración, pérdida, consulta, uso o acceso
            no autorizado o fraudulento.
          </li>
          <li>
            <strong>Principio de confidencialidad:</strong> Todas las personas
            que intervengan en el Tratamiento de datos personales que no tengan
            la naturaleza de públicos están obligadas a garantizar la reserva de
            la información, inclusive después de finalizada su relación con
            alguna de las labores que comprende el Tratamiento, pudiendo sólo
            realizar suministro o comunicación de datos personales cuando ello
            corresponda al desarrollo de las actividades autorizadas en la ley y
            en los términos de la misma.
          </li>
        </ul>
      </section>
      <section className="mb-6 scroll-mt-24" id="contenido-bases-datos">
        <h2 className="text-2xl font-semibold mb-4">
          CONTENIDO DE LAS BASES DE DATOS
        </h2>
        <p className="leading-relaxed">
          En las bases de datos de TC se almacena información general como
          nombre completo, número y tipo de identificación, género y datos de
          contacto (correo electrónico, dirección física, teléfono fijo y móvil,
          si los hubiere). En adición a estos, y dependiendo de la naturaleza de
          la base de datos, TC puede tener datos específicos requeridos para el
          tratamiento al que serán sometidos los datos. En las bases de datos se
          podrá́ almacenar información sensible con previa autorización de su
          titular, en cumplimiento de lo establecido en los artículos 5 y 7 de
          la{" "}
          <a
            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:underline"
          >
            Ley 1581 de 2012
          </a>
          .
        </p>
      </section>

      <section className="mb-6 scroll-mt-24" id="alcance">
        <h2 className="text-2xl font-semibold mb-4">ALCANCE</h2>
        <p className="leading-relaxed">
          Esta política aplica para toda la información personal registrada en
          las bases de datos de la sociedad TOWERS CEM S.A.S NIT 901.851.364-5.
        </p>
      </section>

      <section className="mb-6 scroll-mt-24" id="tratamiento">
        <h2 className="text-2xl font-semibold mb-4">TRATAMIENTO</h2>
        <p className="leading-relaxed">
          El tratamiento que realizará la sociedad TOWERS CEM S.A.S con la
          información personal es sometida a distintas formas de tratamiento,
          como recolección, compilación, almacenamiento, uso, sistematización y
          organización, en total en cumplimiento de las finalidades de la que se
          hace referencia en el presente documento.
        </p>
        <p className="leading-relaxed mt-4">
          La información podrá́ ser entregada, transmitida o transferida a
          entidades públicas, socios comerciales, contratistas, afiliados,
          subsidiarias, únicamente con el fin de cumplir con las finalidades de
          la base de datos correspondiente. En todo caso, la entrega,
          transmisión o transferencia se hará́ previa suscripción de los
          documentos diseñados e implementados por TC para salvaguardar la
          confidencialidad de la información.
        </p>
        <p className="leading-relaxed mt-4">
          La recolección, almacenamiento, uso y circulación de los datos
          personales estarán relacionadas con el desarrollo de operaciones con
          finalidades varias como fidelización de clientes, gestión contable,
          fiscal y administrativa encaminada a la gestión de clientes,
          marketing, publicidad y prospección comercial. Adicional, la sociedad
          TOWERS CEM S.A.S podrá́ hacer uso de los datos personales para:
        </p>
        <ul className="list-none space-y-2">
          <li>
            <span className="font-bold">A)</span> Ejecución de las actividades
            económicas comprendidas en su objeto social.
          </li>
          <li>
            <span className="font-bold">B)</span> Cumplimiento a los deberes
            legales en materia contable, societaria y laboral.
          </li>
          <li>
            <span className="font-bold">C)</span> Desarrollar la relación
            contractual existente con sus clientes, proveedores y trabajadores,
            incluida el pago de obligaciones contractuales.
          </li>
          <li>
            <span className="font-bold">D)</span> Proveer los servicios y/o los
            productos requeridos por sus usuarios.
          </li>
          <li>
            <span className="font-bold">E)</span> Informar sobre nuevos
            productos o servicios y/o sobre cambios en los mismos.
          </li>
          <li>
            <span className="font-bold">F)</span> Evaluar la calidad del
            servicio y de los productos.
          </li>
          <li>
            <span className="font-bold">G)</span> Realizar estudios internos
            sobre hábitos de consumo.
          </li>
          <li>
            <span className="font-bold">H)</span> Enviar al correo físico,
            electrónico, celular o dispositivo móvil, vía mensajes de texto (SMS
            y/o MMS), WhatsApp u otra red social, y en general, a través de
            cualquier otro medio análogo y/o digital de comunicación creado o
            por crearse, información comercial, publicitaria o promocional sobre
            los productos y/o servicios, eventos, concursos, campañas con el fin
            de impulsar, invitar, dirigir, ejecutar, informar y de manera
            general impulsar los productos diseñados por TOWERS CEM S.A.S y/o
            por terceras personas.
          </li>
          <li>
            <span className="font-bold">I)</span> Desarrollar el proceso de
            selección, evaluación, y vinculación laboral.
          </li>
          <li>
            <span className="font-bold">J)</span> Soportar procesos de auditoría
            interna o externa, contable, entre otros relacionados.
          </li>
          <li>
            <span className="font-bold">K)</span> Registrar la información de
            empleados y/o pensionados (activos e inactivos) en las bases de
            datos de TOWERS CEM S.A.S.
          </li>
          <li>
            <span className="font-bold">L)</span> Los indicados en la
            autorización otorgada por el titular del dato o descritos en el
            aviso de privacidad respectivo, según sea el caso.
          </li>
          <li>
            <span className="font-bold">M)</span> Suministrar, compartir, enviar
            o entregar sus datos personales a empresas filiales, vinculadas, o
            subordinadas de TOWERS CEM S.A.S ubicadas en Colombia o cualquier
            otro país en el evento que dichas compañías requieran la información
            para los fines aquí́ indicados.
          </li>
        </ul>
      </section>

      <section className="mb-6 scroll-mt-24" id="deberes">
        <h2 className="text-2xl font-semibold mb-4">
          DEBERES DEL RESPONSABLE DE TRATAMIENTO DE DATOS
        </h2>
        <p className="leading-relaxed mb-4">
          Esta política es de obligatorio y estricto cumplimiento para la
          sociedad TOWERS CEM S.A.S. y como responsable del Tratamiento, deberá́
          cumplir los siguientes deberes, sin perjuicio de las demás
          disposiciones previstas en la ley y en otras que rijan su actividad:
        </p>

        <ul className="list-none space-y-2">
          <li>
            <span className="font-bold">A)</span> Garantizar al Titular, en todo
            tiempo, el pleno y efectivo ejercicio del derecho de hábeas data.
          </li>
          <li>
            <span className="font-bold">B)</span> Solicitar y conservar, en las
            condiciones previstas en la ley, copia de la respectiva autorización
            otorgada por el Titular.
          </li>
          <li>
            <span className="font-bold">C)</span> Informar debidamente al
            Titular sobre la finalidad de la recolección y los derechos que le
            asisten por virtud de la autorización otorgada.
          </li>
          <li>
            <span className="font-bold">D)</span> Conservar la información bajo
            las condiciones de seguridad necesarias para impedir su
            adulteración, pérdida, consulta, uso o acceso no autorizado o
            fraudulento.
          </li>
          <li>
            <span className="font-bold">E)</span> Garantizar que la información
            que se suministre al Encargado del Tratamiento sea veraz, completa,
            exacta, actualizada, comprobable y comprensible.
          </li>
          <li>
            <span className="font-bold">F)</span> Actualizar la información,
            comunicando de forma oportuna al Encargado del Tratamiento, todas
            las novedades respecto de los datos que previamente le haya
            suministrado y adoptar las demás medidas necesarias para que la
            información suministrada a este se mantenga actualizada.
          </li>
          <li>
            <span className="font-bold">G)</span> Rectificar la información
            cuando sea incorrecta y comunicar lo pertinente al Encargado del
            Tratamiento.
          </li>
          <li>
            <span className="font-bold">H)</span> Suministrar al Encargado del
            Tratamiento, según el caso, únicamente datos cuyo Tratamiento esté
            previamente autorizado de conformidad con lo previsto en la ley.
          </li>
          <li>
            <span className="font-bold">I)</span> Exigir al Encargado del
            Tratamiento en todo momento, el respeto a las condiciones de
            seguridad y privacidad de la información del Titular.
          </li>
          <li>
            <span className="font-bold">J)</span> Tramitar las consultas y
            reclamos formulados en los términos señalados en la ley.
          </li>
          <li>
            <span className="font-bold">K)</span> Adoptar procedimientos
            específicos para garantizar el adecuado cumplimiento de la ley y en
            especial, para la atención de consultas y reclamos.
          </li>
          <li>
            <span className="font-bold">L)</span> Informar al Encargado del
            Tratamiento cuando determinada información se encuentra en discusión
            por parte del Titular, una vez se haya presentado la reclamación y
            no haya finalizado el trámite respectivo.
          </li>
          <li>
            <span className="font-bold">M)</span> Informar a solicitud del
            Titular sobre el uso de sus datos.
          </li>
          <li>
            <span className="font-bold">N)</span> Informar a la autoridad de
            protección de datos cuando se presenten violaciones a los códigos de
            seguridad y existan riesgos en la administración de la información
            de los Titulares.
          </li>
        </ul>
      </section>

      <section className="mb-6 scroll-mt-24" id="derechos-titulares">
        <h2 className="text-2xl font-semibold mb-4">
          DERECHOS DE LOS TITULARES
        </h2>
        <p className="leading-relaxed mb-4">
          En el Tratamiento de Datos Personales por parte de TC se respetarán en
          todo momento los derechos de los titulares de Datos Personales, que
          son:
        </p>

        <ul className="list-none space-y-2">
          <li>
            <span className="font-bold">A)</span> Acceder de forma gratuita a
            los datos proporcionados que hayan sido objeto de tratamiento.
          </li>
          <li>
            <span className="font-bold">B)</span> Conocer, actualizar y
            rectificar su información frente a datos parciales, inexactos,
            incompletos, fraccionados, que induzcan a error, o aquellos cuyo
            tratamiento esté prohibido o no haya sido autorizado.
          </li>
          <li>
            <span className="font-bold">C)</span> Solicitar prueba de la
            autorización otorgada.
          </li>
          <li>
            <span className="font-bold">D)</span> Presentar ante la
            Superintendencia de Industria y Comercio (SIC) quejas por
            infracciones a lo dispuesto en la normatividad vigente.
          </li>
          <li>
            <span className="font-bold">E)</span> Revocar la autorización y/o
            solicitar la supresión del dato, siempre que no exista un deber
            legal o contractual que impida eliminarlos. La revocatoria y/o
            supresión procederá cuando la Autoridad Competente haya determinado
            que, en el Tratamiento, el encargado de este, ha incurrido en
            conductas contrarias a la ley y a la Constitución. La revocatoria
            procederá siempre y cuando no exista la obligación legal o
            contractual de conservar el dato personal.
          </li>
          <li>
            <span className="font-bold">F)</span> Abstenerse de responder las
            preguntas sobre datos sensibles. Tendrán carácter facultativo las
            respuestas que versen sobre datos sensibles o sobre datos de las
            niñas y niños y adolescentes.
          </li>
        </ul>
      </section>

      <section className="mb-6 scroll-mt-24" id="atencion">
        <h2 className="text-2xl font-semibold mb-4">
          ATENCIÓN DE PETICIONES, CONSULTAS Y RECLAMOS
        </h2>
        <p className="leading-relaxed mb-4">
          Las peticiones, consultas y reclamos formulados por los titulares de
          Datos Personales bajo Tratamiento de TC para ejercer sus derechos a
          conocer, actualizar, rectificar y suprimir datos, o revocar la
          autorización deberán ser dirigidas a:
        </p>

        <div className="space-y-2">
          <p>
            <span className="font-bold">Dirección:</span> Calle 13 #2-10,
            Tubará-Atlántico.
          </p>
          <p>
            <span className="font-bold">Teléfono:</span> +57 3225098967
          </p>
          <p>
            <span className="font-bold">Correo electrónico:</span>{" "}
            <a
              href="mailto:mileyvelasquez@towerscem.com"
              className="text-blue-600 hover:underline"
            >
              mileyvelasquez@towerscem.com
            </a>
          </p>
          <p>
            <span className="font-bold">Página web:</span>{" "}
            <a
              href="https://www.towerscem.com"
              className="text-blue-600 hover:underline"
            >
              www.towerscem.com
            </a>
          </p>
        </div>
      </section>

      <section className="mb-6 scroll-mt-24" id="procedimiento">
        <h2 className="text-2xl font-semibold mb-4">
          PROCEDIMIENTO PARA ATENDER LOS DERECHOS DE LOS TITULARES
        </h2>
        <p className="leading-relaxed mb-4">
          Los titulares de Datos Personales, sin importar el tipo de vinculación
          que tengan con TC, pueden ejercer sus derechos a conocer, actualizar,
          rectificar y suprimir información y/o revocar la autorización
          otorgada. TC garantizará a los titulares de datos personales
          contenidos en sus bases de datos el derecho a elevar peticiones,
          reclamar y consultar toda la información contenida en su registro
          individual o toda aquella que esté vinculada con su identificación
          conforme se establece en la presente Política de Tratamiento de Datos
          Personales.
        </p>

        <p className="leading-relaxed mb-4">
          Las peticiones, consultas y reclamos dirigidos a TC deberán contener
          como mínimo la siguiente información:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            Nombres y apellidos del Titular y/o su representante y/o
            causahabientes.
          </li>
          <li>Lo que se pretende consultar.</li>
          <li>
            Dirección física, electrónica y teléfono de contacto del Titular y/o
            sus representantes.
          </li>
          <li>Firma y número de identificación.</li>
          <li>
            Haber sido presentada por los medios dispuestos por TC para la
            recepción de las peticiones, consultas y reclamos.
          </li>
        </ul>

        <p className="leading-relaxed mb-4">
          El término máximo previsto por la{" "}
          <span className="font-bold">ley</span> para resolver su petición,
          consulta y/o reclamación es de quince (15) días hábiles, contado a
          partir del día siguiente a la fecha de su recibo. Cuando no fuere
          posible atender la petición, consulta y/o reclamo dentro de dicho
          término, la sociedad TOWERS CEM S.A.S. identificada con el NIT
          901.851.364-5, informará al interesado los motivos de la demora y la
          fecha en que se atenderá su reclamo, la cual en ningún caso podrá
          superar los ocho (8) días hábiles siguientes al vencimiento del primer
          término.
        </p>

        <p className="leading-relaxed">
          Una vez cumplidos los términos señalados por la{" "}
          <a
            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:underline"
          >
            Ley 1581 de 2012
          </a>{" "}
          y las demás normas que la reglamenten o complementen, el Titular al
          que se deniegue, total o parcialmente, el ejercicio de los derechos de
          acceso, actualización, rectificación, supresión y revocación, podrá
          poner su caso en conocimiento ante la autoridad competente.
        </p>
      </section>

      <section className="mb-6 scroll-mt-24" id="vigencia">
        <h2 className="text-2xl font-semibold mb-4">VIGENCIA</h2>
        <p className="leading-relaxed">
          La presente Política para el Tratamiento de Datos Personales rige a
          partir del <strong>01 de Octubre de 2024</strong>. Las bases de datos
          en las que se registrarán los datos personales tendrán una vigencia
          igual al tiempo en que se mantenga y utilice la información para las
          finalidades descritas en esta política. Una vez se cumpla(n) esa(s)
          finalidad(es) y siempre que no exista un deber legal o contractual de
          conservar su información, sus datos serán eliminados de nuestras bases
          de datos.
        </p>
      </section>
    </div>
  );
};

export default page;
