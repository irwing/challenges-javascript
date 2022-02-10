#!bin/bash

DIR_NAME=$1;
FILE_SCRIPT="${1}/script.js";
FILE_TEST="${1}/test.js";

TEMPLATE_SCRIPT="const ${DIR_NAME} = () => {
    // Write your code here
}

module.exports = ${DIR_NAME};";
TEMPLATE_TEST="const ${DIR_NAME} = require('./script.js');

// Test case 1";

mkdir "$DIR_NAME";
touch "./${FILE_SCRIPT}";
touch "./${FILE_TEST}";
echo "${TEMPLATE_TEST}" >> ./${FILE_TEST}
echo "${TEMPLATE_SCRIPT}" >> ./${FILE_SCRIPT}
