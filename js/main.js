$('form').submit(function(e){
    var newSkill = $('input').val();
    var addSkill = `<li><button class="remove">X</button>${newSkill}</li>`;
        $('ul').append(addSkill); 
        e.preventDefault();
        $('form').trigger('reset');

        $('.remove').on('click', function() {
            $(this).parent().remove();
        });
    });