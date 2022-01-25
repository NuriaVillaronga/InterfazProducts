$(function() {

    $.validator.setDefaults({
        errorClass: 'text-danger',
        highlight: function(element) {
          $(element)
            .closest('.requiredInputs')
            .addBack().css( "border-color", "red" );
        },
        unhighlight: function(element) {
          $(element)
            .closest('.requiredInput')
            .addBack().css( "border-color", "rgb(185, 185, 185)" ); //Cambiar al color necesario
        },
      });

    $.validator.addMethod( "isbn13Option", function( value, element ) {
        return this.optional( element ) || value === "15";
    }, "El ISBN13 solo puede tomar el valor 15" );

    $.validator.addMethod( "eanOption", function( value, element ) {
        return this.optional( element ) || value === "03";
    }, "El EAN solo puede tomar el valor 03" );

    $.validator.addMethod( "isbn10Option", function( value, element ) {
        return this.optional( element ) || value === "02";
    }, "El ISBN10 solo puede tomar el valor 02");

    $.validator.addMethod( "publishingDateFormat", function( value, element ) {
        return this.optional( element ) || 
            /^(?:(0{2,3}[1-9]|0{1,2}[1-9]\d|0[1-9]\d{2}|[1-9]\d{3})(?:(0[1-9]|1[0-2])(0[1-9]|1\d|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])(31))|(\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[13579][26]|[2468][048])00)(0?2)(29))$/.test( value );
    }, "Fecha de publicación debe contener una fecha válida en formato AAAAMMDD");

    $(".dataForm").validate({
        rules: {
            recordReference: {
                required : true
            },
            isbn13: {
                required : true,
                isbn13Option : true
            },
            ean: {
                required : true,
                eanOption: true
            },
            isbn10: {
                isbn10Option : true
            },
            publishingDate: {
                required : true,
                publishingDateFormat : true
            }
        },
        messages: {
            recordReference: {
                required : 'Registro de referencia es obligatorio'
            },
            isbn13: {
                required : 'Debes añadir al menos un ISBN13 o un EAN'
            },
            ean: {
                required : 'Debes añadir al menos un ISBN13 o un EAN'
            },
            publishingDate: {
                required : 'Fecha de publicación es obligatorio'
            }
        }
    });
});