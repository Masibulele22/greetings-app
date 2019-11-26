// const assert = require('assert');
// const greetBack = require('../greetings-webapp');

// describe("greetBack", function(){

//     it("should be able to return a greeting in English", function(){

//         let object = greetBack();

//         var result = object.greet('Anna', "English");
//         assert.equal('Hello Anna', result);

//     })

//     it("should be able to return a greeting in Xhosa", function(){

//         let object = greetBack();

//         var result = object.greet("Annelize", 'isiXhosa');
//         assert.equal('Molo Annelize', result);

//     })

//     it("should be able to return a greeting in Afrikaans", function(){

//         let object = greetBack();

//         var result = object.greet("Anathi", 'Afrikaans');
//         assert.equal('Goeie Dag Anathi', result);

//     })

//     it("should be able to return a greeting in English for names with mixed cases", function(){

//         let object = greetBack();

//         var result = object.greet('LaTasha', "English");
//         assert.equal('Hello LaTasha', result);

//     })
    
//     it("should be able to return a greeting in IsiXhosa for names with mixed cases", function(){

//         let object = greetBack();

//         var result = object.greet('LaLa', "isiXhosa");
//         assert.equal('Molo LaLa', result);

//     })

//     it("should be able to return a greeting in Afrikaans for names with mixed cases", function(){

//         let object = greetBack();

//         var result = object.greet('LeBron', "Afrikaans");
//         assert.equal('Goeie Dag LeBron', result);

//     })

//     it("should be able to return names with special characters in English", function(){

//         let object = greetBack();

//         var result = object.greet("André", 'English');
//         assert.equal('Hello André', result);

//     })

//     it("should be able to return names with special characters in Afrikaans", function(){

//         let object = greetBack();

//         var result = object.greet("O'Connor", 'Afrikaans');
//         assert.equal("Goeie Dag O'Connor", result);

//     })

//     it("should be able to return names with special characters in IsiXhosa", function(){

//         let object = greetBack();

//         var result = object.greet("Ru-Chai", 'isiXhosa');
//         assert.equal('Molo Ru-Chai', result);

//     })

//     it("should be able to return a name if an alpha-numerical string input is passed", function(){

//         let object = greetBack();

//         var result = object.greet("James Bond 007", 'English');
//         assert.equal('Hello James Bond 007', result);

//     })

//     it("should be able to return 'Please enter your name', if an empty string is passed", function(){

//         let object = greetBack();

//         var result = object.greet("", 'English');
//         assert.equal('Please enter your name', result);

//     })

//     it("should be able to get the name passed in the input", function(){

//         let object = greetBack();

//         object.greet("John");
//         assert.deepEqual(object.getName(), { John: 0 });

//     })

//     it("should be able to get the name passed in the input with special characters", function(){

//         let object = greetBack();

//         object.greet("LaChé");
//         assert.deepEqual(object.getName(), { LaChé: 0 });

//     })

//     it("should be able to get the name passed in the input with spaces", function(){

//         let object = greetBack();

//         object.greet("Joe Soap");
//         assert.deepEqual(object.getName(), { "Joe Soap": 0 });

//     })


//     it("should be able to get the number of greetings passed with different names and languages", function(){

//         let object = greetBack();

//         object.greet("John","Afrikaans");
//         object.greet("Xavier","IsiXhosa");
//         object.greet("Kaino","English");
//         object.greet("Zubyr","Afrikaans");
//         object.greet("Alexander","IsiXhosa");
//         object.greet("Vernon","Afrikaans");
//         object.greet("Ayanda","English");
//         assert.equal(object.counter(),7);

//     })

//     it("should be able to get the number of greetings passed and not count the empty input", function(){

//         let object = greetBack();

//         object.greet("","English");
//         object.greet("Xavier","IsiXhosa");
//         object.greet("Kaino","English");
//         object.greet("Zubyr","Afrikaans");
//         object.greet("Alexander","IsiXhosa");
//         object.greet("Vernon","English");
//         object.greet("Ayanda","Afrikaans");
//         assert.equal(object.counter(),6);

//     })

// });