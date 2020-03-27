---
title: Docker Overview
datetime: 2020-03-27 10:21:07
category: docker
description: "Docker 가 무엇인지 간단하게 정리하고, 사용법 위주로 정리"
tags:
  - Docker
  - Container
---

## Docker 란

도커(Docker)는 컨테이너(container)를 이용해 가상화를 하는 것이다.  
OS 가상화는 많이 들어보았을 텐데, 이와 차이를 보이는 점은 바로 소프트웨어적으로 가상화를 진행한다는 것이다.  

Docker의 특징으로는 완벽하게 세팅된 환경을 이미지화할 수 있고, 이 이미지는 속도도 빠를 뿐 아니라 Docker 위에서 완벽하게 돌아가는 것을 보장한다.  

Docker 에 대한 자세한 설명은 따로 추후에 정리해보자!

## 명령어

Docker image 빌드하기  

```sh
docker build --tag [태그 이름] [Dockerfile 위치]
```

생성된 Docker image 를 확인

```sh
docker images
```

생성된 이미지로 컨테이너 만들기  


```sh
docker crwate --name [컨테이너 이름] -p [외부 포트:컨테이너 내부포트] [이미지명:버전태그]
```

생성된 컨테이너(container) 확인하기

```sh
docker ps # 현재 실행 중(STATUS:Up)인 컨테이너의 목록을 보여준다.
docker ps -a # 실행하지 않는 모든 컨테이너를 보여준다.
```  

컨테이너 실행하기

```sh
docker start [컨테이너 이름]
```  

컨테이너 삭제  

```sh
docker rm -f [컨테이너 이름] # -f 옵션은 실행 중인 컨테이너도 강제로 삭제한다.
```  

