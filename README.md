# Book_Rental

ASP.NET Core와 React를 사용하여 책 대여 현황을 DataBase에 저장하고 Web Page상에서 CRUD를 실행하여 편집하여 현황을 관리하는 프로젝트
프로젝트는 Visual Studio 환경에서 실행했습니다.

### 기능 소개

![a](https://user-images.githubusercontent.com/26988563/181515708-ddc233e4-bf53-4f57-9e1f-a66b1ed31c00.png)

메뉴바의 Rental List 탭으로 이동

* 책 대여시 리스트 추가 기능

![add1](https://user-images.githubusercontent.com/26988563/181515949-4a478e83-695f-442c-a1ad-b358d84be961.png)

![add2](https://user-images.githubusercontent.com/26988563/181515966-44dcf625-bdb3-4ba0-826f-6bb5023adc62.png)

![add3](https://user-images.githubusercontent.com/26988563/181515986-d552f387-4168-4649-850b-6b26118c909a.png)

* 책 반납시 리스트 삭제 기능

![del1](https://user-images.githubusercontent.com/26988563/181516085-45cc3a9b-7ece-46a2-a8d2-561dcd108d63.png)

![del2](https://user-images.githubusercontent.com/26988563/181516102-b7aadf9a-60d5-4d92-a016-1ea590ff7b9b.png)

![del3](https://user-images.githubusercontent.com/26988563/181516135-2e7c0dd8-d68c-4683-8888-523aef21e714.png)

* 리스트 내용 수정 기능

![modi1](https://user-images.githubusercontent.com/26988563/181516196-0ec2c0ea-00ef-4a80-8890-d27ed334edd3.png)

![modi2](https://user-images.githubusercontent.com/26988563/181516205-1276d3fa-5651-4bef-a6c6-a12a998402cf.png)

![modi3](https://user-images.githubusercontent.com/26988563/181516217-74e94ebd-94cf-4cbe-b9cf-3cbf1ad22cb9.png)

위의 기능들을 이용해 대여 리스트를 편집하여 DB에 저장하여 관리합니다.

***

### 전체 프로젝트 소개

> BookApp.Apis : DB에 저장된 데이터를 JSON 데이터로 전달

> BookApp.React : API서버에서 전달받은 JSON 데이터를 웹 페이지에 나타내며 CRUD 이벤트를 실행하여 DB데이터 조작

> BookApp.Shared : CRUD 기능을 위한 공통 클래스

> BookApp.Shared.Tests : Shared 기능의 테스트를 위한 클래스

> BookApp.SqlServer : DataBase 서버

* 프로젝트 시작 순서

![image](https://user-images.githubusercontent.com/26988563/181303957-128151c6-09d4-494c-97ed-9c5275113160.png)

API실행 후 React서버 실행

***

### DataBase - BookApp.SqlServer

* Books.sql(테이블 생성), xml(db 게시)

![image](https://user-images.githubusercontent.com/26988563/181302457-77b88840-0c59-4806-a2d2-0c9ad6e777f6.png)

* 게시된 테이블 sql탐색기에서 확인

![image](https://user-images.githubusercontent.com/26988563/181303075-28faeae7-6044-46b4-9141-b1e3bc44069b.png)

* API, React서버에서 DB server 연결

![image](https://user-images.githubusercontent.com/26988563/181303495-791317c1-efeb-42d3-9a88-924bcde5ee85.png)

***

### CRUD 기능 구현 및 공통 클래스 - BookApp.Shared

* 대여 리스트 모델 - Book.cs

![image](https://user-images.githubusercontent.com/26988563/181307444-1c7944dd-3fd8-48a4-96a2-ab6841e0ce05.png)

* DB 연결문자 관련 클래스 - BookAppDbContext.cs

![image](https://user-images.githubusercontent.com/26988563/181308866-ff50ce42-8f5f-4d88-a963-bbbf8699c264.png)

* CRUD 기능 구현 클래스 - BookRepository.cs

![image](https://user-images.githubusercontent.com/26988563/181308996-e127be97-c5c8-46e8-8471-afa2e8aa38d5.png)

+ 아래 i+... 의 두개의 클래스는 인터페이스 클래스

***

### API 서버 - BookApp.Apis

* 서버가 열릴때의 포트번호와 Default Route경로 설정

![image](https://user-images.githubusercontent.com/26988563/181311480-454326a6-6db9-46af-8c6c-fae9c0934972.png)

* 테스트를 위한 더미 데이터 입력

![image](https://user-images.githubusercontent.com/26988563/181312466-dc47c88f-d365-4eb4-88e3-956ea3e66291.png)

* API 서버 라우팅 경로 '/api/Books'의 JSON 데이터 확인

![image](https://user-images.githubusercontent.com/26988563/181312780-6ba79e3e-16f3-4734-8a69-db1a46248110.png)

* React 서버에서 호출하는 메서드에 따라 DB데이터 조작하는 부분 - BooksController.cs

![image](https://user-images.githubusercontent.com/26988563/181504628-35f240cc-b851-4eff-b9d2-23035bccf1bb.png)

* API 서버를 열어주는 부분 - Startup.cs

![image](https://user-images.githubusercontent.com/26988563/181505063-dee9b8aa-0c3a-482f-bb57-bc441b7a210b.png)

* API서버 메인부로 startup을 실행 - Program.cs

![image](https://user-images.githubusercontent.com/26988563/181505353-75cdcc85-1f00-4a6f-9aa3-dae14de2fe2b.png)

***

### 클라이언트 서버 - BookApp.React

* 대여 리스트를 출력하고 다른 기능들을 버튼에 이벤트 등록하여 호출하는 페이지 - BooksIndex.jsx

![image](https://user-images.githubusercontent.com/26988563/181516586-54f8b8fa-d88f-4d15-814d-9121a981578f.png)

* 대여 리스트 수정 페이지 - BooksEdit.jsx

![image](https://user-images.githubusercontent.com/26988563/181516951-79dad347-f486-45b5-824e-475b5acd74fc.png)

* 대여 리스트 삭제 페이지 - BooksDelete.jsx

![image](https://user-images.githubusercontent.com/26988563/181517210-fd73cc69-d2a3-4030-ae84-6b8fac0ea21b.png)

* 대여 리스트 생성 페이지 - BooksCreate.jsx

![image](https://user-images.githubusercontent.com/26988563/181517327-5756b271-4b9d-4398-a1b6-fa8d13cc13e7.png)

***

### CURD 기능 테스트 클래스 - BookApp.Shared.Tests

* BookRepository.cs의 메서드 기능 테스트 결과

![image](https://user-images.githubusercontent.com/26988563/181309697-bc2ebf4c-b0d7-49b6-b46f-5db5c581be25.png)

* 데이터 추가 함수인 AddAsync()의 기능 테스트 코드

![image](https://user-images.githubusercontent.com/26988563/181310453-8189faae-e0b1-49c1-9043-36114753df3f.png)

0 : 개체 생성 코드, 1~5 : BookRepository.cs의 6번, 필터링 메서드이외의 5개 기능 테스트 코드


