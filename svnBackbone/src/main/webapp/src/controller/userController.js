/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

App.Controller.UserController = Backbone.View.extend({
    
    el: '#main',
    
    initialize: function(options) {
        this.editTemplate = _.template($('#user').html());
        var self = this;
        Backbone.on('user-create', function(params) {
            self.create(params);
        });
        Backbone.on('user-save', function(params) {
            self.save(params);
        });
        Backbone.on('user-cancel', function(params) {
            self.cancel(params);
        });
    },
    
    create: function() {
        this.userModel = new App.Model.UserModel();
        this._renderEdit();
    },
    
    save:function() { 
        var model = $('#userForm').serializeObject();
        var mssg = "El usuario ";
        var name = model.firstName + " " + model.lastName;
        mssg += name;
        mssg += " nació el " + model.date;        
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-info\">" + mssg + "</div>";;
        //alert('saved model: '+JSON.stringify(model));
    },
    
    cancel: function(){
        alert('Cancel');
    },
    
    events: {
    'mouseover #date' : 'createDatePicker'
  },

  createDatePicker:function(e) {
    var view = this;
    
    $(e.currentTarget).datepicker({
      maxDate:'-2',
      defaultDate:view.selectedDate,
      onSelect:function(dateText,datePicker) {
        console.log('onSelect',dateText);
        view.selectedDate = dateText;  
      }
    });
  },
    
    _renderEdit: function() {
        var self = this;
        self.$el.html(self.editTemplate({user: self.userModel}));
    }
});

