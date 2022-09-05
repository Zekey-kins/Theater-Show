var my_div1 = document.getElementById("map1")
let lat_lang1 = new google.maps.LatLng(24.85380458612578, 67.02076045397571)
let maymap1 = new google.maps.Map(my_div1,{
    center : lat_lang1,
    zoom : 16,
    myTypeId : "roadmap"
})
let marker1 = new google.maps.Marker({
    map : maymap1,
    position : lat_lang1,
    title : "Arts Council of Pakistan Karachi"
});
var my_div2 = document.getElementById("map2")
let lat_lang2 = new google.maps.LatLng(24.888970448587468, 67.0891869079514)
let maymap2 = new google.maps.Map(my_div2,{
    center : lat_lang2,
    zoom : 16,
    myTypeId : "roadmap"
})
let marker2 = new google.maps.Marker({
    map : maymap2,
    position : lat_lang2,
    title : "Bahria Auditorium"
});
var my_div3 = document.getElementById("map3")
let lat_lang3 = new google.maps.LatLng(24.8938071844141, 67.08834558465857)
let maymap3 = new google.maps.Map(my_div3,{
    center : lat_lang3,
    zoom : 16,
    myTypeId : "roadmap"
})
let marker3 = new google.maps.Marker({
    map : maymap3,
    position : lat_lang3,
    title : "Al Beruni Auditorium"
});
var my_div4 = document.getElementById("map4")
let lat_lang4 = new google.maps.LatLng(24.867563507102513, 67.02610459204861)
let maymap4 = new google.maps.Map(my_div4,{
    center : lat_lang4,
    zoom : 16,
    myTypeId : "roadmap"
})
let marker4 = new google.maps.Marker({
    map : maymap4,
    position : lat_lang4,
    title : "IBA JS Auditorium"
});
var my_div5 = document.getElementById("map5")
let lat_lang5 = new google.maps.LatLng(24.890222409842398, 67.06984882329283)
let maymap5 = new google.maps.Map(my_div5,{
    center : lat_lang5,
    zoom : 16,
    myTypeId : "roadmap"
})
let marker5 = new google.maps.Marker({
    map : maymap5,
    position : lat_lang5,
    title : "Karachi School Of Buisness And Leadership"
});
