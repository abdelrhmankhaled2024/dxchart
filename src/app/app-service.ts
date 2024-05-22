import { Injectable } from "@angular/core";

@Injectable()
export class Service {

  // Chart Data
  getChartData(): DataItem[] {
    return data.map(item => ({
      ...item,
      to: new Date(item.to),
      from: new Date(item.from)
    }));
  }
}


export interface Data {
  date: string;
  close: number;
}


export interface DataItem {
  "SERV.Instagram Post Picture Delay (msec)": any;
  legends: any[];
  to: Date; 
  from: Date; 
}





 const data= [
  {
   "SERV.Instagram Post Picture Delay (msec)": 1813.4286,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 14:00:00+00",
   "from": "2024-02-16 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2279.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 15:00:00+00",
   "from": "2024-02-16 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2066,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 16:00:00+00",
   "from": "2024-02-16 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1327.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 17:00:00+00",
   "from": "2024-02-16 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2314.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 18:00:00+00",
   "from": "2024-02-16 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2909.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 19:00:00+00",
   "from": "2024-02-16 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1644.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 20:00:00+00",
   "from": "2024-02-16 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1514.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 21:00:00+00",
   "from": "2024-02-16 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1212,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 22:00:00+00",
   "from": "2024-02-16 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1151.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-16 23:00:00+00",
   "from": "2024-02-16 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1242.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 00:00:00+00",
   "from": "2024-02-16 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1280.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 01:00:00+00",
   "from": "2024-02-17 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1244.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 02:00:00+00",
   "from": "2024-02-17 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1254.8572,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 03:00:00+00",
   "from": "2024-02-17 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1457,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 04:00:00+00",
   "from": "2024-02-17 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1202.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 05:00:00+00",
   "from": "2024-02-17 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1242.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 06:00:00+00",
   "from": "2024-02-17 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1489,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 07:00:00+00",
   "from": "2024-02-17 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1346.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 08:00:00+00",
   "from": "2024-02-17 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1582.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 09:00:00+00",
   "from": "2024-02-17 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1335.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 10:00:00+00",
   "from": "2024-02-17 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2384,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 11:00:00+00",
   "from": "2024-02-17 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1351.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 12:00:00+00",
   "from": "2024-02-17 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1564.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 13:00:00+00",
   "from": "2024-02-17 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1550.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 14:00:00+00",
   "from": "2024-02-17 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1414.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 15:00:00+00",
   "from": "2024-02-17 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1252,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 16:00:00+00",
   "from": "2024-02-17 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1308.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 17:00:00+00",
   "from": "2024-02-17 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1475.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 18:00:00+00",
   "from": "2024-02-17 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1537.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 19:00:00+00",
   "from": "2024-02-17 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2021.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 20:00:00+00",
   "from": "2024-02-17 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1456.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 21:00:00+00",
   "from": "2024-02-17 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1719.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 22:00:00+00",
   "from": "2024-02-17 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1749.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-17 23:00:00+00",
   "from": "2024-02-17 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1662.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 00:00:00+00",
   "from": "2024-02-17 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1578,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 01:00:00+00",
   "from": "2024-02-18 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1256.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 02:00:00+00",
   "from": "2024-02-18 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1579.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 03:00:00+00",
   "from": "2024-02-18 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1398.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 04:00:00+00",
   "from": "2024-02-18 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1559.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 05:00:00+00",
   "from": "2024-02-18 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1519.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 06:00:00+00",
   "from": "2024-02-18 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2823.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 07:00:00+00",
   "from": "2024-02-18 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3788.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-18 08:00:00+00",
   "from": "2024-02-18 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2597.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 09:00:00+00",
   "from": "2024-02-18 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1597.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 10:00:00+00",
   "from": "2024-02-18 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1817,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 11:00:00+00",
   "from": "2024-02-18 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2050.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 12:00:00+00",
   "from": "2024-02-18 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1396.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 13:00:00+00",
   "from": "2024-02-18 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1778,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 14:00:00+00",
   "from": "2024-02-18 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2174.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 15:00:00+00",
   "from": "2024-02-18 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1887,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 16:00:00+00",
   "from": "2024-02-18 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2100.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 17:00:00+00",
   "from": "2024-02-18 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1382,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 18:00:00+00",
   "from": "2024-02-18 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1338.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 19:00:00+00",
   "from": "2024-02-18 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1381.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 20:00:00+00",
   "from": "2024-02-18 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1380,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 21:00:00+00",
   "from": "2024-02-18 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1500.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 22:00:00+00",
   "from": "2024-02-18 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2236.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-18 23:00:00+00",
   "from": "2024-02-18 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1289,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 00:00:00+00",
   "from": "2024-02-18 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1499.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 01:00:00+00",
   "from": "2024-02-19 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1465.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 02:00:00+00",
   "from": "2024-02-19 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3500.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-19 03:00:00+00",
   "from": "2024-02-19 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1271,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 04:00:00+00",
   "from": "2024-02-19 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1718.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 05:00:00+00",
   "from": "2024-02-19 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1126,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 06:00:00+00",
   "from": "2024-02-19 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1711.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 07:00:00+00",
   "from": "2024-02-19 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1813.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 08:00:00+00",
   "from": "2024-02-19 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1324.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 09:00:00+00",
   "from": "2024-02-19 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1636.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 10:00:00+00",
   "from": "2024-02-19 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1387.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 11:00:00+00",
   "from": "2024-02-19 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1807.4286,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 12:00:00+00",
   "from": "2024-02-19 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1370,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 13:00:00+00",
   "from": "2024-02-19 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1860.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 14:00:00+00",
   "from": "2024-02-19 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1778,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 15:00:00+00",
   "from": "2024-02-19 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1518.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 16:00:00+00",
   "from": "2024-02-19 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1545.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 17:00:00+00",
   "from": "2024-02-19 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3045.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-19 18:00:00+00",
   "from": "2024-02-19 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3486,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-19 19:00:00+00",
   "from": "2024-02-19 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3363.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-19 20:00:00+00",
   "from": "2024-02-19 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2645.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 21:00:00+00",
   "from": "2024-02-19 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2572.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 22:00:00+00",
   "from": "2024-02-19 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2187.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-19 23:00:00+00",
   "from": "2024-02-19 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1347,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 00:00:00+00",
   "from": "2024-02-19 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3429,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-20 01:00:00+00",
   "from": "2024-02-20 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 6360.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-02-20 02:00:00+00",
   "from": "2024-02-20 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4018.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-20 03:00:00+00",
   "from": "2024-02-20 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4877.3335,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-20 04:00:00+00",
   "from": "2024-02-20 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2761.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 05:00:00+00",
   "from": "2024-02-20 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 5378.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-02-20 06:00:00+00",
   "from": "2024-02-20 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 6126,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-02-20 07:00:00+00",
   "from": "2024-02-20 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2204.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 08:00:00+00",
   "from": "2024-02-20 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1903.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 09:00:00+00",
   "from": "2024-02-20 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1783,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 10:00:00+00",
   "from": "2024-02-20 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1693.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 11:00:00+00",
   "from": "2024-02-20 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1440.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 12:00:00+00",
   "from": "2024-02-20 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2822,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 13:00:00+00",
   "from": "2024-02-20 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1785,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 14:00:00+00",
   "from": "2024-02-20 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1492,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 15:00:00+00",
   "from": "2024-02-20 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1436,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 16:00:00+00",
   "from": "2024-02-20 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1672.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 17:00:00+00",
   "from": "2024-02-20 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1246.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 18:00:00+00",
   "from": "2024-02-20 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1508,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 19:00:00+00",
   "from": "2024-02-20 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1169.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 20:00:00+00",
   "from": "2024-02-20 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1059.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 21:00:00+00",
   "from": "2024-02-20 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1262.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 22:00:00+00",
   "from": "2024-02-20 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1345.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-20 23:00:00+00",
   "from": "2024-02-20 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1247.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 00:00:00+00",
   "from": "2024-02-20 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1545.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 01:00:00+00",
   "from": "2024-02-21 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1110,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 02:00:00+00",
   "from": "2024-02-21 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1289.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 03:00:00+00",
   "from": "2024-02-21 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1245.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 04:00:00+00",
   "from": "2024-02-21 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1664.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 05:00:00+00",
   "from": "2024-02-21 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1432.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 06:00:00+00",
   "from": "2024-02-21 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2057,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 07:00:00+00",
   "from": "2024-02-21 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1295.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 08:00:00+00",
   "from": "2024-02-21 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1738.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 09:00:00+00",
   "from": "2024-02-21 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1365.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 10:00:00+00",
   "from": "2024-02-21 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1834.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 11:00:00+00",
   "from": "2024-02-21 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2384,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 12:00:00+00",
   "from": "2024-02-21 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2434,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 13:00:00+00",
   "from": "2024-02-21 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1379.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 14:00:00+00",
   "from": "2024-02-21 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2007.5714,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 15:00:00+00",
   "from": "2024-02-21 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1757.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 16:00:00+00",
   "from": "2024-02-21 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1783.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 17:00:00+00",
   "from": "2024-02-21 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1395,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 18:00:00+00",
   "from": "2024-02-21 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1274.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 19:00:00+00",
   "from": "2024-02-21 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1986.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 20:00:00+00",
   "from": "2024-02-21 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1618.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 21:00:00+00",
   "from": "2024-02-21 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1440.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 22:00:00+00",
   "from": "2024-02-21 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1525.5714,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-21 23:00:00+00",
   "from": "2024-02-21 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1778.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 00:00:00+00",
   "from": "2024-02-21 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1435.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 01:00:00+00",
   "from": "2024-02-22 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1672.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 02:00:00+00",
   "from": "2024-02-22 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1597,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 03:00:00+00",
   "from": "2024-02-22 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1471.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 04:00:00+00",
   "from": "2024-02-22 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1801.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 05:00:00+00",
   "from": "2024-02-22 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1073.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 06:00:00+00",
   "from": "2024-02-22 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2001.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 07:00:00+00",
   "from": "2024-02-22 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2375.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 08:00:00+00",
   "from": "2024-02-22 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1364.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 09:00:00+00",
   "from": "2024-02-22 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2256.8572,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 10:00:00+00",
   "from": "2024-02-22 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3063.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-22 11:00:00+00",
   "from": "2024-02-22 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2422.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 12:00:00+00",
   "from": "2024-02-22 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2873.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 13:00:00+00",
   "from": "2024-02-22 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3908,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-22 14:00:00+00",
   "from": "2024-02-22 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2579.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 15:00:00+00",
   "from": "2024-02-22 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3068.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-22 16:00:00+00",
   "from": "2024-02-22 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3846.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-22 17:00:00+00",
   "from": "2024-02-22 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3441.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-22 18:00:00+00",
   "from": "2024-02-22 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3454.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-22 19:00:00+00",
   "from": "2024-02-22 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3144.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-22 20:00:00+00",
   "from": "2024-02-22 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1915.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 21:00:00+00",
   "from": "2024-02-22 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2225.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 22:00:00+00",
   "from": "2024-02-22 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2268.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-22 23:00:00+00",
   "from": "2024-02-22 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1863.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 00:00:00+00",
   "from": "2024-02-22 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3690.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-23 01:00:00+00",
   "from": "2024-02-23 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2700.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 02:00:00+00",
   "from": "2024-02-23 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2101.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 03:00:00+00",
   "from": "2024-02-23 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2331,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 04:00:00+00",
   "from": "2024-02-23 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2894.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 05:00:00+00",
   "from": "2024-02-23 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3020.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-23 06:00:00+00",
   "from": "2024-02-23 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2953.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 07:00:00+00",
   "from": "2024-02-23 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3518.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-23 08:00:00+00",
   "from": "2024-02-23 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2305.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 09:00:00+00",
   "from": "2024-02-23 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1710,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 10:00:00+00",
   "from": "2024-02-23 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1688.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 11:00:00+00",
   "from": "2024-02-23 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1862.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 12:00:00+00",
   "from": "2024-02-23 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2054.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 13:00:00+00",
   "from": "2024-02-23 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1674.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 14:00:00+00",
   "from": "2024-02-23 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2594,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 15:00:00+00",
   "from": "2024-02-23 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3003.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-23 16:00:00+00",
   "from": "2024-02-23 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2626,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 17:00:00+00",
   "from": "2024-02-23 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2662.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 18:00:00+00",
   "from": "2024-02-23 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1732.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 19:00:00+00",
   "from": "2024-02-23 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2536.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 20:00:00+00",
   "from": "2024-02-23 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3542.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-23 21:00:00+00",
   "from": "2024-02-23 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3227.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-23 22:00:00+00",
   "from": "2024-02-23 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2448.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-23 23:00:00+00",
   "from": "2024-02-23 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2586.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 00:00:00+00",
   "from": "2024-02-23 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1829.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 01:00:00+00",
   "from": "2024-02-24 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2738.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 02:00:00+00",
   "from": "2024-02-24 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1939.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 03:00:00+00",
   "from": "2024-02-24 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2170.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 04:00:00+00",
   "from": "2024-02-24 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2395.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 05:00:00+00",
   "from": "2024-02-24 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1994.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 06:00:00+00",
   "from": "2024-02-24 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2642.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 07:00:00+00",
   "from": "2024-02-24 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3211.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-24 08:00:00+00",
   "from": "2024-02-24 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1663.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 09:00:00+00",
   "from": "2024-02-24 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2619,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 10:00:00+00",
   "from": "2024-02-24 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1988.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 11:00:00+00",
   "from": "2024-02-24 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1797,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 12:00:00+00",
   "from": "2024-02-24 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2632.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 13:00:00+00",
   "from": "2024-02-24 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1621.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 14:00:00+00",
   "from": "2024-02-24 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1611.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 15:00:00+00",
   "from": "2024-02-24 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1389,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 16:00:00+00",
   "from": "2024-02-24 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2753.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 17:00:00+00",
   "from": "2024-02-24 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2398.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 18:00:00+00",
   "from": "2024-02-24 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3373.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-24 19:00:00+00",
   "from": "2024-02-24 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2532.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 20:00:00+00",
   "from": "2024-02-24 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2702,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 21:00:00+00",
   "from": "2024-02-24 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3219.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-24 22:00:00+00",
   "from": "2024-02-24 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1867.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-24 23:00:00+00",
   "from": "2024-02-24 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1907.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 00:00:00+00",
   "from": "2024-02-24 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2085.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 01:00:00+00",
   "from": "2024-02-25 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1569,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 02:00:00+00",
   "from": "2024-02-25 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1298.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 03:00:00+00",
   "from": "2024-02-25 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2078.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 04:00:00+00",
   "from": "2024-02-25 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2707.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 05:00:00+00",
   "from": "2024-02-25 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3770.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-25 06:00:00+00",
   "from": "2024-02-25 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2885,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 07:00:00+00",
   "from": "2024-02-25 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3704.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-25 08:00:00+00",
   "from": "2024-02-25 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1915.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 09:00:00+00",
   "from": "2024-02-25 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3020.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-25 10:00:00+00",
   "from": "2024-02-25 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1871.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 11:00:00+00",
   "from": "2024-02-25 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2351.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 12:00:00+00",
   "from": "2024-02-25 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1307,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 13:00:00+00",
   "from": "2024-02-25 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2609.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 14:00:00+00",
   "from": "2024-02-25 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3078.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-25 15:00:00+00",
   "from": "2024-02-25 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1707,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 16:00:00+00",
   "from": "2024-02-25 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3222.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-25 17:00:00+00",
   "from": "2024-02-25 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1520.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 18:00:00+00",
   "from": "2024-02-25 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1523.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 19:00:00+00",
   "from": "2024-02-25 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1630.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 20:00:00+00",
   "from": "2024-02-25 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1285.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 21:00:00+00",
   "from": "2024-02-25 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2154.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 22:00:00+00",
   "from": "2024-02-25 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2089.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-25 23:00:00+00",
   "from": "2024-02-25 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1640.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 00:00:00+00",
   "from": "2024-02-25 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1080.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 01:00:00+00",
   "from": "2024-02-26 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2440.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 02:00:00+00",
   "from": "2024-02-26 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1777.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 03:00:00+00",
   "from": "2024-02-26 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1767.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 04:00:00+00",
   "from": "2024-02-26 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1529.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 05:00:00+00",
   "from": "2024-02-26 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4940.3335,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-26 06:00:00+00",
   "from": "2024-02-26 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3930.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-26 07:00:00+00",
   "from": "2024-02-26 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2536.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 08:00:00+00",
   "from": "2024-02-26 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1463.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 09:00:00+00",
   "from": "2024-02-26 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1231.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 10:00:00+00",
   "from": "2024-02-26 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2574.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 11:00:00+00",
   "from": "2024-02-26 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1476.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 12:00:00+00",
   "from": "2024-02-26 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1737.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 13:00:00+00",
   "from": "2024-02-26 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1816.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 14:00:00+00",
   "from": "2024-02-26 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1482.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 15:00:00+00",
   "from": "2024-02-26 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1948.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 16:00:00+00",
   "from": "2024-02-26 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1440.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 17:00:00+00",
   "from": "2024-02-26 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1785.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 18:00:00+00",
   "from": "2024-02-26 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1357.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 19:00:00+00",
   "from": "2024-02-26 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1628.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 20:00:00+00",
   "from": "2024-02-26 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2914.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 21:00:00+00",
   "from": "2024-02-26 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1323,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 22:00:00+00",
   "from": "2024-02-26 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2845,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-26 23:00:00+00",
   "from": "2024-02-26 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1337.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 00:00:00+00",
   "from": "2024-02-26 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1119.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 01:00:00+00",
   "from": "2024-02-27 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2033.5714,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 02:00:00+00",
   "from": "2024-02-27 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2288.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 03:00:00+00",
   "from": "2024-02-27 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2240.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 04:00:00+00",
   "from": "2024-02-27 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2677.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 05:00:00+00",
   "from": "2024-02-27 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2253.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 06:00:00+00",
   "from": "2024-02-27 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1887.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 07:00:00+00",
   "from": "2024-02-27 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1191.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 08:00:00+00",
   "from": "2024-02-27 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1780,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 09:00:00+00",
   "from": "2024-02-27 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2259.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 10:00:00+00",
   "from": "2024-02-27 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1476,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 11:00:00+00",
   "from": "2024-02-27 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1741.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 12:00:00+00",
   "from": "2024-02-27 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1828.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 13:00:00+00",
   "from": "2024-02-27 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2124.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 14:00:00+00",
   "from": "2024-02-27 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2519.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 15:00:00+00",
   "from": "2024-02-27 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2168.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 16:00:00+00",
   "from": "2024-02-27 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1659.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 17:00:00+00",
   "from": "2024-02-27 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2792,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 18:00:00+00",
   "from": "2024-02-27 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1563.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 19:00:00+00",
   "from": "2024-02-27 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1865.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 20:00:00+00",
   "from": "2024-02-27 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1945.5714,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 21:00:00+00",
   "from": "2024-02-27 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1654.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 22:00:00+00",
   "from": "2024-02-27 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1676.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-27 23:00:00+00",
   "from": "2024-02-27 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4322.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 00:00:00+00",
   "from": "2024-02-27 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4340.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 01:00:00+00",
   "from": "2024-02-28 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4855.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 02:00:00+00",
   "from": "2024-02-28 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2741.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 03:00:00+00",
   "from": "2024-02-28 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2171,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 04:00:00+00",
   "from": "2024-02-28 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1287.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 05:00:00+00",
   "from": "2024-02-28 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2100.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 06:00:00+00",
   "from": "2024-02-28 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2131,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 07:00:00+00",
   "from": "2024-02-28 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1489.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 08:00:00+00",
   "from": "2024-02-28 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1559,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 09:00:00+00",
   "from": "2024-02-28 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2024.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 10:00:00+00",
   "from": "2024-02-28 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2232.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 11:00:00+00",
   "from": "2024-02-28 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1888.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 12:00:00+00",
   "from": "2024-02-28 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2279.5715,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 13:00:00+00",
   "from": "2024-02-28 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3215.875,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 14:00:00+00",
   "from": "2024-02-28 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3620,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 15:00:00+00",
   "from": "2024-02-28 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2293.4443,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 16:00:00+00",
   "from": "2024-02-28 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3480,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 17:00:00+00",
   "from": "2024-02-28 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4727.6665,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 18:00:00+00",
   "from": "2024-02-28 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3108.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-28 19:00:00+00",
   "from": "2024-02-28 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2691.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 20:00:00+00",
   "from": "2024-02-28 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2455.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 21:00:00+00",
   "from": "2024-02-28 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2756.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 22:00:00+00",
   "from": "2024-02-28 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1790.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-28 23:00:00+00",
   "from": "2024-02-28 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3160,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-29 00:00:00+00",
   "from": "2024-02-28 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1664.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 01:00:00+00",
   "from": "2024-02-29 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1536.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 02:00:00+00",
   "from": "2024-02-29 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1775.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 03:00:00+00",
   "from": "2024-02-29 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2236.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 04:00:00+00",
   "from": "2024-02-29 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1476,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 05:00:00+00",
   "from": "2024-02-29 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1734.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 06:00:00+00",
   "from": "2024-02-29 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1904.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 07:00:00+00",
   "from": "2024-02-29 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1878.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 08:00:00+00",
   "from": "2024-02-29 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2280.8572,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 09:00:00+00",
   "from": "2024-02-29 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3163.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-02-29 10:00:00+00",
   "from": "2024-02-29 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2792.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 11:00:00+00",
   "from": "2024-02-29 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2557.8572,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 12:00:00+00",
   "from": "2024-02-29 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2688.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 13:00:00+00",
   "from": "2024-02-29 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2037.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 14:00:00+00",
   "from": "2024-02-29 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2646.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 15:00:00+00",
   "from": "2024-02-29 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2033.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 16:00:00+00",
   "from": "2024-02-29 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2088.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 17:00:00+00",
   "from": "2024-02-29 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1132.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 18:00:00+00",
   "from": "2024-02-29 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2631.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 19:00:00+00",
   "from": "2024-02-29 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2866,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 20:00:00+00",
   "from": "2024-02-29 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2472.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 21:00:00+00",
   "from": "2024-02-29 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2933.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 22:00:00+00",
   "from": "2024-02-29 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2662.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-02-29 23:00:00+00",
   "from": "2024-02-29 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1998.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 00:00:00+00",
   "from": "2024-02-29 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2378.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 01:00:00+00",
   "from": "2024-03-01 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2721,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 02:00:00+00",
   "from": "2024-03-01 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2640.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 03:00:00+00",
   "from": "2024-03-01 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2390.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 04:00:00+00",
   "from": "2024-03-01 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2912.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 05:00:00+00",
   "from": "2024-03-01 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2752.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 06:00:00+00",
   "from": "2024-03-01 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2702,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 07:00:00+00",
   "from": "2024-03-01 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2890.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 08:00:00+00",
   "from": "2024-03-01 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2945.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 09:00:00+00",
   "from": "2024-03-01 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2473,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 10:00:00+00",
   "from": "2024-03-01 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3799.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-01 11:00:00+00",
   "from": "2024-03-01 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2511.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 12:00:00+00",
   "from": "2024-03-01 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2210.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 13:00:00+00",
   "from": "2024-03-01 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3203.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-01 14:00:00+00",
   "from": "2024-03-01 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2277.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 15:00:00+00",
   "from": "2024-03-01 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3159,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-01 16:00:00+00",
   "from": "2024-03-01 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1777.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 17:00:00+00",
   "from": "2024-03-01 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1457.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 18:00:00+00",
   "from": "2024-03-01 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2527.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 19:00:00+00",
   "from": "2024-03-01 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2568.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 20:00:00+00",
   "from": "2024-03-01 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2626,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 21:00:00+00",
   "from": "2024-03-01 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2915.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 22:00:00+00",
   "from": "2024-03-01 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2584,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-01 23:00:00+00",
   "from": "2024-03-01 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2307.1428,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 00:00:00+00",
   "from": "2024-03-01 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 899.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 01:00:00+00",
   "from": "2024-03-02 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3122.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-02 02:00:00+00",
   "from": "2024-03-02 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2761.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 03:00:00+00",
   "from": "2024-03-02 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2553.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 04:00:00+00",
   "from": "2024-03-02 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2993.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 05:00:00+00",
   "from": "2024-03-02 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3122.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-02 06:00:00+00",
   "from": "2024-03-02 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3894.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-02 07:00:00+00",
   "from": "2024-03-02 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2434.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 08:00:00+00",
   "from": "2024-03-02 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2390.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 09:00:00+00",
   "from": "2024-03-02 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2378.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 10:00:00+00",
   "from": "2024-03-02 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2222,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 11:00:00+00",
   "from": "2024-03-02 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1526.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 12:00:00+00",
   "from": "2024-03-02 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2201.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 13:00:00+00",
   "from": "2024-03-02 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2138.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 14:00:00+00",
   "from": "2024-03-02 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3569.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-02 15:00:00+00",
   "from": "2024-03-02 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4363.8335,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-02 16:00:00+00",
   "from": "2024-03-02 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1902.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 17:00:00+00",
   "from": "2024-03-02 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1904,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 18:00:00+00",
   "from": "2024-03-02 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1844.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 19:00:00+00",
   "from": "2024-03-02 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2026.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 20:00:00+00",
   "from": "2024-03-02 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1311.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 21:00:00+00",
   "from": "2024-03-02 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1414.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 22:00:00+00",
   "from": "2024-03-02 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1382.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-02 23:00:00+00",
   "from": "2024-03-02 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4060.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-03 00:00:00+00",
   "from": "2024-03-02 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2217.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 01:00:00+00",
   "from": "2024-03-03 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2068.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 02:00:00+00",
   "from": "2024-03-03 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2824.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 03:00:00+00",
   "from": "2024-03-03 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3911.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-03 04:00:00+00",
   "from": "2024-03-03 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1669.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 05:00:00+00",
   "from": "2024-03-03 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1369,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 06:00:00+00",
   "from": "2024-03-03 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1447.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 07:00:00+00",
   "from": "2024-03-03 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1465.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 08:00:00+00",
   "from": "2024-03-03 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1412.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 09:00:00+00",
   "from": "2024-03-03 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1567.7142,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 10:00:00+00",
   "from": "2024-03-03 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1465.8334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 11:00:00+00",
   "from": "2024-03-03 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2990,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 12:00:00+00",
   "from": "2024-03-03 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1876.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 13:00:00+00",
   "from": "2024-03-03 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2941.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 14:00:00+00",
   "from": "2024-03-03 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2140.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 15:00:00+00",
   "from": "2024-03-03 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2387.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 16:00:00+00",
   "from": "2024-03-03 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2878.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 17:00:00+00",
   "from": "2024-03-03 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2175,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 18:00:00+00",
   "from": "2024-03-03 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2583.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 19:00:00+00",
   "from": "2024-03-03 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2381,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 20:00:00+00",
   "from": "2024-03-03 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1758,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 21:00:00+00",
   "from": "2024-03-03 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2189,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 22:00:00+00",
   "from": "2024-03-03 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2506.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-03 23:00:00+00",
   "from": "2024-03-03 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2139.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 00:00:00+00",
   "from": "2024-03-03 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2370.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 01:00:00+00",
   "from": "2024-03-04 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2099.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 02:00:00+00",
   "from": "2024-03-04 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2433.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 03:00:00+00",
   "from": "2024-03-04 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2421.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 04:00:00+00",
   "from": "2024-03-04 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2621.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 05:00:00+00",
   "from": "2024-03-04 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2703.5715,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 06:00:00+00",
   "from": "2024-03-04 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2832.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 07:00:00+00",
   "from": "2024-03-04 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4360.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-04 08:00:00+00",
   "from": "2024-03-04 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2643.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 09:00:00+00",
   "from": "2024-03-04 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2172,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 10:00:00+00",
   "from": "2024-03-04 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1721.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 11:00:00+00",
   "from": "2024-03-04 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1744.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 12:00:00+00",
   "from": "2024-03-04 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2869,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 13:00:00+00",
   "from": "2024-03-04 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1793.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 14:00:00+00",
   "from": "2024-03-04 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2011.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 15:00:00+00",
   "from": "2024-03-04 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1651.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 16:00:00+00",
   "from": "2024-03-04 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 17:00:00+00",
   "from": "2024-03-04 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3535,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-04 18:00:00+00",
   "from": "2024-03-04 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 19:00:00+00",
   "from": "2024-03-04 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1869.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 20:00:00+00",
   "from": "2024-03-04 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1432,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 21:00:00+00",
   "from": "2024-03-04 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1659.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 22:00:00+00",
   "from": "2024-03-04 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2321,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-04 23:00:00+00",
   "from": "2024-03-04 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2786,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 00:00:00+00",
   "from": "2024-03-04 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 01:00:00+00",
   "from": "2024-03-05 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 02:00:00+00",
   "from": "2024-03-05 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 03:00:00+00",
   "from": "2024-03-05 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 04:00:00+00",
   "from": "2024-03-05 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 05:00:00+00",
   "from": "2024-03-05 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 06:00:00+00",
   "from": "2024-03-05 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 07:00:00+00",
   "from": "2024-03-05 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 08:00:00+00",
   "from": "2024-03-05 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 09:00:00+00",
   "from": "2024-03-05 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": null,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFFFFF"
    }
   ],
   "to": "2024-03-05 10:00:00+00",
   "from": "2024-03-05 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 11:00:00+00",
   "from": "2024-03-05 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1353.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 12:00:00+00",
   "from": "2024-03-05 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1275,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 13:00:00+00",
   "from": "2024-03-05 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 5456.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-05 14:00:00+00",
   "from": "2024-03-05 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4823,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-05 15:00:00+00",
   "from": "2024-03-05 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2369.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 16:00:00+00",
   "from": "2024-03-05 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1054,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 17:00:00+00",
   "from": "2024-03-05 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1056,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 18:00:00+00",
   "from": "2024-03-05 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 997.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 19:00:00+00",
   "from": "2024-03-05 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3751.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-05 20:00:00+00",
   "from": "2024-03-05 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2547,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 21:00:00+00",
   "from": "2024-03-05 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2571,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 22:00:00+00",
   "from": "2024-03-05 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1080,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-05 23:00:00+00",
   "from": "2024-03-05 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1890.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 00:00:00+00",
   "from": "2024-03-05 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1233,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 01:00:00+00",
   "from": "2024-03-06 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2559.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 02:00:00+00",
   "from": "2024-03-06 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1038,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 03:00:00+00",
   "from": "2024-03-06 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3796,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-06 04:00:00+00",
   "from": "2024-03-06 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1126,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 05:00:00+00",
   "from": "2024-03-06 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 5480.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-06 06:00:00+00",
   "from": "2024-03-06 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3433.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-06 07:00:00+00",
   "from": "2024-03-06 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2957.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 08:00:00+00",
   "from": "2024-03-06 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 5681.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-06 09:00:00+00",
   "from": "2024-03-06 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2197.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 10:00:00+00",
   "from": "2024-03-06 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1231,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 11:00:00+00",
   "from": "2024-03-06 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2916.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 12:00:00+00",
   "from": "2024-03-06 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1182,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 13:00:00+00",
   "from": "2024-03-06 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2030.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 14:00:00+00",
   "from": "2024-03-06 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1066,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 15:00:00+00",
   "from": "2024-03-06 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2545.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 16:00:00+00",
   "from": "2024-03-06 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 785,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 17:00:00+00",
   "from": "2024-03-06 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4253.6665,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-06 18:00:00+00",
   "from": "2024-03-06 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 682,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 19:00:00+00",
   "from": "2024-03-06 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1689,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 20:00:00+00",
   "from": "2024-03-06 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 815.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 21:00:00+00",
   "from": "2024-03-06 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3878,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-06 22:00:00+00",
   "from": "2024-03-06 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 899,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-06 23:00:00+00",
   "from": "2024-03-06 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4147.6665,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-07 00:00:00+00",
   "from": "2024-03-06 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 797,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 01:00:00+00",
   "from": "2024-03-07 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4367.3335,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-07 02:00:00+00",
   "from": "2024-03-07 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 728,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 03:00:00+00",
   "from": "2024-03-07 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 897,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 04:00:00+00",
   "from": "2024-03-07 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 817.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 05:00:00+00",
   "from": "2024-03-07 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2830.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 06:00:00+00",
   "from": "2024-03-07 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 07:00:00+00",
   "from": "2024-03-07 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 08:00:00+00",
   "from": "2024-03-07 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1154,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 09:00:00+00",
   "from": "2024-03-07 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 5356.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-07 10:00:00+00",
   "from": "2024-03-07 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1519,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 11:00:00+00",
   "from": "2024-03-07 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3365.3333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-07 12:00:00+00",
   "from": "2024-03-07 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1083,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 13:00:00+00",
   "from": "2024-03-07 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1925,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 14:00:00+00",
   "from": "2024-03-07 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1220,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 15:00:00+00",
   "from": "2024-03-07 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2891.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 16:00:00+00",
   "from": "2024-03-07 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1031,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 17:00:00+00",
   "from": "2024-03-07 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3227.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-07 18:00:00+00",
   "from": "2024-03-07 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1048,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 19:00:00+00",
   "from": "2024-03-07 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2123.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-07 20:00:00+00",
   "from": "2024-03-07 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3254.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-07 21:00:00+00",
   "from": "2024-03-07 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3759.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-07 22:00:00+00",
   "from": "2024-03-07 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3091,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-07 23:00:00+00",
   "from": "2024-03-07 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3655.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-08 00:00:00+00",
   "from": "2024-03-07 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2858.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 01:00:00+00",
   "from": "2024-03-08 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2753.1667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 02:00:00+00",
   "from": "2024-03-08 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1297,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 03:00:00+00",
   "from": "2024-03-08 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3140.8333,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-08 04:00:00+00",
   "from": "2024-03-08 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1372,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 05:00:00+00",
   "from": "2024-03-08 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2014,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 06:00:00+00",
   "from": "2024-03-08 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1180,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 07:00:00+00",
   "from": "2024-03-08 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4053.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-08 08:00:00+00",
   "from": "2024-03-08 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1114,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 09:00:00+00",
   "from": "2024-03-08 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3276,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-08 10:00:00+00",
   "from": "2024-03-08 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1169,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 11:00:00+00",
   "from": "2024-03-08 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1486,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 12:00:00+00",
   "from": "2024-03-08 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1112,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 13:00:00+00",
   "from": "2024-03-08 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1549.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 14:00:00+00",
   "from": "2024-03-08 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1104,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 15:00:00+00",
   "from": "2024-03-08 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2546.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 16:00:00+00",
   "from": "2024-03-08 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1072.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 17:00:00+00",
   "from": "2024-03-08 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2611.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 18:00:00+00",
   "from": "2024-03-08 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1355,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 19:00:00+00",
   "from": "2024-03-08 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1456.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 20:00:00+00",
   "from": "2024-03-08 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1061.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 21:00:00+00",
   "from": "2024-03-08 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1189.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 22:00:00+00",
   "from": "2024-03-08 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1503,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-08 23:00:00+00",
   "from": "2024-03-08 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2109.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 00:00:00+00",
   "from": "2024-03-08 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 985.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 01:00:00+00",
   "from": "2024-03-09 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1436.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 02:00:00+00",
   "from": "2024-03-09 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1067,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 03:00:00+00",
   "from": "2024-03-09 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1313,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 04:00:00+00",
   "from": "2024-03-09 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1037,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 05:00:00+00",
   "from": "2024-03-09 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 972.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 06:00:00+00",
   "from": "2024-03-09 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1468.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 07:00:00+00",
   "from": "2024-03-09 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1233,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 08:00:00+00",
   "from": "2024-03-09 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1153,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 09:00:00+00",
   "from": "2024-03-09 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1482.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 10:00:00+00",
   "from": "2024-03-09 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1078,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 11:00:00+00",
   "from": "2024-03-09 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1207.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 12:00:00+00",
   "from": "2024-03-09 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 702,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 13:00:00+00",
   "from": "2024-03-09 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1672.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 14:00:00+00",
   "from": "2024-03-09 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1276,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 15:00:00+00",
   "from": "2024-03-09 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1646.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 16:00:00+00",
   "from": "2024-03-09 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1087,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 17:00:00+00",
   "from": "2024-03-09 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1382.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 18:00:00+00",
   "from": "2024-03-09 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1206,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 19:00:00+00",
   "from": "2024-03-09 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1503.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 20:00:00+00",
   "from": "2024-03-09 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1556,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 21:00:00+00",
   "from": "2024-03-09 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1404,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 22:00:00+00",
   "from": "2024-03-09 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1009,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-09 23:00:00+00",
   "from": "2024-03-09 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1286.4,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 00:00:00+00",
   "from": "2024-03-09 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1005.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 01:00:00+00",
   "from": "2024-03-10 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1977.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 02:00:00+00",
   "from": "2024-03-10 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1498.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 03:00:00+00",
   "from": "2024-03-10 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1322.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 04:00:00+00",
   "from": "2024-03-10 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1052,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 05:00:00+00",
   "from": "2024-03-10 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1322.1666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 06:00:00+00",
   "from": "2024-03-10 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1167,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 07:00:00+00",
   "from": "2024-03-10 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1665.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 08:00:00+00",
   "from": "2024-03-10 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 09:00:00+00",
   "from": "2024-03-10 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1741,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 10:00:00+00",
   "from": "2024-03-10 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 11:00:00+00",
   "from": "2024-03-10 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2205,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 12:00:00+00",
   "from": "2024-03-10 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1365,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 13:00:00+00",
   "from": "2024-03-10 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1347,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 14:00:00+00",
   "from": "2024-03-10 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1818,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 15:00:00+00",
   "from": "2024-03-10 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2428,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 16:00:00+00",
   "from": "2024-03-10 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 17:00:00+00",
   "from": "2024-03-10 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3058.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-10 18:00:00+00",
   "from": "2024-03-10 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 901,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 19:00:00+00",
   "from": "2024-03-10 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1694.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 20:00:00+00",
   "from": "2024-03-10 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 21:00:00+00",
   "from": "2024-03-10 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1910.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 22:00:00+00",
   "from": "2024-03-10 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1441,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-10 23:00:00+00",
   "from": "2024-03-10 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2518,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 00:00:00+00",
   "from": "2024-03-10 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 882,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 01:00:00+00",
   "from": "2024-03-11 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1652.25,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 02:00:00+00",
   "from": "2024-03-11 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1026,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 03:00:00+00",
   "from": "2024-03-11 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2635,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 04:00:00+00",
   "from": "2024-03-11 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 7059,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-11 05:00:00+00",
   "from": "2024-03-11 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2612.8,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 06:00:00+00",
   "from": "2024-03-11 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 5362,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-11 07:00:00+00",
   "from": "2024-03-11 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3074.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-11 08:00:00+00",
   "from": "2024-03-11 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 985,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 09:00:00+00",
   "from": "2024-03-11 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1924.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 10:00:00+00",
   "from": "2024-03-11 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 11:00:00+00",
   "from": "2024-03-11 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2898.6,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 12:00:00+00",
   "from": "2024-03-11 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 13:00:00+00",
   "from": "2024-03-11 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2374.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 14:00:00+00",
   "from": "2024-03-11 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 15:00:00+00",
   "from": "2024-03-11 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2106.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 16:00:00+00",
   "from": "2024-03-11 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1189.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 17:00:00+00",
   "from": "2024-03-11 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1474.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 18:00:00+00",
   "from": "2024-03-11 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1144,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 19:00:00+00",
   "from": "2024-03-11 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1434,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 20:00:00+00",
   "from": "2024-03-11 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1206,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 21:00:00+00",
   "from": "2024-03-11 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2054,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 22:00:00+00",
   "from": "2024-03-11 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1077,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-11 23:00:00+00",
   "from": "2024-03-11 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1130,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 00:00:00+00",
   "from": "2024-03-11 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1015.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 01:00:00+00",
   "from": "2024-03-12 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1180.75,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 02:00:00+00",
   "from": "2024-03-12 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1121.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 03:00:00+00",
   "from": "2024-03-12 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2264,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 04:00:00+00",
   "from": "2024-03-12 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1152,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 05:00:00+00",
   "from": "2024-03-12 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2895.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 06:00:00+00",
   "from": "2024-03-12 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 07:00:00+00",
   "from": "2024-03-12 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2579.2,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 08:00:00+00",
   "from": "2024-03-12 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1234,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 09:00:00+00",
   "from": "2024-03-12 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1304.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 10:00:00+00",
   "from": "2024-03-12 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1193,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 11:00:00+00",
   "from": "2024-03-12 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 12:00:00+00",
   "from": "2024-03-12 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1105,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 13:00:00+00",
   "from": "2024-03-12 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1482.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 14:00:00+00",
   "from": "2024-03-12 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1195,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 15:00:00+00",
   "from": "2024-03-12 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3526,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-12 16:00:00+00",
   "from": "2024-03-12 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1100,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 17:00:00+00",
   "from": "2024-03-12 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1382,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 18:00:00+00",
   "from": "2024-03-12 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1069,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 19:00:00+00",
   "from": "2024-03-12 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1596,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 20:00:00+00",
   "from": "2024-03-12 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1085,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 21:00:00+00",
   "from": "2024-03-12 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1106,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 22:00:00+00",
   "from": "2024-03-12 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1057,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-12 23:00:00+00",
   "from": "2024-03-12 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 964,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 00:00:00+00",
   "from": "2024-03-12 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1025,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 01:00:00+00",
   "from": "2024-03-13 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1618.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 02:00:00+00",
   "from": "2024-03-13 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1032.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 03:00:00+00",
   "from": "2024-03-13 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 04:00:00+00",
   "from": "2024-03-13 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1078,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 05:00:00+00",
   "from": "2024-03-13 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3056,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-13 06:00:00+00",
   "from": "2024-03-13 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1943,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 07:00:00+00",
   "from": "2024-03-13 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1351,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 08:00:00+00",
   "from": "2024-03-13 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1002,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 09:00:00+00",
   "from": "2024-03-13 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4516,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-13 10:00:00+00",
   "from": "2024-03-13 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 11:00:00+00",
   "from": "2024-03-13 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 972,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 12:00:00+00",
   "from": "2024-03-13 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1344,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 13:00:00+00",
   "from": "2024-03-13 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2292,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 14:00:00+00",
   "from": "2024-03-13 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 15:00:00+00",
   "from": "2024-03-13 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2904.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 16:00:00+00",
   "from": "2024-03-13 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 17:00:00+00",
   "from": "2024-03-13 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1583,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 18:00:00+00",
   "from": "2024-03-13 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 19:00:00+00",
   "from": "2024-03-13 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2552.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 20:00:00+00",
   "from": "2024-03-13 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1179,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 21:00:00+00",
   "from": "2024-03-13 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2120,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 22:00:00+00",
   "from": "2024-03-13 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1072,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-13 23:00:00+00",
   "from": "2024-03-13 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 00:00:00+00",
   "from": "2024-03-13 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1030,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 01:00:00+00",
   "from": "2024-03-14 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4244,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-14 02:00:00+00",
   "from": "2024-03-14 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1058,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 03:00:00+00",
   "from": "2024-03-14 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 04:00:00+00",
   "from": "2024-03-14 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1051.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 05:00:00+00",
   "from": "2024-03-14 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1447.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 06:00:00+00",
   "from": "2024-03-14 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1498,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 07:00:00+00",
   "from": "2024-03-14 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 857,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 08:00:00+00",
   "from": "2024-03-14 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1164,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 09:00:00+00",
   "from": "2024-03-14 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1293,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 10:00:00+00",
   "from": "2024-03-14 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 11:00:00+00",
   "from": "2024-03-14 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2587.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 12:00:00+00",
   "from": "2024-03-14 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1077,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 13:00:00+00",
   "from": "2024-03-14 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1229,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 14:00:00+00",
   "from": "2024-03-14 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 15:00:00+00",
   "from": "2024-03-14 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4969,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-14 16:00:00+00",
   "from": "2024-03-14 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 17:00:00+00",
   "from": "2024-03-14 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 987,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 18:00:00+00",
   "from": "2024-03-14 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 19:00:00+00",
   "from": "2024-03-14 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2061,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 20:00:00+00",
   "from": "2024-03-14 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1077,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 21:00:00+00",
   "from": "2024-03-14 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 22:00:00+00",
   "from": "2024-03-14 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1062,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-14 23:00:00+00",
   "from": "2024-03-14 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 00:00:00+00",
   "from": "2024-03-14 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1655.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 01:00:00+00",
   "from": "2024-03-15 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2017.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 02:00:00+00",
   "from": "2024-03-15 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1894,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 03:00:00+00",
   "from": "2024-03-15 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1372,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 04:00:00+00",
   "from": "2024-03-15 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4046,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-15 05:00:00+00",
   "from": "2024-03-15 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 06:00:00+00",
   "from": "2024-03-15 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1209,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 07:00:00+00",
   "from": "2024-03-15 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3245,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-15 08:00:00+00",
   "from": "2024-03-15 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 09:00:00+00",
   "from": "2024-03-15 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2055.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 10:00:00+00",
   "from": "2024-03-15 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1038,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 11:00:00+00",
   "from": "2024-03-15 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1789,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 12:00:00+00",
   "from": "2024-03-15 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1101,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 13:00:00+00",
   "from": "2024-03-15 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 7481,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-15 14:00:00+00",
   "from": "2024-03-15 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4648,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-15 15:00:00+00",
   "from": "2024-03-15 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2965,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 16:00:00+00",
   "from": "2024-03-15 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1330,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 17:00:00+00",
   "from": "2024-03-15 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1645,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 18:00:00+00",
   "from": "2024-03-15 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1119,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 19:00:00+00",
   "from": "2024-03-15 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1388,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 20:00:00+00",
   "from": "2024-03-15 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1083,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 21:00:00+00",
   "from": "2024-03-15 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3079.6667,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-15 22:00:00+00",
   "from": "2024-03-15 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1086,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-15 23:00:00+00",
   "from": "2024-03-15 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 962,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 00:00:00+00",
   "from": "2024-03-15 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1053,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 01:00:00+00",
   "from": "2024-03-16 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1959.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 02:00:00+00",
   "from": "2024-03-16 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 981.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 03:00:00+00",
   "from": "2024-03-16 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2116,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 04:00:00+00",
   "from": "2024-03-16 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2410.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 05:00:00+00",
   "from": "2024-03-16 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3332,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-16 06:00:00+00",
   "from": "2024-03-16 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1609,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 07:00:00+00",
   "from": "2024-03-16 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1871.6666,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 08:00:00+00",
   "from": "2024-03-16 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1192,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 09:00:00+00",
   "from": "2024-03-16 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1450,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 10:00:00+00",
   "from": "2024-03-16 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1279,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 11:00:00+00",
   "from": "2024-03-16 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1122,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 12:00:00+00",
   "from": "2024-03-16 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2172,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 13:00:00+00",
   "from": "2024-03-16 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 5053,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FF0000"
    }
   ],
   "to": "2024-03-16 14:00:00+00",
   "from": "2024-03-16 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1173,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 15:00:00+00",
   "from": "2024-03-16 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1966,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 16:00:00+00",
   "from": "2024-03-16 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1059,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 17:00:00+00",
   "from": "2024-03-16 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 3614,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-16 18:00:00+00",
   "from": "2024-03-16 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1123,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 19:00:00+00",
   "from": "2024-03-16 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2572.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 20:00:00+00",
   "from": "2024-03-16 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1067,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 21:00:00+00",
   "from": "2024-03-16 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1157,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 22:00:00+00",
   "from": "2024-03-16 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1111,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-16 23:00:00+00",
   "from": "2024-03-16 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1121,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 00:00:00+00",
   "from": "2024-03-16 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1083,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 01:00:00+00",
   "from": "2024-03-17 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1704,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 02:00:00+00",
   "from": "2024-03-17 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1689.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 03:00:00+00",
   "from": "2024-03-17 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1762.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 04:00:00+00",
   "from": "2024-03-17 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 986.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 05:00:00+00",
   "from": "2024-03-17 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1017,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 06:00:00+00",
   "from": "2024-03-17 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1093,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 07:00:00+00",
   "from": "2024-03-17 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1327,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 08:00:00+00",
   "from": "2024-03-17 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1151,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 09:00:00+00",
   "from": "2024-03-17 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 10:00:00+00",
   "from": "2024-03-17 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1140,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 11:00:00+00",
   "from": "2024-03-17 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 12:00:00+00",
   "from": "2024-03-17 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1330,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 13:00:00+00",
   "from": "2024-03-17 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1992.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 14:00:00+00",
   "from": "2024-03-17 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1186,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 15:00:00+00",
   "from": "2024-03-17 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2761.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 16:00:00+00",
   "from": "2024-03-17 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1146,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 17:00:00+00",
   "from": "2024-03-17 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2417,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 18:00:00+00",
   "from": "2024-03-17 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1099,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 19:00:00+00",
   "from": "2024-03-17 18:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1297,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 20:00:00+00",
   "from": "2024-03-17 19:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1148.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 21:00:00+00",
   "from": "2024-03-17 20:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1700.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 22:00:00+00",
   "from": "2024-03-17 21:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1073,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-17 23:00:00+00",
   "from": "2024-03-17 22:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 00:00:00+00",
   "from": "2024-03-17 23:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1108,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 01:00:00+00",
   "from": "2024-03-18 00:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4659,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-18 02:00:00+00",
   "from": "2024-03-18 01:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1028,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 03:00:00+00",
   "from": "2024-03-18 02:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2048.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 04:00:00+00",
   "from": "2024-03-18 03:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1057,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 05:00:00+00",
   "from": "2024-03-18 04:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1811,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 06:00:00+00",
   "from": "2024-03-18 05:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4368,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-18 07:00:00+00",
   "from": "2024-03-18 06:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 4883,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#FFEB3B"
    }
   ],
   "to": "2024-03-18 08:00:00+00",
   "from": "2024-03-18 07:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1450,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 09:00:00+00",
   "from": "2024-03-18 08:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 2924,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 10:00:00+00",
   "from": "2024-03-18 09:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 11:00:00+00",
   "from": "2024-03-18 10:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1926.3334,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 12:00:00+00",
   "from": "2024-03-18 11:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1354,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 13:00:00+00",
   "from": "2024-03-18 12:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 14:00:00+00",
   "from": "2024-03-18 13:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1263,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 15:00:00+00",
   "from": "2024-03-18 14:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 0,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 16:00:00+00",
   "from": "2024-03-18 15:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1237,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 17:00:00+00",
   "from": "2024-03-18 16:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 1449,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 18:00:00+00",
   "from": "2024-03-18 17:00:00+00"
  },
  {
   "SERV.Instagram Post Picture Delay (msec)": 996.5,
   "legends": [
    {
     "id": "SERV.36dbbb34-f324-40e1-a858-f8288d16d9bc",
     "name": "SERV.Instagram Post Picture Delay (msec)",
     "color": "#0CFF00"
    }
   ],
   "to": "2024-03-18 19:00:00+00",
   "from": "2024-03-18 18:00:00+00"
  }
 ]