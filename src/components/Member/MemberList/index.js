import { Button } from "@mui/material";
import React from "react";
import EmojiSunglasses from "assets/images/EmojiSunglasses.png";
import EmojiSunglassesChosen from "assets/images/EmojiSunglasses-chosen.png";

export const MemberList = ({ data, chosen, setChosen }) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
				borderRadius: "1rem",
				padding: "0.5rem 1.5rem 1.5rem 1.5rem"
			}}>
			<h3>Nhân viên</h3>
			{data.map((item, index) =>
				<Button
					fullWidth
					startIcon={
						index === chosen ? <img src={EmojiSunglassesChosen} alt="img" style={{ width: "1rem" }} />
							: <img src={EmojiSunglasses} alt="img" style={{ width: "1rem" }} />
					}
					style={{
						textTransform: "none",
						color: index === chosen ? "white" : "black",
						display: "flex",
						justifyContent: "flex-start",
						borderBottom: index === chosen ? "" : "solid 1px black",
					}}
					size="large"
					onClick={() => setChosen(index)}
					variant={index === chosen ? "contained" : "text"}
				>
					{item.name}
				</Button>
			)}
		</div>
	);
}