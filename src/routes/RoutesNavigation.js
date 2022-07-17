import { useNavigate, useParams } from 'react-router-dom'

export const RouteNavigate  = () => {
  const navigate = useNavigate()
  const params = useParams()

  const navigateTo = (url) => {
      navigate(url)
  }

  const paramsNav = () => {
      return params
  }
  return {
      navigateTo,
      paramsNav
  }
}
