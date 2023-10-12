export const config = {
    // style: "mapbox://styles/mapbox/streets-v11", //mapbox://styles/mapbox/dark-v10 , mapbox://styles/mapbox/outdoors-v11, mapbox://styles/mapbox/streets-v11, your custom style URL
    style: "mapbox://styles/mapbox/outdoors-v11", //mapbox://styles/mapbox/dark-v10 , mapbox://styles/mapbox/outdoors-v11, mapbox://styles/mapbox/streets-v11, your custom style URL
    accessToken: "pk.eyJ1IjoiamF2aWVybmIiLCJhIjoiY2xua2ZubGQ0MWI1YTJubzlsOWI1bWkxZiJ9.mxYS628Y8NT5K1Z1qtBouA",
    
    // tileset: "mapbox://javiernb.clnnewese0f3n2alkvxvmjznn",//only needed if using tileset as backend
    // sourceLayerName: "test",//only needed if using tileset as backend

    // algoliaAppID: 'Replace with your App ID', //only needed if using algolia as backend
    // algoliaToken: 'Replace with your Algolia Token',  //only needed if using algolia as backend
    // algoliaIndex: 'Replace with your Algolia index name',
    algoliaAppID: 'R9AJ4IHPGS', //only needed if using algolia as backend
    algoliaToken: 'c0e9ce9603d477d56688dd298e6a3f6f',  //only needed if using algolia as backend
    // algoliaIndex: 'testing-json', //only needed if using algolia as backend
    algoliaIndex: 'saloncentrystores', //only needed if using algolia as backend

     
    // center: [-86.8104, 33.5186], //Lng, Lat for the map center
    // pitch: 60, //Deafualt pitch
    // zoom: 4, //Default zoom

    // center: [-86.8104, 33.5186], // [lng, lat],
    center: [-99.1684, 40.4796 ], // [lng, lat],
    pitch: 30,
    zoom: 4, // zoom extent

    title: "Replace with your title",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    // sideBarInfo: ["Header", "Info 1", "Info 2"],
    sideBarInfo: ["store_name", "address", "city", "phone_number"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "CSV Filter Column Name",
            listItems: [
               "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ]
        },
        {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "CSV Filter Column Name",
            listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops']
        },
        // {
        //     type: "dropdown",
        //     title: "Title of filter: ",
        //     columnHeader: "Column Name",
        //     listItems: [
        //         'filter one',
        //         'filter two',
        //         'filter three',
        //         'filter four',
        //         'filter five',
        //         'filter six',
        //         'filter seven'
        //     ]
        // }
    ]

};
