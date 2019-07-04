kill -9 `cat pid.txt`
rm pid.txt

nohup node server.js > server.log 2>&1 &
echo $! > pid.txt
