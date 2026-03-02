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
    footer: 'Fuentes: GeoJSON de embalses y polígonos (elaboración propia a partir de datos públicos). Cartografía base: Mapbox. Imágenes: Wikipedia.<br>Plantilla: Mapbox storytelling + Scrollama. © 2026',
    chapters: [
  /** 1, Capítulo introducción */
        {
            id: 'introduccion',
            alignment: 'left',
            hidden: false,
            title: 'Gigantes de agua en Extremadura',
            image: './assets/serena.jpg',
            description: `
                <p>Extremadura alberga algunos de los mayores embalses de Europa.</p>
                <p>Desde el año 2000, su evolución refleja periodos de abundancia y sequía que han marcado el territorio.</p>
                <p>En esta historia interactiva exploraremos los principales embalses del sistema Guadiana-Zújar y veremos un gráfico con la evolución de la capacidad de los últimos 25 años.</p>
            `,
            location: {
                center: [-5.414837, 39.19733],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                { layer: 'embalses-labels', opacity: 1 }
            ],
            onChapterExit: [  ]
        },


/** 2, Capítulo gráfico evolución */   
        {
            id: 'grafico-evolucion',
            alignment: 'center',
            hidden: false,
            title: 'Evolución de la capacidad de los embalses',
            description: `
                <p>Veamos la evolución en los últimos 25 años. Selecciona cada embalse para ver su evolución individual.</p>

<div class="flourish-embed flourish-chart" data-src="visualisation/27766133"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/27766133/thumbnail" width="100%" alt="visualization" /></noscript></div>            `,
            location: {
                center: [-5.414837, 39.219733],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                { layer: 'embalses-labels', opacity: 1 }
            ],
            onChapterExit: []
        },

/** 3, Capítulo gráfico sunburst */   
        {
        id: 'grafico-sunburst',
        alignment: 'center',
        hidden: false,
        title: 'Capacidad máxima de los embalses',
        description: `
            <p>Volumen máximo de cada embalse en el sistema Guadiana-Zújar. Pincha en el gráfico para ver su capacidad individual.</p>

            <div class="flourish-embed flourish-chart" data-src="visualisation/27781909"><noscript><img src="https://public.flourish.studio/visualisation/27781909/thumbnail" width="100%" alt="visualization" /></noscript></div>
        `,
        location: {
            center: [-5.414837, 39.219733],
            zoom: 9,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            { layer: 'embalses-labels', opacity: 1 }
        ],
        onChapterExit: []
            },

/** 4, Capítulo gráfico mapa */
        {
        id: 'grafico-mapa',
        alignment: 'center',
        hidden: false,
        title: 'Mapa de los embalses',
        description: `
            <p>Pasando por encima de cada embalse se muestra información relevante.</p>

        <div class="flourish-embed flourish-chart" data-src="visualisation/27795837"><noscript><img src="https://public.flourish.studio/visualisation/27795837/thumbnail" width="100%" alt="visualization" /></noscript></div>
        `,
        location: {
            center: [-5.414837, 39.219733],
            zoom: 9,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            { layer: 'embalses-labels', opacity: 1 }
        ],
        onChapterExit: []
        },

/** 5, Capítulo Cijara */   
        {
        id: 'cijara',
        alignment: 'right',
        hidden: false,
        title: 'Embalse de Cíjara',
        /* CAMBIO (DESAFIO 2): nombre exacto del polígono en ./data/pol-embalses.geojson (properties.nombre) */
        polygonName: 'Embalse de Cíjara',
        /* CAMBIO (DESAFIO 2): color del resaltado del polígono para este capítulo */
        polygonColor: '#ff0000',
        image: './assets/cijara.jpg',
        description: `
            <p>El Embalse de Cíjara, situado en el curso alto del río Guadiana, es uno de los principales reguladores hídricos del sistema.</p>
            <p>Con una capacidad aproximada de 1.505 hm³, desempeña un papel clave en el abastecimiento, el riego y la producción hidroeléctrica.</p>
        `,
        location: {
            center: [-4.720398689, 39.300898],
            zoom: 11,
            pitch: 45,
            bearing: -10
            },
         markerCenter: [-5.011, 39.378],      // ✅ posición del marcador (a mano)
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'onCijaraEnter',
        callbackExit: 'onCijaraExit',
        onChapterEnter: [
            { layer: 'embalses-labels', opacity: 1 }
        ],
        onChapterExit: []
                },

/** 6, Capítulo Garcia de Sola */
            {
        id: 'garcia_de_sola',
        alignment: 'left',
        hidden: false,
        title: 'Embalse de García de Sola',
        /* CAMBIO (DESAFIO 2): nombre exacto del polígono en ./data/pol-embalses.geojson (properties.nombre) */
        polygonName: 'Embalse de García de Sola',
        /* CAMBIO (DESAFIO 2): color del resaltado del polígono para este capítulo */
        polygonColor: '#ff0000',
        image: './assets/garciasola.jpg',
        description: `
            <p>El embalse de García de Sola forma parte de la cadena de regulación del alto Guadiana.</p>
            <p>Además de almacenar agua, tiene un papel importante en la generación hidroeléctrica y en la gestión de caudales aguas abajo.</p>
        `,
        location: {
            center: [-5.17579908,          39.1939608],
            zoom: 11.3,
            pitch: 45,
            bearing: -10
                },
        
        markerCenter: [-5.185211, 39.146729],      // ✅ posición del marcador (a mano)

        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'onGarciaDeSolaEnter',
        callbackExit: 'onGarciaDeSolaExit',
        onChapterEnter: [
            { layer: 'embalses-labels', opacity: 1 }
        ],
        onChapterExit: []
        },

/** 7, Capítulo Orellana */
        {
        id: 'orellana',
        alignment: 'right',
        hidden: false,
        title: 'Embalse de Orellana',
        /* CAMBIO (DESAFIO 2): nombre exacto del polígono en ./data/pol-embalses.geojson (properties.nombre) */
        polygonName: 'Embalse de Orellana',
        /* CAMBIO (DESAFIO 2): color del resaltado del polígono para este capítulo */
        polygonColor: '#ff0000',
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
                  markerCenter: [-5.536312, 38.986854],      // ✅ posición del marcador (a mano)
   
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'onOrellanaEnter',
        callbackExit: 'onOrellanaExit',
        onChapterEnter: [
            { layer: 'embalses-labels', opacity: 1 }
        ],
        onChapterExit: []
        },
            
/** 8, Capítulo la_serena */
        {
        id: 'la_serena',
        alignment: 'left',
        hidden: false,
        title: 'Embalse de La Serena',
        /* CAMBIO (DESAFIO 2): nombre exacto del polígono en ./data/pol-embalses.geojson (properties.nombre) */
        polygonName: 'Embalse de la Serena',
        /* CAMBIO (DESAFIO 2): color del resaltado del polígono para este capítulo */
        polygonColor: '#ff0000',
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
        
                 markerCenter: [-5.412183, 38.911422],      // ✅ posición del marcador (a mano)

        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'onLaSerenaEnter',
        callbackExit: 'onLaSerenaExit',
        onChapterEnter: [
            { layer: 'embalses-labels', opacity: 1 }
        ],
        onChapterExit: []
        },

/** 9, Capítulo Zújar */
        {
        id: 'zujar',
        alignment: 'right',
        hidden: false,
        title: 'Embalse del Zújar',
        /* CAMBIO (DESAFIO 2): nombre exacto del polígono en ./data/pol-embalses.geojson (properties.nombre) */
        polygonName: 'Embalse del Zújar',
        /* CAMBIO (DESAFIO 2): color del resaltado del polígono para este capítulo */
        polygonColor: '#ff0000',
        image: './assets/zujar.jpg',
        description: `
            <p>El Embalse del Zújar complementa a La Serena en la regulación del río Zújar.</p>
            <p>Juntos ayudan a gestionar recursos hídricos para abastecimiento, riego y estabilidad de caudales aguas abajo.</p>
        `,
        location: {
            center: [-5.41504205, 38.8998516],
            zoom: 13,
            pitch: 45,
            bearing: -10
            },
                 markerCenter: [-5.477636, 38.91811],      // ✅ posición del marcador (a mano)

        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'onZujarEnter',
        callbackExit: 'onZujarExit',
        onChapterEnter: [
            { layer: 'embalses-labels', opacity: 1 }
        ],
        onChapterExit: []
        },


        {
  id: 'explorar',
  alignment: 'left',
  hidden: false,
  title: 'Explora el mapa',
  /*image: './assets/serena.jpg',
  imageAlt: 'Vista panorámica del embalse de La Serena',*/
  description: `
    <p>Ahora puedes explorar libremente: zoom, rotación, navegación, etc. </p>
  `,
  location: {
    center: [-5.414837, 39.219733],
    zoom: 9,
    pitch: 0,
    bearing: 0
  },
  mapAnimation: 'flyTo',
  rotateAnimation: false,
  callback: 'enableExploreMode',
  callbackExit: 'disableExploreMode',
  onChapterEnter: [
    { layer: 'embalses-labels', opacity: 1 }
  ],
  onChapterExit: []
}

]
};
