module.exports = function greetBack(nameList) {

    console.log(nameList + "This list")
    var names = nameList || {};
    var userCount = 0;

    function greet(name, language) {
        var capsNames = name.toUpperCase().charAt(0) + name.slice(1);

        userCount++;

        if(names[capsNames] === undefined){
            names[capsNames] = 0;
        }

        if (language === "isiXhosa") {
            return "Molo " + capsNames;
        }

        else if (language === "English") {
            return "Hello " + capsNames;
        }

        else if (language === "Afrikaans") {
            return "Goeie Dag " + capsNames;
        }

    }

    function getName() {
        return names
    }
    
    function counter() {
        return userCount
    }

    return {

        getName,
        greet,
        counter
    }

};


