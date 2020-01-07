export default {
  items: [
    {
      name: 'Panel de control',
      url: '/dashboard',
      icon: 'icon-layers',
    },
    {
      title: true,
      name: 'Menú',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Clientes',
      url: '/customers',
      icon: 'icon-people',
    },
    {
      name: 'Servicio Técnico',
      url: '/techservices',
      icon: 'icon-wrench',
    },
    {
      name: 'Estados Servicio',
      url: '/status',
      icon: 'icon-graph',
    },
    {
      name: 'Usuarios',
      url: '/users',
      icon: 'icon-user',
    },
    {
      name: 'Talleres',
      url: '/workshops',
      icon: 'icon-briefcase',
    },
    {
      name: 'Reportes',
      icon: 'icon-chart',
      children: [
        {
          name: 'Ordenes de Servicio',
          url: '/tsreport',
          icon: 'icon-chart',
        },
      ],
    },
    {
      name: 'Configuración',
      url: '/config',
      icon: 'icon-wrench',
    },
  ],
};
