export const contacts = [
    {
        id:1,
        name:'Aaquib',
        email:'aaquib@gmail.com',
        phone:'1111111',
        profession:'Developer',
    },
    {
        id:2,
        name:'Farhana',
        email:'farhu@gmail.com',
        phone:'222222',
        profession:'Data Base Engineer',
    },
    {
        id:3,
        name:'Saquib',
        email:'saquib@gmail.com',
        phone:'333333',
        profession:'Student',
    },
    {
        id:4,
        name:'Atash',
        email:'atash@gmail.com',
        phone:'444444',
        profession:'Student',
    },
]


export interface contactInterface {
    id?: number;
    name: string;
    email: string;
    phone: string;
    profession:string;
  }