#!/usr/local/bin/bash
# runit.chrome.localhost.sh
clear
if [ -z "$1" ]
then
 echo "Simple utility to run a test cafe js file searching it ";
 echo "under ./test folder, with recursion"
 echo "" 
 echo "Usage $0 file.js or some unique name piece"
 echo "the unix/linux find utility is used"
 echo "$0 XXX-745"
 exit
fi

# Testcafe
CFG_JSON="--cfg=localhost.json"
#META='--test-meta WKFSTATUS=ready,7.0=yes'
META=''

# -----------------------------------------

# ----------------------------------------------------
# Get my path to understand how to launch the utility
WHERE_IAM="$(dirname $0)"
$WHERE_IAM/runit.sh $CFG_JSON "$META" $1