#!/usr/local/bin/bash
# runit.sh
clear
if [ -z "$1" ]
then
 echo "Simple utility to run a test cafe js file searching it ";
 echo "under ./test folder, with recursion"
 echo "" 
 echo "Usage $0 CFG_JSON META file.js or some unique name piece"
 echo "the unix/linux find utility is used"
 echo "$0 --cfg=at-7.0.json --test-meta WKFSTATUS=ready,7.0=yes PPT-745"
 exit
fi


# when running in a windows machine
# the CRLF differences create weird effects
# I HATE WINDOWS!!!
#
# Details 
# https://stackoverflow.com/questions/46448604/bash-string-concatenation-producing-weird-results
#
# Solution
# https://unix.stackexchange.com/questions/326120/way-to-remove-newline-m-from-variables-only-not-from-file
# VAR1=${1//$'\015'}
# echo "$VAR1---"

# --------------------------------------------
# Testcafe related config 
CFG_JSON=$1
META=$2

# user feedback
echo $1
echo $2

# We will use .testcaferc.json
TCAFE_OPT=""
# --------------------------------------------

# work on filename
TARGET=${3//$'\015'}
REGEX="*.js"
SEARCH="$TARGET$REGEX"

#
WHAT_TO_RUN=$(find ./tests -type f -name "$SEARCH")
if [ -z "$WHAT_TO_RUN" ] 
  then
  echo $0" > no test script that matches "$TARGET" was found - aborting"
  exit 9
fi 
echo "I will run";

# Enable display of commands run in the script
set -x
testcafe 'chrome --start-fullscreen' $TCAFE_OPT $META  $CFG_JSON $WHAT_TO_RUN
