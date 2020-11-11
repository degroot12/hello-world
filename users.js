const { query } = require('./db');

exports.updateTweet = async (tweetUpdate) => {
  const sql = `
    UPDATE tweets
    SET
      content = ?
    WHERE
      id = ?
  `;
  const values = [
    tweetUpdate.content,
    tweetUpdate.id
  ];
  return await query(sql, values);
}

exports.updateUser = async (userProfile) => {
  const sql = `
    UPDATE users2
    SET 
      firstname = ?,
      lastname = ?,
      email = ?
    WHERE
      id = ?
  `;
  const values = [
    userProfile.firstname,
    userProfile.lastname,
    userProfile.email,
    userProfile.id,
  ];
  return await query(sql, values);
}

exports.createUser = async (userProfile) => {
  const sql = `
    INSERT INTO users2
    (
      firstname,
      lastname,
      email
    )
    VALUES
    (?,?,?)
  `;
  const values = [
    userProfile.firstname, 
    userProfile.lastname,
    userProfile.email,
  ];
  return await query(sql, values);
}

exports.getName = async (id) => {
  const sql = `
    SELECT
      firstname, 
      lastname
    FROM
      users2
    WHERE
      id = ?
  `;
  const values = [id];
  return await query(sql, values);
}

exports.getTweets2 = async (id) => {
  const sql = `
    SELECT
      content, 
      author
    FROM 
      tweets
    WHERE id = ?
  `;
  const values = [id]
  return await query(sql, values);
}

exports.getTweets = async (id) => {
  const sql = `
    SELECT
      tweets.content, 
      users2.firstname, 
      users2.lastname
    FROM
      tweets
    LEFT JOIN users2
    ON tweets.author = users2.id
  `;
  const values = [id];
  return await query(sql, values);
}

exports.createTweet = async (newTweet) => {
  const sql = `
    INSERT INTO tweets
    (
      content,
      created_at
    )
    VALUES
    (?,NOW())
  `;
  const values = [
    newTweet.content, 
  ];
  return await query(sql, values);
}

exports.getUser = async (id) => {
  const sql = `
    SELECT
      *
    FROM
      users2
    WHERE
      id = ?
  `;
  const values = [id];
  return await query(sql, values);
}
console.log('---------SERVER IS RUNNING---------')