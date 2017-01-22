import * as React from "react";

import { ThemeType } from "../../styles/ThemeType";

const defaultProps: MockProps = __DEV__ ? require("./devDefaultProps").default : {};

export interface DataProps {}
interface MockProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}
interface MockState {}

export default class Mock extends React.Component<MockProps, MockState> {
	static defaultProps: MockProps = { ...defaultProps };
	state: MockState = {};
	static contextTypes = { theme: React.PropTypes.object };
	context: { theme: ThemeType };

	render() {
		const { ...attributes } = this.props;
		const { theme } = this.context;

		return (
			<div
				{...attributes}
				style={{
					color: theme.baseMediumHigh,
					background: theme.altMediumHigh,
					fontSize: 14,
					...attributes.style,
				}}
			>
				Mock
			</div>
		);
	}
}