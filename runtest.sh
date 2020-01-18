clear
. ./setenv.sh

WHAT_TO_RUN=$1
#TESTCAFE='testcafe --skip-js-errors chrome:headless '
TESTCAFE='testcafe --skip-js-errors chrome '
THECOMMAND="$TESTCAFE $WHAT_TO_RUN"
echo "I will run "$THECOMMAND;
$THECOMMAND