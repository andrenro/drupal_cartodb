$(document).ready(function() {
    //Wraps the raw data and returns it in a get-method
    DataManager = (function() {
        //Converted the dates on the sist_ut / sist_inn for comparison reasons.
        getData = function() {
            let robek_data = [{
                "bokstaver": "c-d",
                "kommunenr": 101,
                "kommune": "Halden",
                "fylke": "Østfold",
                "antall_aar": 5.3,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/01/12",
                "sist_ut": "11/18/02",
                "inn": [
                    "01/01/01",
                    "08/01/12"
                ],
                "ut": [
                    "11/18/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 104,
                "kommune": "Moss",
                "fylke": "Østfold",
                "antall_aar": 4.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/03",
                "sist_ut": "07/09/07",
                "inn": [
                    "02/18/03"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 105,
                "kommune": "Sarpsborg",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 106,
                "kommune": "Fredrikstad",
                "fylke": "Østfold",
                "antall_aar": 5.42,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/06/02",
                "sist_ut": "07/09/07",
                "inn": [
                    "02/06/02"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 111,
                "kommune": "Hvaler",
                "fylke": "Østfold",
                "antall_aar": 2.93,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/25/04",
                "sist_ut": "08/03/06",
                "inn": [
                    "02/18/03",
                    "08/25/04"
                ],
                "ut": [
                    "02/13/04",
                    "08/03/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 118,
                "kommune": "Aremark",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 119,
                "kommune": "Marker",
                "fylke": "Østfold",
                "antall_aar": 2,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "06/25/15",
                "sist_ut": "06/14/16",
                "inn": [
                    "02/06/02",
                    "06/25/15"
                ],
                "ut": [
                    "02/18/03",
                    "06/14/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 121,
                "kommune": "Rømskog",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 122,
                "kommune": "Trøgstad",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 123,
                "kommune": "Spydeberg",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 124,
                "kommune": "Askim",
                "fylke": "Østfold",
                "antall_aar": 4.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/03",
                "sist_ut": "07/09/07",
                "inn": [
                    "02/18/03"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 125,
                "kommune": "Eidsberg",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 127,
                "kommune": "Skiptvet",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 128,
                "kommune": "Rakkestad",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 135,
                "kommune": "Råde",
                "fylke": "Østfold",
                "antall_aar": 11.24,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "02/20/09",
                "sist_ut": "08/14/14",
                "inn": [
                    "02/15/01",
                    "10/08/03",
                    "02/20/09"
                ],
                "ut": [
                    "02/18/03",
                    "07/09/07",
                    "08/14/14"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 136,
                "kommune": "Rygge",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 137,
                "kommune": "Våler",
                "fylke": "Østfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "c-d",
                "kommunenr": 138,
                "kommune": "Hobøl",
                "fylke": "Østfold",
                "antall_aar": 11,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/07/05",
                "sist_ut": "05/30/16",
                "inn": [
                    "02/07/05"
                ],
                "ut": [
                    "05/30/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 211,
                "kommune": "Vestby",
                "fylke": "Akershus",
                "antall_aar": 2.91,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/14/03",
                "sist_ut": "07/05/06",
                "inn": [
                    "08/14/03"
                ],
                "ut": [
                    "07/05/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 213,
                "kommune": "Ski",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 214,
                "kommune": "Ås",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 215,
                "kommune": "Frogn",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 216,
                "kommune": "Nesodden",
                "fylke": "Akershus",
                "antall_aar": 1,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "02/11/02",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "02/11/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 217,
                "kommune": "Oppegård",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 219,
                "kommune": "Bærum",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 220,
                "kommune": "Asker",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 221,
                "kommune": "Aurskog-Høland",
                "fylke": "Akershus",
                "antall_aar": 1.1,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/26/02",
                "sist_ut": "04/01/03",
                "inn": [
                    "02/26/02"
                ],
                "ut": [
                    "04/01/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 226,
                "kommune": "Sørum",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 227,
                "kommune": "Fet",
                "fylke": "Akershus",
                "antall_aar": 2.19,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "04/01/03",
                "sist_ut": "06/09/05",
                "inn": [
                    "04/01/03"
                ],
                "ut": [
                    "06/09/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 228,
                "kommune": "Rælingen",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 229,
                "kommune": "Enebakk",
                "fylke": "Akershus",
                "antall_aar": 4.01,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/08/02",
                "sist_ut": "07/05/06",
                "inn": [
                    "07/08/02"
                ],
                "ut": [
                    "07/05/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 230,
                "kommune": "Lørenskog",
                "fylke": "Akershus",
                "antall_aar": 1.4,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/13/06",
                "sist_ut": "07/09/07",
                "inn": [
                    "02/13/06"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 231,
                "kommune": "Skedsmo",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 233,
                "kommune": "Nittedal",
                "fylke": "Akershus",
                "antall_aar": 5.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "07/05/06",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "07/05/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 234,
                "kommune": "Gjerdrum",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 235,
                "kommune": "Ullensaker",
                "fylke": "Akershus",
                "antall_aar": 2.18,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "04/01/03",
                "sist_ut": "06/07/05",
                "inn": [
                    "04/01/03"
                ],
                "ut": [
                    "06/07/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 236,
                "kommune": "Nes",
                "fylke": "Akershus",
                "antall_aar": 2.88,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/09/09",
                "sist_ut": "07/30/12",
                "inn": [
                    "09/09/09"
                ],
                "ut": [
                    "07/30/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 237,
                "kommune": "Eidsvoll",
                "fylke": "Akershus",
                "antall_aar": 2.06,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "01/23/14",
                "sist_ut": "03/02/15",
                "inn": [
                    "02/26/02",
                    "01/23/14"
                ],
                "ut": [
                    "02/10/03",
                    "03/02/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 238,
                "kommune": "Nannestad",
                "fylke": "Akershus",
                "antall_aar": 3.9,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "09/08/09",
                "sist_ut": "07/30/12",
                "inn": [
                    "02/11/02",
                    "09/08/09"
                ],
                "ut": [
                    "02/10/03",
                    "07/30/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 239,
                "kommune": "Hurdal",
                "fylke": "Akershus",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 301,
                "kommune": "Oslo",
                "fylke": "Oslo",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 402,
                "kommune": "Kongsvinger",
                "fylke": "Hedmark",
                "antall_aar": 4.93,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/14/09",
                "sist_ut": "06/18/10",
                "inn": [
                    "07/15/05",
                    "07/14/09"
                ],
                "ut": [
                    "06/18/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 403,
                "kommune": "Hamar",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 412,
                "kommune": "Ringsaker",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 415,
                "kommune": "Løten",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 417,
                "kommune": "Stange",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 418,
                "kommune": "Nord-Odal",
                "fylke": "Hedmark",
                "antall_aar": 4.9,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/09/10",
                "sist_ut": "07/09/13",
                "inn": [
                    "06/22/03",
                    "08/09/10"
                ],
                "ut": [
                    "07/15/05",
                    "07/09/13"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 419,
                "kommune": "Sør-Odal",
                "fylke": "Hedmark",
                "antall_aar": 6.54,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/13/11",
                "sist_ut": "07/14/14",
                "inn": [
                    "01/01/01",
                    "07/13/11"
                ],
                "ut": [
                    "07/15/05",
                    "07/14/14"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 420,
                "kommune": "Eidskog",
                "fylke": "Hedmark",
                "antall_aar": 9.96,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/22/03",
                "sist_ut": "07/09/13",
                "inn": [
                    "06/22/03"
                ],
                "ut": [
                    "07/09/13"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 423,
                "kommune": "Grue",
                "fylke": "Hedmark",
                "antall_aar": 6.33,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "06/24/16",
                "sist_ut": "07/14/09",
                "inn": [
                    "02/15/01",
                    "06/22/03",
                    "06/24/16"
                ],
                "ut": [
                    "07/09/01",
                    "07/14/09"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 425,
                "kommune": "Åsnes",
                "fylke": "Hedmark",
                "antall_aar": 9.42,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/09/13",
                "sist_ut": "06/22/12",
                "inn": [
                    "07/15/05",
                    "04/27/10",
                    "07/09/13"
                ],
                "ut": [
                    "06/22/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 426,
                "kommune": "Våler",
                "fylke": "Hedmark",
                "antall_aar": 7.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/10/08",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/10/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 427,
                "kommune": "Elverum",
                "fylke": "Hedmark",
                "antall_aar": 4.54,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/15/05",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/15/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 428,
                "kommune": "Trysil",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 429,
                "kommune": "Åmot",
                "fylke": "Hedmark",
                "antall_aar": 1.99,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "02/18/03",
                "sist_ut": "02/10/04",
                "inn": [
                    "02/15/01",
                    "02/18/03"
                ],
                "ut": [
                    "02/18/02",
                    "02/10/04"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 430,
                "kommune": "Stor-Elvdal",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 432,
                "kommune": "Rendalen",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 434,
                "kommune": "Engerdal",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 436,
                "kommune": "Tolga",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 437,
                "kommune": "Tynset",
                "fylke": "Hedmark",
                "antall_aar": 0.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/03",
                "sist_ut": "02/10/04",
                "inn": [
                    "02/18/03"
                ],
                "ut": [
                    "02/10/04"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 438,
                "kommune": "Alvdal",
                "fylke": "Hedmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 439,
                "kommune": "Folldal",
                "fylke": "Hedmark",
                "antall_aar": 2.01,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/15/05",
                "sist_ut": "07/16/07",
                "inn": [
                    "07/15/05"
                ],
                "ut": [
                    "07/16/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 441,
                "kommune": "Os (Hedm.)",
                "fylke": "Hedmark",
                "antall_aar": 0.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/03",
                "sist_ut": "02/10/04",
                "inn": [
                    "02/18/03"
                ],
                "ut": [
                    "02/10/04"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 501,
                "kommune": "Lillehammer",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 502,
                "kommune": "Gjøvik",
                "fylke": "Oppland",
                "antall_aar": 1.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "05/23/02",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "05/23/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 511,
                "kommune": "Dovre",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 512,
                "kommune": "Lesja",
                "fylke": "Oppland",
                "antall_aar": 0.73,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/22/15",
                "sist_ut": "06/14/16",
                "inn": [
                    "09/22/15"
                ],
                "ut": [
                    "06/14/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 513,
                "kommune": "Skjåk",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 514,
                "kommune": "Lom",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 515,
                "kommune": "Vågå",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 516,
                "kommune": "Nord-Fron",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 517,
                "kommune": "Sel",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 519,
                "kommune": "Sør-Fron",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 520,
                "kommune": "Ringebu",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 521,
                "kommune": "Øyer",
                "fylke": "Oppland",
                "antall_aar": 1.26,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/19/06",
                "sist_ut": "05/18/07",
                "inn": [
                    "02/15/01",
                    "07/19/06"
                ],
                "ut": [
                    "07/17/01",
                    "05/18/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 522,
                "kommune": "Gausdal",
                "fylke": "Oppland",
                "antall_aar": 0.95,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "01/25/02",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "01/25/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 528,
                "kommune": "Østre Toten",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "c-d",
                "kommunenr": 529,
                "kommune": "Vestre Toten",
                "fylke": "Oppland",
                "antall_aar": 9,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/11/11",
                "sist_ut": "07/07/05",
                "inn": [
                    "01/01/01",
                    "07/11/11"
                ],
                "ut": [
                    "07/07/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 532,
                "kommune": "Jevnaker",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 533,
                "kommune": "Lunner",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 534,
                "kommune": "Gran",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 536,
                "kommune": "Søndre Land",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 538,
                "kommune": "Nordre Land",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 540,
                "kommune": "Sør-Aurdal",
                "fylke": "Oppland",
                "antall_aar": 0.95,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "01/25/02",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "01/25/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 541,
                "kommune": "Etnedal",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 542,
                "kommune": "Nord-Aurdal",
                "fylke": "Oppland",
                "antall_aar": 4.04,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/25/03",
                "sist_ut": "07/09/07",
                "inn": [
                    "06/25/03"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 543,
                "kommune": "Vestre Slidre",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 544,
                "kommune": "Øystre Slidre",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 545,
                "kommune": "Vang",
                "fylke": "Oppland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 602,
                "kommune": "Drammen",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 604,
                "kommune": "Kongsberg",
                "fylke": "Buskerud",
                "antall_aar": 6.97,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/10/03",
                "sist_ut": "06/14/10",
                "inn": [
                    "07/10/03"
                ],
                "ut": [
                    "06/14/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 605,
                "kommune": "Ringerike",
                "fylke": "Buskerud",
                "antall_aar": 7.81,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "03/11/08",
                "sist_ut": "",
                "inn": [
                    "03/11/08"
                ],
                "ut": []
            }, {
                "bokstaver": "c-d",
                "kommunenr": 612,
                "kommune": "Hole",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [
                    "01/27/16"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 615,
                "kommune": "Flå",
                "fylke": "Buskerud",
                "antall_aar": 0.75,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "10/01/01",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "10/01/01"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 616,
                "kommune": "Nes",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 617,
                "kommune": "Gol",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 618,
                "kommune": "Hemsedal",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 619,
                "kommune": "Ål",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 620,
                "kommune": "Hol",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 621,
                "kommune": "Sigdal",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 622,
                "kommune": "Krødsherad",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 623,
                "kommune": "Modum",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 624,
                "kommune": "Øvre Eiker",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "Eiker-og",
                "kommunenr": 625,
                "kommune": "Nedre Eiker",
                "fylke": "Buskerud",
                "antall_aar": 5.01,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "06/23/14",
                "sist_ut": "06/18/12",
                "inn": [
                    "07/09/03",
                    "10/18/10",
                    "06/23/14"
                ],
                "ut": [
                    "04/29/05",
                    "06/18/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 626,
                "kommune": "Lier",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 627,
                "kommune": "Røyken",
                "fylke": "Buskerud",
                "antall_aar": 5.11,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/09/03",
                "sist_ut": "08/07/08",
                "inn": [
                    "07/09/03"
                ],
                "ut": [
                    "08/07/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 628,
                "kommune": "Hurum",
                "fylke": "Buskerud",
                "antall_aar": 1.09,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/08",
                "sist_ut": "03/23/09",
                "inn": [
                    "02/18/08"
                ],
                "ut": [
                    "03/23/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 631,
                "kommune": "Flesberg",
                "fylke": "Buskerud",
                "antall_aar": 7.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/26/04",
                "sist_ut": "09/06/11",
                "inn": [
                    "02/26/04"
                ],
                "ut": [
                    "09/06/11"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 632,
                "kommune": "Rollag",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 633,
                "kommune": "Nore og Uvdal",
                "fylke": "Buskerud",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 701,
                "kommune": "Horten",
                "fylke": "Vestfold",
                "antall_aar": 3.66,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "06/01/10",
                "sist_ut": "07/06/12",
                "inn": [
                    "01/01/01",
                    "06/01/10"
                ],
                "ut": [
                    "07/25/02",
                    "07/06/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 702,
                "kommune": "Holmestrand",
                "fylke": "Vestfold",
                "antall_aar": 4.4,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/11/02",
                "sist_ut": "06/09/06",
                "inn": [
                    "02/11/02"
                ],
                "ut": [
                    "06/09/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 704,
                "kommune": "Tønsberg",
                "fylke": "Vestfold",
                "antall_aar": 4.55,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "05/29/13",
                "sist_ut": "06/02/16",
                "inn": [
                    "01/01/01",
                    "05/29/13"
                ],
                "ut": [
                    "07/17/02",
                    "06/02/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 706,
                "kommune": "Sandefjord",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 709,
                "kommune": "Larvik",
                "fylke": "Vestfold",
                "antall_aar": 4.74,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "06/29/12",
                "sist_ut": "04/22/13",
                "inn": [
                    "08/14/03",
                    "06/29/12"
                ],
                "ut": [
                    "07/09/07",
                    "04/22/13"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 711,
                "kommune": "Svelvik",
                "fylke": "Vestfold",
                "antall_aar": 8.4,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/02/10",
                "sist_ut": "07/09/07",
                "inn": [
                    "08/16/04",
                    "07/02/10"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 713,
                "kommune": "Sande",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 714,
                "kommune": "Hof",
                "fylke": "Vestfold",
                "antall_aar": 1.07,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/11/02",
                "sist_ut": "03/05/03",
                "inn": [
                    "02/11/02"
                ],
                "ut": [
                    "03/05/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 716,
                "kommune": "Re",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 719,
                "kommune": "Andebu",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 720,
                "kommune": "Stokke",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 722,
                "kommune": "Nøtterøy",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 723,
                "kommune": "Tjøme",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 728,
                "kommune": "Lardal",
                "fylke": "Vestfold",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 805,
                "kommune": "Porsgrunn",
                "fylke": "Telemark",
                "antall_aar": 4.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/13/02",
                "sist_ut": "06/29/06",
                "inn": [
                    "02/13/02"
                ],
                "ut": [
                    "06/29/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 806,
                "kommune": "Skien",
                "fylke": "Telemark",
                "antall_aar": 4.48,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "06/24/05",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "06/24/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 807,
                "kommune": "Notodden",
                "fylke": "Telemark",
                "antall_aar": 6.65,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "01/27/14",
                "sist_ut": "02/05/15",
                "inn": [
                    "02/19/01",
                    "11/06/03",
                    "01/27/14"
                ],
                "ut": [
                    "01/30/02",
                    "07/10/08",
                    "02/05/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 811,
                "kommune": "Siljan",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 814,
                "kommune": "Bamble",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 815,
                "kommune": "Kragerø",
                "fylke": "Telemark",
                "antall_aar": 5.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/11/06",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/11/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 817,
                "kommune": "Drangedal",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "d",
                "kommunenr": 819,
                "kommune": "Nome",
                "fylke": "Telemark",
                "antall_aar": 1.22,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "06/24/16",
                "sist_ut": "06/06/11",
                "inn": [
                    "02/18/10",
                    "06/24/16"
                ],
                "ut": [
                    "06/06/11"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 821,
                "kommune": "Bø",
                "fylke": "Telemark",
                "antall_aar": 12.02,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "06/11/13",
                "sist_ut": "06/17/10",
                "inn": [
                    "01/01/01",
                    "06/11/13"
                ],
                "ut": [
                    "06/17/10"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 822,
                "kommune": "Sauherad",
                "fylke": "Telemark",
                "antall_aar": 13.45,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "02/01/10",
                "sist_ut": "07/10/08",
                "inn": [
                    "01/01/01",
                    "02/01/10"
                ],
                "ut": [
                    "07/10/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 826,
                "kommune": "Tinn",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 827,
                "kommune": "Hjartdal",
                "fylke": "Telemark",
                "antall_aar": 1.74,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/01/04",
                "sist_ut": "05/30/06",
                "inn": [
                    "09/01/04"
                ],
                "ut": [
                    "05/30/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 828,
                "kommune": "Seljord",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 829,
                "kommune": "Kviteseid",
                "fylke": "Telemark",
                "antall_aar": 3.45,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/17/04",
                "sist_ut": "07/31/07",
                "inn": [
                    "02/17/04"
                ],
                "ut": [
                    "07/31/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 830,
                "kommune": "Nissedal",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 831,
                "kommune": "Fyresdal",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 833,
                "kommune": "Tokke",
                "fylke": "Telemark",
                "antall_aar": 0.3,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "04/18/01",
                "sist_ut": "08/08/01",
                "inn": [
                    "04/18/01"
                ],
                "ut": [
                    "08/08/01"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 834,
                "kommune": "Vinje",
                "fylke": "Telemark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 901,
                "kommune": "Risør",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 904,
                "kommune": "Grimstad",
                "fylke": "Aust-Agder",
                "antall_aar": 2.8,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/11/09",
                "sist_ut": "06/01/12",
                "inn": [
                    "08/11/09"
                ],
                "ut": [
                    "06/01/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 906,
                "kommune": "Arendal",
                "fylke": "Aust-Agder",
                "antall_aar": 1.35,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "05/07/02",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "05/07/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 911,
                "kommune": "Gjerstad",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 912,
                "kommune": "Vegårshei",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "d",
                "kommunenr": 914,
                "kommune": "Tvedestrand",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [
                    "06/02/16"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 919,
                "kommune": "Froland",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 926,
                "kommune": "Lillesand",
                "fylke": "Aust-Agder",
                "antall_aar": 1.91,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/25/03",
                "sist_ut": "07/22/05",
                "inn": [
                    "08/25/03"
                ],
                "ut": [
                    "07/22/05"
                ]
            }, {
                "bokstaver": "a-b",
                "kommunenr": 928,
                "kommune": "Birkenes",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [
                    "02/04/16"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 929,
                "kommune": "Åmli",
                "fylke": "Aust-Agder",
                "antall_aar": 1,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "02/11/02",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "02/11/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 935,
                "kommune": "Iveland",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 937,
                "kommune": "Evje og Hornes",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 938,
                "kommune": "Bygland",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 940,
                "kommune": "Valle",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 941,
                "kommune": "Bykle",
                "fylke": "Aust-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1001,
                "kommune": "Kristiansand",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1002,
                "kommune": "Mandal",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1003,
                "kommune": "Farsund",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1004,
                "kommune": "Flekkefjord",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1014,
                "kommune": "Vennesla",
                "fylke": "Vest-Agder",
                "antall_aar": 2.38,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/22/05",
                "sist_ut": "07/09/07",
                "inn": [
                    "02/22/05"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1017,
                "kommune": "Songdalen",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1018,
                "kommune": "Søgne",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1021,
                "kommune": "Marnardal",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1026,
                "kommune": "Åseral",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1027,
                "kommune": "Audnedal",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1029,
                "kommune": "Lindesnes",
                "fylke": "Vest-Agder",
                "antall_aar": 5.26,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/09/10",
                "sist_ut": "05/04/14",
                "inn": [
                    "01/01/01",
                    "08/09/10"
                ],
                "ut": [
                    "07/08/02",
                    "05/04/14"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1032,
                "kommune": "Lyngdal",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1034,
                "kommune": "Hægebostad",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1037,
                "kommune": "Kvinesdal",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1046,
                "kommune": "Sirdal",
                "fylke": "Vest-Agder",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1101,
                "kommune": "Eigersund",
                "fylke": "Rogaland",
                "antall_aar": 3.34,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "04/01/03",
                "sist_ut": "06/07/06",
                "inn": [
                    "04/01/03"
                ],
                "ut": [
                    "06/07/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1102,
                "kommune": "Sandnes",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1103,
                "kommune": "Stavanger",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1106,
                "kommune": "Haugesund",
                "fylke": "Rogaland",
                "antall_aar": 5.47,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "07/12/10",
                "sist_ut": "",
                "inn": [
                    "07/12/10"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1111,
                "kommune": "Sokndal",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1112,
                "kommune": "Lund",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1114,
                "kommune": "Bjerkreim",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1119,
                "kommune": "Hå",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1120,
                "kommune": "Klepp",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1121,
                "kommune": "Time",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1122,
                "kommune": "Gjesdal",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1124,
                "kommune": "Sola",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1127,
                "kommune": "Randaberg",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1129,
                "kommune": "Forsand",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1130,
                "kommune": "Strand",
                "fylke": "Rogaland",
                "antall_aar": 1,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/14/05",
                "sist_ut": "03/24/06",
                "inn": [
                    "03/14/05"
                ],
                "ut": [
                    "03/24/06"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1133,
                "kommune": "Hjelmeland",
                "fylke": "Rogaland",
                "antall_aar": 0.37,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "08/19/15",
                "sist_ut": "",
                "inn": [
                    "08/19/15"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1134,
                "kommune": "Suldal",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1135,
                "kommune": "Sauda",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1141,
                "kommune": "Finnøy",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1142,
                "kommune": "Rennesøy",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1144,
                "kommune": "Kvitsøy",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1145,
                "kommune": "Bokn",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1146,
                "kommune": "Tysvær",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1149,
                "kommune": "Karmøy",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1151,
                "kommune": "Utsira",
                "fylke": "Rogaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1160,
                "kommune": "Vindafjord",
                "fylke": "Rogaland",
                "antall_aar": 0.95,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/15/06",
                "sist_ut": "04/25/07",
                "inn": [
                    "05/15/06"
                ],
                "ut": [
                    "04/25/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1201,
                "kommune": "Bergen",
                "fylke": "Hordaland",
                "antall_aar": 4.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/21/02",
                "sist_ut": "08/16/07",
                "inn": [
                    "08/21/02"
                ],
                "ut": [
                    "08/16/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1211,
                "kommune": "Etne",
                "fylke": "Hordaland",
                "antall_aar": 1.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "08/21/02",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "08/21/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1216,
                "kommune": "Sveio",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1219,
                "kommune": "Bømlo",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1221,
                "kommune": "Stord",
                "fylke": "Hordaland",
                "antall_aar": 9.28,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "03/17/11",
                "sist_ut": "07/03/15",
                "inn": [
                    "08/21/02",
                    "03/17/11"
                ],
                "ut": [
                    "08/16/07",
                    "07/03/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1222,
                "kommune": "Fitjar",
                "fylke": "Hordaland",
                "antall_aar": 8.89,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/21/02",
                "sist_ut": "07/14/11",
                "inn": [
                    "08/21/02"
                ],
                "ut": [
                    "07/14/11"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1223,
                "kommune": "Tysnes",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1224,
                "kommune": "Kvinnherad",
                "fylke": "Hordaland",
                "antall_aar": 4.5,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "07/06/12",
                "sist_ut": "07/02/14",
                "inn": [
                    "01/01/01",
                    "08/03/09",
                    "07/06/12"
                ],
                "ut": [
                    "08/21/02",
                    "06/14/10",
                    "07/02/14"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1227,
                "kommune": "Jondal",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1228,
                "kommune": "Odda",
                "fylke": "Hordaland",
                "antall_aar": 3.05,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/14/05",
                "sist_ut": "07/30/08",
                "inn": [
                    "07/14/05"
                ],
                "ut": [
                    "07/30/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1231,
                "kommune": "Ullensvang",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1232,
                "kommune": "Eidfjord",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1233,
                "kommune": "Ulvik",
                "fylke": "Hordaland",
                "antall_aar": 1.87,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/19/01",
                "sist_ut": "12/30/02",
                "inn": [
                    "02/19/01"
                ],
                "ut": [
                    "12/30/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1234,
                "kommune": "Granvin",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1235,
                "kommune": "Voss",
                "fylke": "Hordaland",
                "antall_aar": 4.63,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/14/05",
                "sist_ut": "08/16/07",
                "inn": [
                    "01/01/01",
                    "07/14/05"
                ],
                "ut": [
                    "07/16/03",
                    "08/16/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1238,
                "kommune": "Kvam",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1241,
                "kommune": "Fusa",
                "fylke": "Hordaland",
                "antall_aar": 4.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "07/14/05",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "07/14/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1242,
                "kommune": "Samnanger",
                "fylke": "Hordaland",
                "antall_aar": 1.05,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/25/03",
                "sist_ut": "07/13/04",
                "inn": [
                    "06/25/03"
                ],
                "ut": [
                    "07/13/04"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1243,
                "kommune": "Os (Hord.)",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1244,
                "kommune": "Austevoll",
                "fylke": "Hordaland",
                "antall_aar": 9.36,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "07/06/12",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "07/06/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1245,
                "kommune": "Sund",
                "fylke": "Hordaland",
                "antall_aar": 6.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/26/01",
                "sist_ut": "08/16/07",
                "inn": [
                    "03/26/01"
                ],
                "ut": [
                    "08/16/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1246,
                "kommune": "Fjell",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1247,
                "kommune": "Askøy",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1251,
                "kommune": "Vaksdal",
                "fylke": "Hordaland",
                "antall_aar": 2.15,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/13/04",
                "sist_ut": "07/14/05",
                "inn": [
                    "01/30/02",
                    "07/13/04"
                ],
                "ut": [
                    "03/25/03",
                    "07/14/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1252,
                "kommune": "Modalen",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1253,
                "kommune": "Osterøy",
                "fylke": "Hordaland",
                "antall_aar": 10.42,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/01/05",
                "sist_ut": "07/03/15",
                "inn": [
                    "02/01/05"
                ],
                "ut": [
                    "07/03/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1256,
                "kommune": "Meland",
                "fylke": "Hordaland",
                "antall_aar": 12.96,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/18/01",
                "sist_ut": "07/02/14",
                "inn": [
                    "07/18/01"
                ],
                "ut": [
                    "07/02/14"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1259,
                "kommune": "Øygarden",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1260,
                "kommune": "Radøy",
                "fylke": "Hordaland",
                "antall_aar": 2.37,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "04/01/05",
                "sist_ut": "08/16/07",
                "inn": [
                    "04/01/05"
                ],
                "ut": [
                    "08/16/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1263,
                "kommune": "Lindås",
                "fylke": "Hordaland",
                "antall_aar": 4.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "07/14/05",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "07/14/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1264,
                "kommune": "Austrheim",
                "fylke": "Hordaland",
                "antall_aar": 5.42,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/28/03",
                "sist_ut": "07/30/08",
                "inn": [
                    "02/28/03"
                ],
                "ut": [
                    "07/30/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1265,
                "kommune": "Fedje",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1266,
                "kommune": "Masfjord",
                "fylke": "Hordaland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1401,
                "kommune": "Flora",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 8.02,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "07/28/11",
                "sist_ut": "07/09/13",
                "inn": [
                    "06/19/03",
                    "08/25/06",
                    "07/28/11"
                ],
                "ut": [
                    "04/08/00",
                    "07/14/09",
                    "07/09/13"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1411,
                "kommune": "Gulen",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 5.18,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/06/02",
                "sist_ut": "07/09/07",
                "inn": [
                    "05/06/02"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1412,
                "kommune": "Solund",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1413,
                "kommune": "Hyllestad",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 7.3,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/19/03",
                "sist_ut": "10/05/10",
                "inn": [
                    "06/19/03"
                ],
                "ut": [
                    "10/05/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1416,
                "kommune": "Høyanger",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 4.05,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "03/12/14",
                "sist_ut": "06/01/15",
                "inn": [
                    "02/25/03",
                    "08/25/06",
                    "03/12/14"
                ],
                "ut": [
                    "02/06/04",
                    "07/10/08",
                    "06/01/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1417,
                "kommune": "Vik",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 13.82,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/09/07",
                "sist_ut": "05/30/16",
                "inn": [
                    "08/10/01",
                    "07/09/07"
                ],
                "ut": [
                    "07/06/06",
                    "05/30/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1418,
                "kommune": "Balestrand",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 4.74,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/15/02",
                "sist_ut": "07/12/07",
                "inn": [
                    "10/15/02"
                ],
                "ut": [
                    "07/12/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1419,
                "kommune": "Leikanger",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 3.03,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/25/03",
                "sist_ut": "03/07/06",
                "inn": [
                    "02/25/03"
                ],
                "ut": [
                    "03/07/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1420,
                "kommune": "Sogndal",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1421,
                "kommune": "Aurland",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1422,
                "kommune": "Lærdal",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 3.41,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/05/13",
                "sist_ut": "03/02/15",
                "inn": [
                    "07/10/03",
                    "07/05/13"
                ],
                "ut": [
                    "04/08/05",
                    "03/02/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1424,
                "kommune": "Årdal",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 3.04,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/27/13",
                "sist_ut": "06/08/16",
                "inn": [
                    "05/27/13"
                ],
                "ut": [
                    "06/08/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1426,
                "kommune": "Luster",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1428,
                "kommune": "Askvoll",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 6.77,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/25/14",
                "sist_ut": "07/03/15",
                "inn": [
                    "08/10/01",
                    "08/25/14"
                ],
                "ut": [
                    "07/12/07",
                    "07/03/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1429,
                "kommune": "Fjaler",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 5.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "07/12/06",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "07/12/06"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1430,
                "kommune": "Gaular",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 4.54,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/07/15",
                "sist_ut": "07/12/07",
                "inn": [
                    "07/01/03",
                    "07/07/15"
                ],
                "ut": [
                    "07/12/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1431,
                "kommune": "Jølster",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 6.07,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/20/03",
                "sist_ut": "07/14/09",
                "inn": [
                    "06/20/03"
                ],
                "ut": [
                    "07/14/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1432,
                "kommune": "Førde",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "d",
                "kommunenr": 1433,
                "kommune": "Naustdal",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 6.97,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "08/26/16",
                "sist_ut": "07/14/09",
                "inn": [
                    "01/01/01",
                    "02/25/03",
                    "08/26/16"
                ],
                "ut": [
                    "08/06/01",
                    "07/14/09"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1438,
                "kommune": "Bremanger",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 7.54,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "06/18/08",
                "sist_ut": "",
                "inn": [
                    "06/18/08"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1439,
                "kommune": "Vågsøy",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 5.31,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "02/05/09",
                "sist_ut": "10/18/10",
                "inn": [
                    "01/01/01",
                    "07/10/03",
                    "02/05/09"
                ],
                "ut": [
                    "08/06/02",
                    "07/12/05",
                    "10/18/10"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1441,
                "kommune": "Selje",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 8.1,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "07/17/14",
                "sist_ut": "10/14/09",
                "inn": [
                    "02/15/01",
                    "07/19/05",
                    "07/17/14"
                ],
                "ut": [
                    "07/10/03",
                    "10/14/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1443,
                "kommune": "Eid",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 1.65,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/15/02",
                "sist_ut": "06/08/04",
                "inn": [
                    "10/15/02"
                ],
                "ut": [
                    "06/08/04"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1444,
                "kommune": "Hornindal",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "b",
                "kommunenr": 1445,
                "kommune": "Gloppen",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 4.97,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "07/08/16",
                "sist_ut": "06/30/06",
                "inn": [
                    "02/15/01",
                    "06/30/03",
                    "07/08/16"
                ],
                "ut": [
                    "02/06/02",
                    "06/30/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1449,
                "kommune": "Stryn",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1502,
                "kommune": "Molde",
                "fylke": "Møre og Romsdal",
                "antall_aar": 2.82,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/21/02",
                "sist_ut": "06/16/05",
                "inn": [
                    "08/21/02"
                ],
                "ut": [
                    "06/16/05"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1504,
                "kommune": "Ålesund",
                "fylke": "Møre og Romsdal",
                "antall_aar": 8.61,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "09/01/14",
                "sist_ut": "03/10/09",
                "inn": [
                    "05/02/01",
                    "02/18/08",
                    "09/01/14"
                ],
                "ut": [
                    "07/20/07",
                    "03/10/09"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1505,
                "kommune": "Kristiansund",
                "fylke": "Møre og Romsdal",
                "antall_aar": 2.83,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "07/09/15",
                "sist_ut": "07/13/12",
                "inn": [
                    "07/30/08",
                    "10/17/10",
                    "07/09/15"
                ],
                "ut": [
                    "03/10/09",
                    "07/13/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1511,
                "kommune": "Vanylven",
                "fylke": "Møre og Romsdal",
                "antall_aar": 4.01,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/02/12",
                "sist_ut": "07/22/13",
                "inn": [
                    "01/01/01",
                    "10/02/12"
                ],
                "ut": [
                    "03/16/04",
                    "07/22/13"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1514,
                "kommune": "Sande",
                "fylke": "Møre og Romsdal",
                "antall_aar": 7.77,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "07/31/08",
                "sist_ut": "09/24/12",
                "inn": [
                    "11/04/03",
                    "07/31/08"
                ],
                "ut": [
                    "07/17/07",
                    "09/24/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1515,
                "kommune": "Herøy",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0.81,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/22/01",
                "sist_ut": "06/25/03",
                "inn": [
                    "08/22/01"
                ],
                "ut": [
                    "06/25/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1516,
                "kommune": "Ulstein",
                "fylke": "Møre og Romsdal",
                "antall_aar": 2.01,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "02/13/04",
                "sist_ut": "07/01/05",
                "inn": [
                    "01/01/01",
                    "02/13/04"
                ],
                "ut": [
                    "08/22/01",
                    "07/01/05"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1517,
                "kommune": "Hareid",
                "fylke": "Møre og Romsdal",
                "antall_aar": 12.6,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "09/29/11",
                "sist_ut": "08/03/09",
                "inn": [
                    "05/02/01",
                    "09/29/11"
                ],
                "ut": [
                    "08/03/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1519,
                "kommune": "Volda",
                "fylke": "Møre og Romsdal",
                "antall_aar": 3.87,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "01/23/14",
                "sist_ut": "02/20/15",
                "inn": [
                    "08/21/02",
                    "01/23/14"
                ],
                "ut": [
                    "06/06/05",
                    "02/20/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1520,
                "kommune": "Ørsta",
                "fylke": "Møre og Romsdal",
                "antall_aar": 6.96,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "09/17/09",
                "sist_ut": "06/03/15",
                "inn": [
                    "04/05/04",
                    "09/17/09"
                ],
                "ut": [
                    "07/05/05",
                    "06/03/15"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1523,
                "kommune": "Ørskog",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1524,
                "kommune": "Norddal",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0.91,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/23/01",
                "sist_ut": "01/22/02",
                "inn": [
                    "02/23/01"
                ],
                "ut": [
                    "01/22/02"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1525,
                "kommune": "Stranda",
                "fylke": "Møre og Romsdal",
                "antall_aar": 8.95,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/05/11",
                "sist_ut": "06/16/05",
                "inn": [
                    "01/01/01",
                    "07/05/11"
                ],
                "ut": [
                    "06/16/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1526,
                "kommune": "Stordal",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1528,
                "kommune": "Sykkylven",
                "fylke": "Møre og Romsdal",
                "antall_aar": 12.4,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "10/15/10",
                "sist_ut": "07/09/07",
                "inn": [
                    "01/01/01",
                    "10/15/10"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1529,
                "kommune": "Skodje",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0.33,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/15/01",
                "sist_ut": "07/17/01",
                "inn": [
                    "03/15/01"
                ],
                "ut": [
                    "07/17/01"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1531,
                "kommune": "Sula",
                "fylke": "Møre og Romsdal",
                "antall_aar": 5.54,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "02/27/08",
                "sist_ut": "03/05/09",
                "inn": [
                    "01/01/01",
                    "02/27/08"
                ],
                "ut": [
                    "07/05/05",
                    "03/05/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1532,
                "kommune": "Giske",
                "fylke": "Møre og Romsdal",
                "antall_aar": 4.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/21/02",
                "sist_ut": "02/27/07",
                "inn": [
                    "08/21/02"
                ],
                "ut": [
                    "02/27/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1534,
                "kommune": "Haram",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1535,
                "kommune": "Vestnes",
                "fylke": "Møre og Romsdal",
                "antall_aar": 4.92,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/03/09",
                "sist_ut": "08/19/13",
                "inn": [
                    "04/10/03",
                    "08/03/09"
                ],
                "ut": [
                    "02/24/04",
                    "08/19/13"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1539,
                "kommune": "Rauma",
                "fylke": "Møre og Romsdal",
                "antall_aar": 5.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/07/06",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/07/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1543,
                "kommune": "Nesset",
                "fylke": "Møre og Romsdal",
                "antall_aar": 5.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/06/06",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/06/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1545,
                "kommune": "Midsund",
                "fylke": "Møre og Romsdal",
                "antall_aar": 1.24,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/05/11",
                "sist_ut": "10/02/12",
                "inn": [
                    "07/05/11"
                ],
                "ut": [
                    "10/02/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1546,
                "kommune": "Sandøy",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1547,
                "kommune": "Aukra",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1548,
                "kommune": "Fræna",
                "fylke": "Møre og Romsdal",
                "antall_aar": 11.18,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "09/01/09",
                "sist_ut": "05/06/16",
                "inn": [
                    "01/01/01",
                    "09/01/09"
                ],
                "ut": [
                    "07/01/06",
                    "05/06/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1551,
                "kommune": "Eide",
                "fylke": "Møre og Romsdal",
                "antall_aar": 2.65,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "11/04/03",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "11/04/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1554,
                "kommune": "Averøy",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1556,
                "kommune": "Frei",
                "fylke": "Møre og Romsdal",
                "antall_aar": 1.64,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/15/02",
                "sist_ut": "11/04/03",
                "inn": [
                    "03/15/02"
                ],
                "ut": [
                    "11/04/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1557,
                "kommune": "Gjemnes",
                "fylke": "Møre og Romsdal",
                "antall_aar": 9.07,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/04/10",
                "sist_ut": "06/04/15",
                "inn": [
                    "01/01/01",
                    "10/04/10"
                ],
                "ut": [
                    "05/31/05",
                    "06/04/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1560,
                "kommune": "Tingvoll",
                "fylke": "Møre og Romsdal",
                "antall_aar": 1.57,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "04/15/04",
                "sist_ut": "06/08/04",
                "inn": [
                    "01/01/01",
                    "04/15/04"
                ],
                "ut": [
                    "06/13/02",
                    "06/08/04"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1563,
                "kommune": "Sunndal",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1566,
                "kommune": "Surnadal",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1567,
                "kommune": "Rindal",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1571,
                "kommune": "Halsa",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1573,
                "kommune": "Smøla",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1576,
                "kommune": "Aure",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1601,
                "kommune": "Trondheim",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 1.01,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/19/01",
                "sist_ut": "02/20/02",
                "inn": [
                    "02/19/01"
                ],
                "ut": [
                    "02/20/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1612,
                "kommune": "Hemne",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1613,
                "kommune": "Snillfjord",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1617,
                "kommune": "Hitra",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/01",
                "sist_ut": "02/06/02",
                "inn": [
                    "02/15/01"
                ],
                "ut": [
                    "02/06/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1620,
                "kommune": "Frøya",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 4.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/08/05",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/08/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1621,
                "kommune": "Ørland",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0.95,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/18/04",
                "sist_ut": "08/01/05",
                "inn": [
                    "08/18/04"
                ],
                "ut": [
                    "08/01/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1622,
                "kommune": "Agdenes",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1624,
                "kommune": "Rissa",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 2.07,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/12/03",
                "sist_ut": "07/04/05",
                "inn": [
                    "06/12/03"
                ],
                "ut": [
                    "07/04/05"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1627,
                "kommune": "Bjugn",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 2.33,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/13/14",
                "sist_ut": "02/02/09",
                "inn": [
                    "02/27/08",
                    "08/13/14"
                ],
                "ut": [
                    "02/02/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1630,
                "kommune": "Åfjord",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "c",
                "kommunenr": 1632,
                "kommune": "Roan",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 6.35,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/23/13",
                "sist_ut": "07/04/05",
                "inn": [
                    "07/09/01",
                    "08/23/13"
                ],
                "ut": [
                    "07/04/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1633,
                "kommune": "Osen",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1634,
                "kommune": "Oppdal",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1635,
                "kommune": "Rennebu",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1636,
                "kommune": "Meldal",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1638,
                "kommune": "Orkdal",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "d",
                "kommunenr": 1640,
                "kommune": "Røros",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 1.39,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "08/13/14",
                "sist_ut": "",
                "inn": [
                    "08/13/14"
                ],
                "ut": []
            }, {
                "bokstaver": "a-b",
                "kommunenr": 1644,
                "kommune": "Holtålen",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 6.32,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "01/28/13",
                "sist_ut": "08/23/16",
                "inn": [
                    "01/01/01",
                    "08/18/04",
                    "01/28/13"
                ],
                "ut": [
                    "06/14/01",
                    "07/30/07",
                    "08/23/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1648,
                "kommune": "Midtre Gauldal",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 2.48,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/03/04",
                "sist_ut": "08/25/06",
                "inn": [
                    "03/03/04"
                ],
                "ut": [
                    "08/25/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1653,
                "kommune": "Melhus",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1657,
                "kommune": "Skaun",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 1.86,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/07/09",
                "sist_ut": "08/23/10",
                "inn": [
                    "02/15/01",
                    "10/07/09"
                ],
                "ut": [
                    "02/06/02",
                    "08/23/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1662,
                "kommune": "Klæbu",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 1.26,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/26/09",
                "sist_ut": "08/23/10",
                "inn": [
                    "01/01/01",
                    "10/26/09"
                ],
                "ut": [
                    "06/14/01",
                    "08/23/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1663,
                "kommune": "Malvik",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 5.86,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/10/02",
                "sist_ut": "08/18/08",
                "inn": [
                    "10/10/02"
                ],
                "ut": [
                    "08/18/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1664,
                "kommune": "Selbu",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 3.03,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/14/03",
                "sist_ut": "08/25/06",
                "inn": [
                    "08/14/03"
                ],
                "ut": [
                    "08/25/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1665,
                "kommune": "Tydal",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1702,
                "kommune": "Steinkjer",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1703,
                "kommune": "Namsos",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1711,
                "kommune": "Meråker",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1714,
                "kommune": "Stjørdal",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 1.85,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "04/25/08",
                "sist_ut": "02/03/09",
                "inn": [
                    "06/29/06",
                    "04/25/08"
                ],
                "ut": [
                    "07/30/07",
                    "02/03/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1717,
                "kommune": "Frosta",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1718,
                "kommune": "Leksvik",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 9.04,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "04/02/12",
                "sist_ut": "05/29/08",
                "inn": [
                    "01/01/01",
                    "08/23/05",
                    "04/02/12"
                ],
                "ut": [
                    "07/10/03",
                    "05/29/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1719,
                "kommune": "Levanger",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 6.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/09/07",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1721,
                "kommune": "Verdal",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 4.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "05/31/05",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "05/31/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1723,
                "kommune": "Mosvik",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.36,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "03/30/10",
                "sist_ut": "05/05/11",
                "inn": [
                    "04/01/03",
                    "03/30/10"
                ],
                "ut": [
                    "07/04/05",
                    "05/05/11"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1724,
                "kommune": "Verran",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 6.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/09/07",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1725,
                "kommune": "Namdalseid",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 2.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/10/03",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/10/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1729,
                "kommune": "Inderøy",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.63,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "06/29/06",
                "sist_ut": "08/12/08",
                "inn": [
                    "01/01/01",
                    "06/29/06"
                ],
                "ut": [
                    "07/08/02",
                    "08/12/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1736,
                "kommune": "Snåsa",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.39,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "05/19/03",
                "sist_ut": "05/31/05",
                "inn": [
                    "01/01/01",
                    "05/19/03"
                ],
                "ut": [
                    "07/08/02",
                    "05/31/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1738,
                "kommune": "Lierne",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1739,
                "kommune": "Røyrvik",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1740,
                "kommune": "Namsskogan",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": true,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [
                    "Invalid date"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1742,
                "kommune": "Grong",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 1.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/13/04",
                "sist_ut": "06/24/06",
                "inn": [
                    "07/13/04"
                ],
                "ut": [
                    "06/24/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1743,
                "kommune": "Høylandet",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1744,
                "kommune": "Overhall",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1748,
                "kommune": "Fosnes",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1749,
                "kommune": "Flatanger",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1750,
                "kommune": "Vikna",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 0.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/13/04",
                "sist_ut": "07/04/05",
                "inn": [
                    "07/13/04"
                ],
                "ut": [
                    "07/04/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1751,
                "kommune": "Nærøy",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 4.47,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/27/04",
                "sist_ut": "08/12/08",
                "inn": [
                    "02/27/04"
                ],
                "ut": [
                    "08/12/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1755,
                "kommune": "Leka",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.25,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "03/31/08",
                "sist_ut": "03/17/09",
                "inn": [
                    "05/31/05",
                    "03/31/08"
                ],
                "ut": [
                    "07/09/07",
                    "03/17/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1804,
                "kommune": "Bodø",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1805,
                "kommune": "Narvik",
                "fylke": "Nordland",
                "antall_aar": 6.89,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "02/20/09",
                "sist_ut": "06/10/15",
                "inn": [
                    "01/01/01",
                    "02/20/09"
                ],
                "ut": [
                    "07/17/01",
                    "06/10/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1811,
                "kommune": "Bindal",
                "fylke": "Nordland",
                "antall_aar": 4.54,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/04/03",
                "sist_ut": "08/22/05",
                "inn": [
                    "02/15/01",
                    "03/04/03"
                ],
                "ut": [
                    "08/22/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1812,
                "kommune": "Sømna",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "a-c",
                "kommunenr": 1813,
                "kommune": "Brønnøy",
                "fylke": "Nordland",
                "antall_aar": 0.68,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/14/16",
                "sist_ut": "08/23/10",
                "inn": [
                    "12/18/09",
                    "07/14/16"
                ],
                "ut": [
                    "08/23/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1815,
                "kommune": "Vega",
                "fylke": "Nordland",
                "antall_aar": 1.91,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/12/03",
                "sist_ut": "08/11/05",
                "inn": [
                    "09/12/03"
                ],
                "ut": [
                    "08/11/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1816,
                "kommune": "Vevelstad",
                "fylke": "Nordland",
                "antall_aar": 1.61,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "06/14/04",
                "sist_ut": "07/14/05",
                "inn": [
                    "08/09/02",
                    "06/14/04"
                ],
                "ut": [
                    "02/18/03",
                    "07/14/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1818,
                "kommune": "Herøy",
                "fylke": "Nordland",
                "antall_aar": 0.6,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/19/01",
                "sist_ut": "05/13/02",
                "inn": [
                    "10/19/01"
                ],
                "ut": [
                    "05/13/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1820,
                "kommune": "Alstahaug",
                "fylke": "Nordland",
                "antall_aar": 2.76,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "10/03/03",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "10/03/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1822,
                "kommune": "Leirfjord",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1824,
                "kommune": "Vefsn",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1825,
                "kommune": "Grane",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1826,
                "kommune": "Hattfjelldal",
                "fylke": "Nordland",
                "antall_aar": 7.3,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "12/22/08",
                "sist_ut": "",
                "inn": [
                    "12/22/08"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1827,
                "kommune": "Dønna",
                "fylke": "Nordland",
                "antall_aar": 2.35,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/05/01",
                "sist_ut": "07/10/03",
                "inn": [
                    "03/05/01"
                ],
                "ut": [
                    "07/10/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1828,
                "kommune": "Nesna",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "c",
                "kommunenr": 1832,
                "kommune": "Hemnes",
                "fylke": "Nordland",
                "antall_aar": 8.66,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "03/13/09",
                "sist_ut": "11/07/02",
                "inn": [
                    "01/01/01",
                    "03/13/09"
                ],
                "ut": [
                    "11/07/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1833,
                "kommune": "Rana",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1834,
                "kommune": "Lurøy",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1835,
                "kommune": "Træna",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1836,
                "kommune": "Rødøy",
                "fylke": "Nordland",
                "antall_aar": 3.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/06/02",
                "sist_ut": "09/25/05",
                "inn": [
                    "05/06/02"
                ],
                "ut": [
                    "09/25/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1837,
                "kommune": "Meløy",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1838,
                "kommune": "Gildeskål",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1839,
                "kommune": "Beiarn",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "a",
                "kommunenr": 1840,
                "kommune": "Saltdal",
                "fylke": "Nordland",
                "antall_aar": 7.1,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "06/09/15",
                "sist_ut": "08/13/07",
                "inn": [
                    "12/15/01",
                    "06/09/15"
                ],
                "ut": [
                    "08/13/07"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1841,
                "kommune": "Fauske",
                "fylke": "Nordland",
                "antall_aar": 8.3,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "10/01/15",
                "sist_ut": "07/28/10",
                "inn": [
                    "03/05/01",
                    "09/22/03",
                    "10/01/15"
                ],
                "ut": [
                    "07/11/02",
                    "07/28/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1845,
                "kommune": "Sørfold",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "c",
                "kommunenr": 1848,
                "kommune": "Steigen",
                "fylke": "Nordland",
                "antall_aar": 3.41,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "06/02/16",
                "sist_ut": "08/09/10",
                "inn": [
                    "03/16/07",
                    "06/02/16"
                ],
                "ut": [
                    "08/09/10"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1849,
                "kommune": "Hamarøy",
                "fylke": "Nordland",
                "antall_aar": 5.6,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "09/05/11",
                "sist_ut": "09/25/09",
                "inn": [
                    "07/01/05",
                    "08/10/09",
                    "09/05/11"
                ],
                "ut": [
                    "08/25/06",
                    "09/25/09"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1850,
                "kommune": "Tysfjord",
                "fylke": "Nordland",
                "antall_aar": 10.21,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "03/18/14",
                "sist_ut": "06/02/09",
                "inn": [
                    "01/01/01",
                    "03/18/14"
                ],
                "ut": [
                    "06/02/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1851,
                "kommune": "Lødingen",
                "fylke": "Nordland",
                "antall_aar": 10.23,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/19/03",
                "sist_ut": "09/09/13",
                "inn": [
                    "06/19/03"
                ],
                "ut": [
                    "09/09/13"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1852,
                "kommune": "Tjeldsund",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1853,
                "kommune": "Evenes",
                "fylke": "Nordland",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "d",
                "kommunenr": 1854,
                "kommune": "Ballangen",
                "fylke": "Nordland",
                "antall_aar": 4.23,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "11/15/13",
                "sist_ut": "08/03/09",
                "inn": [
                    "07/09/07",
                    "11/15/13"
                ],
                "ut": [
                    "08/03/09"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1856,
                "kommune": "Røst",
                "fylke": "Nordland",
                "antall_aar": 4.45,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/03/11",
                "sist_ut": "06/18/15",
                "inn": [
                    "01/03/11"
                ],
                "ut": [
                    "06/18/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1857,
                "kommune": "Værøy",
                "fylke": "Nordland",
                "antall_aar": 1.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/10/03",
                "sist_ut": "07/01/05",
                "inn": [
                    "07/10/03"
                ],
                "ut": [
                    "07/01/05"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1859,
                "kommune": "Flakstad",
                "fylke": "Nordland",
                "antall_aar": 7.27,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "09/23/08",
                "sist_ut": "",
                "inn": [
                    "09/23/08"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1860,
                "kommune": "Vestvågøy",
                "fylke": "Nordland",
                "antall_aar": 3.68,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/04/13",
                "sist_ut": "06/16/16",
                "inn": [
                    "08/18/04",
                    "10/04/13"
                ],
                "ut": [
                    "08/11/05",
                    "06/16/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1865,
                "kommune": "Vågan",
                "fylke": "Nordland",
                "antall_aar": 0.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/05/05",
                "sist_ut": "07/14/05",
                "inn": [
                    "01/05/05"
                ],
                "ut": [
                    "07/14/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1866,
                "kommune": "Hadsel",
                "fylke": "Nordland",
                "antall_aar": 6.24,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "11/18/03",
                "sist_ut": "08/27/10",
                "inn": [
                    "11/18/03"
                ],
                "ut": [
                    "08/27/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1867,
                "kommune": "Bø",
                "fylke": "Nordland",
                "antall_aar": 4.59,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/02/11",
                "sist_ut": "12/01/15",
                "inn": [
                    "05/02/11"
                ],
                "ut": [
                    "12/01/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1868,
                "kommune": "Øksnes",
                "fylke": "Nordland",
                "antall_aar": 4.96,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/23/08",
                "sist_ut": "09/10/13",
                "inn": [
                    "09/23/08"
                ],
                "ut": [
                    "09/10/13"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1870,
                "kommune": "Sortland",
                "fylke": "Nordland",
                "antall_aar": 1.77,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "11/22/10",
                "sist_ut": "09/05/11",
                "inn": [
                    "08/18/04",
                    "11/22/10"
                ],
                "ut": [
                    "08/11/05",
                    "09/05/11"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1871,
                "kommune": "Andøy",
                "fylke": "Nordland",
                "antall_aar": 3.97,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/20/09",
                "sist_ut": "10/09/13",
                "inn": [
                    "10/20/09"
                ],
                "ut": [
                    "10/09/13"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1874,
                "kommune": "Moskenes",
                "fylke": "Nordland",
                "antall_aar": 3.48,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "07/10/12",
                "sist_ut": "",
                "inn": [
                    "07/10/12"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1903,
                "kommune": "Harstad",
                "fylke": "Troms",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1902,
                "kommune": "Tromsø",
                "fylke": "Troms",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "d",
                "kommunenr": 1911,
                "kommune": "Kvæfjord",
                "fylke": "Troms",
                "antall_aar": 2.53,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/12/15",
                "sist_ut": "08/11/05",
                "inn": [
                    "06/23/03",
                    "08/12/15"
                ],
                "ut": [
                    "08/11/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1913,
                "kommune": "Skånland",
                "fylke": "Troms",
                "antall_aar": 4.36,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "05/12/05",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "05/12/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1915,
                "kommune": "Bjarkøy",
                "fylke": "Troms",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1917,
                "kommune": "Ibestad",
                "fylke": "Troms",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1919,
                "kommune": "Gratangen",
                "fylke": "Troms",
                "antall_aar": 1.29,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/23/03",
                "sist_ut": "11/04/04",
                "inn": [
                    "07/23/03"
                ],
                "ut": [
                    "11/04/04"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1920,
                "kommune": "Lavangen",
                "fylke": "Troms",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1922,
                "kommune": "Bardu",
                "fylke": "Troms",
                "antall_aar": 3.99,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/11/02",
                "sist_ut": "06/28/06",
                "inn": [
                    "07/11/02"
                ],
                "ut": [
                    "06/28/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1923,
                "kommune": "Salangen",
                "fylke": "Troms",
                "antall_aar": 6.58,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/31/07",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/31/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1924,
                "kommune": "Målselv",
                "fylke": "Troms",
                "antall_aar": 7.16,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/18/04",
                "sist_ut": "12/13/11",
                "inn": [
                    "10/18/04"
                ],
                "ut": [
                    "12/13/11"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1925,
                "kommune": "Sørreisa",
                "fylke": "Troms",
                "antall_aar": 1.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "04/09/10",
                "sist_ut": "09/05/11",
                "inn": [
                    "04/09/10"
                ],
                "ut": [
                    "09/05/11"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1926,
                "kommune": "Dyrøy",
                "fylke": "Troms",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1927,
                "kommune": "Tranøy",
                "fylke": "Troms",
                "antall_aar": 9.61,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "08/09/10",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "08/09/10"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1928,
                "kommune": "Torsken",
                "fylke": "Troms",
                "antall_aar": 15,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "01/01/01",
                "sist_ut": "",
                "inn": [
                    "01/01/01"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1929,
                "kommune": "Berg",
                "fylke": "Troms",
                "antall_aar": 0.43,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/08/01",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/08/01"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1931,
                "kommune": "Lenvik",
                "fylke": "Troms",
                "antall_aar": 6.02,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/05/14",
                "sist_ut": "08/08/16",
                "inn": [
                    "01/01/01",
                    "08/05/14"
                ],
                "ut": [
                    "08/09/05",
                    "08/08/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1933,
                "kommune": "Balsfjord",
                "fylke": "Troms",
                "antall_aar": 2.56,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "07/23/03",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "07/23/03"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1936,
                "kommune": "Karlsøy",
                "fylke": "Troms",
                "antall_aar": 4.35,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "05/12/10",
                "sist_ut": "09/04/13",
                "inn": [
                    "07/11/02",
                    "05/12/10"
                ],
                "ut": [
                    "07/23/03",
                    "09/04/13"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1938,
                "kommune": "Lyngen",
                "fylke": "Troms",
                "antall_aar": 7.28,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "11/06/09",
                "sist_ut": "06/22/12",
                "inn": [
                    "01/01/01",
                    "02/18/08",
                    "11/06/09"
                ],
                "ut": [
                    "07/01/05",
                    "04/25/08",
                    "06/22/12"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1939,
                "kommune": "Storfjord",
                "fylke": "Troms",
                "antall_aar": 4.2,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "01/27/12",
                "sist_ut": "08/08/16",
                "inn": [
                    "03/03/04",
                    "01/27/12"
                ],
                "ut": [
                    "06/11/04",
                    "08/08/16"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1940,
                "kommune": "Kåfjord - Gaivuotna",
                "fylke": "Troms",
                "antall_aar": 4.61,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "08/11/05",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "08/11/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1941,
                "kommune": "Skjervøy",
                "fylke": "Troms",
                "antall_aar": 5.04,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/18/08",
                "sist_ut": "09/04/13",
                "inn": [
                    "08/18/08"
                ],
                "ut": [
                    "09/04/13"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1942,
                "kommune": "Nordreisa",
                "fylke": "Troms",
                "antall_aar": 11.8,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "03/16/04",
                "sist_ut": "",
                "inn": [
                    "03/16/04"
                ],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1943,
                "kommune": "Kvænangen",
                "fylke": "Troms",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 2002,
                "kommune": "Vardø",
                "fylke": "Finnmark",
                "antall_aar": 0.86,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/09/05",
                "sist_ut": "04/18/06",
                "inn": [
                    "06/09/05"
                ],
                "ut": [
                    "04/18/06"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2003,
                "kommune": "Vadsø",
                "fylke": "Finnmark",
                "antall_aar": 1.62,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/01",
                "sist_ut": "08/15/02",
                "inn": [
                    "01/01/01"
                ],
                "ut": [
                    "08/15/02"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2004,
                "kommune": "Hammerfest",
                "fylke": "Finnmark",
                "antall_aar": 1.7,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "12/08/03",
                "sist_ut": "04/07/05",
                "inn": [
                    "01/01/01",
                    "12/08/03"
                ],
                "ut": [
                    "05/16/01",
                    "04/07/05"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 2011,
                "kommune": "Kautokeino",
                "fylke": "Finnmark",
                "antall_aar": 4.67,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/13/13",
                "sist_ut": "07/14/05",
                "inn": [
                    "04/01/03",
                    "08/13/13"
                ],
                "ut": [
                    "07/14/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2012,
                "kommune": "Alta",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 2014,
                "kommune": "Loppa",
                "fylke": "Finnmark",
                "antall_aar": 1.34,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/26/04",
                "sist_ut": "05/31/05",
                "inn": [
                    "01/26/04"
                ],
                "ut": [
                    "05/31/05"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2015,
                "kommune": "Hasvik",
                "fylke": "Finnmark",
                "antall_aar": 3.31,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/19/04",
                "sist_ut": "07/09/07",
                "inn": [
                    "03/19/04"
                ],
                "ut": [
                    "07/09/07"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2017,
                "kommune": "Kvalsund",
                "fylke": "Finnmark",
                "antall_aar": 1.24,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/01/09",
                "sist_ut": "11/29/10",
                "inn": [
                    "09/01/09"
                ],
                "ut": [
                    "11/29/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2018,
                "kommune": "Måsøy",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 2019,
                "kommune": "Nordkapp",
                "fylke": "Finnmark",
                "antall_aar": 2.06,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/06/09",
                "sist_ut": "09/05/11",
                "inn": [
                    "08/06/09"
                ],
                "ut": [
                    "09/05/11"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 2020,
                "kommune": "Porsanger",
                "fylke": "Finnmark",
                "antall_aar": 9.85,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "08/13/14",
                "sist_ut": "09/03/10",
                "inn": [
                    "01/01/01",
                    "09/10/04",
                    "08/13/14"
                ],
                "ut": [
                    "06/25/03",
                    "09/03/10"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2021,
                "kommune": "Karasjohka-Karasjok",
                "fylke": "Finnmark",
                "antall_aar": 5.52,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "04/30/12",
                "sist_ut": "10/06/15",
                "inn": [
                    "06/08/05",
                    "04/30/12"
                ],
                "ut": [
                    "07/09/07",
                    "10/06/15"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2022,
                "kommune": "Lebesby",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "d",
                "kommunenr": 2023,
                "kommune": "Gamvik",
                "fylke": "Finnmark",
                "antall_aar": 10.57,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "01/03/11",
                "sist_ut": "09/03/08",
                "inn": [
                    "02/07/03",
                    "01/03/11"
                ],
                "ut": [
                    "09/03/08"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2024,
                "kommune": "Berlevåg",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 2025,
                "kommune": "Tana",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 2027,
                "kommune": "Nesseby",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 2028,
                "kommune": "Båtsfjord",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 2030,
                "kommune": "Sør-Varanger",
                "fylke": "Finnmark",
                "antall_aar": 0,
                "antall_ganger": 0,
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }]

            return robek_data;
        }


        function getRegionList() {

            var data = getData();

            var currentRegion = "";
            var regions = [];
            var counter = 0;
            //Set first region
            var region = data[0]["fylke"];

            for (let x = 0; x < data.length; x++) {
                //Either new region or last region
                if (data[x]["fylke"] !== region || x === data.length - 1) {

                    let obj = {
                        "fylke": region,
                        "antall_inne": counter
                    };
                    region = data[x]["fylke"];
                    counter = 0;
                    regions.push(obj);

                }
                if (data[x]["inne_naa"]) {
                    counter++;
                }

            }
            //Return sorted
            return regions.sort(function(a, b) {
                if (a["antall_inne"] > b["antall_inne"]) {
                    return 1;
                } else if (a["antall_inne"] < b["antall_inne"]) {
                    return -1;
                } else {
                    return 0;
                }
            }).reverse();

        }



        return {
            getData: getData,
            getRegionList: getRegionList
        }

    })();

});