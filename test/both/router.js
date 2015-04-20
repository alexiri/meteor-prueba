Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('inicio', {
    path: '/'
  });

  this.route('datos', {
    path: '/dato/:_id',
    data: function() {
      return Datos.findOne({_id: this.params._id});
    }
  });
});
