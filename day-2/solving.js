import { source } from "./2.js"

var passwordsWithPolitics = source.split(/\r?\n/);
var validPasswords = 0;
for(var item of passwordsWithPolitics) {
	var splited = item.split(":");
	var policyLetter = splited[0].split(" ")[1];
	var policyRule = splited[0].split(" ")[0];
	var min = policyRule.split("-")[0];
	var max = policyRule.split("-")[1];
	
	var password = splited[1]?.trim();

	var first = password[min-1];
	var second = password[max-1];
	if ( first !== second && (first === policyLetter || second === policyLetter ) ) { 
		validPasswords++;
	}

}

console.log(validPasswords)
