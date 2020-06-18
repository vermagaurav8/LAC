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
                '<div class="col-md-4 col-lg-4 col-sm-12 col-12">' +
                '<a class="d-block mx-auto portfolio-item" data-toggle="modal" href="#' + member.portfolioId + '">' +
                '<div >' +
                '<img class="img-fluid" src="' + member.Image + '"><br>' +
                '</div>' +
                '<div>' +
                '<p class="designation">' + member.Name + '</p>' +
                '</div>' +
                '</div>'


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
                '<a class="d-block mx-auto portfolio-item" data-toggle="modal" href="#' + member.portfolioId + '">' +
                '<div >' +
                '<img class="img-fluid abc " src="' + member.Image + '"><br>' +
                '</div>' +
                '<div>' +
                '<p class="designation">' + member.Name + '</p>' +
                '</div>' +
                '</div>'


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
                '<a class="d-block mx-auto portfolio-item" data-toggle="modal" href="#' + member.portfolioId + '">' +
                '<div >' +
                '<img class="img-fluid abc " src="' + member.Image + '"><br>' +
                '</div>' +
                '<div>' +
                '<p class="designation">' + member.Name + '</p>' +
                '</div>' +
                '</div>'

            abcd.append(element1);
        });
    },
    type: 'GET'
});

// AJAX call for team members

$.ajax({
    url: 'assets/JSON/member.json',
    data: {
        format: 'json'
    },
    error: function() {
        console.log('error');
    },
    dataType: 'json',
    success: function(data) {

        $.each(data, function(index, member) {
            var abcd = $('#mem-sec');
            var element1 =
                '<div class="col-md-4 col-lg-3 col-sm-6 col-6">' +
                '<a class="d-block mx-auto portfolio-item" data-toggle="modal" href="#' + member.portfolioId + '">' +
                '<div>' +
                '<p>' + member.Name + '</p>' +
                '</div>' +
                '</div>'


            abcd.append(element1);
        });
    },
    type: 'GET'
});



// AJAX CALL FOR MODAL SECTION


$.ajax({
    url: 'assets/JSON/Modal.json',
    data: {
        format: 'json'
    },
    error: function() {
        console.log('error');
    },
    dataType: 'json',
    success: function(data) {

        $.each(data, function(index, member) {
            var abcd = $('#page-top');
            var element1 = '<div class="modal text-4" role="dialog" tabindex="-1" id="' + member.portfolioId + '">' +
                '<div class="modal-dialog modal-lg modal-dialog-centered" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
                '</div>' +
                '<div class="modal-body">' +
                '<div class="container text-center">' +
                '<div class="row">' +
                '<div class="col-lg-12 col-sm-12 bsmod">' +
                '<h4>' + member.Name + '&nbsp;<em>(' + member.Designation + ')</em></h4>' +
                '<img src="' + member.Image + '"> <br>' +
                '<p align="justify">' + member.Description + '</p><br>' +
                '<a class="btn  btn-social  rounded-circle" role="button" href="' + member.FacebookUrl + '" target="_blank"><i class="fab fa-facebook icon-resize-small"></i></a> &nbsp;' +
                '<a class="btn  btn-social  rounded-circle" role="button" href="' + member.InstagramUrl + '" target="_blank"><i class="fab fa-instagram "></i></a> &nbsp;' +
                '<a class="btn  btn-social  rounded-circle" role="button" href="' + member.TwitterUrl + '" target="_blank"><i class="fab fa-twitter" ></i></a> &nbsp;' +
                '<a class="btn  btn-social  rounded-circle" role="button" href="' + member.LinkdinUrl + '" target="_blank"><i class="fab fa-linkedin" ></i></a> &nbsp;' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'




            abcd.append(element1);
        });
    },
    type: 'GET'
});