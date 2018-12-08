$(document).ready(function() {
    //Links to CDN-stored json-data
    var datasets = {
        "folketall_kvartal": "http://data.ssb.no/api/v0/dataset/1108.json?lang=no",
        "framskrevet_folketall_2026": "https://cdn.jsdelivr.net/gh/andrenro/project_source_files@ssb_api/folketall/framskrevet_2026.json"
    };

    var dataset = JSONstat(datasets["folketall_kvartal"]).Dataset(0);
    var kommuner = dataset.Dimension("Region").Category();
    //Which quarter are we in?
    var kvartal = dataset.Dimension("Tid").Category(0).label;
    var koder = dataset.Dimension("Region");
    //Input form
    formValue = "";
    //Indexed data
    var searchableData = null;

    //Matches indices to kommuner-array.
    setupLunrSearch = function(data) {
        var index = lunr(function() {
            this.field("kommune");
            this.field("kode");
        });

        if (index) {
            for (var x = 0; x < data.length; x++) {
                var temp = {
                    "id": x,
                    "kommune": data[x].label,
                    "index": data[x].index
                }
                index.add(temp);
            }
        }
        return index;
    }

    topAndBottomGrowth = function() {
        //Max-muni and min-muni


        var maxMuni = "";
        var minMuni = "";
        var minP = 0;
        var maxP = 0;

        // var categories = dataset.Dimension('ContentsCode').Category();
        // console.log(kommuner);
        for (var y = 0; y < koder.id.length; y++){
            // console.log(koder.id[y]);
            var values = dataset.Data({
                "Region": koder.id[y]
            });
           
            var percentage = MathHandler.percentageIncrease(values[0].value,values[10].value);

            if(percentage < minP)  {
                minP = percentage;
                minCode = koder.id[y]
                minMuni = kommuner[y].label;
                minDiff = Math.abs(values[10].value - values[0].value);
            }
            else if(percentage > maxP){
                maxP = percentage;
                maxCode = koder.id[y];
                maxMuni = kommuner[y].label;
                maxDiff = Math.abs(values[10].value - values[0].value)
            }

        }
        var min = {
            code: minCode,
            municipality: minMuni,
            inhabitants: minDiff,
            percentage: minP
        }
        var max = {
            code: maxCode,
            municipality: maxMuni,
            inhabitants: maxDiff,
            percentage: maxP
        }

        $("#lowest-growth").html("<strong>"+min.municipality+"</strong> har hatt størst negativ folkevekst det siste kvartalet. Folketallet i <strong>"+min.municipality+"</strong> har blitt redusert med <strong>"+min.inhabitants+"</strong> personer, sist kvartal. Dette utgjør en nedgang på <strong>"+Math.abs(min.percentage).toFixed(2)+"%</strong>")
        $("#highest-growth").html("<strong>"+max.municipality+"</strong> har hatt størst positiv folkevekst det siste kvartalet. Folketallet i <strong>"+max.municipality+"</strong> har økt med <strong>"+max.inhabitants+"</strong> personer, sist kvartal. Dette utgjør en oppgang på <strong>"+Math.abs(max.percentage).toFixed(2)+"%</strong>");
    }





    searchableData = setupLunrSearch(kommuner);
    //Return quasi-random array index, rounded to whole integer
    getRandomArbitrary = function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Helper function for search field
    //Takes input from web form, returns the index if a match is found
    searchIndex = function(query) {
        if (dataset) {

            if (document.getElementById("lunr-index").innerHTML != "") {
                document.getElementById("lunr-index").innerHTML = "";
            }
            var idx = searchableData.search(query);
            if (idx.length > 1) {
                document.getElementById("lunr-index").innerHTML = "Fant flere treff på søket,vennligst prøv et av disse søkeordene: <ul style='font-weight:bold;list-style-type:none' id='lunr-list'></ul>";
                for (var x = 0; x < idx.length; x++) {
                    var node = document.createElement("li");
                    node.setAttribute("class", "lunr-hits");
                    var textnode = document.createTextNode(kommuner[idx[x].ref].label);
                    node.appendChild(textnode);
                    document.getElementById("lunr-list").appendChild(node);

                }
                //TODO: refactor this
                $(".lunr-hits").on("click", function(e) {
                    e.preventDefault();
                    var value = $(this).text();
                    var searchedMunicipality = findMunicipality(next_ten_years, value);
                    populationList(searchedMunicipality);
                    populationComments(searchedMunicipality);
                    economicStats(searchedMunicipality);

                    objects = [];
                    var values = dataset.Data({
                        "Region": searchedMunicipality["kode"]
                    });
                    var categories = dataset.Dimension('ContentsCode').Category();
                    var total = 0;
                    if (values.length === categories.length) {
                        for (var x = 0; x < values.length; x++) {
                            objects[x] = {
                                "category": categories[x].label,
                                "value": values[x].value
                            };
                        }
                    }

                    var deltaQuarter = [objects[0].value, objects[objects.length - 1].value];
                    PopulationChartHandler.showQuarterlyDelta(deltaQuarter);
                    appendToHTML(searchedMunicipality["kommune"], objects, "datalist");

                    if (document.getElementById("lunr-index").innerHTML != "") {
                        document.getElementById("lunr-index").innerHTML = "";
                    }

                });
            } else if (idx.length == 1) {
                //Only return first result
                return {
                    "title": kommuner[idx[0].ref].label,
                    "index": idx[0].ref
                }
            } else {
                $("#no-results").css("visibility", "visible");
                setTimeout(function() {
                    $("#no-results").css("visibility", "hidden");
                    return undefined;
                }, 2000);
            }

        } else {
            console.error("Dataset not present");
            return -1;
        }
    }

    //Helper function
    //Returns the dataset-index of a random 'kommune' to show in the article
    randomIndex = function(randInt) {
        if (dataset) {
            return {
                "title": kommuner[randInt].label,
                "index": randInt
            };
        }
    }

    //Search array for municipality.
    //Hacky solution that splits name and returns the muncipality based on string split
    findMunicipality = function(array, input) {
        for (var x = 0; x < array.length; x++) {
            if (array[x]["kommune"].toLowerCase() === input.toLowerCase()) {
                return array[x];
            }
        }
        return null;

    }

    //Get raw json-stat values, based on municipality name -> code
    getValues = function(input) {
        if (!input) {
            return;
        }
        if (dataset) {
            var objects = [];
            var code = dataset.Dimension('Region').id[input["index"]];
            var values = dataset.Data({
                "Region": code
            });
            var categories = dataset.Dimension('ContentsCode').Category();
            var total = 0;
            if (values.length === categories.length) {
                for (var x = 0; x < values.length; x++) {
                    objects[x] = {
                        "category": categories[x].label,
                        "value": values[x].value
                    };
                }
            }

            var deltaQuarter = [objects[0].value, objects[objects.length - 1].value];
            PopulationChartHandler.showQuarterlyDelta(deltaQuarter);
            appendToHTML(input["title"], objects, "datalist");
            return values;

        } else {
            console.error("Dataset not present");
        }
    }


    //Creates output showing some key economic stats for a given municipality
    economicStats = function(data) {
            var chartData = [];
            var fundingPerInhabitant = 0.0;
            //Yearly regulated values that will be updated every year by SSB
            const offsetPerInhabitant = 22668;

            if (data) {
                $(".inhabitant-funding-offset").html("<strong>" + offsetPerInhabitant + "</strong>");
                $(".expenditure_needs_mean").html("<strong>" + data["expenditure_needs_mean"] + "</strong>");
                $(".this_year").html("<strong>" + new Date().getFullYear() + "</strong>");
                var exampleCalculated = offsetPerInhabitant + (data["expenditure_needs_mean"] * 0.9 - data["expenditure_needs_mean"]);
                $(".ninety_percent").html("<strong>" + exampleCalculated + "</strong>");

                var economicData = {
                    "expenditure_needs": data["expenditure_needs"],
                    "expenditure_needs_mean": data["expenditure_needs_mean"],
                    "fundingPerInhabitant": 0.0,
                    "totalFunding": 0.0,
                    "percentageOfNationalMean": (((data["indexed_value"]) - 1) * 100).toFixed(2)

                };

                document.getElementById("economics-title").innerHTML = "Økonomi i " + data["kommune"];
                economics = document.getElementById("economics");

                var thisYearsTotal = data["years"][0]; //Fetch this quarters
                var realExpenditureNeeds = data["expenditure_needs"];
                var meanExpenditureNeeds = data["expenditure_needs_mean"];
                var indexedNeed = data["indexed_value"];

                var difference = (realExpenditureNeeds - meanExpenditureNeeds);
                if (difference < 0) {
                    fundingPerInhabitant = (offsetPerInhabitant - (Math.abs(difference)))
                } else {
                    fundingPerInhabitant = (offsetPerInhabitant + difference);
                }

                var percentageDiff = MathHandler.indexedToPercentageRemainder(data["indexed_value"]);
                var diff = percentageDiff < 0 ? "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> lavere enn nasjonalt gjennomsnitt" : "<strong>" + Math.abs(percentageDiff.toFixed(2)) + "%</strong> høyere enn nasjonalt gjennomsnitt";

                economicData["fundingPerInhabitant"] = fundingPerInhabitant;
                economicData["totalFunding"] = ((fundingPerInhabitant * thisYearsTotal) / 1000000).toFixed(2);

                var pdph = (economicData["fundingPerInhabitant"]) - offsetPerInhabitant;
                var percentageIncome = 0.0;
                var tempPercentage = Math.abs(pdph);
                var res = MathHandler.percentageOf(tempPercentage, offsetPerInhabitant);
                var incomeDiff = pdph < 0 ? "<strong>" + Math.round(res.toFixed(2)) + "%</strong> mindre enn vedtatt innbyggertilskudd" : "<strong>" + Math.round(res.toFixed(2)) + "%</strong> mer enn vedtatt innbyggertilskudd";

                $("#meanExpenditureNeeds").html("Utgiftsbehov per innbygger 2016 (nasjonalt gjennomsnitt): <strong>" + meanExpenditureNeeds + "</strong> NOK");
                $("#realExpenditureNeeds").html("Utgiftsbehov per innbygger for kommunen: <strong>" + realExpenditureNeeds + "</strong> NOK (" + diff + ")");
                $("#offsetFunding").html("Vedtatt innbyggertilskudd for 2016 (nasjonalt gjennomsnitt): <strong>" + offsetPerInhabitant + "</strong> NOK");
                $("#perInhabitant").html("Behovsjustert innbyggertilskudd for <strong>" + data["kommune"] + "</strong>: <strong>" + economicData["fundingPerInhabitant"].toFixed(2) + "</strong> NOK (" + incomeDiff + ")");

                //TODO: is this including or excluding special deductions?
                $("#totalFunding").html("Kommunens inntekter (basert på innbyggertall) for 2016: <strong>" + economicData["totalFunding"] + " millioner </strong> NOK");

                chartData.push(fundingPerInhabitant);
                chartData.push(offsetPerInhabitant);
                PopulationChartHandler.fundingPerInhabitantChart(chartData);
            }

        }
        //Generate population list and populate the graph, showing an overview for the next 10 years
    populationList = function(data) {
        if (data) {
            PopulationChartHandler.populationGraph(data["years"]);
        }
    }


    //Prints out comments related to the graph showing the population curve for the next 10 years
    populationComments = function(data) {
        var offset;
        var end;
        var firstFourYears;
        var lastFourYears;
        var delta;
        var percentageDiff = 0.0;
        if (data) {
            offset = data["years"][0];
            //The dataset is size 11
            end = data["years"][7];

            firstFourYears = MathHandler.percentageIncrease(data["years"][0], data["years"][3]);
            lastFourYears = MathHandler.percentageIncrease(data["years"][3], data["years"][7]);
            delta = (end - offset);

            if (delta < 0) {
                document.getElementById("population-comments").innerHTML = "Folketallet i <strong>" + data["kommune"] + "</strong> er beregnet til å synke med <strong>" + Math.abs(delta) + "</strong> personer i løpet av en 8-års periode. Nedgangen de første fire årene er <strong>" + firstFourYears.toFixed(1) + "%</strong>, og <strong>" + lastFourYears.toFixed(1) + "%</strong> de siste fire årene av perioden. Dette tilsvarer en total nedgang på ca <strong>" + Math.abs(MathHandler.percentageIncrease(offset, end).toFixed(0)) + "%</strong>."
            } else {
                document.getElementById("population-comments").innerHTML = "Folketallet i <strong>" + data["kommune"] + "</strong> er beregnet til å stige med <strong>" + delta + "</strong> personer i løpet av en 8-års periode. Økningen de første fire årene er <strong>" + firstFourYears.toFixed(1) + "%</strong>, og <strong>" + lastFourYears.toFixed(1) + "%</strong> de fire siste årene av perioden. Dette tilsvarer en total økning  med ca <strong>" + MathHandler.percentageIncrease(offset, end).toFixed(0) + "%</strong>.";
            }
        }
    }

    //Creates html output 
    appendToHTML = function(title, data, elemId) {
        document.getElementById(elemId).innerHTML = "";
        document.getElementById("title").innerHTML = "";
        document.getElementById("misc-stats").innerHTML = "Andre kvartalstall knyttet til folkemengde i " + title;
        var element = document.getElementById(elemId);
        var header = document.getElementById("title");
        var headerText = document.createTextNode(title);
        header.appendChild(headerText);


        var div = document.getElementById("summary");
        for (var x = 0; x < data.length; x++) {
            var li = document.createElement('li');
            li.innerHTML = data[x].category + ": <strong>" + data[x].value + "</strong>";
            element.appendChild(li);
        }

        //Pass in movement in and out.
        PopulationChartHandler.populationMovement(data);
    }

    //Init the evergreen-article with random municipality
    initRandomStats = function() {
        var index = randomIndex(getRandomArbitrary(0, dataset.Dimension('Region').id.length));
        var municipality = findMunicipality(next_ten_years, index["title"]);
        //Create the output
        populationList(municipality);
        populationComments(municipality);
        economicStats(municipality);
        getValues(index);
    }

    //TODO: Refactor this function to be a part of the creation of the data-file
    //Calculates the percentage for all growth numbers, and generates a mean value for all the municipalities that had a positive population growth, and the same for all the municipalities which had a decline in population.
    globalMeanPercentages = function() {

        var mean = {};
        mean.negatives = 0.0;
        mean.negativeCount = 0;
        mean.negativeMean = 0.0;
        mean.positives = 0.0;
        mean.positiveCount = 0;
        mean.positiveMean = 0;
        //TODO: write a function for showing the mean percentages
        for (var x = 0; x < next_ten_years.length; x++) {
            var percentage = MathHandler.percentageIncrease(next_ten_years[x]["years"][0], next_ten_years[x]["years"][7]);
            if (percentage < 0) {
                mean.negatives += percentage;
                mean.negativeCount++;
            } else {
                mean.positives += percentage;
                mean.positiveCount++;
            }
        }
        mean.positiveMean = MathHandler.meanValue(mean.positives, mean.positiveCount).toFixed(2);
        mean.negativeMean = MathHandler.meanValue(mean.negatives, mean.negativeCount).toFixed(2);
        document.getElementById("population-percentages").innerHTML = "<strong>Hele landet:</strong><br> Gjennomsnittlig endring 8 år fremover i kommunene som har positiv befolkningsvekst : <strong>" + mean.positiveMean + "%</strong>.</br> Snittet for kommunene som har en negativ befolkningsvekst: <strong>" + mean.negativeMean + "%</strong>";
    }

    globalMeanPercentages();

    //Handle input from web search field
    var searchField = document.getElementById('search');

    //TODO: fix this.. 
    searchField.addEventListener('change', function(e) {
        formValue = e.target.value;
        var municipality = findMunicipality(next_ten_years, formValue);
        if (municipality) {
            populationList(municipality);
            populationComments(municipality)
            economicStats(municipality);
            objects = [];
            var values = dataset.Data({
                "Region": municipality["kode"]
            });
            var categories = dataset.Dimension('ContentsCode').Category();
            var total = 0;
            if (values.length === categories.length) {
                for (var x = 0; x < values.length; x++) {
                    objects[x] = {
                        "category": categories[x].label,
                        "value": values[x].value
                    };
                }
            }

            var deltaQuarter = [objects[0].value, objects[objects.length - 1].value];
            PopulationChartHandler.showQuarterlyDelta(deltaQuarter);
            appendToHTML(municipality["kommune"], objects, "datalist");
        } else {
            //Searches the array for numbers..
            var index = searchIndex(formValue);
            var values = getValues(index);
            if (index) {
                var searchedMunicipality = findMunicipality(next_ten_years, index["title"]);
                populationList(searchedMunicipality);
                populationComments(searchedMunicipality);
                economicStats(searchedMunicipality);
            }
        }


    });



    //Hide search field warnings..
    $("#no-results").css("visibility", "hidden")
    $("#needs-and-income-header").html("Utgiftsbehov og innbyggertilskudd i " + new Date().getFullYear());

    topAndBottomGrowth();
    //INITIALIZE the whole thing
    RankingsHandler.init();
    initRandomStats();

});