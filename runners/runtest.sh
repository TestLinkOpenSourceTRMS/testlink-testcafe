clear
export TL_URL=http://localhost/development/qa/testlink-code-testlink_1_9/
export TL_DBNAME=cuca
export TL_DBADMIN=your-dbmd-admin-user
export TL_DBADMIN_PWD=TL_DBADMIN-password

WHAT_TO_RUN=$1
#TESTCAFE='testcafe --skip-js-errors chrome:headless '
TESTCAFE='testcafe --skip-js-errors chrome '
THECOMMAND="$TESTCAFE $WHAT_TO_RUN"
echo "I will run "$THECOMMAND;
$THECOMMAND