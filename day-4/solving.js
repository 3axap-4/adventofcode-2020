var src = source();
var reuiredFieds = [
    { key: 'byr', validator: byrValidator },
    { key: 'iyr', validator: iyrValidator },
    { key: 'eyr', validator: eyrValidator },
    { key: 'hgt', validator: hgtValidator },
    { key: 'hcl', validator: hclValidator },
    { key: 'ecl', validator: eclValidator },
    { key: 'pid', validator: pidValidator },
];

var documents = src.split(/\n/);
var validDocs = 0;
var docSet = [];

for(var i=0; i< documents.length; i++) {

    var doc = documents[i];
    docSet.push(doc);
    if((doc === "" && docSet.length > 0) || i === documents.length-1) {
        
        var fields = docSet.join(" ").split(" ");
        var checkRes = reuiredFieds.every( reqF => {
            var reqField = fields.find(f=>f.includes(reqF.key));
            if(!reqField) {
                return false;
            }

            var keyVal = reqField.split(":");
            return reqF.validator(keyVal[1]);
            
        });

        if(checkRes) {
            validDocs ++;
        }
        
        docSet = [];
    }
    
}

console.log(validDocs)

function byrValidator(value) {
    return value >= 1920 && value <= 2002;
}

function iyrValidator(value) {
    return value >= 2010 && value <= 2020;
}

function eyrValidator(value) {
    return value >= 2020 && value <= 2030;
}

function hgtValidator(value) {
    var arr = value.split(/(cm|in)$/);
    if(arr[1] === 'cm') {
        return arr[0] >= 150 && arr[0]  <= 193;
    } else if (arr[1] === 'in') {
        return arr[0]  >= 59 && arr[0]  <= 76;
    } 
    return false;
}

function hclValidator(value) {
    return (/^#([a-f0-9]{6})$/).test(value);
}

function eclValidator(value) {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        .includes(value);
}

function pidValidator(value) {
    return (/^[0-9]{9}$/).test(value);
}
