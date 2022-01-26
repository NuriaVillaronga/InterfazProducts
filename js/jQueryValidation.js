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
        return this.optional( element ) || 
            /^(?=[0-9]{13}$)97[89][]?[0-9]{1,5}?[0-9]?[0-9]+[]?$/.test( value );
    }, "El ISBN13 debe contener <u>13 dígitos</u> además de empezar por <em>978</em> o <em>979</em>");

    $.validator.addMethod( "isbn10Option", function( value, element ) {
        return this.optional( element ) || 
            /^(?=[0-9X]{10}$)[0-9]?[0-9]+[]?[0-9X]$/.test( value );
    }, "El ISBN10 debe contener <u>10 dígitos</u>");

    $.validator.addMethod( "eanOption", function( value, element ) {
        return this.optional( element ) || 
            /^(?=[0-9X]{13}$)[0-9]?[0-9]+[]?[0-9X]$/.test( value );
    }, "El EAN debe contener <u>13 dígitos</u>");

    $.validator.addMethod( "publishingDateFormat", function( value, element ) {
        return this.optional( element ) || 
            /^(?:(0{2,3}[1-9]|0{1,2}[1-9]\d|0[1-9]\d{2}|[1-9]\d{3})(?:(0[1-9]|1[0-2])(0[1-9]|1\d|2[0-8])|(0[13-9]|1[0-2])(29|30)|(0[13578]|1[02])(31))|(\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[13579][26]|[2468][048])00)(0?2)(29))$/.test( value );
    }, "Introduce una fecha válida en formato AAAAMMDD");

    $.validator.addMethod( "editionNumberType", function( value, element ) {
        return this.optional( element ) || value >= 0 && Number.isInteger(Number(value));
    }, "Introduce un número de edición válido");

    $.validator.addMethod( "numberPagesType", function( value, element ) {
        return this.optional( element ) || value >= 0 && Number.isInteger(Number(value));
    }, "Introduce un número de páginas válido");

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
                eanOption : true
            },
            isbn10: {
                isbn10Option : true
            },
            publishingDate: {
                required : true,
                publishingDateFormat : true
            },
            editionNumber: {
                editionNumberType : true
            },
            numberPages: {
                numberPagesType : true
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