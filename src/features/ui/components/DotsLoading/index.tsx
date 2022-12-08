import * as S from './styles'

export const DotsLoading = ({ center }) => {
	return (
	<S.Loader center={center}>
		<S.Dot></S.Dot>
		<S.Dot></S.Dot>
		<S.Dot></S.Dot>
	</S.Loader>
	)
}