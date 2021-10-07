export const TaskItem = ({isChecked, taskName}) => {
	return (
		<li>
			<input type="checkbox" />
			<span>{taskName}</span>
		</li>
	);
};
