export const team = [
    {
        id: 1,
        name: 'Miley Velásquez',
        photo: '/images/team/Miley.png',
        position: 'Dir. Operaciones',
        social: {
            instagram: 'https://www.instagram.com/mileyvelasquezm',
            linkedin : 'https://www.linkedin.com/in/mileyvelasquez'
        },
        about: 'Profesional en negocios internacionales con énfasis en emprendimiento, Universidad del Norte. Técnico en conservación de recursos naturales, SENA. Emprendedora desde hace 4 años. Más de 3 años de experiencia en comercio exterior e internacionalización, gestión, estrategia y administración. Liderando la creación de empresas, proveedores, nichos de mercado, estrategias de go-to-market y comunicaciones en medios digitales.',
        slug: 'miley-velasquez'
    },
    {
        id: 2,
        name: 'Carlos Torres',
        photo: '/images/team/Carlos.png',
        position: 'CEO & Founder de TOWERS CEM',
        social: {
            instagram: 'https://www.instagram.com/catorresc09',
            linkedin : 'https://www.linkedin.com/in/carlostorrescuello'
        },
        about: 'CEO Fundador Towers Cem, lidera el desarrollo de tecnologías innovadoras en cemento. Investigador científico Jr. en materiales semiconductores para electrónica. Estudiante de Ingeniería Eléctrica, Universidad de La Costa. Tecnólogo en mantenimiento electromecánico, SENA. Emprendedor desde hace 4 años con amplia experiencia en la producción y caracterización de materiales cerámicos para ingeniería.',
        slug: 'carlos-torres'
    },
    {
        id: 3,
        name: 'Ivan Torres',
        photo: '/images/team/Ivan.png',
        position: 'Dir. de proyectos',
        social: {
            instagram: 'https://www.instagram.com/i_torresj',
            linkedin : 'https://www.linkedin.com/in/ivan-david-torres-jimenez'
        },
        about: 'Ingeniero electrónico de la Universidad del Norte con conocimiento en robótica móvil, programación y energía fotovoltaica. Experiencia en gerencia de proyectos nacionales e internacionales, liderando personal multidisciplinario en sistemas electrónicos de infraestructura exterior e interior.',
        slug: 'ivan-torres'
    },
    {
        id: 4,
        name: 'Santiago Reano',
        photo: '/images/team/Santi.png',
        position: 'Dir. de proyectos',
        social: {
            instagram: '',
            linkedin : 'https://www.linkedin.com/in/santiago-reano'
        },
        about: 'Estudiante apasionado de Negocios Internacionales en la Universidad del Norte. En Towers Cem se centra en liderar el desarrollo de la parte comercial. Cuenta con habilidades en ventas, negociación y creación de empresas que aplico de manera efectiva para impulsar la viabilidad del proyecto.',
        slug: 'santiago-reano'
    },
    {
        id: 5,
        name: 'Jose Torres',
        photo: '/images/team/Jose.png',
        position: 'Dir. de proyectos',
        social: {
            instagram: '',
            linkedin : 'https://www.linkedin.com/in/josetorres-gonzalez'
        },
        about: 'Estudiante de negocios internacionales, Universidad del Norte.',
        slug: 'jose-torres'
    },
]


export const getMemberBySlug = async( slug ) => {
    return team.find( member => member.slug === slug )
}

export const getTeam = async() => {
    return team
}