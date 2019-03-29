var counter = 1;
$('#img').on('click', function(){
    $('#counter').text(counter.toString());
    counter++;
});

$('#btn-counter').on('click', function(){
    console.log('Done');
    $('#counter').text("0");
    counter = 1;
});