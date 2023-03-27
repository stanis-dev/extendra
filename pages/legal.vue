<script setup lang="ts">
import { Page } from '~~/types/contentTypes'

const page: Page = {
  title: 'Aviso legal',
  body: [
    [
      {
        type: 'h1',
        content: 'Aviso legal'
      }
    ],
    [
      {
        type: 'h2',
        content: 'Titular H2'
      },
      {
        type: 'paragraph',
        content:
          "Cuando para el acceso a determinados contenidos o servicio sea necesario facilitar datos de carácter personal, los Usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. La empresa dará a dichos datos el tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en la sección de <a class='link-blue' href=''>Política de Privacidad.</a>"
      }
    ],
    [
      {
        type: 'h2',
        content: 'Titular H2'
      },
      {
        type: 'paragraph',
        content:
          'A través del Sitio Web, les ofrecemos a los Usuarios la posibilidad de acceder a la información sobre nuestros servicios.'
      }
    ],
    [
      {
        type: 'h2',
        content: 'Titular H2'
      },
      {
        type: 'paragraph',
        content: `El Usuario reconoce y acepta que todos los contenidos que se muestran en el Espacio Web y en especial, diseños, textos, imágenes, logos, iconos, botones, software, nombres comerciales, marcas, o cualesquiera otros signos susceptibles de utilización industrial y/o comercial están sujetos a derechos de Propiedad Intelectual y todas las marcas, nombres comerciales o signos distintivos, todos los derechos de propiedad industrial e intelectual, sobre los contenidos y/o cualesquiera otros elementos insertados en el página, que son propiedad exclusiva de la empresa y/o de terceros, quienes tienen el derecho exclusivo de utilizarlos en el tráfico económico. Por todo ello el Usuario se compromete a no reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma comunicar públicamente, transformar o modificar tales contenidos manteniendo indemne a la empresa de cualquier reclamación que se derive del incumplimiento de tales obligaciones. En ningún caso el acceso al Espacio Web implica ningún tipo de renuncia, transmisión, licencia o cesión total ni parcial de dichos derechos, salvo que se establezca expresamente lo contrario. Las presentes Condiciones Generales de Uso del Espacio Web no confieren a los Usuarios ningún otro derecho de utilización, RRHH, alteración, explotación, reproducción, distribución o comunicación pública del Espacio Web y/o de sus Contenidos distintos de los aquí expresamente previstos. Cualquier otro uso o explotación de cualesquiera derechos estará sujeto a la previa y expresa autorización específicamente otorgada a tal efecto por la empresa o el tercero titular de los derechos afectados.
`
      },
      {
        type: 'paragraph',
        content:
          'Únicamente será responsable de eliminar, lo antes posible, los contenidos que puedan generar tales perjuicios, siempre que así se notifique. En especial no seremos responsables de los perjuicios que se pudieran derivar, entre otros, de:'
      },
      {
        type: 'ol',
        content: [
          'Interferencias, interrupciones, fallos, omisiones, averías telefónicas, retrasos, bloqueos o desconexiones en el funcionamiento del sistema electrónico, motivadas por deficiencias, sobrecargas y errores en las líneas y redes de telecomunicaciones, o por cualquier otra causa ajena al control de la empresa.',
          'Intromisiones ilegítimas mediante el uso de programas malignos de cualquier tipo y a través de cualquier medio de comunicación, tales como virus informáticos o cualesquiera otros.',
          'Abuso indebido o inadecuado del Espacio Web.',
          'Errores de seguridad o navegación producidos por un mal funcionamiento del navegador o por el uso de versiones no actualizadas del mismo. El administrador del espacio web se reservan el derecho de retirar, total o parcialmente, cualquier contenido o información presente en el Espacio Web.'
        ]
      }
    ]
  ]
}
</script>

<template>
  <div class="legal-page max-w-[1000px]">
    <ContentSection v-for="section in page.body" :section="section" />
  </div>
  <Banner text="Y hoy, ¿a dónde quieres ir?" type="outside" />
</template>
