import * as React from "react";

export default function BottomAppBar() {
	return (
		<React.Fragment>
			<footer
				style={{
					position: "fixed",
					bottom: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<img
					alt="getstarted"
					src="https://blog.fitbit.com/wp-content/uploads/2017/01/Fitbit-community.jpg"
					style={{ width: "27%" }}
				/>
				<img
					alt="toolbox"
					src="https://iamdistrict54.com/wp-content/uploads/2020/05/community-networking-people-relationship-social-teamwork-icon-community-icon-png-512_512.png"
					style={{ width: "27%" }}
				/>
				<img
					alt="support"
					src="https://cdn-icons-png.flaticon.com/512/2344/2344684.png"
					style={{ width: "27%" }}
				/>
			</footer>
		</React.Fragment>
	);
}
