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

