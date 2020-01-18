# testlink-testcafe
end to end testing (experiments) using testcafe (https://devexpress.github.io/testcafe/)

## Testcafe installation
You need node.js

This is the way I normally use testcafe:
* install testcafe GLOBALLY: npm -g install testcafe
* install testcage LOCALLY: npm install testcafe

Now you are ready to run the tests.

## Test case - Fresh installation
Test configuration is setted using ENVironment variables.
TL_URL: URL to the testlink installation
TL_DBNAME: database name
TL_DBADMIN: DBMD user with administrator rights
TL_DBADMINPWD: the DBMD user password

the setens.sh scripts can be used to set these values in a Linux/OSX in this way:
. ./setenv

then you can run the fresh install test:
./runtest.sh ./test/fresh-install.js

