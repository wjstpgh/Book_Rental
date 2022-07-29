import React, { Component } from 'react';
import axios from 'axios';

export class BooksIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            loading: true
        };

        this.goCreatePage = this.goCreatePage.bind(this); 
        this.editBy = this.editBy.bind(this);
        this.deleteBy = this.deleteBy.bind(this); 
    }

    // 페이지가 로드되었을 때 Web API 호출해서 JSON 데이터 가져오기: OnInitialized() 
    componentDidMount() {
        //this.populateBooksData();
        //this.populateBooksDataWithAxios();
        this.populateBooksDataWithAxiosAsync();
    }

    // 책 리스트 테이블 출력
    renderBooksTable(books) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>대여번호</th>
                        <th>책 제목</th>
                        <th>대여자</th>
                        <th>대여일</th>
                        <th>편집, 삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.created ? new Date(book.created).toLocaleDateString() : "-" }</td>
                            <td className="text-nowrap">
                                <button className="btn btn-sm btn-primary" onClick={() => this.editBy(book.id)}>수정</button>
                                &nbsp;
                                <button className="btn btn-sm btn-danger" onClick={() => this.deleteBy(book.id)}>반납완료</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    goCreatePage() {
        //console.log("Create");
        const { history } = this.props;
        history.push('/Books/Create');
    }

    editBy(id) {
        //console.log("Edit by " + id);
        const { history } = this.props;
        history.push("/Books/Edit/" + id);
    }

    deleteBy(id) {
        //console.log("Delete by " + id);
        const { history } = this.props;
        history.push("/Books/Delete/" + id);
    }

    render() {
        let contents = this.state.loading
            ? <p><em>로딩 중...</em></p>
            : this.renderBooksTable(this.state.books);

        return (
            <div>
                <h1>책 대여 리스트  <button onClick={this.goCreatePage} className="btn btn-primary">+</button></h1>
                {contents}
            </div>
        );
    }

    //[!] Web API 호출하는 3가지 모양 
    //[1] Fetch API 
    async populateBooksData() {
        const response = await fetch('/api/Books');
        const data = await response.json();
        this.setState({ books: data, loading: false });
    }

    //[2] Axios + Async
    populateBooksDataWithAxios() {
        axios.get("/api/Books").then(response => {
            const data = response.data;
            this.setState({ books: data, loading: false });
        });
    }

    //[3] Axios + Async
    async populateBooksDataWithAxiosAsync() {
        const response = await axios.get("/api/Books");
        const data = response.data;
        this.setState({ books: data, loading: false });
    }
}
