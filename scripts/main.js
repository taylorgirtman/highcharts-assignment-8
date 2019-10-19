Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Principals by highest degree received'
    },
    subtitle: {
        text: 'Source: <a href="https://nces.ed.gov/surveys/sass">US Dept. of Education Schools and Staffing Survey, 2011-2012 school year</a>'
    },
    xAxis: {
        categories: ['Bachelors', 'Masters', 'Specialist or professional', 'Doctorate'],
        title: {
            text: 'Degree type'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of teachers',
            align: 'high',
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix:' teachers'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Public',
        data: [1910, 55240, 23520, 8860]
    }, {
        name: 'Private',
        data: [7310, 12590, 2600, 2300]
        }
		]});


    Highcharts.chart('chart', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Principal salaries overtime'
      },
      subtitle: {
        text: 'Source: <a href="https://nces.ed.gov/surveys/sass">US Dept. of Education Schools and Staffing Survey</a>'
      },
      xAxis: {
        categories: ['2003-04', '2007-08', '2011-12']
      },
      yAxis: {
        title: {
          text: 'Salaries, dollars'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Private principals, all average',
        data: [48000, 57500, 65300]
      }, {
        name: 'Private Principals, less than 3 years',
        data: [39800, 48000, 53100]
      }, {
        name: 'Public Principals, all average',
        data: [75500,85700,90500]
      }, {
        name: 'Public Principals, less than 3 years',
        data: [63700,80700,83500]
      }]
    });
