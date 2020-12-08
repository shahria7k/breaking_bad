// eslint-disable-next-line no-unused-vars
import { useState } from "react";

const Search = ({ getQuery }) => {
	const [text, setText] = useState("");
	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};
	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search Character"
					value={text}
					onChange={(e) => onChange(e.currentTarget.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
