Template.datos.helpers({
  datoss: function () {
    var template = Template.instance();
    return Datos.findOne({_id: template.data.id});
  }
});
