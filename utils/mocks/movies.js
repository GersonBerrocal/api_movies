const moviesMock = [
  {
    id: 'ad8e1067-701e-4f0c-a9ad-5f748723044f',
    title: 'A True Mob Story',
    year: 2011,
    cover: 'http://dummyimage.com/123x227.png/cc0000/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 2038,
    contentRating: 'PG-13',
    source: 'https://abc.net.au/nullam/sit/amet/turpis/elementum.jpg',
    tags: [
      'Action|Comedy|Drama',
      'Documentary',
      'Action|Drama|War',
      'Comedy',
      'Comedy|Drama',
    ],
  },
  {
    id: '127def9f-2fc7-439d-bbf1-f292de39aeee',
    title: 'The Fuller Brush Man',
    year: 1993,
    cover: 'http://dummyimage.com/233x247.png/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1919,
    contentRating: 'PG-13',
    source:
      'http://vkontakte.ru/pede/ac/diam/cras/pellentesque/volutpat/dui.html',
    tags: [
      'Comedy',
      'Comedy|Drama',
      'Drama|Romance',
      'Action|Crime|Thriller',
      'Comedy|Horror',
    ],
  },
  {
    id: 'a5d8a70c-461d-44d2-ae3b-4fcab4f1e6bb',
    title: 'Pulp Fiction',
    year: 2007,
    cover: 'http://dummyimage.com/141x187.png/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2050,
    contentRating: 'R',
    source:
      'http://ifeng.com/turpis/integer/aliquet/massa/id/lobortis/convallis.xml',
    tags: ['Documentary'],
  },
  {
    id: '95912698-b13b-44af-81a5-64f61d91a914',
    title: 'Taras Bulba',
    year: 1972,
    cover: 'http://dummyimage.com/107x205.png/cc0000/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2036,
    contentRating: 'PG',
    source: 'http://is.gd/nulla/dapibus/dolor/vel/est/donec.xml',
    tags: ['Comedy'],
  },
  {
    id: '34599384-c502-42de-8603-6b1e2b91e72f',
    title: "Life's a Breeze",
    year: 1996,
    cover: 'http://dummyimage.com/155x156.png/cc0000/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1926,
    contentRating: 'NC-17',
    source: 'http://soup.io/quam.xml',
    tags: ['Adventure|Drama|War'],
  },
  {
    id: 'e62b0402-0934-40d3-9215-229778803c13',
    title: 'Lords of Flatbush, The',
    year: 1997,
    cover: 'http://dummyimage.com/129x185.png/ff4444/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1950,
    contentRating: 'PG-13',
    source:
      'https://blog.com/sem/mauris/laoreet/ut/rhoncus/aliquet/pulvinar.jsp',
    tags: ['Drama', 'Drama', 'Comedy', 'Drama|Musical', 'Western'],
  },
  {
    id: '3e4b45b1-8aeb-4590-81b7-26c31fe7d283',
    title: 'Back In Action',
    year: 2009,
    cover: 'http://dummyimage.com/133x111.png/5fa2dd/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1914,
    contentRating: 'G',
    source: 'http://japanpost.jp/sit/amet/consectetuer/adipiscing/elit.xml',
    tags: [
      'Drama',
      'Adventure|Comedy|Crime|Thriller',
      'Drama',
      'Action|Adventure|Children|IMAX',
    ],
  },
  {
    id: '11260156-ad3c-4752-895a-8e7ee30ba2ed',
    title: 'War Made Easy: How Presidents & Pundits Keep Spinning Us to Death',
    year: 1986,
    cover: 'http://dummyimage.com/184x142.png/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 1968,
    contentRating: 'R',
    source: 'https://over-blog.com/sagittis/dui/vel.jsp',
    tags: ['Drama|Romance'],
  },
  {
    id: 'e91f9fb1-6532-49b8-a0c2-edbaa1e648fa',
    title: 'Perez Family, The',
    year: 2006,
    cover: 'http://dummyimage.com/203x170.png/cc0000/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 1976,
    contentRating: 'PG',
    source: 'https://imdb.com/pede/lobortis/ligula.xml',
    tags: ['Action|Adventure|Comedy', 'Crime|Mystery', 'Action|Crime|Drama'],
  },
  {
    id: '74bbb8d8-9b62-41cf-b267-55e0ef8f4b94',
    title: 'Two Hands',
    year: 2011,
    cover: 'http://dummyimage.com/141x116.png/5fa2dd/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 2014,
    contentRating: 'PG',
    source: 'http://cbc.ca/maecenas/ut/massa/quis/augue/luctus.xml',
    tags: [
      'Crime|Drama',
      'Drama|War',
      'Drama',
      'Action|Adventure|Sci-Fi',
      'Drama',
    ],
  },
];

module.exports = { moviesMock };
