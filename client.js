var net = require('net');

var req = 'GET /index.html HTTP/1.1 +\r\n\
Host: localhost:3000\r\n\
Connection: keep-alive\r\n\
Cache-Control: max-age=0\r\n\
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\r\n\
Upgrade-Insecure-Requests: 1\r\n\
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36\r\n\
Accept-Encoding: gzip, deflate, sdch\r\n\
Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4\r\n\
Cookie: _cb_ls=1; _chartbeat2=D11i60DTCxOorF6Hm.1445534681328.1445790489334.1001; _s2yd_session=UkhrWDRETTNpRFpkMjVTU3BvL3AwRXVRVkNQT0pjRmNLOXpwMEdXOVJCTnlQWCtHZmVTTXZMUUU0MXFxNitPN0dKMUpCczAxd0dRblptVkhQUVBJOHhCVFEwY1BoSHk5Wm5qMEFyMnpLd0hDaTRzRmdEU2RhcFB0TmNNZ1o1QlRQc1ZhT3B0WWJ0V2lRQzdCeitjd1oxcnRDZGdoY1ZWc0ZuZzNIYkNzVU0zajF0ZVVqZVRWSGFPMnNZdUF3RTFtb0R6cUxsM09ISDZnZG0xSnYvVnovR0JvaC8vZDhKVGk0T1ZhRXoxU2FDZXZNK1pnVE9oekJ3d1QvSzg0QWtDSXVUdlFrcU12eGJMTTRGTnBiNVdZc2pLSFoyOFp5d2YxNW9TcDJqRXkrRjA9LS1adHA0RW9nVU0vclF0WlZ2V3Vxb3dBPT0%3D--04244f78c7a7ac76f76f7f12004a379873284e10\r\n\
';

var client = net.connect( {port: 3000}, function() { //'connect' listener
      console.log('connected to server!');
      client.write(req);
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('disconnected from server');
});
