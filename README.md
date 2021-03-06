### wantedFreeOnBoarding
---
원티드 프리온보딩 코스 사전과제입니다. 

## 시작하기
1. 깃 클론하기
2. 루트 폴더에서 `npm install`
3. `npm start`
4. localhost:3000 접속


## 사용된 라이브러리
1. `react-responsive`
     - 반응형 웹을 만들기 위해 사용
     
2. `meterial-UI`
     - 픽토그램을 사용하기 위함
    (오로지 icons만 사용하였습니다.)
    
## 구현 사항

1. **화면 기준**
    - 로그인 전 화면 기준으로 구현하였습니다.

2. **반응형**
    - 모바일용 view가 따로 있고, view 사이즈가 특정 width 이하가 되면 모바일 view로 전환됩니다.
    - 반응형의 기준이 되는 `max-width` 값을 **wanted 공식 홈페이지보다 길게** 설정하였습니다.
    - wanted 공식 홈페이지의 경우, 사이즈를 줄이다보면 모바일뷰로 넘어가기 전에 nav가 깨져버려서 기준 max-width를 위와 같이 길게 설정하였습니다.
3. **클론**
    - 상단 네비게이션 요소들 중 리다이렉트를 하는 UI를 제외한 모든 것을 카피하려 노력했습니다.
    - **검색창** 및 **로그인/회원가입창**도 구현하였습니다.
