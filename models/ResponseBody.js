class ResponseBody {
  constructor(success, data){
    this.success = success ? true : false
    this.data = data ? data : []
  }
}

module.exports = ResponseBody