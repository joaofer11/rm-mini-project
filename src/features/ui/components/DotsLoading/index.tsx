import * as S from './styles'

interface DotsLoadingProps {
	center?: boolean
}

export const DotsLoading = ({ center }: DotsLoadingProps) => {
	return (
	<S.Loader center={center ?? false}>
		<S.Dot></S.Dot>
		<S.Dot></S.Dot>
		<S.Dot></S.Dot>
	</S.Loader>
	)
}