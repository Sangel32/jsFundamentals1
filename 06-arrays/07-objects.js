
/********************* 
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 
let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma */


var netflix = {
    id: 9,
    name: "Super Store",
        season1: {
        seasonInfo: {
            episodeInfo : {
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
        }
        },
        season2: {
            seasonInfo: {
                episodeInfo: {
                { episode: 5, episodeName: "Shoplifter"},
                { episode: 6, episodeName: "Secret Shopper"},
                { episode: 7, episodeName: "Color Wars"},
                { episode: 8, episodeName: "Wedding Day Sale"},
                { episode: 9, episodeName: "All-Nighter"}
                }
            }
        },
        season3: {
          seasonInfo: {
              episodeInfo: {
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          }
        }
    };
// console.log("all data:", netflix);
// console.log("season info:", netflix.season1.seasonInfo);
console.log("episode info:", netflix.season1.seasonInfo.episodeInfo[0].episodeName);



