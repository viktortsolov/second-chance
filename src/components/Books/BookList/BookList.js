import { Component } from 'react';

import Book from './Book/Book';

import './BookList.css';
class BookList extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        if (this.props.books.length > 0) {
            this.loader = false;
        } else {
            this.loader = true;
        }
    }

    render() {
        return (
            <div className="BookList" >

                {this.props.books.length !== 0
                    ?
                    <ul className='BookList-list'>
                        {this.props.books.map(book => {
                            return <Book key={book.id} book={book} />
                        })}
                    </ul>
                    :
                    <article className="Books-NoBooksMessage fade-in"><h2 className="Books-NoBooksMessage">No Books to show.. <i className="far fa-frown"></i></h2></article>
                }
            </div>
        )
    }
}

export default BookList;