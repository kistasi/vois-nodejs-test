const supertest = require('supertest');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const app = require('../src/main');

describe('API tests', () => {
  it('GET /api/posts', async () => {
    const response = await supertest(app)
      .get('/api/posts')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).to.deep.equal({
      data: [
        {
          id: 1,
          title: 'This is the title of the first post',
          headline: 'This is the headline of the first post',
          body: 'This is the body of the first post',
          tags: ['Sports'],
          created_at: '2023-11-25',
        },
        {
          id: 2,
          title: 'This is the title of the second post',
          headline: 'This is the headline of the second post',
          body: 'This is the body of the second post',
          tags: ['IT', 'Sports'],
          created_at: '2022-11-25',
        },
        {
          id: 3,
          title: 'This is the title of the third post',
          headline: 'This is the headline of the third post',
          body: 'This is the body of the third post',
          tags: ['Magic'],
          created_at: '2021-11-25',
        },
      ],
    });
  });

  it('GET /api/posts/1', async () => {
    const response = await supertest(app)
      .get('/api/posts/1')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).to.deep.equal({
      data: {
        id: 1,
        title: 'This is the title of the first post',
        headline: 'This is the headline of the first post',
        body: 'This is the body of the first post',
        created_at: '2023-11-25',
        tags: ['Sports'],
      },
    });
  });

  it('GET /api/posts/1024', async () => {
    const response = await supertest(app)
      .get('/api/posts/1024')
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).to.deep.equal({
      error: 'Post not found',
    });
  });

  it('GET /api/posts/1/comments', async () => {
    const response = await supertest(app)
      .get('/api/posts/1/comments')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).to.deep.equal({
      data: [
        {
          id: 1,
          post_id: 1,
          created_at: '2023-02-13',
          author: 'Test User A',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    });
  });

  it('GET /api/posts/1024/comments', async () => {
    const response = await supertest(app)
      .get('/api/posts/1024/comments')
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).to.deep.equal({
      error: 'Comments not found',
    });
  });

  it('GET /api/tags/Sports', async () => {
    const response = await supertest(app)
      .get('/api/tags/Sports')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).to.deep.equal({
      data: [
        {
          id: 1,
          title: 'This is the title of the first post',
          headline: 'This is the headline of the first post',
          body: 'This is the body of the first post',
          created_at: '2023-11-25',
          tags: ['Sports'],
        },
        {
          id: 2,
          title: 'This is the title of the second post',
          headline: 'This is the headline of the second post',
          body: 'This is the body of the second post',
          created_at: '2022-11-25',
          tags: ['IT', 'Sports'],
        },
      ],
    });
  });

  it('GET /api/tags/Szigethalom', async () => {
    const response = await supertest(app)
      .get('/api/tags/Szigethalom')
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).to.deep.equal({
      error: 'Posts not found',
    });
  });
});
