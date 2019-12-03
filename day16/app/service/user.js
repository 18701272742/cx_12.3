'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async log(name) {
    return  await this.app.mysql.get('lists', { name: name });
  }
  async finds(){
    let sql = `select * from lie`;
    let res =await this.app.mysql.query(sql);
    console.log(res)
    return res
  }
    async sousuo(sou){
      let sql = `select * from lie where lie_name like '%${sou}%'`;
      const row = await this.app.mysql.query(sql);
      return row;
  }
  
}

module.exports = UserService;
