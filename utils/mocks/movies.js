const moviesMock = [
  {
    id: '3ef118d9-79c1-4951-bc33-2ec87113d64e',
    title: 'Pecker',
    year: 2007,
    cover: 'http://dummyimage.com/232x207.png/5fa2dd/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2630,
    contentRating: 'NC-17',
    source: 'https://apache.org/turpis/adipiscing/lorem/vitae/mattis.js',
    tags: [
      'Action|Animation|Children',
      'Comedy|Drama|Romance',
      'Drama|Romance',
    ],
  },
  {
    id: '3eecae7d-dae9-4908-b353-5598a450c63c',
    title: 'Cherry Crush',
    year: 1999,
    cover: 'http://dummyimage.com/125x231.png/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 1631,
    contentRating: 'PG',
    source: 'http://trellian.com/lobortis/sapien/sapien/non/mi.jpg',
    tags: ['Comedy|Drama', 'Comedy|Drama', 'Thriller'],
  },
  {
    id: 'da0afbe4-22a8-48a1-8d18-aa874b6b4f34',
    title: 'Happy End',
    year: 2001,
    cover: 'http://dummyimage.com/206x132.png/cc0000/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 295,
    contentRating: 'NC-17',
    source: 'http://mail.ru/nec/nisi.js',
    tags: ['Comedy|Drama', 'Drama'],
  },
  {
    id: '6ce6b7ee-cddb-4721-975d-44e57034571f',
    title: 'Kiss Me Again',
    year: 1990,
    cover: 'http://dummyimage.com/174x119.png/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 2843,
    contentRating: 'PG',
    source: 'https://yahoo.com/non/mi/integer/ac.jpg',
    tags: [
      'Comedy',
      'Comedy',
      'Action|Drama',
      'Action|Adventure|Animation|Fantasy',
    ],
  },
  {
    id: '2c7ccbc6-9f83-497c-a2aa-41b8fce419b2',
    title: 'When the Levees Broke: A Requiem in Four Acts',
    year: 1984,
    cover: 'http://dummyimage.com/239x242.png/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 2637,
    contentRating: 'R',
    source: 'http://guardian.co.uk/nulla/suspendisse/potenti/cras/in.js',
    tags: ['Comedy|Drama', 'Comedy|Documentary'],
  },
  {
    id: '87b7b33c-f865-4864-8e4b-e865d87571fe',
    title:
      'Fog of War: Eleven Lessons from the Life of Robert S. McNamara, The',
    year: 2006,
    cover: 'http://dummyimage.com/204x142.png/dddddd/000000',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 589,
    contentRating: 'NC-17',
    source: 'https://printfriendly.com/id.aspx',
    tags: ['Drama'],
  },
  {
    id: '79a27971-b032-4b43-b4e2-aa622aa5d98b',
    title: 'Black Dragons',
    year: 2009,
    cover: 'http://dummyimage.com/107x237.png/5fa2dd/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 188,
    contentRating: 'NC-17',
    source: 'https://hibu.com/praesent/lectus/vestibulum/quam/sapien.json',
    tags: ['Comedy|Drama', 'Comedy|Drama|Romance', 'Comedy|Crime', 'Drama'],
  },
  {
    id: '0b02c12a-e560-4d60-a6c3-8e22a4a36fa1',
    title: 'White Night Wedding (Brúðguminn)',
    year: 2005,
    cover: 'http://dummyimage.com/169x188.png/dddddd/000000',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 2051,
    contentRating: 'G',
    source: 'http://webeden.co.uk/ac/enim/in/tempor/turpis.json',
    tags: ['Adventure|Animation|Children|Comedy|Drama|Musical|Romance'],
  },
  {
    id: 'a811711f-0302-495a-bbbd-f8bc3314013e',
    title: 'Bull Durham',
    year: 1997,
    cover: 'http://dummyimage.com/195x136.png/dddddd/000000',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 337,
    contentRating: 'PG',
    source: 'http://deliciousdays.com/ultrices/posuere/cubilia/curae.xml',
    tags: ['Comedy|Drama|Romance'],
  },
  {
    id: '39d839f2-5717-4af6-ac17-920bb8c11c99',
    title: 'Transsiberian',
    year: 1990,
    cover: 'http://dummyimage.com/197x208.png/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1483,
    contentRating: 'PG-13',
    source: 'https://wikimedia.org/bibendum/morbi/non.aspx',
    tags: ['Drama|Thriller', 'Drama|Romance'],
  },
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MovieServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, MovieServiceMock, filteredMoviesMock };
