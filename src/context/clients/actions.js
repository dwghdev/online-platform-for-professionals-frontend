import Axios from "@/utils/axios"

function Actions(user) {
  const {token} = user
  const path = "clients/"
  const config = { headers: { Authorization: token } }

  this.getAll = async () => {
    const {data} = await Axios.get(path, config)
    return data.data
  }

  this.getById = async id =>  
    await Axios.get(path+id, config)

  this.delete = async id => 
    await Axios.delete(path+id, config)
}

export default Actions
