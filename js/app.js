$(document).ready(function(){

    $.ajax({
        url : 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=contours-simplifies-des-departements-francais-2015&rows=150&facet=code_dept',
        type : 'GET', // Le type de la requête HTTP.
        dataType: "JSON",

       success : function(data, statut){ // code_html contient le HTML renvoyé

           var mymap = L.map('mapid').setView([	46.467837, 2.136167], 6);


           L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
            {
               maxZoom: 18,
               attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
               '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
               'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
               id: 'mapbox.streets'
           }).addTo(mymap);

           for (var i = 0; i < data.records.length; i++) {


               L.geoJSON(data.records[i].fields.geo_shape).addTo(mymap);
               // console.log(data.records[i].fields.nom_chf.toUpperCase());
               $.ajax({
                url: `http://api.openweathermap.org/data/2.5/weather?q=${data.records[i].fields.nom_chf },fr&APPID=34bd5c6d73b8bf42222a0d0a58dbf160`,
                type: 'GET', // Le type de la requête HTTP.
                dataType: "JSON",

                //${data.records[i].fields.nom_chf.toUpperCase() }

                // error : function(resultat, statut, erreur){
                //     console.log(resultat);
                // },

                 success : function(data){
                     // for (i of data) {
                     //
                     //     console.log("data")
                     //
                     // }
                     //
                     // var marker = L.marker([data.coord]).addTo(mymap);
                     // var popup = L.pop()
                     // .setLatLng(data.coord)
                     // .setContent(data.weather[0].main)
                     // .openOn(map)



                     // function onMapClick(e) {
                     //     alert("You clicked the map at " + e.latlng);
                     // }
                     //
                     // mymap.on('click', onMapClick);
                     // var popup = L.popup();
                     //
                     // function onMapClick(e) {
                     //     popup
                     //     .setLatLng(e.latlng)
                     //     .setContent("You clicked the map at " + e.latlng.toString())
                     //     .openOn(mymap);
                     // }

                     // mymap.on('click', onMapClick);
                     }
               })

           }



           // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
           // circle.bindPopup("I am a circle.");
           // polygon.bindPopup("I am a polygon.");
           // var popup = L.popup()
           // .setLatLng([51.5, -0.09])
           // .setContent("I am a standalone popup.")
           // .openOn(mymap);




        }




   })




});
