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
      name: 'Roles de usuario',
      url: '/roles',
      icon: 'icon-user-unfollow',
    },
    {
      name: 'Reportes',
      icon: 'icon-chart',
      children: [
        {
          name: 'Servicio Técnico',
          url: '/reports/techservices',
          icon: 'icon-chart',
        },
      ],
    },
    {
      name: 'Configuración',
      url: '/config',
      icon: 'icon-wrench',
    },
    {
      name: 'Cerrar Sesión',
      url: '/logout',
      icon: 'icon-logout',
      attributes: { onClick: () => { alert('Cerrar Sesión') } }
    },
  ],
};
