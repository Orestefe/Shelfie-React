import React, { Component } from "react";

class BookInput extends Component {
	handleSubmit = e => {
		e.preventDefault();
	};

	addBook() {
		let newBook = {
			title: this.refs.title.value,
			author: this.refs.author.value,
			pages: this.refs.pages.value,
			readStatus: this.refs.readStatus.value,
			id: Date.now(),
		};
		this.props.addBook(newBook);
	}

	componentDidMount() {
		this.refs.title.focus();
	}

	render() {
		return (
			<div className="modal">
				<div className="modal-content">
					<span onClick={this.props.toggleInput} className="close">
						&times;
					</span>
					<header className="text-center">
						<h2>Enter Book Information</h2>
					</header>
					<form onSubmit={this.handleSubmit} className="ui form flex-form">
						<div className="field">
							<label>Title</label>
							<input placeholder="Enter the title" type="text" ref="title" />
						</div>
						<div className="field">
							<label>Author</label>
							<input
								placeholder="Enter the author's name"
								type="text"
								ref="author"
							/>
						</div>

						<div className="field">
							<label>Pages</label>
							<input
								placeholder="Enter the number of pages"
								type="number"
								ref="pages"
							/>
						</div>
						<div className="field">
							<label>Reading Status</label>
							<select name="readStatus" ref="readStatus">
								<option defaultValue=""></option>
								<option value="Want to Read">Want to Read</option>
								<option value="Currently Reading">Currently Reading</option>
								<option value="Finished Reading">Finished Reading</option>
							</select>
						</div>

						<div className="field">
							<button
								onClick={this.addBook.bind(this)}
								type="submit"
								className="ui button button-center btn--add">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default BookInput;
