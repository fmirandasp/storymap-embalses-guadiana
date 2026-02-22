var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZm1pcmFuZGEyMiIsImEiOiJjbWx3MXNydjgwOGV5M2dxd3hsZjFidjgwIn0.6iBZ0B7cZsR4f5FYJoZM7w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Gigantes de agua en Extremadura',
    subtitle: 'Embalses del sistema Guadiana-Zújar',
    //byline: 'Fernando Miranda',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
  {
  id: 'introduccion',
  alignment: 'left',
  hidden: false,
  title: 'Gigantes de agua en Extremadura',
  image: './assets/serena.jpg',
  description: `
    <p>Extremadura alberga algunos de los mayores embalses de Europa.</p>
    <p>Desde el año 2000, su evolución refleja periodos de abundancia y sequía que han marcado el territorio.</p>
    <p>En esta historia interactiva exploraremos cómo han cambiado los principales embalses del sistema Guadiana-Zújar.</p>
  `,
  location: {
    center: [-5.414837, 39.219733],
    zoom: 9,
    pitch: 0,
    bearing: 0
  },
  onChapterEnter: [
    { layer: 'embalses-labels', opacity: 1 }
  ],
  onChapterExit: [  ]
},

{
  id: 'cijara',
  alignment: 'right',
  hidden: false,
  title: 'Embalse de Cíjara',
  image: './assets/cijara.jpg',
  description: `
    <p>El Embalse de Cíjara, situado en el curso alto del río Guadiana, es uno de los principales reguladores hídricos del sistema.</p>
    <p>Con una capacidad aproximada de 1.505 hm³, desempeña un papel clave en el abastecimiento, el riego y la producción hidroeléctrica.</p>
  `,
  location: {
    center: [-4.70398689, 39.300898],
    zoom: 11,
    pitch: 45,
    bearing: -10
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: 'onCijaraEnter',
  callbackExit: 'onCijaraExit',
  onChapterEnter: [
    { layer: 'embalses-labels', opacity: 1 }
  ],
  onChapterExit: []
},
      {
  id: 'garcia_de_sola',
  alignment: 'left',
  hidden: false,
  title: 'Embalse de García de Sola',
  image: './assets/garciasola.jpg',
  description: `
    <p>El embalse de García de Sola forma parte de la cadena de regulación del alto Guadiana.</p>
    <p>Además de almacenar agua, tiene un papel importante en la generación hidroeléctrica y en la gestión de caudales aguas abajo.</p>
  `,
  location: {
    center: [-5.1579908,          39.1939608],
    zoom: 11.3,
    pitch: 45,
    bearing: -10
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: 'onGarciaDeSolaEnter',
  callbackExit: 'onGarciaDeSolaExit',
  onChapterEnter: [
    { layer: 'embalses-labels', opacity: 1 }
  ],
  onChapterExit: []
},
{
  id: 'orellana',
  alignment: 'right',
  hidden: false,
  title: 'Embalse de Orellana',
  image: './assets/orellana.jpg',
  description: `
    <p>El embalse de Orellana es uno de los más conocidos por sus usos recreativos y su entorno natural.</p>
    <p>Es clave para el abastecimiento y el regadío en la zona, y su nivel refleja muy bien los ciclos de sequía y recuperación.</p>
  `,
  location: {
    center: [-5.243, 39.037],
    zoom: 11,
    pitch: 45,
    bearing: -10
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: 'onOrellanaEnter',
  callbackExit: 'onOrellanaExit',
  onChapterEnter: [
    { layer: 'embalses-labels', opacity: 1 }
  ],
  onChapterExit: []
      },
{
  id: 'la_serena',
  alignment: 'left',
  hidden: false,
  title: 'Embalse de La Serena',
  image: './assets/serena.jpg',
  description: `
    <p>El Embalse de La Serena es uno de los mayores de España por capacidad y una pieza clave del sistema Zújar–Guadiana.</p>
    <p>Su evolución desde el año 2000 refleja con claridad los periodos de sequía y recuperación que afectan a la región.</p>
  `,
  location: {
    center: [-5.31783, 38.812],
    zoom: 10.7,
    pitch: 45,
    bearing: -10
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: 'onLaSerenaEnter',
  callbackExit: 'onLaSerenaExit',
  onChapterEnter: [
    { layer: 'embalses-labels', opacity: 1 }
  ],
  onChapterExit: []
},
{
  id: 'zujar',
  alignment: 'left',
  hidden: false,
  title: 'Embalse del Zújar',
  image: './assets/zujar.jpg',
  description: `
    <p>El Embalse del Zújar complementa a La Serena en la regulación del río Zújar.</p>
    <p>Juntos ayudan a gestionar recursos hídricos para abastecimiento, riego y estabilidad de caudales aguas abajo.</p>
  `,
  location: {
    center: [-5.47504205, 38.916],
    zoom: 13,
    pitch: 45,
    bearing: -10
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: 'onZujarEnter',
  callbackExit: 'onZujarExit',
  onChapterEnter: [
    { layer: 'embalses-labels', opacity: 1 }
  ],
  onChapterExit: []
}
]
};
