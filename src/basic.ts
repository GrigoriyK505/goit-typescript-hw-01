//Завдання 1
const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback: (a:number) => number = (a) => {return 100 + a};

//Завдання 2
let person: (string | number)[] = ['Max', 21];

//Завдання 3
let value: string | number;
let status: 'enable' | 'disable';

//Завдання 4
function showMessage(message: string) {
    console.log(message);
  }
  
  function calc(num1: number, num2: number) {
    return num1 + num2;
  }
  
  function customError(): never {
    throw new Error('Error');
  }

//Завдання 5
enum DayOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
  }
  
  type IsWeekend = Record<DayOfWeek, boolean>;
  
  const isWeekend: IsWeekend = {
    [DayOfWeek.Monday]: false,
    [DayOfWeek.Tuesday]: false,
    [DayOfWeek.Wednesday]: false,
    [DayOfWeek.Thursday]: false,
    [DayOfWeek.Friday]: false,
    [DayOfWeek.Saturday]: true,
    [DayOfWeek.Sunday]: true,
  };

//Завдання 6
  
interface Adress {
    city: string;
    country: string;
}

interface User {
    name: string;
    age: number;
    email: string;
    adress?: Adress;
}

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

//Завдання 7

type Details = {
    createAt: Date;
    updateAt: Date;
}

type Page = {
    title: string;
    likes: number;
    accounts: string[];
    status: string;
    details?: Details;
}