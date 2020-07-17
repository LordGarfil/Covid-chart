
async function renderChart(){
  const ctx = document.getElementById("chart").getContext("2d");
  const data = await setCases()
  totalCasesChart(ctx, data);
}

totalCasesChart =  (ctx, data) => {
  
  var objChart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
        labels: data.confirmed.map(item => item.date),
      datasets: [
          {
            label: "Confirmados",
            data: data.confirmed.map(item => item.cases),
            borderColor: "orange"
          },
          {
            label: "Activos",
            data:  data.active.map(item => item.cases),
            borderColor: "blue"
          },
          {
            label: "Muertes",
            data: data.deaths.map(item => item.cases),
            borderColor: "red"
          },
          {
              label: "Recuperados",
              data: data.recovered.map(item => item.cases),
              borderColor: "green"
          }
      ]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: "Covid-19 en Colombia",
        padding: 30,
        fontSize: 18,
        fontColor: "black"
      },
      legend: {
        position: "bottom",
        labels: {
          padding: 30,
          boxWidht: 25,
          fontColor: "black",
          fontFamily: "system-ui",
        },
      },
      elements: {
        line: {
          borderWidth: 3,
          fill: false
        },
        point: {
          radius: 5,
          borderWidth: 2,
          backgroundColor: "white",
          hoverRadius: 4,
          hoverBorderWidht: 2
        }
      },
      tooltips: {
        backgroundColor: "#0584f6",
        titleFontSize: 15,
        yPadding: 10,
        bodySpacing: 10,
        mode: "x"
      },
      layout: {
        padding:15
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    },
  });
};

function setChartColor(context) { //Funcion para graficos de barra
    var index = context.dataIndex;
    var value = context.dataset.data[index];
    return value < 0
      ? "red" // draw negative values in red
      : index % 2
      ? "white" // else, alternate values in blue and green
      : "black";
  }

renderChart();


