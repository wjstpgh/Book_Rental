# Book_Rental

ASP.NET Core와 React를 사용하여 책 대여 현황을 DataBase에 저장하고 Web Page상에서 CRUD를 실행하여 편집하여 현황을 관리하는 프로젝트

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



***

### CURD 기능 테스트 클래스 - BookApp.Shared.Tests

* BookRepository.cs의 메서드 기능 테스트 결과

![image](https://user-images.githubusercontent.com/26988563/181309697-bc2ebf4c-b0d7-49b6-b46f-5db5c581be25.png)

* 데이터 추가 함수인 AddAsync()의 기능 테스트 코드

![image](https://user-images.githubusercontent.com/26988563/181310453-8189faae-e0b1-49c1-9043-36114753df3f.png)

0 : 개체 생성 코드, 1~5 : BookRepository.cs의 6번, 필터링 메서드이외의 5개 기능 테스트 코드



