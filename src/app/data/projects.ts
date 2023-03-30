export const project = [
  {
    id: 1,
    name: 'X',
    research: [
      {
        id: 4,
        type: 'psychotesty',
        status: 'wykonane',
        result: 'negatywne',
        patient: {
          name: 'Kamil',
          surname: 'Markowski',
          pesel: '9412218744',
          city: 'Białystok',
          postalCode: '15-773',
          street: 'Rzemieślnicza',
          homeNumber: '32',
          consent: true,
        },
      },
      {
        id: 2,
        type: 'badanie krwi',
        status: 'wykonane',
        result: 'pozytywne',
        patient: {
          name: 'Jarosław',
          surname: 'Kamiński',
          pesel: '5810103333',
          city: 'Białystok',
          postalCode: '15-766',
          street: 'Łąkowa',
          homeNumber: '3',
          consent: true,
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Y',
    research: [],
  },
  {
    id: 3,
    name: 'Z',
    research: [],
  },
  {
    id: 4,
    name: 'Q',
    research: [],
  },
];
