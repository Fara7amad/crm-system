import { faEdit, faRefresh, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
	Button,
	ButtonGroup,
	Card,
	Form,
	OverlayTrigger,
	Stack,
	InputGroup,
} from "react-bootstrap";

import styles from "./MagicSelect.module.css";

const ListOption = ({ option, setList, onSelect, selected }) => {
	const [editView, setEditView] = useState(false);
	const [optionInput, setOptionInput] = useState(option);

	const handleDelete = () => {
		if (selected == optionInput) return;

		setList((prev) => prev.filter((item) => item != option));
	};
	const handleUpdate = (e) => {
		e.preventDefault();

		if (!!optionInput) {
			// update it if is not already existed
			setList((prev) => {
				if (prev.find((item) => item == optionInput)) return prev;

				if (selected == option) {
					onSelect(optionInput);
				}

				return prev.map((item) => (item == option ? optionInput : item));
			});
		} else {
			// reset it back to original
			setOptionInput(option);
		}

		setEditView(false);
	};

	let content;
	if (editView) {
		content = (
			<Form onSubmit={handleUpdate} className="mt-1">
				<InputGroup>
					<Form.Control
						value={optionInput}
						onChange={(e) => setOptionInput(e.target.value)}
						className="rounded-0"
						autoFocus={editView}
					/>
					<Button type="submit" size="sm" variant="outline-primary">
						Save
					</Button>
				</InputGroup>
			</Form>
		);
	} else {
		const isSelected = selected === option;

		content = (
			<Stack
				direction="horizontal"
				className={`justify-content-between align-items-center border-bottom cursor-pointer p-2 ${
					styles["option"]
				} ${isSelected && styles.selected}`}
			>
				<h5
					className={`m-0 text-capitalize flex-grow-1 fs-6`}
					onClick={() => onSelect(optionInput)}
				>
					{option}
				</h5>

				{option != "none" && (
					<Stack direction="horizontal">
						<ButtonGroup>
							<Button size="sm" variant="outline-danger" onClick={handleDelete}>
								<FontAwesomeIcon icon={faTrash} />
							</Button>
							<Button
								size="sm"
								variant="outline-info"
								onClick={(_) => setEditView(true)}
							>
								<FontAwesomeIcon icon={faEdit} />
							</Button>
						</ButtonGroup>
					</Stack>
				)}
			</Stack>
		);
	}

	return content;
};

const AddOptionForm = ({ setList }) => {
	const [option, setOption] = useState("");

	const handleAdd = (e) => {
		e.preventDefault();

		setList((prev) =>
			prev.find((item) => item == option.toLowerCase())
				? prev
				: [...prev, option.toLowerCase()]
		);

		setOption("");
	};

	return (
		<Form onSubmit={handleAdd} className="">
			<InputGroup>
				<Form.Control
					value={option}
					onChange={(e) => setOption(e.target.value)}
					placeholder="New Option..."
					className="rounded-0"
				/>
				<Button
					type="submit"
					size="sm"
					variant="outline-primary"
					disabled={!!!option}
				>
					Add
				</Button>
			</InputGroup>
		</Form>
	);
};

function MagicSelect({ options, setList, selected, setSelected }) {
	const [show, setShow] = useState(false);

	const handleSelect = (value) => {
		setSelected(value);

		setShow(false);
	};

	const handleReset = () => {
		setSelected(initial);
	};

	return (
		<>
			<OverlayTrigger
				show={show}
				onToggle={(nextShow) => setShow(nextShow)}
				trigger="click"
				placement="bottom-start"
				rootClose
				overlay={(props) => (
					<Card className="shadow select-menu-card" {...props}>
						{options.map((option) => (
							<ListOption
								key={option}
								option={option}
								setList={setList}
								onSelect={handleSelect}
								selected={selected}
							/>
						))}
						<Card.Body className="">
							<AddOptionForm setList={setList} />
						</Card.Body>
					</Card>
				)}
			>
				{({ ref }) => (
					<InputGroup ref={ref}>
						<div
							className={`flex-grow-1 border p-1 cursor-pointer text-capitalize ${styles["option-label"]}`}
							onClick={() => setShow(true)}
						>
							{selected ? selected : "No Select"}
						</div>

						<Button variant="outline-primary" size="sm" onClick={handleReset}>
							<FontAwesomeIcon icon={faRefresh} />
						</Button>
					</InputGroup>
				)}
			</OverlayTrigger>
		</>
	);
}

export default MagicSelect;

{
	/* <FormSelect
	value={selected}
	onChange={handleSelect}
	className="text-capitalize"
>
	<option value="">Select an option</option>
	{options.map((option) => (
		<option key={option} value={option}>
			{option}
		</option>
	))}
</FormSelect>; */
}
