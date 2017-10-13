import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  // filter: {id: 1}
  it('should search 1 for id and return user jack', () => {
    expect(pipe.transform(MOCK_DATA, {id: 1})).toEqual([{
      id: 1,
      username: 'jack',
      sex: 'male',
      description: 'he is jack',
    }]);
  });

  // filter: {username: 'bo'}
  it('should ignore case and search "bo" and return user BOB', () => {
    expect(pipe.transform(MOCK_DATA, {username: 'bob'})).toEqual([{
      id: 2,
      username: 'BOB',
      sex: 'male',
      description: 'this is bob',
    }]);
  });

  // filter: {username: 'alice', sex: 'male'}
  it('should return [] when not accord with one condition of filters', () => {
    expect(pipe.transform(MOCK_DATA, {sex: 'female', username: 'bob'})).toEqual([]);
  });

  // filter: female
  it('should return all female users when search a string female', () => {
    expect(pipe.transform(MOCK_DATA, 'female')).toEqual([
      {
        id: 3,
        username: 'alice',
        sex: 'female',
        description: 'she is alice',
      },
    ]);
  });
});


const MOCK_DATA = [
  {
    id: 1,
    username: 'jack',
    sex: 'male',
    description: 'he is jack',
  },
  {
    id: 2,
    username: 'BOB',
    sex: 'male',
    description: 'this is bob',
  },
  {
    id: 3,
    username: 'alice',
    sex: 'female',
    description: 'she is alice',
  },
];
