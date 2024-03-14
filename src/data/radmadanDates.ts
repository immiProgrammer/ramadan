type ramadanDateObj = {
    ramadanNo: number;
    seharDate: Date;
    iftarDate: Date;
}
const ramadanDates:ramadanDateObj[] = [{
    ramadanNo: 1,
    seharDate: new Date("2024-03-12T04:58:00+05:00"),
    iftarDate: new Date("2024-03-12T18:08:00+05:00"),
},{
    ramadanNo: 2,
    seharDate: new Date("2024-03-13T04:57:00+05:00"),
    iftarDate: new Date("2024-03-13T18:09:00+05:00"),
},{
    ramadanNo: 3,
    seharDate: new Date("2024-03-14T04:56:00+05:00"),
    iftarDate: new Date("2024-03-14T18:10:00+05:00"),
},{
    ramadanNo: 4,
    seharDate: new Date("2024-03-15T04:54:00+05:00"),
    iftarDate: new Date("2024-03-15T18:10:00+05:00"),
},{
    ramadanNo: 5,
    seharDate: new Date("2024-03-16T04:53:00+05:00"),
    iftarDate: new Date("2024-03-16T18:11:00+05:00"),
},{
    ramadanNo: 6,
    seharDate: new Date("2024-03-17T04:52:00+05:00"),
    iftarDate: new Date("2024-03-17T18:12:00+05:00"),
},{
    ramadanNo: 7,
    seharDate: new Date("2024-03-18T04:51:00+05:00"),
    iftarDate: new Date("2024-03-18T18:12:00+05:00"),
},{
    ramadanNo: 8,
    seharDate: new Date("2024-03-19T04:50:00+05:00"),
    iftarDate: new Date("2024-03-19T18:13:00+05:00"),
},{
    ramadanNo: 9,
    seharDate: new Date("2024-03-20T04:48:00+05:00"),
    iftarDate: new Date("2024-03-20T18:14:00+05:00"),
},{
    ramadanNo: 10,
    seharDate: new Date("2024-03-21T04:47:00+05:00"),
    iftarDate: new Date("2024-03-21T18:14:00+05:00"),
},{
    ramadanNo: 11,
    seharDate: new Date("2024-03-22T04:46:00+05:00"),
    iftarDate: new Date("2024-03-22T18:15:00+05:00"),
},{
    ramadanNo: 12,
    seharDate: new Date("2024-03-23T04:44:00+05:00"),
    iftarDate: new Date("2024-03-23T18:16:00+05:00"),
},{
    ramadanNo: 13,
    seharDate: new Date("2024-03-24T04:43:00+05:00"),
    iftarDate: new Date("2024-03-24T18:16:00+05:00"),
},{
    ramadanNo: 14,
    seharDate: new Date("2024-03-25T04:41:00+05:00"),
    iftarDate: new Date("2024-03-25T18:17:00+05:00"),
},{
    ramadanNo: 15,
    seharDate: new Date("2024-03-26T04:40:00+05:00"),
    iftarDate: new Date("2024-03-26T18:18:00+05:00"),
},{
    ramadanNo: 16,
    seharDate: new Date("2024-03-27T04:39:00+05:00"),
    iftarDate: new Date("2024-03-27T18:18:00+05:00"),
},{
    ramadanNo: 17,
    seharDate: new Date("2024-03-28T04:38:00+05:00"),
    iftarDate: new Date("2024-03-28T18:19:00+05:00"),
},{
    ramadanNo: 18,
    seharDate: new Date("2024-03-29T04:36:00+05:00"),
    iftarDate: new Date("2024-03-29T18:20:00+05:00"),
},{
    ramadanNo: 19,
    seharDate: new Date("2024-03-30T04:35:00+05:00"),
    iftarDate: new Date("2024-03-30T18:20:00+05:00"),
},{
    ramadanNo: 20,
    seharDate: new Date("2024-03-31T04:33:00+05:00"),
    iftarDate: new Date("2024-03-31T18:21:00+05:00"),
},{
    ramadanNo: 21,
    seharDate: new Date("2024-04-01T04:32:00+05:00"),
    iftarDate: new Date("2024-04-01T18:21:00+05:00"),
},{
    ramadanNo: 22,
    seharDate: new Date("2024-04-02T04:30:00+05:00"),
    iftarDate: new Date("2024-04-02T18:22:00+05:00"),
},{
    ramadanNo: 23,
    seharDate: new Date("2024-04-03T04:29:00+05:00"),
    iftarDate: new Date("2024-04-03T18:22:00+05:00"),
},{
    ramadanNo: 24,
    seharDate: new Date("2024-04-04T04:27:00+05:00"),
    iftarDate: new Date("2024-04-04T18:23:00+05:00"),
},{
    ramadanNo: 25,
    seharDate: new Date("2024-04-05T04:26:00+05:00"),
    iftarDate: new Date("2024-04-05T18:24:00+05:00"),
},{
    ramadanNo: 26,
    seharDate: new Date("2024-04-06T04:24:00+05:00"),
    iftarDate: new Date("2024-04-06T18:25:00+05:00"),
},{
    ramadanNo: 27,
    seharDate: new Date("2024-04-07T04:23:00+05:00"),
    iftarDate: new Date("2024-04-07T18:26:00+05:00"),
},{
    ramadanNo: 28,
    seharDate: new Date("2024-04-08T04:21:00+05:00"),
    iftarDate: new Date("2024-04-08T18:26:00+05:00"),
},{
    ramadanNo: 29,
    seharDate: new Date("2024-04-09T04:19:00+05:00"),
    iftarDate: new Date("2024-04-09T18:27:00+05:00"),
},{
    ramadanNo: 30,
    seharDate: new Date("2024-04-10T04:18:00+05:00"),
    iftarDate: new Date("2024-04-10T18:28:00+05:00"),
},]

function getByDate(date:Date){
    return getObjectByDateAndMonth(date.getDate(), date.getMonth())
}

function getObjectByDateAndMonth(date:number, month:number) {
    return ramadanDates.find(obj => obj.seharDate.getDate() === date && obj.seharDate.getMonth() === month);
}

function getObjectByRamadanNo(ramadanNo:number) {
    return ramadanDates.find(obj => obj.ramadanNo === ramadanNo);
}
export {type ramadanDateObj, ramadanDates, getByDate, getObjectByDateAndMonth, getObjectByRamadanNo}