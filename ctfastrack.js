<script >
   var ctfastrakJson = '{"latitude":"Alex",
                        "longitude":"Smith",
                        "location":[
                            "Stanley street",
                           
                        ]
                       }';

   var mapfastrak=JSON.parse(ctfastrakJson);

   console.log("Parsed ctfastrak data: latitude=" + mapfastrak.latitude +
                      " longitude=" + mapfastrak.longitude +
                      " bus stop location=" + mapfastrak.location);
</script>
