const db = require('./dbConfig.js')

module.exports = {
    get,
    insert,

};


    function get() {
    return db('games');
  }



  async function insert(hob) {
    const [id] = await db('games').insert(hob);
    return db('games')
    .where({ id })
    .first()
  }


