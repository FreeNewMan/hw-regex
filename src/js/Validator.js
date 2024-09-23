export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const regex = /^[a-z]+([a-z\-_](\d{0,3}))+[a-z]$/gim;
    console.log(this.name);
    let arr = (this.name).match(regex); 
    let result = arr ? true : false;
    return result;
  }

}
