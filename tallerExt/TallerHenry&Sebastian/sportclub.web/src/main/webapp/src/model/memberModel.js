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
define(['model/_memberModel'], function() {
    App.Model.MemberModel = App.Model._MemberModel.extend({

 	validate: function(attrs,options){
            var validationMessage = "";
            if (!attrs.name || !attrs.firsName || !attrs.lastName || !attrs.birthDate || !attrs.enable || !attrs.docNumber|| !attrs.documenttypeId  || !attrs.partnerId )
            {
                validationMessage = "Ninguno de los campos puede estar vacio";
            }
            function compara_fecha(fecha)
            {
                //Retorna true si la fecha ingresada es mayor o igual a la actual
                
                
                var fechaActual = new Date();
                var diaActual = fechaActual.getDate();
                var mmActual = fechaActual.getMonth() + 1;
                var yyyyActual = fechaActual.getFullYear();
                var FechaNac = fecha.split("/");
                var diaCumple = FechaNac[0];
                var mmCumple = FechaNac[1];
                var yyyyCumple = FechaNac[2];
               
                if(yyyyCumple>yyyyActual)
                {
                    return true;
                }
                else if(yyyyCumple===yyyyActual)
                {
                    if(mmCumple>mmActual)
                    {
                        return true;
                    }
                    else if(mmCumple===mmActual)
                    {
                        if(diaCumple>=diaActual)
                        {
                            return true;
                        }
                    }
                    
                }
                return false;
            }
            function calcular_Edad(fecha) {
                var fechaActual = new Date();
                var diaActual = fechaActual.getDate();
                var mmActual = fechaActual.getMonth() + 1;
                var yyyyActual = fechaActual.getFullYear();
                var FechaNac = fecha.split("/");
                var diaCumple = FechaNac[0];
                var mmCumple = FechaNac[1];
                var yyyyCumple = FechaNac[2];
                //retiramos el primer cero de la izquierda
                if (mmCumple.substr(0,1) == 0) {
                    mmCumple= mmCumple.substring(1, 2);
                }
                //retiramos el primer cero de la izquierda
                if (diaCumple.substr(0, 1) == 0) {
                    diaCumple = diaCumple.substring(1, 2);
                }
                var edad = yyyyActual - yyyyCumple;

                //validamos si el mes de cumplea�os es menor al actual
                //o si el mes de cumplea�os es igual al actual
                //y el dia actual es menor al del nacimiento
                //De ser asi, se resta un a�o
                if ((mmActual < mmCumple) || (mmActual == mmCumple && diaActual < diaCumple)) {
                edad--;
                }
                return edad;
        }
            var edad=calcular_Edad(attrs.birthDate);
            
            if(edad>100)
            {
                validationMessage = "La edad del miembro del club no puede superar los 100 a�os";
            }
            if(attrs.docNumber.length < 5)
            {
                validationMessage = "El n�mero de documento debe tener por lo menos 5 caracteres";                
            }
            if(attrs.documenttypeId.length == 0)
            {
                validationMessage = "Se debe especificar el tipo de documento";
            }
            if(compara_fecha(birthDate))
            {
                validationMessage = "La fecha de nacimiento del miembro no puede superar ni ser igual a la fecha actual";                                
            }
            if(validationMessage.length>0){
               return validationMessage;
            }
        }
       
    });

    App.Model.MemberList = App.Model._MemberList.extend({
        model: App.Model.MemberModel
    });

    return  App.Model.MemberModel;

});