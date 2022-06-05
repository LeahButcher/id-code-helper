To try the ID Code Helper, go to https://leahbutcher.github.io/id-code-helper/

## ID Code Helper

A simple React, JS, CSS, and HTML project, ID Code Helper was made to simplify the process of creating ID numbers with JavaScript. Featuring a step-by-step walkthrough for designing an ID code template, it guides users toward creating a number system that can fit their needs. 

Once a user has designated the format they want their ID codes to be in, the app instantly crafts a JavaScript function with which can be used to generate ID codes with whatever data the user passes to it. The app also provides the total potential unique IDs that can be generated with the template that the user chose.

Below are the pieces of the template and their explanations, with an inventory management system being the use-case for examples.

### Primary Characters

Primary characters are the first placeholders in the ID template. It is best to choose alphabetical characters to start ID codes, as it prevents formatting issues with proceeding zeroes when entered into a spreadsheet, enables the use of alphabetical categories for different sets of numbers, and provides 26 potential characters per space vs 10 for numbers.

You can think of primary characters as the "category" for your ID codes. For example, this could be "Electronics" - feeding that word into the function after selecting 1 primary character in the app would return the result of "E" to start your ID code off.

### Secondary Characters

Secondary characters work similar to primary characters, with the addition of being able to be numerical, increasing the potential characters per space to 36. 

You can think of secondary characters as the "subcategory" for your ID codes. Following the previous example of "Electronics" for the primary category, the subcategory could be "Computers" - feeding that word into the function after selecting 4 secondary characters in the app would return the result of "COMP". Having that under the Electronics category in the previous example would show "ECOMP" at the start of your ID code.

### Digits

Digits enable you to quantify the number of records per category (or subcategory, if used). Unused digits will have placeholder zeroes.

If you select 5 digits, and an item is the 57th item in a category or subcategory, the digits in the ID code would appear as "00057". Following the previous example, the 57th record of a laptop in your inventory of electronics would be "ECOMP00057".

### Optional Characters

Optional characters can be appended on the end of your ID code. These characters are great for inventory items that may come with alternate colors or configurations, while other items may only have one color or configuration.

Following the previous example, if you selected 1 optional character, and the 57th computer in your electronics inventory came in grey and white, you could feed in those words to the 
"optional" parameter to get ECOMP00057G and ECOMP00057W. 

This ABBBB#####C ID format in the example above has a total of 4367001599999 possible unique IDs, and up to 157212057599964 possible unique ID if optional characters, though that is only if every possible character combination was used.