export const products = [
  {
    title: "Cemento X",

    name: "Cemento uso general",

    description:
      "Nuestro producto ofrece propiedades inteligentes y descontaminantes. Al contar con nuevos materiales de fabricación, nuestro cemento se excita con la radiación solar, reaccionando con los gases contaminantes suspendidos en la atmósfera,  siendo capaces de eliminar gran parte de los NOx. SOx, partículas volátiles y material particulado. ",

    image: {
      front: "/images/products/generalF.png",
      back: "/images/products/Tipo1_espalda.png",
      left: "/images/products/Tipo1_Lado1.png",
      right: "/images/products/Tipo1_Lado2.png"
    },

    video: "/videos/videoCemento.mp4",

    cards: [
      {
        id: "01",
        description: "Presentación saco 50kg",
      },
      {
        id: "02",
        description: "Mayor durabilidad",
      },
      {
        id: "03",
        description: "Mejor trabajabilidad",
      },
      {
        id: "04",
        description: "Mejor acabado y textura",
      },
      {
        id: "05",
        description: "Tiempos de fraguados controlados",
      },
      {
        id: "06",
        description: "Menor tasa de mantenimiento",
      },
    ],
    benefits: [
      {
        id: 1,
        title: 'Propiedades inteligentes',
      },
      {
        id: 2,
        title: 'Alta resistencia en menor tiempo',
      },
      {
        id: 3,
        title: 'Nuevos materiales de fabricación',
      },
      {
        id: 4,
        title: 'Cuenta con propiedades auto limpiantes',
      },
      {
        id: 5,
        title: 'Altos niveles de durabilidad y sostenibilidad',
      },
      {
        id: 6,
        title: 'Ayuda a reducir las emisiones de CO₂',
      },
    ],
    usesAndApplications:[
      {
        id: 1,
        content: "Elaboración de morteros y concretos"
      },
      {
        id: 2,
        content: "Construcción de cimientos, muros, columnas, vigas y losas"
      },
      {
        id: 3,
        content: "Elementos de prefabricados"
        },
    ],

    slug: 'uso-general',

    dataSheet: '/files/TC_FICHA_TECNICA_GENERAL.pdf'
  },


  {
    title: "Cemento X",

    name: "Cemento Estructural",

    description:
      "El cemento X tipo ART uso Estructural está elaborado con materias primas cuidadosamente seleccionadas, lo que garantiza unas altas resistencias mecánicas tanto iniciales como finales, proporcionando una alta manejabilidad y un rendimiento óptimo.",

    image: {
      front: "/images/products/1TC_PACK_BLANCO_FRONTAL.png",
      back: "/images/products/1TC_PACK_BLANCO_ESPALDA.png",
      left: "/images/products/1TC_PACK_BLANCO_BORDE_IZQUIERDO.png",
      right: "/images/products/1TC_PACK_BLANCO_BORDE_DERECHO.png",
    },

    video: "/videos/videoCemento.mp4",

    fichaTechnica: "/files/FICHA_TECNICA.pdf",

    beneficios: {},

    cards: [
      {
        id: "01",
        description: "Presentación saco 42.5kg",
      },
      {
        id: "02",
        description: "Mayor resistencia en menor tiempo",
      },
      {
        id: "03",
        description: "Mejor acabado y textura",
      },
      {
        id: "04",
        description: "Autolimpiante",
      },
      {
        id: "05",
        description: "Tiempos de fraguados controlados",
      },
      {
        id: "06",
        description: "Mayor durabilidad",
      },
    ],

    benefits: [
      {
        id: 1,
        title: 'Propiedades inteligentes',
      },
      {
        id: 2,
        title: 'Alta resistencia en menor tiempo',
      },
      {
        id: 3,
        title: 'Nuevos materiales de fabricación',
      },
      {
        id: 4,
        title: 'Cuenta con propiedades auto limpiantes',
      },
      {
        id: 5,
        title: 'Altos niveles de durabilidad y sostenibilidad',
      },
      {
        id: 6,
        title: 'Ayuda a reducir las emisiones de CO₂',
      },
    ],

    usesAndApplications:[
      {
        id: 1,
        content: "Elaboración de morteros y concretos"
      },
      {
        id: 2,
        content: "Construcción de cimientos, muros, columnas, vigas y losas"
      },
      {
        id: 3,
        content: "Elementos de prefabricados"
        },
    ],
    slug: 'uso-estructural',

    dataSheet: '/files/FICHA_TECNICA.pdf'
  },
]

export const getProductBySlug = async (slug) => {
  return products.find((product) => product.slug === slug)
}

export const getProducts = async () => {
  return products
}
