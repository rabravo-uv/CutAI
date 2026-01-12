/* global $ */

$(function() {
var cor='<div> Coordinadora provisional<br><a  data-toggle="modal" data-target=".bd-cutai01-modal-lg" style="cursor: pointer;">Mtra. Yadira del Carmen Rosales Ruiz.</a>'
var tra='<div> Jefa <br><a  data-toggle="modal" data-target=".bd-cutai02-modal-lg" style="cursor: pointer;">#</a></div>'
var Acc='<div> Jefe <br><a  data-toggle="modal" data-target=".bd-cutai03-modal-lg" style="cursor: pointer;">Mtro. Ricardo Amaro Santos.</a></div>'
var Dat='<div> Oficial <br><a  data-toggle="modal" data-target=".bd-cutai04-modal-lg" style="cursor: pointer;">L.A.E.. Elizabeth Ramzahuer Villa.</a></div>'
var datascource = {
'id': 0, 'name': 'Rectoria', 'title': 'Rector', 'className': 'pipeline1',
'children' :[
    { 'id': 1 ,'name': 'CUTAI', 'title': cor, 'className': 'middle-level',
    'children': [
        { 'id': 2 ,'name': 'Departamento de Transparencia.', 'title': tra,'className': 'product-dept'},
        { 'id': 3 ,'name': 'Departamento de Acceso a la Información.', 'title': Acc, 'className': 'product-dept' },
        { 'id': 4 ,'name': 'Departamento de Datos Personales.', 'title': Dat, 'className': 'product-dept'}
    ],
    }]
};

$('#chart-container').orgchart({
'data' : datascource,
'nodeContent': 'title',
'pan': true,
'zoom': true,
'toggleSiblingsResp': true,/* 
'exportButton': true,
'exportFilename': 'CUTAIrgChart', */
'nodeID': 'id',
'createNode': function($node, data) {
    var secondMenuIcon = $('<i>', {
        'class': 'oci oci-info-circle second-menu-icon',
        click: function() {
        $(this).siblings('.second-menu').toggle();
        }
    });
    var secondMenu = '<div class="second-menu"><img class="avatar" src="https://github.dev/rabravo-uv/CutAI/img/cutai' + data.id + '.jpg"></div>';
    $node.append(secondMenuIcon).append(secondMenu);
}

});

$('#cutai01').modal('toggle');

});