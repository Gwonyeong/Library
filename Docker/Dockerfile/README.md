- docker create 이미지 이름
- docker start 컨테이너 아이디/이름
- docker run = docker create + docker start 이렇게 보면된다.
- docker stop = 실행되고 있는 프로세스까지 진행하고 종료
- docker kill = 즉시 종료
- docker rm 아이디/이름 = 컨테이너 삭제
- docker rm 'docker ps -a -q' = 모든 컨테이너를 삭제
- docker rmi 이미지id = 이미지 삭제
- docker system prune

=> 한번에 사용하지 않는 컨테이너,이미지,네트워크 모두 삭제하고 싶을때/ 도커를 쓰지 않을때 모두 정리하고 싶을 경우나 실행중인 컨테이너에는 영향을 미치지 않음

```
docker ps
- 컨테이너의 상태 확인하기
- CONTAINER_ID: container의 고유 ID
- IMAGE: container를 띄우는데 사용한 image 이름
- COMMAND: container에서 실행한 command
- CREATED: conatiner가 생성된 시간
- STATUS: container의 상태
- PORT: port를 publish 하는 경우 어떻게 되어 있는지
- NAMES: container의 이름
```

option 정리

- d detached mode(백그라운드 모드)
- p 호스트와 컨테이너의 포트연결
- v 호스트와 컨테이너의 디렉토리연결
- e 컨테이너 내에서 사용할 환경변수 설정
  <br>
- --name 컨테이너 이름 설정
- --rm 프로세스 종료 시 컨테이너 자동 제거
- -it -i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션
