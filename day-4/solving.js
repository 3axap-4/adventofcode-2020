var src = source();
var reuiredFieds = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
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
            var reqField = fields.find(f=>f.includes(reqF));
            if(!reqField) {
                return false;
            }

            var keyVal = reqField.split(":");
            return keyVal[1] !== "";
        });



        if(checkRes) {
            validDocs ++;
        }
        
        docSet = [];
    }
    
}

console.log(validDocs)
