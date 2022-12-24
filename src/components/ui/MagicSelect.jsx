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
			<Form onSubmit={handleUpdate} className="mt-1 p-2">
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
				className={[
					styles.option,
					"align-items-stretch border-bottom cursor-pointer p-2",
					isSelected && styles.selected,
				]}
			>
				<button
					className={[
						"d-flex align-items-center m-0 text-capitalize flex-grow-1 fs-6 bg-transparent border-0",
					].join(" ")}
					onClick={() => onSelect(optionInput)}
				>
					{option.split("-").join(" ")}
				</button>

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
			prev.find((item) => item === option.toLowerCase())
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

function MagicSelect({
	options,
	setList,
	selected,
	setSelected,
	disabled = false,
	iconOnRight = false,
}) {
	const [show, setShow] = useState(false);

	const handleSelect = (value) => {
		setSelected(value);

		setShow(false);
	};

	const handleReset = () => {
		setSelected("");
	};

	return (
		<OverlayTrigger
			show={show}
			onToggle={(nextShow) => setShow(nextShow)}
			trigger="click"
			placement="bottom-start"
			flip
			rootClose
			overlay={(props) => (
				<Card className={["shadow", styles["list-card"]]} {...props}>
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
				<Stack direction="horizontal" className="align-items-stretch" ref={ref}>
					<Button
						className={[
							"rounded-0 d-flex align-items-center",
							iconOnRight ? "rounded-end order-2" : "rounded-start",
						]}
						variant="secondary"
						size="sm"
						onClick={handleReset}
						disabled={disabled}
					>
						<FontAwesomeIcon icon={faRefresh} fontSize={13} />
					</Button>

					<Button
						onClick={() => setShow(true)}
						disabled={disabled}
						variant="default"
						className={[
							"d-flex flex-grow-1 align-items-center  p-1 m-0 text-capitalize rounded-0",
							iconOnRight ? "rounded-start" : "rounded-end",
							styles.toggle,
						].join(" ")}
					>
						{selected ? selected : "No Select"}
					</Button>
				</Stack>
			)}
		</OverlayTrigger>
	);
}

export default MagicSelect;
