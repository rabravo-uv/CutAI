/* global $ */

google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    [{'v':'Rectoria','f':'Rectoria<div style="color:red; font-style:italic"></div>'},'','Rectoria'],
    [{'v':'Coordinacion','f':'Coordinadion<div style="color:blue; font-style:italic">Mtro. Gerardo García Ricardo</div>'},'Rectoria',''],
    [{'v':'Jefa de Departamento de Transparencia.','f':'Jefa de Departamento de Transparencia.<div style="color:blue; font-style:italic">Mtra. Yadira del Carmen Rosales Ruiz</div>'},'Coordinacion',''],
    [{'v':'Jefe de Departamento de Acceso a la Información.','f':'Jefe de Departamento de Acceso a la Información.<div style="color:blue; font-style:italic">L.A. Carlos David Villanueva Medina</div>'},'Coordinacion',''],
    [{'v':'Encargada del Departamento de Datos Personales.','f':'Encargada del Departamento de Datos Personales.<div style="color:blue; font-style:italic">L.A.E.. Elizabeth Ramzahuer Villa</div>'},'Coordinacion',''],
    
  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {'allowHtml':true});
}

