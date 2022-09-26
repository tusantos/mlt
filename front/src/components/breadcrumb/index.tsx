import { BreadcrumbContainer } from './styles'

interface Props {
  data: string[]
}

export function BreadcrumbComponent({ data }: Props) {
  return <BreadcrumbContainer>{data.join(' > ')}</BreadcrumbContainer>
}
