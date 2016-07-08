import json
import csv
from pprint import pprint

#Reads kvartalstall.csv and creates smaller json file
def read_json(file):
    compressed = []
    with open(file) as input:
        data = json.load(input)

#Counts all the yearly data and concats the results into same time. Builds a basic time series with yearly numbers in sorted list from year 2016 - 2026
def combine(arr):
    adder = []
    #municipality
    for x in arr:
        #municipality data len 220
        totals = {}
        totals["kode"] = x["kode"];
        totals["kommune"] = x["kommune"].decode('ISO-8859-1').encode('utf-8')
        totals["indexed_value"] = x["indexed_value"]
        totals["expenditure_needs_mean"] = x["expenditure_needs_mean"]
        totals["expenditure_needs"] = x["expenditure_needs"]
        totals["years"] = [];

        for s in range(11):
            totals["years"].append(0)

        for y in x["data"]:
            if y[3] == "2016":
                totals["years"][0] = totals["years"][0] +int(y[5])
            if y[3] == "2017":
                totals["years"][1] = totals["years"][1] +int(y[5])
            if y[3] == "2018":
                totals["years"][2]= totals["years"][2] +int(y[5])
            if y[3] == "2019":
                totals["years"][3]= totals["years"][3] +int(y[5])
            if y[3] == "2020":
                totals["years"][4]= totals["years"][4] +int(y[5])
            if y[3] == "2021":
                totals["years"][5]= totals["years"][5] +int(y[5])
            if y[3] == "2022":
                totals["years"][6]= totals["years"][6] +int(y[5])
            if y[3] == "2023":
                totals["years"][7]= totals["years"][7]+int(y[5])
            if y[3] == "2024":
                totals["years"][8]= totals["years"][8] +int(y[5])
            if y[3] == "2025":
                totals["years"][9]= totals["years"][9] +int(y[5])
            if y[3] == "2026":
                totals["years"][10]= totals["years"][10] +int(y[5])
        adder.append(totals)
    return adder

#Choose yearly interval for relevant data
def reduce_years(file):
    with open(file,'rb') as csv_file:
        reduced = []
        reader = csv.reader(csv_file,delimiter=";")
        next(reader, None)  # skip the headers
        for row in reader:
            if int(row[3]) <= 2026:
                reduced.append(row)

        counter = 0
        munAr = []
        for red in reduced:
            if counter == 0:
                obj = {}
                obj["data"] = []
                obj["kommune"] = red[0].split()[1]
                obj["kode"] = red[0].split()[0]

            if counter < 220:
                obj["data"].append(red)
                counter = counter + 1
            if counter == 220:
                munAr.append(obj)
                counter = 0

    return munAr

#1 to 1 relationship between municipality indices expected..
def add_extras(input):
    temp = input
    with open("UB_only.csv") as csvfile:
        reader = csv.reader(csvfile,delimiter=";")
        next(reader,None)
        for c, row in enumerate(reader):
            print row[1]
            temp[c]["indexed_value"] = row[1]
            temp[c]["expenditure_needs_mean"] = row[2]
            temp[c]["expenditure_needs"] = row[3]
        return temp



def write_to_file(input):
    with open('output.json',"wb") as output:
        json.dump(input,output,encoding="utf-8")


read_json("kvartalstall.json")
temp = reduce_years("framskrevet.csv")
merged = add_extras(temp)
write_to_file(combine(merged))
