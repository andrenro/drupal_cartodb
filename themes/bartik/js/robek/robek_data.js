$(document).ready(function() {
    //Wraps the raw data and returns it in a get-method
    DataManager = (function() {
        //Converted the dates on the sist_ut / sist_inn for comparison reasons.
        getData = function() {
            var robek_data = [{
                "bokstaver": "c-d",
                "kommunenr": 101,
                "kommune": "Halden",
                "fylke": "Østfold",
                "antall_aar": 5.3,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/01/2012",
                "sist_ut": "11/18/2002",
                "inn": [
                    "01/01/2001",
                    "08/01/2012"
                ],
                "ut": [
                    "11/18/2002"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 104,
                "kommune": "Moss",
                "fylke": "Østfold",
                "antall_aar": 4.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/2003",
                "sist_ut": "07/09/2007",
                "inn": [
                    "02/18/2003"
                ],
                "ut": [
                    "07/09/2007"
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
                "sist_inn": "02/06/2002",
                "sist_ut": "07/09/2007",
                "inn": [
                    "02/06/2002"
                ],
                "ut": [
                    "07/09/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 111,
                "kommune": "Hvaler",
                "fylke": "Østfold",
                "antall_aar": 2.93,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/25/2004",
                "sist_ut": "08/03/2006",
                "inn": [
                    "02/18/2003",
                    "08/25/2004"
                ],
                "ut": [
                    "02/13/2004",
                    "08/03/2006"
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
                "sist_inn": "06/25/2015",
                "sist_ut": "06/14/2016",
                "inn": [
                    "02/06/2002",
                    "06/25/2015"
                ],
                "ut": [
                    "02/18/2003",
                    "06/14/2016"
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
                "sist_inn": "02/18/2003",
                "sist_ut": "07/09/2007",
                "inn": [
                    "02/18/2003"
                ],
                "ut": [
                    "07/09/2007"
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
                "sist_inn": "02/20/2009",
                "sist_ut": "08/14/2014",
                "inn": [
                    "02/15/2001",
                    "10/08/2003",
                    "02/20/2009"
                ],
                "ut": [
                    "02/18/2003",
                    "07/09/2007",
                    "08/14/2014"
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
                "sist_inn": "02/07/2005",
                "sist_ut": "05/30/2016",
                "inn": [
                    "02/07/2005"
                ],
                "ut": [
                    "05/30/2016"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 211,
                "kommune": "Vestby",
                "fylke": "Akershus",
                "antall_aar": 2.91,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/14/2003",
                "sist_ut": "07/05/2006",
                "inn": [
                    "08/14/2003"
                ],
                "ut": [
                    "07/05/2006"
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
                "sist_inn": "02/15/2001",
                "sist_ut": "02/11/2002",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "02/11/2002"
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
                "sist_inn": "02/26/2002",
                "sist_ut": "04/01/2003",
                "inn": [
                    "02/26/2002"
                ],
                "ut": [
                    "04/01/2003"
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
                "sist_inn": "04/01/2003",
                "sist_ut": "06/09/2005",
                "inn": [
                    "04/01/2003"
                ],
                "ut": [
                    "06/09/2005"
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
                "sist_inn": "07/08/2002",
                "sist_ut": "07/05/2006",
                "inn": [
                    "07/08/2002"
                ],
                "ut": [
                    "07/05/2006"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 230,
                "kommune": "Lørenskog",
                "fylke": "Akershus",
                "antall_aar": 1.4,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/13/2006",
                "sist_ut": "07/09/2007",
                "inn": [
                    "02/13/2006"
                ],
                "ut": [
                    "07/09/2007"
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
                "sist_inn": "02/15/2001",
                "sist_ut": "07/05/2006",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "07/05/2006"
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
                "sist_inn": "04/01/2003",
                "sist_ut": "06/07/2005",
                "inn": [
                    "04/01/2003"
                ],
                "ut": [
                    "06/07/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 236,
                "kommune": "Nes",
                "fylke": "Akershus",
                "antall_aar": 2.88,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/09/2009",
                "sist_ut": "07/30/2012",
                "inn": [
                    "09/09/2009"
                ],
                "ut": [
                    "07/30/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 237,
                "kommune": "Eidsvoll",
                "fylke": "Akershus",
                "antall_aar": 2.06,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "01/23/2014",
                "sist_ut": "03/02/2015",
                "inn": [
                    "02/26/2002",
                    "01/23/2014"
                ],
                "ut": [
                    "02/10/2003",
                    "03/02/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 238,
                "kommune": "Nannestad",
                "fylke": "Akershus",
                "antall_aar": 3.9,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "09/08/2009",
                "sist_ut": "07/30/2012",
                "inn": [
                    "02/11/2002",
                    "09/08/2009"
                ],
                "ut": [
                    "02/10/2003",
                    "07/30/2012"
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
                "sist_inn": "07/14/2009",
                "sist_ut": "06/18/2010",
                "inn": [
                    "07/15/2005",
                    "07/14/2009"
                ],
                "ut": [
                    "06/18/2010"
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
                "sist_inn": "08/09/2010",
                "sist_ut": "07/09/2013",
                "inn": [
                    "06/22/2003",
                    "08/09/2010"
                ],
                "ut": [
                    "07/15/2005",
                    "07/09/2013"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 419,
                "kommune": "Sør-Odal",
                "fylke": "Hedmark",
                "antall_aar": 6.54,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/13/2011",
                "sist_ut": "07/14/2014",
                "inn": [
                    "01/01/2001",
                    "07/13/2011"
                ],
                "ut": [
                    "07/15/2005",
                    "07/14/2014"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 420,
                "kommune": "Eidskog",
                "fylke": "Hedmark",
                "antall_aar": 9.96,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/22/2003",
                "sist_ut": "07/09/2013",
                "inn": [
                    "06/22/2003"
                ],
                "ut": [
                    "07/09/2013"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 423,
                "kommune": "Grue",
                "fylke": "Hedmark",
                "antall_aar": 6.33,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "06/24/2016",
                "sist_ut": "07/14/2009",
                "inn": [
                    "02/15/2001",
                    "06/22/2003",
                    "06/24/2016"
                ],
                "ut": [
                    "07/09/2001",
                    "07/14/2009"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 425,
                "kommune": "Åsnes",
                "fylke": "Hedmark",
                "antall_aar": 9.42,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/09/2013",
                "sist_ut": "06/22/2012",
                "inn": [
                    "07/15/2005",
                    "04/27/2010",
                    "07/09/2013"
                ],
                "ut": [
                    "06/22/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 426,
                "kommune": "Våler",
                "fylke": "Hedmark",
                "antall_aar": 7.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/10/2008",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/10/2008"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 427,
                "kommune": "Elverum",
                "fylke": "Hedmark",
                "antall_aar": 4.54,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/15/2005",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/15/2005"
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
                "sist_inn": "02/18/2003",
                "sist_ut": "02/10/2004",
                "inn": [
                    "02/15/2001",
                    "02/18/2003"
                ],
                "ut": [
                    "02/18/2002",
                    "02/10/2004"
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
                "sist_inn": "02/18/2003",
                "sist_ut": "02/10/2004",
                "inn": [
                    "02/18/2003"
                ],
                "ut": [
                    "02/10/2004"
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
                "sist_inn": "07/15/2005",
                "sist_ut": "07/16/2007",
                "inn": [
                    "07/15/2005"
                ],
                "ut": [
                    "07/16/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 441,
                "kommune": "Os (Hedm.)",
                "fylke": "Hedmark",
                "antall_aar": 0.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/2003",
                "sist_ut": "02/10/2004",
                "inn": [
                    "02/18/2003"
                ],
                "ut": [
                    "02/10/2004"
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
                "sist_inn": "01/01/2001",
                "sist_ut": "05/23/2002",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "05/23/2002"
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
                "sist_inn": "09/22/2015",
                "sist_ut": "06/14/2016",
                "inn": [
                    "09/22/2015"
                ],
                "ut": [
                    "06/14/2016"
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
                "sist_inn": "07/19/2006",
                "sist_ut": "05/18/2007",
                "inn": [
                    "02/15/2001",
                    "07/19/2006"
                ],
                "ut": [
                    "07/17/2001",
                    "05/18/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 522,
                "kommune": "Gausdal",
                "fylke": "Oppland",
                "antall_aar": 0.95,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/2001",
                "sist_ut": "01/25/2002",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "01/25/2002"
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
                "sist_inn": "07/11/2011",
                "sist_ut": "07/07/2005",
                "inn": [
                    "01/01/2001",
                    "07/11/2011"
                ],
                "ut": [
                    "07/07/2005"
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
                "sist_inn": "02/15/2001",
                "sist_ut": "01/25/2002",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "01/25/2002"
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
                "sist_inn": "06/25/2003",
                "sist_ut": "07/09/2007",
                "inn": [
                    "06/25/2003"
                ],
                "ut": [
                    "07/09/2007"
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
                "sist_inn": "07/10/2003",
                "sist_ut": "06/14/2010",
                "inn": [
                    "07/10/2003"
                ],
                "ut": [
                    "06/14/2010"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 605,
                "kommune": "Ringerike",
                "fylke": "Buskerud",
                "antall_aar": 7.81,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "03/11/2008",
                "sist_ut": "",
                "inn": [
                    "03/11/2008"
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
                    "01/27/2016"
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
                "sist_inn": "01/01/2001",
                "sist_ut": "10/01/2001",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "10/01/2001"
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
                "sist_inn": "06/23/2014",
                "sist_ut": "06/18/2012",
                "inn": [
                    "07/09/2003",
                    "10/18/2010",
                    "06/23/2014"
                ],
                "ut": [
                    "04/29/2005",
                    "06/18/2012"
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
                "sist_inn": "07/09/2003",
                "sist_ut": "08/07/2008",
                "inn": [
                    "07/09/2003"
                ],
                "ut": [
                    "08/07/2008"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 628,
                "kommune": "Hurum",
                "fylke": "Buskerud",
                "antall_aar": 1.09,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/18/2008",
                "sist_ut": "03/23/2009",
                "inn": [
                    "02/18/2008"
                ],
                "ut": [
                    "03/23/2009"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 631,
                "kommune": "Flesberg",
                "fylke": "Buskerud",
                "antall_aar": 7.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/26/2004",
                "sist_ut": "09/06/2011",
                "inn": [
                    "02/26/2004"
                ],
                "ut": [
                    "09/06/2011"
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
                "sist_inn": "06/01/2010",
                "sist_ut": "07/06/2012",
                "inn": [
                    "01/01/2001",
                    "06/01/2010"
                ],
                "ut": [
                    "07/25/2002",
                    "07/06/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 702,
                "kommune": "Holmestrand",
                "fylke": "Vestfold",
                "antall_aar": 4.4,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/11/2002",
                "sist_ut": "06/09/2006",
                "inn": [
                    "02/11/2002"
                ],
                "ut": [
                    "06/09/2006"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 704,
                "kommune": "Tønsberg",
                "fylke": "Vestfold",
                "antall_aar": 4.55,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "05/29/2013",
                "sist_ut": "06/02/2016",
                "inn": [
                    "01/01/2001",
                    "05/29/2013"
                ],
                "ut": [
                    "07/17/2002",
                    "06/02/2016"
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
                "sist_inn": "06/29/2012",
                "sist_ut": "04/22/2013",
                "inn": [
                    "08/14/2003",
                    "06/29/2012"
                ],
                "ut": [
                    "07/09/2007",
                    "04/22/2013"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 711,
                "kommune": "Svelvik",
                "fylke": "Vestfold",
                "antall_aar": 8.4,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/02/2010",
                "sist_ut": "07/09/2007",
                "inn": [
                    "08/16/2004",
                    "07/02/2010"
                ],
                "ut": [
                    "07/09/2007"
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
                "sist_inn": "02/11/2002",
                "sist_ut": "03/05/2003",
                "inn": [
                    "02/11/2002"
                ],
                "ut": [
                    "03/05/2003"
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
                "sist_inn": "02/13/2002",
                "sist_ut": "06/29/2006",
                "inn": [
                    "02/13/2002"
                ],
                "ut": [
                    "06/29/2006"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 806,
                "kommune": "Skien",
                "fylke": "Telemark",
                "antall_aar": 4.48,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "06/24/2005",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "06/24/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 807,
                "kommune": "Notodden",
                "fylke": "Telemark",
                "antall_aar": 6.65,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "01/27/2014",
                "sist_ut": "02/05/2015",
                "inn": [
                    "02/19/2001",
                    "11/06/2003",
                    "01/27/2014"
                ],
                "ut": [
                    "01/30/2002",
                    "07/10/2008",
                    "02/05/2015"
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
                "sist_inn": "01/01/2001",
                "sist_ut": "07/11/2006",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/11/2006"
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
                "sist_inn": "06/24/2016",
                "sist_ut": "06/06/2011",
                "inn": [
                    "02/18/2010",
                    "06/24/2016"
                ],
                "ut": [
                    "06/06/2011"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 821,
                "kommune": "Bø",
                "fylke": "Telemark",
                "antall_aar": 12.02,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "06/11/2013",
                "sist_ut": "06/17/2010",
                "inn": [
                    "01/01/2001",
                    "06/11/2013"
                ],
                "ut": [
                    "06/17/2010"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 822,
                "kommune": "Sauherad",
                "fylke": "Telemark",
                "antall_aar": 13.45,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "02/01/2010",
                "sist_ut": "07/10/2008",
                "inn": [
                    "01/01/2001",
                    "02/01/2010"
                ],
                "ut": [
                    "07/10/2008"
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
                "sist_inn": "09/01/2004",
                "sist_ut": "05/30/2006",
                "inn": [
                    "09/01/2004"
                ],
                "ut": [
                    "05/30/2006"
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
                "sist_inn": "02/17/2004",
                "sist_ut": "07/31/2007",
                "inn": [
                    "02/17/2004"
                ],
                "ut": [
                    "07/31/2007"
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
                "sist_inn": "04/18/2001",
                "sist_ut": "08/08/2001",
                "inn": [
                    "04/18/2001"
                ],
                "ut": [
                    "08/08/2001"
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
                "sist_inn": "08/11/2009",
                "sist_ut": "06/01/2012",
                "inn": [
                    "08/11/2009"
                ],
                "ut": [
                    "06/01/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 906,
                "kommune": "Arendal",
                "fylke": "Aust-Agder",
                "antall_aar": 1.35,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "05/07/2002",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "05/07/2002"
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
                    "06/02/2016"
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
                "sist_inn": "08/25/2003",
                "sist_ut": "07/22/2005",
                "inn": [
                    "08/25/2003"
                ],
                "ut": [
                    "07/22/2005"
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
                    "02/04/2016"
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
                "sist_inn": "02/15/2001",
                "sist_ut": "02/11/2002",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "02/11/2002"
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
                "sist_inn": "02/22/2005",
                "sist_ut": "07/09/2007",
                "inn": [
                    "02/22/2005"
                ],
                "ut": [
                    "07/09/2007"
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
                "sist_inn": "08/09/2010",
                "sist_ut": "05/04/2014",
                "inn": [
                    "01/01/2001",
                    "08/09/2010"
                ],
                "ut": [
                    "07/08/2002",
                    "05/04/2014"
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
                "sist_inn": "04/01/2003",
                "sist_ut": "06/07/2006",
                "inn": [
                    "04/01/2003"
                ],
                "ut": [
                    "06/07/2006"
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
                "sist_inn": "07/12/2010",
                "sist_ut": "",
                "inn": [
                    "07/12/2010"
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
                "sist_inn": "03/14/2005",
                "sist_ut": "03/24/2006",
                "inn": [
                    "03/14/2005"
                ],
                "ut": [
                    "03/24/2006"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1133,
                "kommune": "Hjelmeland",
                "fylke": "Rogaland",
                "antall_aar": 0.37,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "08/19/2015",
                "sist_ut": "",
                "inn": [
                    "08/19/2015"
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
                "sist_inn": "05/15/2006",
                "sist_ut": "04/25/2007",
                "inn": [
                    "05/15/2006"
                ],
                "ut": [
                    "04/25/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1201,
                "kommune": "Bergen",
                "fylke": "Hordaland",
                "antall_aar": 4.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/21/2002",
                "sist_ut": "08/16/2007",
                "inn": [
                    "08/21/2002"
                ],
                "ut": [
                    "08/16/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1211,
                "kommune": "Etne",
                "fylke": "Hordaland",
                "antall_aar": 1.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/2001",
                "sist_ut": "08/21/2002",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "08/21/2002"
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
                "sist_inn": "03/17/2011",
                "sist_ut": "07/03/2015",
                "inn": [
                    "08/21/2002",
                    "03/17/2011"
                ],
                "ut": [
                    "08/16/2007",
                    "07/03/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1222,
                "kommune": "Fitjar",
                "fylke": "Hordaland",
                "antall_aar": 8.89,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/21/2002",
                "sist_ut": "07/14/2011",
                "inn": [
                    "08/21/2002"
                ],
                "ut": [
                    "07/14/2011"
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
                "sist_inn": "07/06/2012",
                "sist_ut": "07/02/2014",
                "inn": [
                    "01/01/2001",
                    "08/03/2009",
                    "07/06/2012"
                ],
                "ut": [
                    "08/21/2002",
                    "06/14/2010",
                    "07/02/2014"
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
                "sist_inn": "07/14/2005",
                "sist_ut": "07/30/2008",
                "inn": [
                    "07/14/2005"
                ],
                "ut": [
                    "07/30/2008"
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
                "sist_inn": "02/19/2001",
                "sist_ut": "12/30/2002",
                "inn": [
                    "02/19/2001"
                ],
                "ut": [
                    "12/30/2002"
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
                "sist_inn": "07/14/2005",
                "sist_ut": "08/16/2007",
                "inn": [
                    "01/01/2001",
                    "07/14/2005"
                ],
                "ut": [
                    "07/16/2003",
                    "08/16/2007"
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
                "sist_inn": "02/15/2001",
                "sist_ut": "07/14/2005",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "07/14/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1242,
                "kommune": "Samnanger",
                "fylke": "Hordaland",
                "antall_aar": 1.05,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/25/2003",
                "sist_ut": "07/13/2004",
                "inn": [
                    "06/25/2003"
                ],
                "ut": [
                    "07/13/2004"
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
                "sist_inn": "02/15/2001",
                "sist_ut": "07/06/2012",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "07/06/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1245,
                "kommune": "Sund",
                "fylke": "Hordaland",
                "antall_aar": 6.39,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/26/2001",
                "sist_ut": "08/16/2007",
                "inn": [
                    "03/26/2001"
                ],
                "ut": [
                    "08/16/2007"
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
                "sist_inn": "07/13/2004",
                "sist_ut": "07/14/2005",
                "inn": [
                    "01/30/2002",
                    "07/13/2004"
                ],
                "ut": [
                    "03/25/2003",
                    "07/14/2005"
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
                "sist_inn": "02/01/2005",
                "sist_ut": "07/03/2015",
                "inn": [
                    "02/01/2005"
                ],
                "ut": [
                    "07/03/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1256,
                "kommune": "Meland",
                "fylke": "Hordaland",
                "antall_aar": 12.96,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/18/2001",
                "sist_ut": "07/02/2014",
                "inn": [
                    "07/18/2001"
                ],
                "ut": [
                    "07/02/2014"
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
                "sist_inn": "04/01/2005",
                "sist_ut": "08/16/2007",
                "inn": [
                    "04/01/2005"
                ],
                "ut": [
                    "08/16/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1263,
                "kommune": "Lindås",
                "fylke": "Hordaland",
                "antall_aar": 4.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/2001",
                "sist_ut": "07/14/2005",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "07/14/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1264,
                "kommune": "Austrheim",
                "fylke": "Hordaland",
                "antall_aar": 5.42,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/28/2003",
                "sist_ut": "07/30/2008",
                "inn": [
                    "02/28/2003"
                ],
                "ut": [
                    "07/30/2008"
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
                "sist_inn": "07/28/2011",
                "sist_ut": "07/09/2013",
                "inn": [
                    "06/19/2003",
                    "08/25/2006",
                    "07/28/2011"
                ],
                "ut": [
                    "08/15/2004",
                    "07/14/2009",
                    "07/09/2013"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1411,
                "kommune": "Gulen",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 5.18,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/06/2002",
                "sist_ut": "07/09/2007",
                "inn": [
                    "05/06/2002"
                ],
                "ut": [
                    "07/09/2007"
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
                "sist_inn": "06/19/2003",
                "sist_ut": "10/05/2010",
                "inn": [
                    "06/19/2003"
                ],
                "ut": [
                    "10/05/2010"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1416,
                "kommune": "Høyanger",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 4.05,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "03/12/2014",
                "sist_ut": "06/01/2015",
                "inn": [
                    "02/25/2003",
                    "08/25/2006",
                    "03/12/2014"
                ],
                "ut": [
                    "02/06/2004",
                    "07/10/2008",
                    "06/01/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1417,
                "kommune": "Vik",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 13.82,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "07/09/2007",
                "sist_ut": "05/30/2016",
                "inn": [
                    "08/10/2001",
                    "07/09/2007"
                ],
                "ut": [
                    "07/06/2006",
                    "05/30/2016"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1418,
                "kommune": "Balestrand",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 4.74,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/15/2002",
                "sist_ut": "07/12/2007",
                "inn": [
                    "10/15/2002"
                ],
                "ut": [
                    "07/12/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1419,
                "kommune": "Leikanger",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 3.03,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/25/2003",
                "sist_ut": "03/07/2006",
                "inn": [
                    "02/25/2003"
                ],
                "ut": [
                    "03/07/2006"
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
                "sist_inn": "07/05/2013",
                "sist_ut": "03/02/2015",
                "inn": [
                    "07/10/2003",
                    "07/05/2013"
                ],
                "ut": [
                    "04/08/2005",
                    "03/02/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1424,
                "kommune": "Årdal",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 3.04,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/27/2013",
                "sist_ut": "06/08/2016",
                "inn": [
                    "05/27/2013"
                ],
                "ut": [
                    "06/08/2016"
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
                "sist_inn": "08/25/2014",
                "sist_ut": "07/03/2015",
                "inn": [
                    "08/10/2001",
                    "08/25/2014"
                ],
                "ut": [
                    "07/12/2007",
                    "07/03/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1429,
                "kommune": "Fjaler",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 5.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/15/2001",
                "sist_ut": "07/12/2006",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "07/12/2006"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1430,
                "kommune": "Gaular",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 4.54,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/07/2015",
                "sist_ut": "07/12/2007",
                "inn": [
                    "07/01/2003",
                    "07/07/2015"
                ],
                "ut": [
                    "07/12/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1431,
                "kommune": "Jølster",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 6.07,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/20/2003",
                "sist_ut": "07/14/2009",
                "inn": [
                    "06/20/2003"
                ],
                "ut": [
                    "07/14/2009"
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
                "sist_inn": "08/26/2016",
                "sist_ut": "07/14/2009",
                "inn": [
                    "01/01/2001",
                    "02/25/2003",
                    "08/26/2016"
                ],
                "ut": [
                    "08/06/2001",
                    "07/14/2009"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1438,
                "kommune": "Bremanger",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 7.54,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "06/18/2008",
                "sist_ut": "",
                "inn": [
                    "06/18/2008"
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
                "sist_inn": "02/05/2009",
                "sist_ut": "10/18/2010",
                "inn": [
                    "01/01/2001",
                    "07/10/2003",
                    "02/05/2009"
                ],
                "ut": [
                    "08/06/2002",
                    "07/12/2005",
                    "10/18/2010"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1441,
                "kommune": "Selje",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 8.1,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "07/17/2014",
                "sist_ut": "10/14/2009",
                "inn": [
                    "02/15/2001",
                    "07/19/2005",
                    "07/17/2014"
                ],
                "ut": [
                    "07/10/2003",
                    "10/14/2009"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1443,
                "kommune": "Eid",
                "fylke": "Sogn og Fjordane",
                "antall_aar": 1.65,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/15/2002",
                "sist_ut": "06/08/2004",
                "inn": [
                    "10/15/2002"
                ],
                "ut": [
                    "06/08/2004"
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
                "sist_inn": "07/08/2016",
                "sist_ut": "06/30/2006",
                "inn": [
                    "02/15/2001",
                    "06/30/2003",
                    "07/08/2016"
                ],
                "ut": [
                    "02/06/2002",
                    "06/30/2006"
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
                "sist_inn": "08/21/2002",
                "sist_ut": "06/16/2005",
                "inn": [
                    "08/21/2002"
                ],
                "ut": [
                    "06/16/2005"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1504,
                "kommune": "Ålesund",
                "fylke": "Møre og Romsdal",
                "antall_aar": 8.61,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "09/01/2014",
                "sist_ut": "03/10/2009",
                "inn": [
                    "05/02/2001",
                    "02/18/2008",
                    "09/01/2014"
                ],
                "ut": [
                    "07/20/2007",
                    "03/10/2009"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1505,
                "kommune": "Kristiansund",
                "fylke": "Møre og Romsdal",
                "antall_aar": 2.83,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "07/09/2015",
                "sist_ut": "07/13/2012",
                "inn": [
                    "07/30/2008",
                    "10/17/2010",
                    "07/09/2015"
                ],
                "ut": [
                    "03/10/2009",
                    "07/13/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1511,
                "kommune": "Vanylven",
                "fylke": "Møre og Romsdal",
                "antall_aar": 4.01,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/02/2012",
                "sist_ut": "07/22/2013",
                "inn": [
                    "01/01/2001",
                    "10/02/2012"
                ],
                "ut": [
                    "03/16/2004",
                    "07/22/2013"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1514,
                "kommune": "Sande (M. og R.)",
                "fylke": "Møre og Romsdal",
                "antall_aar": 7.77,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "09/16/2016",
                "sist_ut": "09/24/2012",
                "inn": [
                    "11/04/2003",
                    "07/31/2008",
                    "09/16/2016"
                ],
                "ut": [
                    "07/17/2007",
                    "09/24/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1515,
                "kommune": "Herøy",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0.81,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/22/2001",
                "sist_ut": "06/25/2003",
                "inn": [
                    "08/22/2001"
                ],
                "ut": [
                    "06/25/2003"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1516,
                "kommune": "Ulstein",
                "fylke": "Møre og Romsdal",
                "antall_aar": 2.01,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "02/13/2004",
                "sist_ut": "07/01/2005",
                "inn": [
                    "01/01/2001",
                    "02/13/2004"
                ],
                "ut": [
                    "08/22/2001",
                    "07/01/2005"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1517,
                "kommune": "Hareid",
                "fylke": "Møre og Romsdal",
                "antall_aar": 12.6,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "09/29/2011",
                "sist_ut": "08/03/2009",
                "inn": [
                    "05/02/2001",
                    "09/29/2011"
                ],
                "ut": [
                    "08/03/2009"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1519,
                "kommune": "Volda",
                "fylke": "Møre og Romsdal",
                "antall_aar": 3.87,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "01/23/2014",
                "sist_ut": "02/20/2015",
                "inn": [
                    "08/21/2002",
                    "01/23/2014"
                ],
                "ut": [
                    "06/06/2005",
                    "02/20/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1520,
                "kommune": "Ørsta",
                "fylke": "Møre og Romsdal",
                "antall_aar": 6.96,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "09/17/2009",
                "sist_ut": "06/03/2015",
                "inn": [
                    "04/05/2004",
                    "09/17/2009"
                ],
                "ut": [
                    "07/05/2005",
                    "06/03/2015"
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
                "sist_inn": "02/23/2001",
                "sist_ut": "01/22/2002",
                "inn": [
                    "02/23/2001"
                ],
                "ut": [
                    "01/22/2002"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1525,
                "kommune": "Stranda",
                "fylke": "Møre og Romsdal",
                "antall_aar": 8.95,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "07/05/2011",
                "sist_ut": "06/16/2005",
                "inn": [
                    "01/01/2001",
                    "07/05/2011"
                ],
                "ut": [
                    "06/16/2005"
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
                "sist_inn": "10/15/2010",
                "sist_ut": "07/09/2007",
                "inn": [
                    "01/01/2001",
                    "10/15/2010"
                ],
                "ut": [
                    "07/09/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1529,
                "kommune": "Skodje",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0.33,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/15/2001",
                "sist_ut": "07/17/2001",
                "inn": [
                    "03/15/2001"
                ],
                "ut": [
                    "07/17/2001"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1531,
                "kommune": "Sula",
                "fylke": "Møre og Romsdal",
                "antall_aar": 5.54,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "02/27/2008",
                "sist_ut": "03/05/2009",
                "inn": [
                    "01/01/2001",
                    "02/27/2008"
                ],
                "ut": [
                    "07/05/2005",
                    "03/05/2009"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1532,
                "kommune": "Giske",
                "fylke": "Møre og Romsdal",
                "antall_aar": 4.52,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "09/16/2016",
                "sist_ut": "02/27/2007",
                "inn": [
                    "08/21/2002",
                    "09/16/2016"
                ],
                "ut": [
                    "02/27/2007"
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
                "sist_inn": "08/03/2009",
                "sist_ut": "08/19/2013",
                "inn": [
                    "04/10/2003",
                    "08/03/2009"
                ],
                "ut": [
                    "02/24/2004",
                    "08/19/2013"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1539,
                "kommune": "Rauma",
                "fylke": "Møre og Romsdal",
                "antall_aar": 5.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/07/2006",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/07/2006"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1543,
                "kommune": "Nesset",
                "fylke": "Møre og Romsdal",
                "antall_aar": 5.53,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/06/2006",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/06/2006"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1545,
                "kommune": "Midsund",
                "fylke": "Møre og Romsdal",
                "antall_aar": 1.24,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/05/2011",
                "sist_ut": "10/02/2012",
                "inn": [
                    "07/05/2011"
                ],
                "ut": [
                    "10/02/2012"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1546,
                "kommune": "Sandøy",
                "fylke": "Møre og Romsdal",
                "antall_aar": 0,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "09/16/2016",
                "sist_ut": "",
                "inn": ["09/16/2016"],
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
                "sist_inn": "09/01/2009",
                "sist_ut": "05/06/2016",
                "inn": [
                    "01/01/2001",
                    "09/01/2009"
                ],
                "ut": [
                    "07/01/2006",
                    "05/06/2016"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1551,
                "kommune": "Eide",
                "fylke": "Møre og Romsdal",
                "antall_aar": 2.65,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "11/04/2003",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "11/04/2003"
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
                "sist_inn": "03/15/2002",
                "sist_ut": "11/04/2003",
                "inn": [
                    "03/15/2002"
                ],
                "ut": [
                    "11/04/2003"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1557,
                "kommune": "Gjemnes",
                "fylke": "Møre og Romsdal",
                "antall_aar": 9.07,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/04/2010",
                "sist_ut": "06/04/2015",
                "inn": [
                    "01/01/2001",
                    "10/04/2010"
                ],
                "ut": [
                    "05/31/2005",
                    "06/04/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1560,
                "kommune": "Tingvoll",
                "fylke": "Møre og Romsdal",
                "antall_aar": 1.57,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "04/15/2004",
                "sist_ut": "06/08/2004",
                "inn": [
                    "01/01/2001",
                    "04/15/2004"
                ],
                "ut": [
                    "06/13/2002",
                    "06/08/2004"
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
                "sist_inn": "02/19/2001",
                "sist_ut": "02/20/2002",
                "inn": [
                    "02/19/2001"
                ],
                "ut": [
                    "02/20/2002"
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
                "sist_inn": "02/15/2001",
                "sist_ut": "02/06/2002",
                "inn": [
                    "02/15/2001"
                ],
                "ut": [
                    "02/06/2002"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1620,
                "kommune": "Frøya",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 4.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/08/2005",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/08/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1621,
                "kommune": "Ørland",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 0.95,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/18/2004",
                "sist_ut": "08/01/2005",
                "inn": [
                    "08/18/2004"
                ],
                "ut": [
                    "08/01/2005"
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
                "sist_inn": "06/12/2003",
                "sist_ut": "07/04/2005",
                "inn": [
                    "06/12/2003"
                ],
                "ut": [
                    "07/04/2005"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1627,
                "kommune": "Bjugn",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 2.33,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/13/2014",
                "sist_ut": "02/02/2009",
                "inn": [
                    "02/27/2008",
                    "08/13/2014"
                ],
                "ut": [
                    "02/02/2009"
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
                "sist_inn": "08/23/2013",
                "sist_ut": "07/04/2005",
                "inn": [
                    "07/09/2001",
                    "08/23/2013"
                ],
                "ut": [
                    "07/04/2005"
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
                "sist_inn": "08/13/2014",
                "sist_ut": "",
                "inn": [
                    "08/13/2014"
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
                "sist_inn": "01/28/2013",
                "sist_ut": "08/23/2016",
                "inn": [
                    "01/01/2001",
                    "08/18/2004",
                    "01/28/2013"
                ],
                "ut": [
                    "06/14/2001",
                    "07/30/2007",
                    "08/23/2016"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1648,
                "kommune": "Midtre Gauldal",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 2.48,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/03/2004",
                "sist_ut": "08/25/2006",
                "inn": [
                    "03/03/2004"
                ],
                "ut": [
                    "08/25/2006"
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
                "sist_inn": "10/07/2009",
                "sist_ut": "08/23/2010",
                "inn": [
                    "02/15/2001",
                    "10/07/2009"
                ],
                "ut": [
                    "02/06/2002",
                    "08/23/2010"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1662,
                "kommune": "Klæbu",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 1.26,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "10/26/2009",
                "sist_ut": "08/23/2010",
                "inn": [
                    "01/01/2001",
                    "10/26/2009"
                ],
                "ut": [
                    "06/14/2001",
                    "08/23/2010"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1663,
                "kommune": "Malvik",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 5.86,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/10/2002",
                "sist_ut": "08/18/2008",
                "inn": [
                    "10/10/2002"
                ],
                "ut": [
                    "08/18/2008"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1664,
                "kommune": "Selbu",
                "fylke": "Sør-Trøndelag",
                "antall_aar": 3.03,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/14/2003",
                "sist_ut": "08/25/2006",
                "inn": [
                    "08/14/2003"
                ],
                "ut": [
                    "08/25/2006"
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
                "sist_inn": "04/25/2008",
                "sist_ut": "02/03/2009",
                "inn": [
                    "06/29/2006",
                    "04/25/2008"
                ],
                "ut": [
                    "07/30/2007",
                    "02/03/2009"
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
                "sist_inn": "04/02/2012",
                "sist_ut": "05/29/2008",
                "inn": [
                    "01/01/2001",
                    "08/23/2005",
                    "04/02/2012"
                ],
                "ut": [
                    "07/10/2003",
                    "05/29/2008"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1719,
                "kommune": "Levanger",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 6.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/09/2007",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/09/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1721,
                "kommune": "Verdal",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 4.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "05/31/2005",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "05/31/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1723,
                "kommune": "Mosvik",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.36,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "03/30/2010",
                "sist_ut": "05/05/2011",
                "inn": [
                    "04/01/2003",
                    "03/30/2010"
                ],
                "ut": [
                    "07/04/2005",
                    "05/05/2011"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1724,
                "kommune": "Verran",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 6.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/09/2007",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/09/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1725,
                "kommune": "Namdalseid",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 2.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/10/2003",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/10/2003"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1729,
                "kommune": "Inderøy",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.63,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "06/29/2006",
                "sist_ut": "08/12/2008",
                "inn": [
                    "01/01/2001",
                    "06/29/2006"
                ],
                "ut": [
                    "07/08/2002",
                    "08/12/2008"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1736,
                "kommune": "Snåsa",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.39,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "05/19/2003",
                "sist_ut": "05/31/2005",
                "inn": [
                    "01/01/2001",
                    "05/19/2003"
                ],
                "ut": [
                    "07/08/2002",
                    "05/31/2005"
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
                "inne_naa": false,
                "sist_inn": "",
                "sist_ut": "",
                "inn": [],
                "ut": []
            }, {
                "bokstaver": "",
                "kommunenr": 1742,
                "kommune": "Grong",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 1.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/13/2004",
                "sist_ut": "06/24/2006",
                "inn": [
                    "07/13/2004"
                ],
                "ut": [
                    "06/24/2006"
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
                "sist_inn": "07/13/2004",
                "sist_ut": "07/04/2005",
                "inn": [
                    "07/13/2004"
                ],
                "ut": [
                    "07/04/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1751,
                "kommune": "Nærøy",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 4.47,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "02/27/2004",
                "sist_ut": "08/12/2008",
                "inn": [
                    "02/27/2004"
                ],
                "ut": [
                    "08/12/2008"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1755,
                "kommune": "Leka",
                "fylke": "Nord-Trøndelag",
                "antall_aar": 3.25,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "03/31/2008",
                "sist_ut": "03/17/2009",
                "inn": [
                    "05/31/2005",
                    "03/31/2008"
                ],
                "ut": [
                    "07/09/2007",
                    "03/17/2009"
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
                "sist_inn": "02/20/2009",
                "sist_ut": "06/10/2015",
                "inn": [
                    "01/01/2001",
                    "02/20/2009"
                ],
                "ut": [
                    "07/17/2001",
                    "06/10/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1811,
                "kommune": "Bindal",
                "fylke": "Nordland",
                "antall_aar": 4.54,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/04/2003",
                "sist_ut": "08/22/2005",
                "inn": [
                    "02/15/2001",
                    "03/04/2003"
                ],
                "ut": [
                    "08/22/2005"
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
                "sist_inn": "07/14/2016",
                "sist_ut": "08/23/2010",
                "inn": [
                    "12/18/2009",
                    "07/14/2016"
                ],
                "ut": [
                    "08/23/2010"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1815,
                "kommune": "Vega",
                "fylke": "Nordland",
                "antall_aar": 1.91,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/12/2003",
                "sist_ut": "08/11/2005",
                "inn": [
                    "09/12/2003"
                ],
                "ut": [
                    "08/11/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1816,
                "kommune": "Vevelstad",
                "fylke": "Nordland",
                "antall_aar": 1.61,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "06/14/2004",
                "sist_ut": "07/14/2005",
                "inn": [
                    "08/09/2002",
                    "06/14/2004"
                ],
                "ut": [
                    "02/18/2003",
                    "07/14/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1818,
                "kommune": "Herøy",
                "fylke": "Nordland",
                "antall_aar": 0.6,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/19/2001",
                "sist_ut": "05/13/2002",
                "inn": [
                    "10/19/2001"
                ],
                "ut": [
                    "05/13/2002"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1820,
                "kommune": "Alstahaug",
                "fylke": "Nordland",
                "antall_aar": 2.76,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "10/03/2003",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "10/03/2003"
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
                "sist_inn": "12/22/2008",
                "sist_ut": "",
                "inn": [
                    "12/22/2008"
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
                "sist_inn": "03/05/2001",
                "sist_ut": "07/10/2003",
                "inn": [
                    "03/05/2001"
                ],
                "ut": [
                    "07/10/2003"
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
                "sist_inn": "03/13/2009",
                "sist_ut": "11/07/2002",
                "inn": [
                    "01/01/2001",
                    "03/13/2009"
                ],
                "ut": [
                    "11/07/2002"
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
                "sist_inn": "05/06/2002",
                "sist_ut": "09/25/2005",
                "inn": [
                    "05/06/2002"
                ],
                "ut": [
                    "09/25/2005"
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
                "sist_inn": "06/09/2015",
                "sist_ut": "08/13/2007",
                "inn": [
                    "12/15/2001",
                    "06/09/2015"
                ],
                "ut": [
                    "08/13/2007"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1841,
                "kommune": "Fauske",
                "fylke": "Nordland",
                "antall_aar": 8.3,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "10/01/2015",
                "sist_ut": "09/06/2016",
                "inn": [
                    "03/05/2001",
                    "09/22/2003",
                    "10/01/2015"
                ],
                "ut": [
                    "07/11/2002",
                    "07/28/2010",
                    "09/06/2016"
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
                "sist_inn": "06/02/2016",
                "sist_ut": "08/09/2010",
                "inn": [
                    "03/16/2007",
                    "06/02/2016"
                ],
                "ut": [
                    "08/09/2010"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1849,
                "kommune": "Hamarøy",
                "fylke": "Nordland",
                "antall_aar": 5.6,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "09/05/2011",
                "sist_ut": "09/25/2009",
                "inn": [
                    "07/01/2005",
                    "08/10/2009",
                    "09/05/2011"
                ],
                "ut": [
                    "08/25/2006",
                    "09/25/2009"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1850,
                "kommune": "Tysfjord",
                "fylke": "Nordland",
                "antall_aar": 10.21,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "03/18/2014",
                "sist_ut": "06/02/2009",
                "inn": [
                    "01/01/2001",
                    "03/18/2014"
                ],
                "ut": [
                    "06/02/2009"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1851,
                "kommune": "Lødingen",
                "fylke": "Nordland",
                "antall_aar": 10.23,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "06/19/2003",
                "sist_ut": "09/09/2013",
                "inn": [
                    "06/19/2003"
                ],
                "ut": [
                    "09/09/2013"
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
                "sist_inn": "11/15/2013",
                "sist_ut": "08/03/2009",
                "inn": [
                    "07/09/2007",
                    "11/15/2013"
                ],
                "ut": [
                    "08/03/2009"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1856,
                "kommune": "Røst",
                "fylke": "Nordland",
                "antall_aar": 4.45,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/03/2011",
                "sist_ut": "06/18/2015",
                "inn": [
                    "01/03/2011"
                ],
                "ut": [
                    "06/18/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1857,
                "kommune": "Værøy",
                "fylke": "Nordland",
                "antall_aar": 1.98,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "07/10/2003",
                "sist_ut": "07/01/2005",
                "inn": [
                    "07/10/2003"
                ],
                "ut": [
                    "07/01/2005"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 1859,
                "kommune": "Flakstad",
                "fylke": "Nordland",
                "antall_aar": 7.27,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "09/23/2008",
                "sist_ut": "",
                "inn": [
                    "09/23/2008"
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
                "sist_inn": "10/04/2013",
                "sist_ut": "06/16/2016",
                "inn": [
                    "08/18/2004",
                    "10/04/2013"
                ],
                "ut": [
                    "08/11/2005",
                    "06/16/2016"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1865,
                "kommune": "Vågan",
                "fylke": "Nordland",
                "antall_aar": 0.52,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/05/2005",
                "sist_ut": "07/14/2005",
                "inn": [
                    "01/05/2005"
                ],
                "ut": [
                    "07/14/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1866,
                "kommune": "Hadsel",
                "fylke": "Nordland",
                "antall_aar": 6.24,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "11/18/2003",
                "sist_ut": "08/27/2010",
                "inn": [
                    "11/18/2003"
                ],
                "ut": [
                    "08/27/2010"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1867,
                "kommune": "Bø",
                "fylke": "Nordland",
                "antall_aar": 4.59,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "05/02/2011",
                "sist_ut": "12/01/2015",
                "inn": [
                    "05/02/2011"
                ],
                "ut": [
                    "12/01/2015"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1868,
                "kommune": "Øksnes",
                "fylke": "Nordland",
                "antall_aar": 4.96,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/23/2008",
                "sist_ut": "09/10/2013",
                "inn": [
                    "09/23/2008"
                ],
                "ut": [
                    "09/10/2013"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1870,
                "kommune": "Sortland",
                "fylke": "Nordland",
                "antall_aar": 1.77,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "11/22/2010",
                "sist_ut": "09/05/2011",
                "inn": [
                    "08/18/2004",
                    "11/22/2010"
                ],
                "ut": [
                    "08/11/2005",
                    "09/05/2011"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1871,
                "kommune": "Andøy",
                "fylke": "Nordland",
                "antall_aar": 3.97,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/20/2009",
                "sist_ut": "10/09/2013",
                "inn": [
                    "10/20/2009"
                ],
                "ut": [
                    "10/09/2013"
                ]
            }, {
                "bokstaver": "c",
                "kommunenr": 1874,
                "kommune": "Moskenes",
                "fylke": "Nordland",
                "antall_aar": 3.48,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "07/10/2012",
                "sist_ut": "",
                "inn": [
                    "07/10/2012"
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
                "sist_inn": "08/12/2015",
                "sist_ut": "08/11/2005",
                "inn": [
                    "06/23/2003",
                    "08/12/2015"
                ],
                "ut": [
                    "08/11/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1913,
                "kommune": "Skånland",
                "fylke": "Troms",
                "antall_aar": 4.36,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "05/12/2005",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "05/12/2005"
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
                "sist_inn": "07/23/2003",
                "sist_ut": "11/04/2004",
                "inn": [
                    "07/23/2003"
                ],
                "ut": [
                    "11/04/2004"
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
                "sist_inn": "07/11/2002",
                "sist_ut": "06/28/2006",
                "inn": [
                    "07/11/2002"
                ],
                "ut": [
                    "06/28/2006"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1923,
                "kommune": "Salangen",
                "fylke": "Troms",
                "antall_aar": 6.58,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/31/2007",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/31/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1924,
                "kommune": "Målselv",
                "fylke": "Troms",
                "antall_aar": 7.16,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "10/18/2004",
                "sist_ut": "12/13/2011",
                "inn": [
                    "10/18/2004"
                ],
                "ut": [
                    "12/13/2011"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1925,
                "kommune": "Sørreisa",
                "fylke": "Troms",
                "antall_aar": 1.41,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "04/09/2010",
                "sist_ut": "09/05/2011",
                "inn": [
                    "04/09/2010"
                ],
                "ut": [
                    "09/05/2011"
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
                "sist_inn": "01/01/2001",
                "sist_ut": "08/09/2010",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "08/09/2010"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1928,
                "kommune": "Torsken",
                "fylke": "Troms",
                "antall_aar": 15,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "01/01/2001",
                "sist_ut": "",
                "inn": [
                    "01/01/2001"
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
                "sist_inn": "01/01/2001",
                "sist_ut": "07/08/2001",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/08/2001"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1931,
                "kommune": "Lenvik",
                "fylke": "Troms",
                "antall_aar": 6.02,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "08/05/2014",
                "sist_ut": "08/08/2016",
                "inn": [
                    "01/01/2001",
                    "08/05/2014"
                ],
                "ut": [
                    "08/09/2005",
                    "08/08/2016"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1933,
                "kommune": "Balsfjord",
                "fylke": "Troms",
                "antall_aar": 2.56,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "07/23/2003",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "07/23/2003"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1936,
                "kommune": "Karlsøy",
                "fylke": "Troms",
                "antall_aar": 4.35,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "05/12/2010",
                "sist_ut": "09/04/2013",
                "inn": [
                    "07/11/2002",
                    "05/12/2010"
                ],
                "ut": [
                    "07/23/2003",
                    "09/04/2013"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1938,
                "kommune": "Lyngen",
                "fylke": "Troms",
                "antall_aar": 7.28,
                "antall_ganger": 3,
                "inne_naa": false,
                "sist_inn": "11/06/2009",
                "sist_ut": "06/22/2012",
                "inn": [
                    "01/01/2001",
                    "02/18/2008",
                    "11/06/2009"
                ],
                "ut": [
                    "07/01/2005",
                    "04/25/2008",
                    "06/22/2012"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1939,
                "kommune": "Storfjord",
                "fylke": "Troms",
                "antall_aar": 4.2,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "01/27/2012",
                "sist_ut": "08/08/2016",
                "inn": [
                    "03/03/2004",
                    "01/27/2012"
                ],
                "ut": [
                    "06/11/2004",
                    "08/08/2016"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1940,
                "kommune": "Kåfjord - Gaivuotna",
                "fylke": "Troms",
                "antall_aar": 4.61,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "08/11/2005",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "08/11/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 1941,
                "kommune": "Skjervøy",
                "fylke": "Troms",
                "antall_aar": 5.04,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "08/18/2008",
                "sist_ut": "09/04/2013",
                "inn": [
                    "08/18/2008"
                ],
                "ut": [
                    "09/04/2013"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 1942,
                "kommune": "Nordreisa",
                "fylke": "Troms",
                "antall_aar": 11.8,
                "antall_ganger": 1,
                "inne_naa": true,
                "sist_inn": "03/16/2004",
                "sist_ut": "",
                "inn": [
                    "03/16/2004"
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
                "sist_inn": "06/09/2005",
                "sist_ut": "04/18/2006",
                "inn": [
                    "06/09/2005"
                ],
                "ut": [
                    "04/18/2006"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2003,
                "kommune": "Vadsø",
                "fylke": "Finnmark",
                "antall_aar": 1.62,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "01/01/2001",
                "sist_ut": "08/15/2002",
                "inn": [
                    "01/01/2001"
                ],
                "ut": [
                    "08/15/2002"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2004,
                "kommune": "Hammerfest",
                "fylke": "Finnmark",
                "antall_aar": 1.7,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "12/08/2003",
                "sist_ut": "04/07/2005",
                "inn": [
                    "01/01/2001",
                    "12/08/2003"
                ],
                "ut": [
                    "05/16/2001",
                    "04/07/2005"
                ]
            }, {
                "bokstaver": "d",
                "kommunenr": 2011,
                "kommune": "Kautokeino",
                "fylke": "Finnmark",
                "antall_aar": 4.67,
                "antall_ganger": 2,
                "inne_naa": true,
                "sist_inn": "08/13/2013",
                "sist_ut": "07/14/2005",
                "inn": [
                    "04/01/2003",
                    "08/13/2013"
                ],
                "ut": [
                    "07/14/2005"
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
                "sist_inn": "01/26/2004",
                "sist_ut": "05/31/2005",
                "inn": [
                    "01/26/2004"
                ],
                "ut": [
                    "05/31/2005"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2015,
                "kommune": "Hasvik",
                "fylke": "Finnmark",
                "antall_aar": 3.31,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "03/19/2004",
                "sist_ut": "07/09/2007",
                "inn": [
                    "03/19/2004"
                ],
                "ut": [
                    "07/09/2007"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2017,
                "kommune": "Kvalsund",
                "fylke": "Finnmark",
                "antall_aar": 1.24,
                "antall_ganger": 1,
                "inne_naa": false,
                "sist_inn": "09/01/2009",
                "sist_ut": "11/29/2010",
                "inn": [
                    "09/01/2009"
                ],
                "ut": [
                    "11/29/2010"
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
                "sist_inn": "08/06/2009",
                "sist_ut": "09/05/2011",
                "inn": [
                    "08/06/2009"
                ],
                "ut": [
                    "09/05/2011"
                ]
            }, {
                "bokstaver": "c-d",
                "kommunenr": 2020,
                "kommune": "Porsanger",
                "fylke": "Finnmark",
                "antall_aar": 9.85,
                "antall_ganger": 3,
                "inne_naa": true,
                "sist_inn": "08/13/2014",
                "sist_ut": "09/03/2010",
                "inn": [
                    "01/01/2001",
                    "09/10/2004",
                    "08/13/2014"
                ],
                "ut": [
                    "06/25/2003",
                    "09/03/2010"
                ]
            }, {
                "bokstaver": "",
                "kommunenr": 2021,
                "kommune": "Karasjohka-Karasjok",
                "fylke": "Finnmark",
                "antall_aar": 5.52,
                "antall_ganger": 2,
                "inne_naa": false,
                "sist_inn": "04/30/2012",
                "sist_ut": "10/06/2015",
                "inn": [
                    "06/08/2005",
                    "04/30/2012"
                ],
                "ut": [
                    "07/09/2007",
                    "10/06/2015"
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
                "sist_inn": "01/03/2011",
                "sist_ut": "09/03/2008",
                "inn": [
                    "02/07/2003",
                    "01/03/2011"
                ],
                "ut": [
                    "09/03/2008"
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

            for (var x = 0; x < data.length; x++) {
                //Either new region or last region
                if (data[x]["fylke"] !== region || x === data.length - 1) {

                    var obj = {
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

        //Data cleaner - generate new data regularily 
        // function getTimeSeries() {
        //     var data = getData();
        //     var years = [];
        //     var cleaned = [];

        //     for (var x = 0; x < data.length; x++) {
        //         for (var y = 0; y < data[x]["inn"].length; y++) {
        //             if(data[x]["inn"].length > 0 ){
        //                 // console.log(data[x]["inn"][y]);
        //                 console.log("20"+data[x]["inn"][y].split("/")[2]);
        //                 years.push("20" + data[x]["inn"][y].split("/")[2]);
        //             }
        //         }
        //     }



        //     for (var x = 0; x < data.length; x++) {
        //         for (var y = 0; y < data[x]["ut"].length; y++) {
        //             if(data[x]["ut"].length > 0){
        //                 var year = "20" + data[x]["ut"][y].split("/")[2]
        //                 // console.log(data[x]["ut"][y]);
        //                 years.push(year);
        //             }
        //         }
        //     }

        //     var counter = 0;
        //     var obj = {};

        //     for (var m = 0; m < years.length; m++) {
        //         // console.log(years[m]); console.log(m);
        //         if (!obj[years[m]]) {
        //             obj[years[m]] = 1;
        //         } else {
        //             obj[years[m]] += 1;
        //         }
        //     }
        //     console.log(obj);
        //     return obj;
        // }

        /**
         * Cleanup functions
         */
        //Aggregates data on the form "2003-Inn" to an array containing all dates when the muni got registered in ROBEK.
        // function clean() {

        //  var data = DataManager.getData();

        //  for(var x = 0; x < data.length; x++){
        //      var properties = Object.keys(data[x]);
        //      var inn = [];
        //      var ut = [];
        //      data[x]["inn"]= [];
        //      data[x]["ut"]= [];

        //      for(var y = 0; y < properties.length; y++){
        //          if(properties[y].split("-")[1] === "Inn"){
        //              var dateIn = moment(data[x][properties[y]],"DD/MM/YY").format("MM/DD/YY");
        //              inn.push(dateIn);
        //              delete data[x][properties[y]];
        //          }
        //          if(properties[y].split("-")[1] === "Ut"){
        //              var dateOut= moment(data[x][properties[y]],"DD/MM/YY").format("MM/DD/YY");
        //              ut.push(dateOut);
        //              delete data[x][properties[y]];
        //          }
        //      }

        //      data[x]["inn"] = inn;
        //      data[x]["ut"] = ut;
        //  }

        //  console.log(data);
        // }

        // clean();

        // datas = DataManager.getData();

        // for(var x = 0; x < datas.length;x++){

        //  if(datas[x]["antall_aar"] > 0){
        //      datas[x]["sist_ut"] = moment(datas[x]["sist_ut"], "DD/MM/YY").format("MM/DD/YY");
        //      datas[x]["sist_inn"] = moment(datas[x]["sist_inn"], "DD/MM/YY").format("MM/DD/YY");
        //  }else{
        //      datas[x]["sist_inn"] = "";
        //      datas[x]["sist_ut"] = "";
        //  }
        // }

        //How many went into robek -> Update this
        function inRobek() {
            return {
                "2001": 93,
                "2002": 25,
                "2003": 50,
                "2004": 24,
                "2005": 17,
                "2006": 7,
                "2007": 3,
                "2008": 15,
                "2009": 20,
                "2010": 16,
                "2011": 11,
                "2012": 8,
                "2013": 10,
                "2014": 13,
                "2015": 8,
                "2016": 12
            };
        }
        //How many went out of robek - > Update this
        function outRobek() {
            return {
                "2001": 12,
                "2002": 28,
                "2003": 20,
                "2004": 13,
                "2005": 45,
                "2006": 23,
                "2007": 35,
                "2008": 13,
                "2009": 16,
                "2010": 15,
                "2011": 8,
                "2012": 11,
                "2013": 11,
                "2014": 5,
                "2015": 14,
                "2016": 12
            };
        }

        //Calculates 
        //TODO: create as object instead of calculating..
        function totalInRobek(){
            var inn = inRobek();
            var out = outRobek();
            var years = Object.keys(inn);
            var balanced = []
            var results = {}
            var h = []
            var obj = {}      
            for (var x = 0; x < years.length; x++){
                var i=  inn[years[x]];
                var o= out[years[x]];
                var add = parseInt(i - o);

                var key = years[x];
            
                if(x === 0) {
                    obj[key] = add;
                    balanced.push(obj);
                    h.push(obj[key]);
                }else{
                    obj[key] = (h[x - 1] + add);
                    balanced.push(obj);
                    h.push(obj[key]);

                }
            }
            return obj;
        }

        return {
            getData: getData,
            getRegionList: getRegionList,
            outRobek: outRobek,
            inRobek: inRobek,
            totalInRobek: totalInRobek
        }

    })();

});