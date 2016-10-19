$(document).ready(function() {


    function setComments(municipality) {

        console.log(municipality);
        //Object containing all comments
        var comments = {}
        var name = municipality["Kommune"];
        var knr = municipality["Knr"];
        var inhabitants;
        var students;
        var elders;
        var operating_profit;
        var distributable_reserve;
        var costs;
        var corr_income_level;

        //Kommentar folketall
        if (municipality["Folketall"] >= 6) {
            inhabitants = "<strong>Folketallet</strong> skal vokse betydelig de neste årene. Det er et positivt utgangspunkt, selv om det også fører med seg utgifter. ";
        } else if (municipality["Folketall"] >= 5) {
            inhabitants = "<strong>Folketallet</strong> skal vokse en god del de neste årene, noe som i utgangspunktet er positivt for kommunen. ";
        } else if (municipality["Folketall"] >= 4) {
            inhabitants = "<strong>Folketallet</strong> skal vokse litt mer enn i normalkommunen, noe som i teorien vil ha en svakt postiv effekt på rammetilskuddet. ";
        } else if (municipality["Folketall"] >= 3) {
            inhabitants = "Veksten i <strong>folketall</strong> blir middels de neste årene. ";
        } else if (municipality["Folketall"] >= 2) {
            inhabitants = "Veksten i <strong>folketall</strong> blir lav i årene framover. ";
        } else if (municipality["Folketall"] > 1) {
            inhabitants = "Innbyggertallet øker ikke, det har i utgangspunktet en klart negativ effekt for rammetilskuddet. ";
        } else if (municipality["Folketall"] = 1) {
            inhabitants = "<strong>Folketallet</strong> skal falle klart de neste årene. Det har en tydelig negativ effekt for rammetilskuddet. ";
        } else {
            inhabitants = "";
        }

        // Kommentar grunnskole
        if (municipality["Grunnskole"] >= 6) {

            students = "Antallet <strong>elever</strong> vokser svært mye i årene framover. Det øker i utgangspunktet rammetilskuddet til kommunen. ";
        } else if (municipality["Grunnskole"] >= 5) {

            students = "Antallet <strong>elever</strong> vokser mer enn i de fleste andre kommuner i årene framover, ifølge SSB. ";
        } else if (municipality["Grunnskole"] >= 4) {
            students = "Antallet <strong>elever</strong> vokser litt raskere enn i normalkommunen de neste årene. ";
        } else if (municipality["Grunnskole"] >= 3) {

            students = "<strong>Elevtallet </strong>er omtrent uendret de neste årene, noe som er nær normalnivået for hele landet. ";
        } else if (municipality["Grunnskole"] >= 2) {
            students = "Det blir klart færre <strong>elever</strong> i kommunen i de fire neste årene. ";
        } else if (municipality["Grunnskole"] > 1) {
            students = "Det blir betydelig færre <strong>elever</strong> i kommunen fram til 2020, noe som i utgangspunktet reduserer rammetilskuddet. ";
        } else if (municipality["Grunnskole"] = 1) {
            students = "I 2020 vil det være langt færre <strong>elever</strong> i kommunen enn i dag. Har kommunestyret klart for seg hva det innebærer for tilbud og eventuelt skolestruktur? ";
        } else {
            students = "";
        }

        // Kommentar eldre
        // 
        if (municipality["Eldre"] >= 6) {
            elders = "Målt i prosent blir det svært mange flere <strong>gamle</strong> innbyggere over 80 år. Det vil i utgangspunktet ha betydning både for etterspørselen etter både hjemmetjenester og heldøgns omsorgsplass. ";
        } else if (municipality["Eldre"] >= 5) {
            elders = "det blir en kraftig vekst i antall <strong>gamle</strong> over 80 år, målt i prosent, fram til 2020. ";
        } else if (municipality["Eldre"] >= 4) {
            elders = "Prosentvis vekst i antall <strong>gamle</strong> over 80 år ligger litt over snittet, men det er ikke i <strong>" + name + "</strong> at eldrebølgen er størst akkurat nå. ";
        } else if (municipality["Eldre"] >= 3) {
            elders = "Det er ventet en liten økning i antallet <strong>gamle</strong> over 80 år, omtrent som ellers i landet. ";
        } else if (municipality["Eldre"] >= 2) {
            elders = "antallet <strong>gamle</strong> over 80 år blir omtrent uendret fram til 2020 i <strong>" + name + "</strong>. ";
        } else if (municipality["Eldre"] > 1) {
            elders = "De neste fire årene blir det færre innbyggere <strong>over 80 år</strong> i <strong>" + name + "</strong>. ";
        } else if (municipality["Eldre"] = 1) {
            elders = "Målt i prosent blir det langt færre <strong>over 80 år</strong> i <strong>" + name + "</strong> de neste fire årene. Det har en i utgangspunktet negativ effekt på inntektene, selv om det også vil medføre lavere utgifter. ";
        } else {
            elders = "";
        }

        // ' Kommenterer netto driftsresultat

        if (municipality["Driftsresultat"] >= 6) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi likevel et svært godt <strong>driftsresultat</strong> i 2020, blant de beste i landet. ";
        } else if (municipality["Driftsresultat"] >= 5) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi likevel et godt <strong>driftsresultat</strong> i 2020, ikke så langt unna de beste i landet. ";
        } else if (municipality["Driftsresultat"] >= 4) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi likevel et godt <strong>driftsresultat</strong> i 2020, langt over det anbefalte nivået på 1,75 prosent. ";
        } else if (municipality["Driftsresultat"] >= 3.5) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi et godt <strong>driftsresultat</strong> i 2020. Kommunen bør ha gode muligheter for å ha et <strong>driftsresultat</strong> over det anbefalte nivået på 1,75 prosent. ";
        } else if (municipality["Driftsresultat"] >= 3) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi et <strong>driftsresultat</strong> i 2020 som ligger litt over null, langt under det anbefalte nivået på 1,75 prosent. ";
        } else if (municipality["Driftsresultat"] >= 2.6) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi et <strong>driftsresultat</strong> i 2020 rundt null. Det vil være et svakt <strong>driftsresultat</strong>. ";
        } else if (municipality["Driftsresultat"] >= 2) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi et <strong>driftsresultat</strong> i 2020 som kan ligge langt under null. Det er enkelte faresignaler i kommunens økonomi. ";
        } else if (municipality["Driftsresultat"] > 1) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi et <strong>driftsresultat</strong> i 2020 langt under null, nær de dårligste i landet. Spørsmålet er om kommunen kan ta hånd om utfordringene og gjøre spådommene til skamme? ";
        } else if (municipality["Driftsresultat"] = 1) {

            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> venter vi et svært dårlig <strong>driftsresultat</strong> i 2020, blant de svakeste i landet. Det er tydelige faresignaler i kommunens økonomi. ";
        } else {
            operating_profit = "Vi forventer at korrigert netto <strong>driftsresultat</strong> nasjonalt vil falle i årene framover, siden det i 2015 og 2016 ser ut til å være på særlig høye nivåer.  " + "I <strong>" + name + "</strong> har vi ikke historikk god nok til å spå om framtiden. ";
        }


        //Kommenterer disposisjonsfondet

        if (municipality["Disp.fond"] >= 6) {

            distributable_reserve = "<strong>Disposisjonsfondet</strong> forventer vi kommer til å være meget stort ved utgangen av økonomiplanperioden. ";
        } else if (municipality["Disp.fond"] >= 5) {

            distributable_reserve = "<strong>Disposisjonsfondet</strong> forventer vi kommer til å være stort ved utgangen av økonomiplanperioden, anslagsvis rundt 20 prosent av brutto inntekter. ";
        } else if (municipality["Disp.fond"] >= 4) {

            distributable_reserve = "<strong>Disposisjonsfondet</strong> forventer vi kommer til å være ganske stort ved utgangen av økonomiplanperioden, og vil representere en solid buffer i regnskapet. ";
        } else if (municipality["Disp.fond"] >= 3) {

            distributable_reserve = "<strong>Disposisjonsfondet</strong> forventer vi kommer til å være middels stort ved utgangen av økonomiplanperioden, målt mot resten av Kommune-Norge. Det er en rimelig sjanse for at kommunen vil ha en viss buffer i regnskapet. ";
        } else if (municipality["Disp.fond"] >= 2.5) {

            distributable_reserve = "<strong>Disposisjonsfondet</strong> forventer vi kommer til å være litt lite ved utgangen av økonomiplanperioden, klart på kanten av det som kan sies å være en skikkelig buffer i regnskapet. ";
        } else if (municipality["Disp.fond"] >= 2.0) {

            distributable_reserve = "<strong>Disposisjonsfondet</strong> forventer vi kommer til å være lite ved utgangen av økonomiplanperioden, som i så fall ikke er noen buffer mot økonomiske utfordringer. ";
        } else if (municipality["Disp.fond"] >= 1.5) {

            distributable_reserve = "<strong>Disposisjonsfondet</strong> forventer vi kommer til å være omtrent tomt ved utgangen av økonomiplanperioden. Uten gode grep er <strong>" + name + "</strong> i faresonen for å sitte med oppsamlet underskudd. ";
        } else if (municipality["Disp.fond"] > 1) {

            distributable_reserve = "Ved utgangen av økonomiplanperioden er det ikke usannsynlig at kommunen har et <strong>oppsamlet underskudd.</strong> ";
        } else if (municipality["Disp.fond"] = 1) {

            distributable_reserve = "Ved utgangen av økonomiplanperioden er <strong>" + name + "</strong> blant dem som har størst risiko for å ha et <strong>oppsamlet underskudd.</strong> ";
        } else {
            distributable_reserve = "";
        }

        // Kommenterer kostnadsnivået

        if (municipality["Kostnadsnivå"] >= 6) {

            costs = "<strong>Kostnadsnivået</strong> innen de viktigste sektorene, justert for utgiftsbehovet, er svært lavt. Det gir et økonomisk handlingsrom andre ikke har. ";
        } else if (municipality["Kostnadsnivå"] >= 5) {

            costs = "<strong>Kostnadsnivået</strong> innen de viktigste sektorene, justert for utgiftsbehovet, er ganske lavt. Det gir naturlig nok et visst økonomisk handlingsrom ikke så mange andre har. ";
        } else if (municipality["Kostnadsnivå"] >= 4) {

            costs = "<strong>Kostnadsnivået</strong> innen de viktigste sektorene, justert for utgiftsbehovet, er litt under middels. ";
        } else if (municipality["Kostnadsnivå"] >= 3) {

            costs = "<strong>Kostnadsnivået</strong> innen de viktigste sektorene, justert for utgiftsbehovet, er midt på treet. ";
        } else if (municipality["Kostnadsnivå"] >= 2) {

            costs = "<strong>Kostnadsnivået</strong> innen de viktigste sektorene, justert for utgiftsbehovet, er litt over normalen i Kommune-Norge. ";
        } else if (municipality["Kostnadsnivå"] > 1) {

            costs = "<strong>Kostnadsnivået</strong> innen de viktigste sektorene, justert for utgiftsbehovet, er høyt. Det kan legge et ekstra press på økonomien. ";
        } else if (municipality["Kostnadsnivå"] = 1) {

            costs = "<strong>Kostnadsnivået</strong> innen de viktigste sektorene, justert for utgiftsbehovet, er blant det høyeste i landet. En forutsetning for å drive så dyrt er at kommunen også har svært høye inntekter, ellers blir det vanskelig. ";
        } else {
            costs = "";
        }


        // Kommenterer korrigert inntekt
        if (municipality["Inntektsnivå"] >= 6) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> er blant de rikeste i landet. ";
        } else if (municipality["Inntektsnivå"] >= 5) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> har nesten like mye å rutte med som de aller rikeste. ";
        } else if (municipality["Inntektsnivå"] >= 4) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> har en inntekt som ligger langt over snittet. ";
        } else if (municipality["Inntektsnivå"] >= 3) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> har en disponibel inntekt som er noe over landsgjennomsnittet. ";
        } else if (municipality["Inntektsnivå"] >= 2.5) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> ligger et stykke over snittet. ";
        } else if (municipality["Inntektsnivå"] >= 2) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> ligger såvidt over snittet. ";
        } else if (municipality["Inntektsnivå"] >= 1.6) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> ligger omtrent på landsgjennomsnittet. ";
        } else if (municipality["Inntektsnivå"] >= 1.3) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> ligger litt under landsgjennomsnittet. ";
        } else if (municipality["Inntektsnivå"] > 1) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> ligger godt under snittet. Kommunen må dermed drive mer effektivt enn andre for å ha råd til et like omfattende tilbud som i normalkommunen. ";
        } else if (municipality["Inntektsnivå"] = 1) {

            corr_income_level = "Beregningene av <strong>korrigert inntektsnivå</strong> viser at <strong>" + name + "</strong> er blant de kommunene i landet med lavest disponibel inntekt. Kommunen må dermed drive mer effektivt enn andre for å ha råd til et like omfattende tilbud som i normalkommunen. ";
        } else {
            corr_income_level = "";
        }

        comments["name"]= name;
        comments["knr"] = knr;
        comments["inhabitants"] = inhabitants;
        comments["students"] = students;
        comments["elders"] = elders
        comments["operating_profit"] = operating_profit;
        comments["distributable_reserve"] = distributable_reserve;
        comments["costs"] = costs;
        comments["corr_income_level"] = corr_income_level;
        return comments;
    }

    function numberCompareAscending(a, b) {
        return a > b ? 1 : a == b ? 0 : -1;
    }

    function numberCompareDescending(a, b) {
        return a < b ? 1 : a == b ? 0 : -1;
    }

    function showLoader() {
        $(".loader").show();
    }

    function hideLoader() {
        $(".loader").hide();

    }


    // var columnTitles = ["Knr", "Kommune", "Folketall", "Barnehage", "Grunnskole", "25_66_år", "Sysselsatte", "Eldre", "Driftsresultat", "Lånegjeld", "Disp.fond", "Kostnadsnivå", "Inntektsnivå"];
    var columns = ["Knr", "Kommune", "Folketall", "Grunnskole", "Eldre", "Driftsresultat", "Disp.fond", "Kostnadsnivå"];
    //0 for ascending, 1 for descending. 
    var sortingOrder = 0;


    $('input[type=radio][name=sorting]').change(function() {
        if (this.value == 'ascending') {
            sortingOrder = 0;

        } else if (this.value == 'descending') {
            sortingOrder = 1;
        }
    });

    showLoader();

    d3.json("https://api.myjson.com/bins/5bxz4", function(error, data) {
        if (error) throw error;

        hideLoader();
        // var parsedRows = d3.jsonParse(jsonData);
        // function tabulate(data, columns) {
        var counter = 0;
        var table = d3.select('div#data-table').append('table');
        var thead = table.append('thead')
        var tbody = table.append('tbody');

        thead.append("tr").selectAll("th").data(columns).enter().append("th").text(function(column) {
            return column
        }).append('span');

        var rows = tbody.selectAll("tr").data(data).enter().append('tr').attr('data-id', function(row) {
            return row["Knr"];
        }).attr('data-name', function(row) {
            return row["Kommune"];
        }).on('click', function(row) {
            //Fetch info for this.
            var id = this.dataset.id;
            var comments = setComments(row);
            populateModal(comments);
        });

        css = "";
        var cells = rows.selectAll('td').data(function(row) {
            counter++;
            return columns.map(function(column) {

                if (typeof(row[column]) == "string" || (row[column] >= 100)) {
                    counter % 2 == 0 ? cssClass = "stringSkip" : cssClass = "string";
                }
                //More values are above 3, so this checks will go slightly faster than the reversed order
                else if (row[column] >= 6) {
                    cssClass = "six";
                } else if (row[column] >= 5) {
                    cssClass = "five";
                } else if (row[column] >= 4) {
                    cssClass = "four";
                } else if (row[column] >= 3) {
                    cssClass = "three";
                } else if (row[column] >= 2) {
                    cssClass = "two";
                } else if (row[column] >= 1) {
                    cssClass = "one";
                }

                //cssClass will loose its effect when sorting, due to the fact that the class is bound to the data-object.
                return {
                    column: column,
                    value: row[column],
                    cssClass: cssClass
                };
            });

        }).enter().append('td').attr('class', function(d) {
            return d.cssClass;
        }).text(function(d) {
            return d.value
        });

        d3.selectAll("thead th").data(data).on("click", function(k) {
            var key = this.innerText;

            rows.sort(function(a, b) {
                if (sortingOrder > 0) {
                    return numberCompareDescending(a[key], b[key]);
                }
                return numberCompareAscending(a[key], b[key]);
            });

        });
        // }

    });

    //Opens modal popup and adds textual info
    function populateModal(data) {

        $("#inhabitants").html("<p>"+data["inhabitants"]+"</p>");
        $("#students").html("<p>"+data["students"]+"</p>");
        $("#elders").html("<p>"+data["elders"]+"</p>");
        $("#operating_profit").html("<p>"+data["operating_profit"]+"</p>");
        $("#distributable_reserve").html("<p>"+data["distributable_reserve"]+"</p>");
        $("#costs").html("<p>"+data["costs"]+"</p>");
        $("#corr_income_level").html("<p>"+data["corr_income_level"]+"</p>");

        $(".modal-title").html("<p>"+data["name"] + " ("+data["knr"]+")");
        $("#myModal").modal();

    }

    //TODO: Either send all data from mysjon.com, or load one big file
    // tabulate(jsonData, columnTitles);

});