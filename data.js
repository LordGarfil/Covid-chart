getData = async () => {
  let date = new Date().toString();
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const url =
    "https://api.covid19api.com/country/colombia?from=2020-03-01T00:00:00Z&to=" +
    date;
  const res = await fetch(url, requestOptions);
  const data = await res.json();
   return data;
};

async function setCases() {
  var sum = 0;
  var cases = {
    confirmed: [],
    active: [],
    deaths: [],
    recovered: [],
  };
  const data = await getData()
  data.map((item) => {
    /* cases.confirmed.push({
      cases: item.Confirmed,
      date: item.Date,
    });
    
    cases.active.push({
      cases: item.Active,
      date: item.Date,
    });
    cases.deaths.push({
      cases: item.Deaths,
      date: item.Date,
    });
    cases.recovered.push({
      cases: item.Recovered,
      date: item.Date,
    }); */
   
     var itemDate = new Date(item.Date)
        
        var fromDate = new Date(2020, 01, 29)
        //Valida el mes de enero
        if(itemDate.getDate() == 31 && itemDate.getMonth() == 0){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Enero"
          })
          cases.active.push({
            cases: item.Active,
            date: "Enero"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Enero"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Enero"
          })
        }
        //Valida el mes de febrero
        else if(itemDate.getDate() == 29 && itemDate.getMonth() == 1){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Febrero"
          })
          cases.active.push({
            cases: item.Active,
            date: "Febrero"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Febrero"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Febrero"
          })
        }
        //Valida el mes de marzo
        else if(itemDate.getDate() == 31 && itemDate.getMonth() == 2){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Marzo"
          })
          cases.active.push({
            cases: item.Active,
            date: "Marzo"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Marzo"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Marzo"
          })
        }
        //Valida el mes de abril
        else if(itemDate.getDate() == 30 && itemDate.getMonth() == 3){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Abril"
          })
          cases.active.push({
            cases: item.Active,
            date: "Abril"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Abril"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Abril"
          })
        }

        //Valida el mes de mayo
        else if(itemDate.getDate() == 31 && itemDate.getMonth() == 4){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Mayo"
          })
          cases.active.push({
            cases: item.Active,
            date: "Mayo"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Mayo"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Mayo"
          })
        }

        //Valida el mes de junio
        else if(itemDate.getDate() == 30 && itemDate.getMonth() == 5){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Junio"
          })
          cases.active.push({
            cases: item.Active,
            date: "Junio"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Junio"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Junio"
          })
        }

        //Valida el mes de julio
        //else if(itemDate.getDate() == 30 && itemDate.getMonth() == 6){
          else if(itemDate.getDate() == new Date().getDate()-2 && itemDate.getMonth() == 6){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Julio"
          })
          cases.active.push({
            cases: item.Active,
            date: "Julio"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Julio"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Julio"
          })
        }

        //Valida el mes de agosto
        else if(itemDate.getDate() == 31 && itemDate.getMonth() == 7){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Agosto"
          })
          cases.active.push({
            cases: item.Active,
            date: "Agosto"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Agosto"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Agosto"
          })
        }

        //Valida el mes de septiembre
        else if(itemDate.getDate() == 30 && itemDate.getMonth() == 8){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Septiembre"
          })
          cases.active.push({
            cases: item.Active,
            date: "Septiembre"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Septiembre"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Septiembre"
          })
        }

        //Valida el mes de Octubre
        else if(itemDate.getDate() == 31 && itemDate.getMonth() == 9){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Octubre"
          })
          cases.active.push({
            cases: item.Active,
            date: "Octubre"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Octubre"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Octubre"
          })
        }

        //Valida el mes de Noviembre
        else if(itemDate.getDate() == 31 && itemDate.getMonth() == 10){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Noviembre"
          })
          cases.active.push({
            cases: item.Active,
            date: "Noviembre"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Noviembre"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Noviembre"
          })
        }

        //Valida el mes de Diciembre
        else if(itemDate.getDate() == 31 && itemDate.getMonth() == 11){
          cases.confirmed.push({
            cases: item.Confirmed,
            date: "Diciembre"
          })
          cases.active.push({
            cases: item.Active,
            date: "Diciembre"
          })
          cases.deaths.push({
            cases: item.Deaths,
            date: "Diciembre"
          })
          cases.recovered.push({
            cases: item.Recovered,
            date: "Diciembre"
          })
        }
        
  });
  console.log(cases); 
  return await cases;
};


