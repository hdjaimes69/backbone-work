/* ========================================================================
 * Copyright 2014 monitor
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 monitor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/
define(['model/_addressModel'], function() {
    App.Model.AddressModel = App.Model._AddressModel.extend({

 	validate: function(attrs,options){
            var validationMessage = "";
            
                        //TODO Ninguno de los campos debe ser vac�o
            var validationMessage = "";
            //x == null || x == ""
            if(attrs.street == null || attrs.street == ""){
                validationMessage = "The Street can't be empty";
            }
            //attrs.aveneu
            if(attrs.aveneu == null || attrs.aveneu == "")
            {
                validationMessage = "The Aveneu can't be empty";
            }
            if(attrs.cityId == null || attrs.cityId == "")
            {
                validationMessage = "The City Id can't be empty";
            }
            //TODO Los campos Street y Avenue deben ser n�meros
            
            if(isNaN(attrs.street))
            {
                validationMessage = "The Street must be a number";
            }
            if(isNaN(attrs.aveneu))
            {
                validationMessage = "The Aveneu must be a number";
            }
            
            //TODO Dichos n�meros no deben tener m�s de tres d�gitos
            
            if((attrs.street).length > 3)
            {
                validationMessage = "The Street number must not exceed 3 digits";
            }
            if((attrs.aveneu).length > 3)
            {
                validationMessage = "The Aveneu number must not exceed 3 digits";
            }            
            
            //TODO Se debe especificar el pa�s de la direcci�n
            if(validationMessage.length>0){
               return validationMessage;
            }
        }

    });

    App.Model.AddressList = App.Model._AddressList.extend({
        model: App.Model.AddressModel
    });

    return  App.Model.AddressModel;

});