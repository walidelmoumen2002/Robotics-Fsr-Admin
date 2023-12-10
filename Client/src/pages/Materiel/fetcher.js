import axios from 'axios'

export const getMateriels = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_ENDPOINT}/api/Component/getComponents`)
    const materiels = await response.data.components
    return materiels
  } catch (e) {
    console.log(e)
    return
  }
}







