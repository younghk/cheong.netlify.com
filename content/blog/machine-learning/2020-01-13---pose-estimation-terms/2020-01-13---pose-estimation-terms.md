---
title: "Pose Estimation 관련 용어 정리"
date: 2020-01-13 11:00:03
path:       "/machine-learning/2020-01-13---pose-estimation-terms/2020-01-13---pose-estimation-terms/"
category: Machine Learning
tags: 
    - Machine Learning
    - Pose Estimation
    - Terms
description: "Pose Estimation 논문 및 자료들을 학습하고 자주 나오는 용어들을 간단히 정리한 포스트입니다."
---

Pose Estimation 관련하여 자주 나오는 용어들에 대해 간략히 정리하고 틈틈히 상기할 수 있도록 해보자.

## Model

__Hourglass Network__  

- 모래시계 모양을 가진 구조의 network
- pose estimation 에 있어서 backbone network 중 하나를 이룬다.

__Bottom-up approach__  

- = Part-based approach

__Top-down approach__  

- = Two-step approach

## Performance

__MOTA__ : Multi-Object Tracking Accuracy

__mAP__ : mean Average Precision

__FLOPS__ : FLoating point Operations Per Second  
    초당 부동소수점 연산이라는 의미로 1초동안 수행할 수 있는 부동소수점 연산의 횟수를 기준으로 한다.  
    이는 컴퓨터 하드웨어 관점에서의 Computing power 를 나타내는데 주로 쓰이게 되는데, machine learning 에서 하드웨어의 효율을 계산하기 위에서 종종 사용된다.  
    이 때, GFLOPS(Giga) = BFLOPS(Billions) 를 많이 쓴다.

## Metric

__PCK__ : Detected-joint is considered correct if the distance between the predicted and the true joint is within a certain threshold.  
즉, 특정 threshold 보다 detected-true 간의 차이가 작다면 correct 로 간주하는 평가 지표이다.  
기본적으로 PCK @ 0.2 는 threshold 가 0.2 * torso diameter 로써, 여기서 torso 는 사람의 몸통(팔다리를 제외한 몸 부분)이다.

__PCKh @ 0.5__ : threshold = 50% of the head segment length(head bone link)  
threshold 로써 몸통이 아닌 머리 부분의 길이를 사용한 변형 평가 지표이다.  
보통 PCKh @ 0.5 를 많이 사용하는 추세로 보인다.  

## ETC
