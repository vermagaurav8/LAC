var i = 1;

// Ajax call for parton section /home/gaurav/Desktop/Team/Team.js

$.ajax({
    url: 'assets/JSON/parton.json',
    data: {
        format: 'json'
    },
    error: function() {
        console.log('error');
    },
    dataType: 'json',
    success: function(data) {

        $.each(data, function(index, member) {
            var abcd = $('#parton');
            var element1 =
                '<div class="col-md-4 col-lg-4 col-sm-6 col-6">' +
                '<a class="d-block mx-auto portfolio-item" data-toggle="modal" href="#portfolio-modal-' + i + '">' +
                '<div >' +
                '<img class="img-fluid" src="' + member.Image + '"><br>' +
                '</div>' +
                '<div>' +
                '<p class="designation">' + member.Name + '</p>' +
                '</div>' +
                '</div>'

            i++;

            abcd.append(element1);
        });
    },
    type: 'GET'
});

// AJAX CALL FOR ADVISORY BOARD

$.ajax({
    url: 'assets/JSON/advisory.json',
    data: {
        format: 'json'
    },
    error: function() {
        console.log('error');
    },
    dataType: 'json',
    success: function(data) {

        $.each(data, function(index, member) {
            var abcd = $('#A-board');
            var element1 =
                '<div class="col-md-4 col-lg-3 col-sm-6 col-6">' +
                '<a class="d-block mx-auto portfolio-item" data-toggle="modal" href="#portfolio-modal-' + i + '">' +
                '<div >' +
                '<img class="img-fluid abc " src="' + member.Image + '"><br>' +
                '</div>' +
                '<div>' +
                '<p class="designation">' + member.Name + '</p>' +
                '</div>' +
                '</div>'

            i++;

            abcd.append(element1);
        });
    },
    type: 'GET'
});

// AJAX CALL FOR  CORE-TEAM 

$.ajax({
    url: 'assets/JSON/coreteam.json',
    data: {
        format: 'json'
    },
    error: function() {
        console.log('error');
    },
    dataType: 'json',
    success: function(data) {

        $.each(data, function(index, member) {
            var abcd = $('#c-team');
            var element1 =
                '<div class="col-md-4 col-lg-3 col-sm-6 col-6">' +
                '<a class="d-block mx-auto portfolio-item" data-toggle="modal" href="#portfolio-modal-' + i + '">' +
                '<div >' +
                '<img class="img-fluid abc " src="' + member.Image + '"><br>' +
                '</div>' +
                '<div>' +
                '<p class="designation">' + member.Name + '</p>' +
                '</div>' +
                '</div>'

            i++;

            abcd.append(element1);
        });
    },
    type: 'GET'
});