import Validator from "../Validator";

describe('Проверка имени пользователя', () => { 
  test('Проверка. допустимы только латинские буквы ', () => {
    let validator = new Validator('polzovatel');
    let result = validator.validateUsername();
    expect(result).toBe(true);
  });

  test('Логин не должен начинаться с цифры', () => {
    let validator = new Validator('95polzovatel');
    let result = validator.validateUsername();
    expect(result).toBe(false);
  });

  test('Логин должен не оканчиваться цифрами', () => {
    let validator = new Validator('polzovatel567');
    let result = validator.validateUsername();
    expect(result).toBe(false);
  });

  test('Могут встречаться трехзначне числа', () => {
    let validator = new Validator('polzo576at457el');
    let result = validator.validateUsername();
    expect(result).toBe(true);
  });

  test('С числами более 4 знаков запрещено', () => {
    let validator = new Validator('polzo5765at457978el');
    let result = validator.validateUsername();
    expect(result).toBe(false);
  });

  test('Могут встречаться символы - и _', () => {
    let validator = new Validator('polz-o5-765_at4-_579el');
    let result = validator.validateUsername();
    expect(result).toBe(true);
  });

  test('Другие символы запрещены кроме - и _', () => {
    let validator = new Validator('polz-o5-=+765_at4-_579el');
    let result = validator.validateUsername();
    expect(result).toBe(false);
  });

  test('Логин не может начинаться с символа -', () => {
    let validator = new Validator('-polz-o5-=+765_at4-_579el');
    let result = validator.validateUsername();
    expect(result).toBe(false);
  });

  test('Логин не может окначиаться с символом _', () => {
    let validator = new Validator('polz-o5-=+765_at4-_579el_');
    let result = validator.validateUsername();
    expect(result).toBe(false);
  });


});
