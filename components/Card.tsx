export default function Card({ children }: any) {
	return (
		<div className="card-wrapper">
			<div className="card flex-row">{children}</div>
		</div>
	)
}
