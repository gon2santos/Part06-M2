$('#boton').click(function () {
    //    $.get('http://localhost:5000/amigos', function(data){
    //        console.log(data);
    //    });

    // $.getJSON('http://localhost:5000/amigos', function(data){
    //     $('#loading_gif').hide();
    //     $.each(data, function(i, user){
    //         $('ul#users').append('<li>'+ user.name +'</li>');
    //     })
    //})

    $.ajax({
        method: 'GET',
        url: 'http://localhost:5000/amigos',
        dataType: 'json'
    }).done(function (data) {
        $('#loading_gif').hide();
        $('ul#users').empty();
        $.each(data, function (i, user) {
            $('ul#users').append('<li>' + user.name + ', ' + user.age + ', ' + user.email + '</li>');
        })
    })
});

$('#search').click(function () {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:5000/amigos/' + $('#input').val(),
        dataType: 'json'
    }).done(function (data) {
        $('span#amigo').text(data.name + ', ' + data.age + ', ' + data.email);
    })
})

$('button#delete').click(function () {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:5000/amigos/' + $('input#inputDelete').val(),
        dataType: 'json'
    }).done(function(){
        $('span#sucess').text('User Deleted!')
    })

    
})