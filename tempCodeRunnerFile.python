ramadanCal = [
    {"RamadanNo":1,"Date":12,"month":3,"seharH":4,"seharM":58,"iftarH":6,"iftarM":8},
    {"RamadanNo":2,"Date":13,"month":3,"seharH":4,"seharM":57,"iftarH":6,"iftarM":9},
    {"RamadanNo":3,"Date":14,"month":3,"seharH":4,"seharM":56,"iftarH":6,"iftarM":10},
    {"RamadanNo":4,"Date":15,"month":3,"seharH":4,"seharM":54,"iftarH":6,"iftarM":10},
    {"RamadanNo":5,"Date":16,"month":3,"seharH":4,"seharM":53,"iftarH":6,"iftarM":11},
    {"RamadanNo":6,"Date":17,"month":3,"seharH":4,"seharM":52,"iftarH":6,"iftarM":12},
    {"RamadanNo":7,"Date":18,"month":3,"seharH":4,"seharM":51,"iftarH":6,"iftarM":12},
    {"RamadanNo":8,"Date":19,"month":3,"seharH":4,"seharM":50,"iftarH":6,"iftarM":13},
    {"RamadanNo":9,"Date":20,"month":3,"seharH":4,"seharM":48,"iftarH":6,"iftarM":14},
    {"RamadanNo":10,"Date":21,"month":3,"seharH":4,"seharM":47,"iftarH":6,"iftarM":14},
    {"RamadanNo":11,"Date":22,"month":3,"seharH":4,"seharM":46,"iftarH":6,"iftarM":15},
    {"RamadanNo":12,"Date":23,"month":3,"seharH":4,"seharM":44,"iftarH":6,"iftarM":16},
    {"RamadanNo":13,"Date":24,"month":3,"seharH":4,"seharM":43,"iftarH":6,"iftarM":16},
    {"RamadanNo":14,"Date":25,"month":3,"seharH":4,"seharM":41,"iftarH":6,"iftarM":17},
    {"RamadanNo":15,"Date":26,"month":3,"seharH":4,"seharM":40,"iftarH":6,"iftarM":18},
    {"RamadanNo":16,"Date":27,"month":3,"seharH":4,"seharM":39,"iftarH":6,"iftarM":18},
    {"RamadanNo":17,"Date":28,"month":3,"seharH":4,"seharM":38,"iftarH":6,"iftarM":19},
    {"RamadanNo":18,"Date":29,"month":3,"seharH":4,"seharM":36,"iftarH":6,"iftarM":20},
    {"RamadanNo":19,"Date":30,"month":3,"seharH":4,"seharM":35,"iftarH":6,"iftarM":20},
    {"RamadanNo":20,"Date":31,"month":3,"seharH":4,"seharM":33,"iftarH":6,"iftarM":21},
    {"RamadanNo":21,"Date":1,"month":4,"seharH":4,"seharM":32,"iftarH":6,"iftarM":21},
    {"RamadanNo":22,"Date":2,"month":4,"seharH":4,"seharM":30,"iftarH":6,"iftarM":22},
    {"RamadanNo":23,"Date":3,"month":4,"seharH":4,"seharM":29,"iftarH":6,"iftarM":22},
    {"RamadanNo":24,"Date":4,"month":4,"seharH":4,"seharM":27,"iftarH":6,"iftarM":23},
    {"RamadanNo":25,"Date":5,"month":4,"seharH":4,"seharM":26,"iftarH":6,"iftarM":24},
    {"RamadanNo":26,"Date":6,"month":4,"seharH":4,"seharM":24,"iftarH":6,"iftarM":25},
    {"RamadanNo":27,"Date":7,"month":4,"seharH":4,"seharM":23,"iftarH":6,"iftarM":26},
    {"RamadanNo":28,"Date":8,"month":4,"seharH":4,"seharM":21,"iftarH":6,"iftarM":26},
    {"RamadanNo":29,"Date":9,"month":4,"seharH":4,"seharM":19,"iftarH":6,"iftarM":27},
    {"RamadanNo":30,"Date":10,"month":4,"seharH":4,"seharM":18,"iftarH":6,"iftarM":28},
]

def printDict(dic):
    print(f"""{{
        ramadanNo: {dic["RamadanNo"]},
        seharDate: new Date("2024-{str(dic["month"]).zfill(2)}-{str(dic["Date"]).zfill(2)}T{str(dic["seharH"]).zfill(2)}:{str(dic["seharM"]).zfill(2)}:00"),
        iftarDate: new Date("2024-{str(dic["month"]).zfill(2)}-{str(dic["Date"]).zfill(2)}T{str(dic["iftarH"]+12).zfill(2)}:{str(dic["iftarM"]).zfill(2)}:00"),
    }},""",end="")

print("[", end="")
for dic in ramadanCal:
    printDict(dic)
print("]")