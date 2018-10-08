import React from 'react';

const CLIENTS = [
        {
          "_id": "5b9f48a2406b2cd74c55c663",
          "name": "Perkins Cunningham",
          "email": "perkinscunningham@imant.com",
          "firstContact": "2018-11-26T22:00:00.000Z",
          "emailType": "B",
          "sold": true,
          "owner": "Emily Durham",
          "country": "Romania"
        },
        {
          "_id": "5b9f48a25afcc00e1c1ddfbf",
          "name": "Fischer Hammond",
          "email": "fischerhammond@imant.com",
          "firstContact": "2017-05-15T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Janice Alvarado",
          "country": "Turkey"
        },
        {
          "_id": "5b9f48a2717f46c7647d2792",
          "name": "Gonzalez Armstrong",
          "email": "gonzalezarmstrong@imant.com",
          "firstContact": "2018-04-05T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Leila Howe",
          "country": "France"
        },
        {
          "_id": "5b9f48a2fbb66b93bce1c091",
          "name": "Melva Ingram",
          "email": "melvaingram@imant.com",
          "firstContact": "2018-09-23T21:00:00.000Z",
          "emailType": "B",
          "sold": true,
          "owner": "Hull Conrad",
          "country": "Greece"
        },
        {
          "_id": "5b9f48a27655150701388c9e",
          "name": "Stacy Morton",
          "email": "stacymorton@imant.com",
          "firstContact": "2018-12-08T22:00:00.000Z",
          "emailType": "A",
          "sold": true,
          "owner": "Janice Alvarado",
          "country": "France"
        },
        {
          "_id": "5b9f48a208b3f56db058d33c",
          "name": "Mccormick Klein",
          "email": "mccormickklein@imant.com",
          "firstContact": "2017-06-03T21:00:00.000Z",
          "emailType": "D",
          "sold": true,
          "owner": "Martin Massey",
          "country": "Romania"
        },
        {
          "_id": "5b9f48a2432e2204c27f87c7",
          "name": "Lula Jefferson",
          "email": "lulajefferson@imant.com",
          "firstContact": "2016-12-28T22:00:00.000Z",
          "emailType": "B",
          "sold": true,
          "owner": "Hull Conrad",
          "country": "Croatia"
        },
        {
          "_id": "5b9f48a2c4c6cedc28343820",
          "name": "Bryant Russo",
          "email": "bryantrusso@imant.com",
          "firstContact": "2018-06-03T21:00:00.000Z",
          "emailType": "A",
          "sold": true,
          "owner": "Janice Alvarado",
          "country": "Romania"
        },
        {
          "_id": "5b9f48a2c3730f0e42acc02d",
          "name": "Russell Montoya",
          "email": "russellmontoya@imant.com",
          "firstContact": "2018-06-14T21:00:00.000Z",
          "emailType": "D",
          "sold": true,
          "owner": "Janice Alvarado",
          "country": "Turkey"
        },
        {
          "_id": "5b9f48a2af33eaca987028da",
          "name": "Beach Logan",
          "email": "beachlogan@imant.com",
          "firstContact": "2018-03-27T21:00:00.000Z",
          "emailType": "B",
          "sold": true,
          "owner": "Leila Howe",
          "country": "France"
        },
        {
          "_id": "5b9f48a224855e33619173fb",
          "name": "Golden Fields",
          "email": "goldenfields@imant.com",
          "firstContact": "2017-04-07T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Emily Durham",
          "country": "Turkey"
        },
        {
          "_id": "5b9f48a2f3f6da2eb27f8c46",
          "name": "Mandy Hawkins",
          "email": "mandyhawkins@imant.com",
          "firstContact": "2016-05-13T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Janice Alvarado",
          "country": "Turkey"
        },
        {
          "_id": "5b9f48a250f219f0aad83200",
          "name": "Ashley Holder",
          "email": "ashleyholder@imant.com",
          "firstContact": "2018-08-22T21:00:00.000Z",
          "emailType": "C",
          "sold": true,
          "owner": "Shepherd Stone",
          "country": "France"
        },
        {
          "_id": "5b9f48a245b82b4b5ff19a34",
          "name": "Miles Schmidt",
          "email": "milesschmidt@imant.com",
          "firstContact": "2018-08-11T21:00:00.000Z",
          "emailType": "A",
          "sold": true,
          "owner": "Martin Massey",
          "country": "France"
        },
        {
          "_id": "5b9f48a2e473047459e8fd90",
          "name": "Marissa Rios",
          "email": "marissarios@imant.com",
          "firstContact": "2018-03-25T21:00:00.000Z",
          "emailType": "B",
          "sold": true,
          "owner": "Emily Durham",
          "country": "France"
        },
        {
          "_id": "5b9f48a28a09594e5b8aec94",
          "name": "Simone Hall",
          "email": "simonehall@imant.com",
          "firstContact": "2018-06-09T21:00:00.000Z",
          "emailType": "A",
          "sold": true,
          "owner": "Barton Ramirez",
          "country": "France"
        },
        {
          "_id": "5b9f48a20c79cf8625f3d78b",
          "name": "Mayer Brady",
          "email": "mayerbrady@imant.com",
          "firstContact": "2016-10-15T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Hull Conrad",
          "country": "France"
        },
        {
          "_id": "5b9f48a20c45629274cb419b",
          "name": "Corinne Best",
          "email": "corinnebest@imant.com",
          "firstContact": "2018-06-02T21:00:00.000Z",
          "emailType": "C",
          "sold": true,
          "owner": "Barton Ramirez",
          "country": "France"
        },
        {
          "_id": "5b9f48a20661f51ce8d9144f",
          "name": "Charlene Rodgers",
          "email": "charlenerodgers@imant.com",
          "firstContact": "2016-04-18T21:00:00.000Z",
          "emailType": "D",
          "sold": true,
          "owner": "Shepherd Stone",
          "country": "Malta"
        },
        {
          "_id": "5b9f48a2ba7ec4b5cb9783fa",
          "name": "Berger Mosley",
          "email": "bergermosley@imant.com",
          "firstContact": "2018-04-05T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Barton Ramirez",
          "country": "Turkey"
        },
        {
          "_id": "5b9f48a20e11b945df02e912",
          "name": "May Hurley",
          "email": "mayhurley@imant.com",
          "firstContact": "2018-06-19T21:00:00.000Z",
          "emailType": "A",
          "sold": true,
          "owner": "Emily Durham",
          "country": "Turkey"
        },
        {
          "_id": "5b9f48a2ed02be6c5659ba7e",
          "name": "Glenn Guerra",
          "email": "glennguerra@imant.com",
          "firstContact": "2018-04-15T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Martin Massey",
          "country": "Malta"
        },
        {
          "_id": "5b9f48a2548e6b646e1ca49b",
          "name": "Ellison Diaz",
          "email": "ellisondiaz@imant.com",
          "firstContact": "2018-04-28T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Barton Ramirez",
          "country": "Turkey"
        },
        {
          "_id": "5b9f48a210ba8d35cec5362a",
          "name": "Sheena Chang",
          "email": "sheenachang@imant.com",
          "firstContact": "2018-08-21T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Barton Ramirez",
          "country": "Malta"
        },
        {
          "_id": "5b9f48a2a46011ea9d4b212a",
          "name": "Lynne Irwin",
          "email": "lynneirwin@imant.com",
          "firstContact": "2018-12-01T22:00:00.000Z",
          "emailType": "D",
          "sold": true,
          "owner": "Shepherd Stone",
          "country": "Greece"
        },
        {
          "_id": "5b9f48a23025134f37cb61c1",
          "name": "Graham Oneal",
          "email": "grahamoneal@imant.com",
          "firstContact": "2017-12-10T22:00:00.000Z",
          "emailType": "B",
          "sold": true,
          "owner": "Janice Alvarado",
          "country": "France"
        },
        {
          "_id": "5b9f48a2aa3d95bee7c0586d",
          "name": "Cohen Rush",
          "email": "cohenrush@imant.com",
          "firstContact": "2018-01-04T22:00:00.000Z",
          "emailType": "A",
          "sold": true,
          "owner": "Janice Alvarado",
          "country": "Greece"
        },
        {
          "_id": "5b9f48a29357898293a2e218",
          "name": "Bennett Stanton",
          "email": "bennettstanton@imant.com",
          "firstContact": "2018-06-25T21:00:00.000Z",
          "emailType": "A",
          "sold": true,
          "owner": "Janice Alvarado",
          "country": "Malta"
        },
        {
          "_id": "5b9f48a24e5e2daab6f29943",
          "name": "Eddie Nolan",
          "email": "eddienolan@imant.com",
          "firstContact": "2018-01-28T22:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Janice Alvarado",
          "country": "France"
        },
        {
          "_id": "5b9f48a22b7de32af9bf8ac2",
          "name": "Belinda Bright",
          "email": "belindabright@imant.com",
          "firstContact": "2018-05-03T21:00:00.000Z",
          "emailType": "D",
          "sold": true,
          "owner": "Emily Durham",
          "country": "France"
        },
        {
          "_id": "5b9f48a245af64e63032b56d",
          "name": "Laverne Roy",
          "email": "laverneroy@imant.com",
          "firstContact": "2018-04-28T21:00:00.000Z",
          "emailType": null,
          "sold": false,
          "owner": "Hull Conrad",
          "country": "Greece"
        }
]

export { CLIENTS };

