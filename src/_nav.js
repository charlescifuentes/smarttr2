export default {
  items: [
    {
      name: 'Panel de control',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
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
      icon: 'icon-user',
    },
    {
      name: 'Usuarios',
      url: '/users',
      icon: 'icon-eyeglass',
    },
    {
      name: 'Servicio Técnico',
      url: '/techservices',
      icon: 'icon-wrench',
    },      
    {
      name: 'Reportes',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Clientes',
          url: '/reports/customers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Servicio Técnico',
          url: '/reports/techservices',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Configuración',
      url: '/configuration',
      icon: 'icon-star',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Cerrar Sesión',
      url: '/logout',
      icon: 'icon-logout',
    },
  ],
};
