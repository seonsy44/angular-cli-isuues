# angular-cli-isuues
원티드 프리온보딩 과제: angluar-cli의 이슈 목록과 상세 내용을 확인하는 웹 사이트<br/>
[📎 배포링크 바로가기](https://angular-cli-isuues.vercel.app/)

<br/>

# 데모
- 두 페이지는 공통 헤더를 공유합니다.
- 헤더에는 Organization Name / Repository Name이 표시됩니다.
<details>
<summary>이슈 리스트</summary>
<img src="https://user-images.githubusercontent.com/76088728/205845006-333e4f16-0812-439c-b2eb-0405decbea60.gif" />
    - 이슈 목록 가져오기 API 활용<br/>
    - open 상태의 이슈 중 코멘트가 많은 순으로 정렬<br/>
    - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시<br/>
    - 다섯번째 셀에는 광고 이미지 출력<br/>
    - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)<br/>
</details>

<details>
<summary>이슈 상세</summary>
<img src="https://user-images.githubusercontent.com/76088728/205845045-d37a7d0a-f283-4fef-96a6-03a03b414025.gif" />
    - 이슈의 상세 내용 표시<br/>
    - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시<br/>
</details>

<details>
<summary>404 페이지</summary>
<img src="https://user-images.githubusercontent.com/76088728/205846146-131805be-cab7-448f-9116-80a8446a2dae.gif" />
</details>

<br/>

# 실행 방법
### 1. repository clone
```
$ git clone https://github.com/seonsy44/angular-cli-isuues.git
```

### 2. `.env.local` 파일 생성
```
REACT_APP_BASE_URL = "https://api.github.com/repos/angular/angular-cli/"
REACT_APP_GITHUB_TOKEN = 깃허브 토큰
```

### 3. 의존성 설치 및 실행
```
npm install
npm start
```

<br/>

# 기술스택
- React
- Styled-Components
- Axios

<br/>

# 폴더구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜LoadingSpinner.jsx
 ┃ ┗ 📜Markdown.jsx
 ┣ 📂contexts
 ┃ ┗ 📜issuesContext.js
 ┣ 📂hooks
 ┃ ┣ 📜useAxios.js
 ┃ ┗ 📜useInfiniteScroll.js
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂IssueDetail
 ┃ ┃ ┣ 📜IssueDetailHeader.jsx
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂Issues
 ┃ ┃ ┣ 📜Issue.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.js
 ┃ ┣ 📜mixin.js
 ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┣ 📜api.js
 ┃ ┗ 📜parseDate.js
 ┣ 📜App.jsx
 ┗ 📜index.jsx
 ```
