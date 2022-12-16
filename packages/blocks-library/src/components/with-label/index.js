/**
 * Custom Dependencies
 */
import PropTypes from 'prop-types';

function WithLabel( props ) {
	if ( ! props.showLabel ) {
		return props.children;
	}

	return (
		<label>
			{ props.label }
			{ props.children }
		</label>
	);
}

WithLabel.propTypes = {
	/** Should display the provided children with label.  */
	showLabel: PropTypes.bool.isRequired,

	/** Label  */
	label: PropTypes.string.isRequired,

	/** Child elements  */
	children: PropTypes.node.isRequired,
};

export default WithLabel;
