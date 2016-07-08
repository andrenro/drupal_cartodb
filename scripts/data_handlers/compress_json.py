import json
import csv
from pprint import pprint

#Reads kvartalstall and creates smaller json file
def read_json(file):
    compressed = []
    with open(file) as input:
        data = json.load(input)

    for elem in data:
        print elem

def combine(arr):
    adder = []
    #municipality
    for x in arr:
        #municipality data len 220
        totals = {}
        totals["kode"] = x["kode"]
        totals["kommune"] = x["kommune"]
        totals["years"] = {}

        totals["years"]["2016"] = 0
        totals["years"]["2017"] = 0
        totals["years"]["2018"] = 0
        totals["years"]["2019"] = 0
        totals["years"]["2020"] = 0
        totals["years"]["2021"] = 0
        totals["years"]["2022"] = 0
        totals["years"]["2023"] = 0
        totals["years"]["2024"] = 0
        totals["years"]["2025"] = 0
        totals["years"]["2026"] = 0

        for y in x["data"]:
            if y[3] == "2016":
                totals["years"]["2016"] = totals["years"]["2016"] +int(y[5])
            if y[3] == "2017":
                totals["years"]["2017"] = totals["years"]["2017"] +int(y[5])
            if y[3] == "2018":
                totals["years"]["2018"]= totals["years"]["2018"] +int(y[5])
            if y[3] == "2019":
                totals["years"]["2019"]= totals["years"]["2019"] +int(y[5])
            if y[3] == "2020":
                totals["years"]["2020"]= totals["years"]["2020"] +int(y[5])
            if y[3] == "2021":
                totals["years"]["2021"]= totals["years"]["2021"] +int(y[5])
            if y[3] == "2022":
                totals["years"]["2022"]= totals["years"]["2022"] +int(y[5])
            if y[3] == "2023":
                totals["years"]["2023"]= totals["years"]["2023"]+int(y[5])
            if y[3] == "2024":
                totals["years"]["2024"]= totals["years"]["2024"] +int(y[5])
            if y[3] == "2025":
                totals["years"]["2025"]= totals["years"]["2025"] +int(y[5])
            if y[3] == "2026":
                totals["years"]["2026"]= totals["years"]["2026"] +int(y[5])
        adder.append(totals)
    return adder


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


def write_to_file(input):
    with open('output.json',"wb") as output:
        json.dump(input,output,encoding="utf-8")


read_json("kvartalstall.json")
temp = reduce_years("framskrevet.csv")
write_to_file(combine(temp))
