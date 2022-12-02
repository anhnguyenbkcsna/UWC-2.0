import React, { useState } from "react";
import { MemberDetail } from "components/Member/MemberDetail";
import { MemberList } from "components/Member/MemberList";
import { memberData } from "./const";

export const Member = () => {
	const data = memberData;
	const [chosen, setChosen] = useState(0);

	return (
		<div
			style={{
				position: "fixed",
				top: "25%",
				left: "15%",
				width: "80%",
				height: "65%",
				display: "grid",
				gridTemplateColumns: "9fr 22fr",
				columnGap: "2%"
			}}>
			<MemberList data={data} chosen={chosen} setChosen={setChosen} />
			<MemberDetail data={data[chosen]} />
		</div>
	);
}